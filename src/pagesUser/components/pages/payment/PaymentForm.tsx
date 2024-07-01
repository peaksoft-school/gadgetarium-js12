/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FC, FormEvent, useState } from 'react';
// import { useCreatePaymentMutation } from '../redux/api/payment';
import scss from './PaymentForm.module.scss';
import { Modal, message } from 'antd';
import {
	useGetOrderIdQuery,
	usePostConfirmPaymentMutation,
	usePostCreatePaymentMutation
} from '@/src/redux/api/payment';
import { useNavigate } from 'react-router-dom';

const CARD_OPTIONS = {
	iconStyle: 'solid' as 'default' | 'solid',
	style: {
		base: {
			iconColor: '#c11bab',
			color: 'black',
			fontWeight: 500,
			fontSize: '16px',
			fontSmoothing: 'antialiased',
			'::placeholder': {
				color: '#8c8e91'
			}
		},
		invalid: {
			iconColor: 'red',
			color: 'red'
		},
		hidePostCode: true
	}
};

interface TypeProps {
	openModal: boolean;
	setOpenModal: (value: boolean | ((prev: boolean) => boolean)) => void;
	totalAmount: number | undefined;
	newTestObj: Record<string, string>;
}

const PaymentForm: FC<TypeProps> = ({
	openModal,
	setOpenModal,
	totalAmount,
	newTestObj
}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [orderId, setOrderId] = useState<number>(0);
	const [paymentId, setPaymentId] = useState<string>('');
	const [createPayment] = usePostCreatePaymentMutation();
	const [confirmPayment] = usePostConfirmPaymentMutation();
	const { data: getOrderId } = useGetOrderIdQuery(orderId);
	const [successModal, setSuccessModal] = useState(false);
	const [testTokenId, setTestTokenId] = useState('');
	const navigate = useNavigate();

	const handleCreatePayment = async (token: string) => {
		const totalTest = totalAmount?.toFixed();

		const test = Number(totalTest);
		const result = await createPayment({
			token,
			orderId: getOrderId?.orderId,
			paymentId
		});
		console.log(result);
		setPaymentId(result.paymentId);
		if ('data' in result) {
			if (result.data) {
				setPaymentId(result.data.paymentId);
				console.log(result);
				setOpenModal(false);
				setSuccessModal(true);
			}
		} else {
			console.error('Failed to create payment:', result);
		}
	};
	console.log(paymentId);
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!stripe || !elements) {
			console.error('Stripe.js has not yet loaded.');
			('');

			return;
		}
		try {
			const cardElement = elements.getElement(CardElement);
			if (!cardElement) {
				console.error('CardElement not found');
				return;
			}
			const testToken = 'tok_visa';
			setTestTokenId(testToken);
			setOpenModal((prev) => !prev);
			await handleCreatePayment(testToken);
			setSuccessModal(true);
		} catch (error) {
			console.error('Error in handleSubmit:', error);
		}
	};

	const handleConfirmPayment = async () => {
		try {
			const result = await confirmPayment(paymentId);
			if ('data' in result) {
				console.log('Payment confirmed:', result.data);
				message.success('Платеж успешно проведен');
				setSuccessModal(false);
				navigate('/pay/review');
			} else {
				console.error('Failed to confirm payment:', result);
				message.error('Платеж уже был проведен');
				setSuccessModal(false);
			}
		} catch (error) {
			console.error('Error in handleConfirmPayment:', error);
		}
	};

	return (
		<>
			<Modal
				open={openModal}
				onCancel={() => setOpenModal(false)}
				footer={false}
			>
				<div className={scss.Payment}>
					<div className={scss.content}>
						<div className={scss.payment_container}>
							<form onSubmit={handleSubmit}>
								<p className={scss.heading}>Добавьте карту</p>
								<CardElement
									className={scss.card_element}
									options={CARD_OPTIONS}
								/>
								<button
									type="submit"
									className={scss.book_button}
									disabled={!stripe}
								>
									Продолжить
								</button>
							</form>
						</div>
					</div>
				</div>
			</Modal>
			<Modal
				open={successModal}
				footer={false}
				onCancel={() => setSuccessModal(false)}
			>
				<div className={scss.confirm_payment}>
					<div className={scss.title_content}>
						<p>Подтвердите платеж для завершения покупки</p>
					</div>
					<div className={scss.detals_product}>
						<div className={scss.info_content}>
							<div className={scss.date}>
								<p>Дата создания платежа:</p>
								<p>{new Date().toLocaleString()}</p>
							</div>
							<button onClick={handleConfirmPayment}>Подтвердить платеж</button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default PaymentForm;
