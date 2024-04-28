import { Checkbox } from 'antd';
import scss from './Payment.module.scss';
import { useState } from 'react';

const Payment = () => {
	const [isPaymentOnline, setIsPaymentOnline] = useState(false);

	const handlePaymentOnline = () => {
		setIsPaymentOnline(!isPaymentOnline);
	};
	return (
		<div className={scss.Payment}>
			<div className="container">
				<div className={scss.content}>
					<h2>Способ оплаты</h2>
					<div
						className={scss.card_payment}
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
								<img
									src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1587-tygju446.png"
									alt=""
								/>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
									alt=""
								/>
								<img
									src="https://ipc.kg/wp-content/uploads/2023/10/elcard_logo_newrus2.png"
									alt=""
								/>

								<img
									src="https://mbank.kg/media/logo/Frame_4_qkrlduu.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className={scss.card_number}>
						<div className={scss.images_card_number}>
							<img
								src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1587-tygju446.png"
								alt=""
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
								alt=""
							/>
							<img
								src="https://ipc.kg/wp-content/uploads/2023/10/elcard_logo_newrus2.png"
								alt=""
							/>

							<img
								src="https://mbank.kg/media/logo/Frame_4_qkrlduu.png"
								alt=""
							/>
						</div>
						<div className={scss.inputs_number}>
							<div className={scss.number_card_input}>
								<input required type="text" className={scss.input} />
								<span className={scss.highlight}></span>
								<span className={scss.bar}></span>
								<label>Номер карты</label>
								{/* <label htmlFor="name">Номер карты </label>
								<input type="text" name="name" /> */}
							</div>
							<div className={scss.year_card_input}>
								{/* <label htmlFor="name">Номер карты </label> */}
								<input type="text" placeholder="MM" /> /
								<input type="text" placeholder="YY" />
								<input type="text" placeholder="CVC" />
							</div>
							<input type="text" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
