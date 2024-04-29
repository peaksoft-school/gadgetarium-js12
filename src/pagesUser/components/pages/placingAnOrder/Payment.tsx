import { Checkbox } from 'antd';
import scss from './Payment.module.scss';
import { useState } from 'react';
import PaymentInputs from '@/src/ui/paymentInputs/PaymentInputs';

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
	const [isPaymentOnline, setIsPaymentOnline] = useState(false);
	const [isReceipt, setIsReceipt] = useState(false);
	const [isCash, setIsCash] = useState(false);

	const handlePaymentOnline = () => {
		setIsPaymentOnline(!isPaymentOnline);
		setIsReceipt(false);
		setIsCash(false);
	};

	const handleReceipt = () => {
		setIsReceipt(!isReceipt);
		setIsPaymentOnline(false);
		setIsCash(false);
	};

	const handleCash = () => {
		setIsCash(!isCash);
		setIsPaymentOnline(false);
		setIsReceipt(false);
	};
	return (
		<div className={scss.Payment}>
			<div className="container">
				<div className={scss.content}>
					<h2>Способ оплаты</h2>
					<div className={scss.cards_payments}>
						<div
							className={scss.card_payment_onLine}
							style={{
								border: isPaymentOnline
									? '2px solid  rgb(203, 17, 171)'
									: '2px solid transparent'
							}}
						>
							<div>
								<Checkbox
									checked={isPaymentOnline}
									onChange={handlePaymentOnline}
								></Checkbox>
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
									? '2px solid  rgb(203, 17, 171)'
									: '2px solid transparent'
							}}
						>
							<div>
								<Checkbox
									checked={isReceipt}
									onChange={handleReceipt}
								></Checkbox>
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
									? '2px solid  rgb(203, 17, 171)'
									: '2px solid transparent'
							}}
						>
							<div>
								<Checkbox checked={isCash} onChange={handleCash}></Checkbox>
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
						<div className={scss.inputs_number}>
							<PaymentInputs />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
