import { Checkbox, ConfigProvider } from 'antd';
import scss from './Payment.module.scss';
import { useEffect, useState } from 'react';
import {
	useGetOrderIdQuery,
	usePatchPaymentTypeMutation
} from '@/src/redux/api/payment';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetBasketQuery } from '@/src/redux/api/basket';
import PaymentStripe from '../payment/PaymentStripe';
import { useNavigate } from 'react-router-dom';

const images = [
	{
		image:
			'https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1587-tygju446.png'
	},
	{
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png'
	},
	{
		image: 'https://ipc.kg/wp-content/uploads/2023/10/elcard_logo_newrus2.png'
	},
	{
		image: 'https://mbank.kg/media/logo/Frame_4_qkrlduu.png'
	}
];

const Payment = () => {
	const [isPaymentOnline, setIsPaymentOnline] = useState(true);
	const [isReceipt, setIsReceipt] = useState(false);
	const [isCash, setIsCash] = useState(false);
	const navigate = useNavigate();
	const [patchPaymentType] = usePatchPaymentTypeMutation();
	const { data, isLoading } = useGetBasketQuery();

	const [cardNumber, setCardNumber] = useState('');
	const [isPayment, setIsPayment] = useState(false);
	const [amount, setAmount] = useState<number | undefined>(0);
	const [test, setTest] = useState<Record<string, string>>({});
	const [orderId, setOrderId] = useState(0);

	const { data: getOrderId } = useGetOrderIdQuery(orderId);
	const handlePaymentOnline = async () => {
		setIsReceipt(false);
		setIsCash(false);
		setIsPaymentOnline(!isPaymentOnline);
		const paymentType = 'PAYMENT_BY_CARD';
		await patchPaymentType({
			orderId: getOrderId?.orderId,
			payment: paymentType
		});
	};

	const handleReceipt = async () => {
		setIsPaymentOnline(false);
		setIsCash(false);
		setIsReceipt(!isReceipt);
		const paymentType = 'UPON_RECEIPT_CARD';
		await patchPaymentType({
			orderId: getOrderId?.orderId,
			payment: paymentType
		});
	};

	const handleCash = async () => {
		setIsPaymentOnline(false);
		setIsReceipt(false);
		setIsCash(!isCash);
		const paymentType = 'UPON_RECEIPT_CASH';
		await patchPaymentType({
			orderId: getOrderId?.orderId,
			payment: paymentType
		});
	};

	useEffect(() => {
		setAmount(data?.totalAmount);
	}, [data]);

	const handleNavigateReview = () => {
		navigate('/pay/review');
	};

	return (
		<div className={scss.Payment}>
			<div className={scss.content}>
				<h2>Способ оплаты</h2>
				<div className={scss.cards_payments}>
					<div
						className={scss.card_payment_onLine}
						style={{
							border: isPaymentOnline
								? '2px solid rgb(203, 17, 171)'
								: '2px solid transparent'
						}}
					>
						<div>
							<ConfigProvider
								theme={{
									components: {
										Checkbox: {
											colorPrimary: '#c11bab',
											colorBgContainer: 'white',
											algorithm: true
										}
									}
								}}
							>
								<Checkbox
									checked={isPaymentOnline}
									onChange={handlePaymentOnline}
								/>
							</ConfigProvider>
						</div>
						<div className={scss.text_payment}>
							<h4>Оплата картой онлайн</h4>
							<div className={scss.images_payment}>
								{images.map((item, index) => (
									<div key={index}>
										<img src={item.image} alt="image" />
									</div>
								))}
							</div>
						</div>
					</div>
					{/* //!2 */}
					<div
						className={scss.card_upon_receipt}
						style={{
							border: isReceipt
								? '2px solid rgb(203, 17, 171)'
								: '2px solid transparent'
						}}
					>
						<div>
							<ConfigProvider
								theme={{
									components: {
										Checkbox: {
											colorPrimary: '#c11bab',
											colorBgContainer: 'white',
											algorithm: true
										}
									}
								}}
							>
								<Checkbox checked={isReceipt} onChange={handleReceipt} />
							</ConfigProvider>
						</div>
						<div className={scss.text_receipt}>
							<h4>Картой при получении</h4>
							<p>Предоплата не требуется. </p>
							<div className={scss.images_receipt}>
								{images.map((item, index) => (
									<div key={index}>
										<img src={item.image} alt="image" />
									</div>
								))}
							</div>
						</div>
					</div>
					{/* //!3 */}
					<div
						className={scss.card_cash}
						style={{
							border: isCash
								? '2px solid rgb(203, 17, 171)'
								: '2px solid transparent'
						}}
					>
						<div>
							<ConfigProvider
								theme={{
									components: {
										Checkbox: {
											colorPrimary: '#c11bab',
											colorBgContainer: 'white',
											algorithm: true
										}
									}
								}}
							>
								<Checkbox checked={isCash} onChange={handleCash} />
							</ConfigProvider>
						</div>
						<div className={scss.text_cash}>
							<h4>Наличными при получении</h4>
							<p>Предоплата не требуется. </p>
						</div>
					</div>
				</div>
				{isPaymentOnline ? (
					<>
						<button
							onClick={() => {
								setIsPayment(true);
							}}
						>
							Добавить карту
						</button>
					</>
				) : (
					<>
						<button onClick={handleNavigateReview}>Продолжить</button>
					</>
				)}
			</div>
			<div>
				<PaymentStripe
					openModal={isPayment}
					setOpenModal={setIsPayment}
					totalAmount={amount}
					test={test}
				/>
			</div>
		</div>
	);
};

export default Payment;
