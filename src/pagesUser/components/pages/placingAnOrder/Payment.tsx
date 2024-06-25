import { Checkbox, ConfigProvider } from 'antd';
import scss from './Payment.module.scss';
import { ChangeEvent, useState } from 'react';
import { usePatchPaymentTypeMutation } from '@/src/redux/api/payment';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Paypal from './Paypal';

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

type DeliveryPageTypes = {
	orderId: number;
	payment: string;
};

const Payment = () => {
	const [isPaymentOnline, setIsPaymentOnline] = useState(true);
	const [isReceipt, setIsReceipt] = useState(false);
	const [isCash, setIsCash] = useState(false);
	// const [searchParamsOne, setSearchParamsOne] = useSearchParams();
	// const navigate = useNavigate();

	const [patchPaymentType] = usePatchPaymentTypeMutation();

	const [cardNumber, setCardNumber] = useState('');
	const {
		handleSubmit
		// reset,
		// control,
	} = useForm<DeliveryPageTypes>({
		mode: 'onBlur'
	});

	const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		let formattedNumber = event.target.value.replace(/\s/g, '');
		formattedNumber = formattedNumber.replace(/(\d{4})/g, '$1 ').trim();
		formattedNumber = formattedNumber.slice(0, 19);
		setCardNumber(formattedNumber);
	};

	const handlePaymentOnline = async () => {
		setIsReceipt(false);
		setIsCash(false);
		setIsPaymentOnline(!isPaymentOnline);
		const paymentType = 'PAYMENT_BY_CARD';
		const orderId = 1;
		await patchPaymentType({
			orderId: Number(orderId),
			payment: paymentType
		});
	};

	const handleReceipt = async () => {
		setIsPaymentOnline(false);
		setIsCash(false);
		setIsReceipt(!isReceipt);
		const paymentType = 'UPON_RECEIPT_CARD';
		const orderId = 1;
		await patchPaymentType({
			orderId: Number(orderId),
			payment: paymentType
		});
	};

	const handleCash = async () => {
		setIsPaymentOnline(false);
		setIsReceipt(false);
		setIsCash(!isCash);
		const paymentType = 'UPON_RECEIPT_CASH';
		const orderId = 1;
		await patchPaymentType({
			orderId: Number(orderId),
			payment: paymentType
		});
	};

	const onSubmit: SubmitHandler<DeliveryPageTypes> = async () => {
		// console.log('onSubmit');
		// const orderId = searchParamsOne.get('orderId');
		// const payment = searchParamsOne.get('payment');
		// if (orderId && payment) {
		// 	await patchPaymentType({
		// 		orderId: Number(orderId),
		// 		payment
		// 	});
		// 	reset();
		// }
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
				<div
					className={scss.card_number}
					style={{ display: isPaymentOnline ? 'flex' : 'none' }}
				>
					<div className={scss.images_card_number}>
						{images.map((item, index) => (
							<div key={index}>
								<img src={item.image} alt="image" />
							</div>
						))}
					</div>
					{/* //!PAYMENT CARD */}
					<form
						className={scss.inputs_number}
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className={scss.number_card_input}>
							<input
								required
								type="text"
								className={scss.input}
								value={cardNumber}
								onChange={handleCardNumberChange}
								maxLength={19}
							/>
							<label>Номер карты</label>
						</div>
						<div className={scss.year_card_input}>
							<div className={scss.inputs_cvc_mm_yy}>
								<div className={scss.inputs_mm_yy}>
									<div className={scss.input_month}>
										<input
											required
											type="text"
											className={scss.input_mm}
											maxLength={2}
										/>
										<label className={scss.label_mm}>MM</label>
									</div>
									<div style={{ color: 'blue' }}>/</div>
									<div className={scss.input_year}>
										<input
											required
											type="text"
											className={scss.input_yy}
											maxLength={2}
										/>
										<label className={scss.label_yy}>YY</label>
									</div>
								</div>
								<div className={scss.input_cvc}>
									<input
										required
										type="text"
										className={scss.input_cvc}
										maxLength={3}
									/>
									<label className={scss.label_cvc}>CVC</label>
								</div>
							</div>
							<div className={scss.first_name_input}>
								<input
									required
									type="text"
									className={scss.input_name}
									maxLength={19}
								/>
								<label>Имя владельца</label>
							</div>
						</div>
					</form>
				</div>
				<button>Продолжить</button>
				<div>
					<h2>Paypal</h2>
					<Paypal />
				</div>
			</div>
		</div>
	);
};

export default Payment;
