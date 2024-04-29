import { ChangeEvent, useState } from 'react';
import scss from './PaymentInputs.module.scss';

const PaymentInputs = () => {
	const [cardNumber, setCardNumber] = useState('');

	const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		let formattedNumber = event.target.value.replace(/\s/g, '');
		formattedNumber = formattedNumber.replace(/(\d{4})/g, '$1 ').trim();
		formattedNumber = formattedNumber.slice(0, 19);
		setCardNumber(formattedNumber);
	};
	return (
		<div className={scss.PaymentInputs}>
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
			<button>Продолжить</button>
			</div>
		</div>
	);
};

export default PaymentInputs;
