/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FC, FormEvent, useState } from 'react';
// import { useCreatePaymentMutation } from '../redux/api/payment';
import scss from './PaymentForm.module.scss';
import { Modal, message } from 'antd';
import {
	useGetOrderIdQuery,
	usePostCreatePaymentMutation
} from '@/src/redux/api/payment';
import { useNavigate } from 'react-router-dom';
// import { useGetBasketOrderGadgetQuery } from '@/src/redux/api/basket';

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

const PaymentForm: FC<TypeProps> = ({ openModal, setOpenModal }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [orderId, ,] = useState<number>(0);
	const [paymentId, setPaymentId] = useState<string>('');
	const [createPayment] = usePostCreatePaymentMutation();
	const { data: getOrderId } = useGetOrderIdQuery(orderId);
	const [, setSuccessModal] = useState(false);

	const [, setTestTokenId] = useState('');
	const navigate = useNavigate();

	const handleCreatePayment = async (token: string) => {
		try {
			const result = await createPayment({
				token,
				orderId: getOrderId?.orderId,
				paymentId
			});

			if (result && 'data' in result && result.data) {
				setPaymentId(result.data.paymentId);
				localStorage.setItem(
					'paymentId',
					JSON.stringify(result.data.paymentId)
				);
				console.log(result.data.paymentId, 'text');

				console.log(result);
				setOpenModal(false);
				message.success('Платеж успешно проведен');
				navigate(`/pay/review?${window.location.search.substring(1)}`);
			} else {
				message.error('Не удалось создать платеж');
				console.error('Failed to create payment:', result);
			}
		} catch (error) {
			message.warning('Платеж уже был проведен');
			console.error('An error occurred while creating payment:', error);
		}
	};

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
		</>
	);
};

export default PaymentForm;
