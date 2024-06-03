import { useState } from 'react';
import scss from './Delivery.module.scss';
import { Checkbox, ConfigProvider } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { usePostOrderDeliveryMutation } from '@/src/redux/api/order';
type DeliveryPageTypes = {
	email: string;
	firsName: string;
	lastName: string;
	phoneNumber: string;
};
const Delivery = () => {
	const [isCheckedPickup, setIsCheckedPickup] = useState(true);
	const [isCheckedCourier, setIsCheckedPickupCourier] = useState(false);
	const [postOrderDelivery] = usePostOrderDeliveryMutation();
	const navigate = useNavigate();
	
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm<DeliveryPageTypes>({
		mode: 'onBlur'
	});

	const onSubmit: SubmitHandler<DeliveryPageTypes> = async (data) => {
		const deliveryType = isCheckedPickup ? true : false;
		try {
			await postOrderDelivery({ ...data, deliveryType });
			console.log(data);
			// navigate('/auth/register');	
			reset();
		} catch (error) {
			console.log('error', error);
		}
	};

	const handleCheckboxPickup = () => {
		setIsCheckedPickup(!isCheckedPickup);
		setIsCheckedPickupCourier(false);
	};
	const handleCheckboxCourier = () => {
		setIsCheckedPickupCourier(!isCheckedCourier);
		setIsCheckedPickup(false);
	};

	return (
		<div className={scss.DeliveryOptions}>
			<div className={scss.content}>
				<div>
					<h2> {isCheckedPickup ? 'Варианты доставки' : 'Доставка'}</h2>
					<div className={scss.cards_pickup_courier_delivery}>
						<div
							className={scss.checkbox_pickup}
							style={{
								border: isCheckedPickup
									? '2px solid  rgb(203, 17, 171)'
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
										checked={isCheckedPickup}
										onChange={handleCheckboxPickup}
									/>
								</ConfigProvider>
							</div>
							<div className={scss.text_pickup}>
								<h4>Самовывоз из магазина</h4>
								<p>
									Забрать 20 июля, <h5>Бесплатно</h5>
								</p>
							</div>
						</div>
						<div
							className={scss.checkbox_courier_delivery}
							style={{
								border: isCheckedCourier
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
										checked={isCheckedCourier}
										onChange={handleCheckboxCourier}
									/>
								</ConfigProvider>
							</div>
							<div className={scss.text_courier}>
								<h4>Доставка курьером</h4>
								<p>
									Забрать 20 июля, <h5>Бесплатно свыше 10 000 с</h5>
									<p>до 10 000 с — от 200 с</p>
								</p>
							</div>
						</div>
					</div>
					<hr />
					<h2>Личные данные</h2>
					<form
						className={scss.input_personal_data_pickup}
						onSubmit={handleSubmit(onSubmit)}
						style={{ display: isCheckedPickup ? 'flex' : 'none' }}
					>
						<div className={scss.name_and_first_name}>
							<div className={scss.label_input}>
								<label htmlFor="name">Имя *</label>
								<Controller
									name="firsName"
									control={control}
									defaultValue=""
									rules={{
										required: 'Напишите ваше имя обязателен для заполнения',
										minLength: {
											value: 2,
											message:
												'Напишите ваше имя должен содержать минимум 2 символов'
										}
									}}
									render={({ field }) => (
										<input
											style={errors.firsName && { border: '1px solid red' }}
											type="text"
											placeholder="Напишите ваше имя"
											id="firsName"
											{...field}
										/>
									)}
								/>
							</div>
							<div className={scss.label_input}>
								<label htmlFor="name">Фамилия *</label>
								<Controller
									name="lastName"
									control={control}
									defaultValue=""
									rules={{
										required: 'Напишите вашу фамилию обязателен для заполнения',
										minLength: {
											value: 4,
											message:
												'Напишите вашу фамилию должен содержать минимум 4 символов'
										}
									}}
									render={({ field }) => (
										<input
											style={errors.lastName && { border: '1px solid red' }}
											type="text"
											id="lastName"
											placeholder="Напишите вашу фамилию"
											{...field}
										/>
									)}
								/>
							</div>
						</div>
						<div className={scss.email_and_phone_number}>
							<div className={scss.label_input}>
								<label htmlFor="name">E-mail *</label>
								<Controller
									name="email"
									control={control}
									defaultValue=""
									rules={{
										required: 'Email обязателен для заполнения',
										pattern: {
											value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
											message:
												'Введите действительный email адрес с доменом @gmail.com'
										}
									}}
									render={({ field }) => (
										<input
											type="text"
											placeholder="Напишите ваш email"
											className={scss.inputs}
											id="email"
											style={errors.email && { border: '1px solid red' }}
											{...field}
										/>
									)}
								/>
							</div>
							<div className={scss.label_input}>
								<label htmlFor="name">Телефон *</label>
								<Controller
									name="phoneNumber"
									control={control}
									defaultValue=""
									rules={{
										required: 'Телефон номер обязателен для заполнения',
										minLength: {
											value: 9,
											message:
												'Телефон номер должен содержать минимум 9 символов'
										}
									}}
									render={({ field }) => (
										<input
											{...field}
											id="phoneNumber"
											type="text"
											placeholder="+996 (_ _ _) _ _  _ _  _ _"
											style={errors.phoneNumber && { border: '1px solid red' }}
										/>
									)}
								/>
							</div>
						</div>
						{(errors.email && (
							<p style={{ color: 'red' }}>{errors.email.message}</p>
						)) ||
							(errors.firsName && (
								<p style={{ color: 'red' }}>{errors.firsName.message}</p>
							)) ||
							(errors.lastName && (
								<p style={{ color: 'red' }}>{errors.lastName.message}</p>
							)) ||
							(errors.phoneNumber && (
								<p style={{ color: 'red' }}>{errors.phoneNumber.message}</p>
							))}
						<button type="submit">Продолжить</button>
					</form>
					{/* //!FORM 2 */}
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={scss.input_personal_data_pickup}
						style={{ display: isCheckedCourier ? 'flex' : 'none' }}
					>
						<div className={scss.name_and_first_name}>
							<div className={scss.label_input}>
								<label htmlFor="name">Имя *</label>
								<Controller
									name="firsName"
									control={control}
									defaultValue=""
									rules={{
										required: 'Напишите ваше имя обязателен для заполнения',
										minLength: {
											value: 2,
											message:
												'Напишите ваше имя должен содержать минимум 2 символов'
										}
									}}
									render={({ field }) => (
										<input
											style={errors.firsName && { border: '1px solid red' }}
											type="text"
											placeholder="Напишите ваше имя"
											id="firsName"
											{...field}
										/>
									)}
								/>
							</div>
							<div className={scss.label_input}>
								<label htmlFor="name">Фамилия *</label>
								<Controller
									name="lastName"
									control={control}
									defaultValue=""
									rules={{
										required: 'Напишите вашу фамилию обязателен для заполнения',
										minLength: {
											value: 4,
											message:
												'Напишите вашу фамилию должен содержать минимум 4 символов'
										}
									}}
									render={({ field }) => (
										<input
											style={errors.lastName && { border: '1px solid red' }}
											type="text"
											id="lastName"
											placeholder="Напишите вашу фамилию"
											{...field}
										/>
									)}
								/>
							</div>
						</div>
						<div className={scss.email_and_phone_number}>
							<div className={scss.label_input}>
								<label htmlFor="name">E-mail *</label>
								<Controller
									name="email"
									control={control}
									defaultValue=""
									rules={{
										required: 'Email обязателен для заполнения',
										pattern: {
											value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
											message:
												'Введите действительный email адрес с доменом @gmail.com'
										}
									}}
									render={({ field }) => (
										<input
											type="text"
											placeholder="Напишите ваш email"
											className={scss.inputs}
											id="email"
											{...field}
										/>
									)}
								/>
							</div>
							<div className={scss.label_input}>
								<label htmlFor="name">Телефон *</label>
								<Controller
									name="phoneNumber"
									control={control}
									defaultValue=""
									rules={{
										required: 'Телефон номер обязателен для заполнения',
										minLength: {
											value: 9,
											message:
												'Телефон номер должен содержать минимум 9 символов'
										}
									}}
									render={({ field }) => (
										<input
											{...field}
											id="phoneNumber"
											type="text"
											placeholder="+996 (_ _ _) _ _  _ _  _ _"
											style={errors.phoneNumber && { border: '1px solid red' }}
										/>
									)}
								/>
							</div>
						</div>
						<div className={scss.label_input}>
							<label htmlFor="name">Адрес доставки *</label>
							<input
								className={scss.adress_input}
								type="text"
								placeholder="ул.Гражданская 119, кв 4, дом 9"
							/>
						</div>
						{(errors.email && (
							<p style={{ color: 'red' }}>{errors.email.message}</p>
						)) ||
							(errors.firsName && (
								<p style={{ color: 'red' }}>{errors.firsName.message}</p>
							)) ||
							(errors.lastName && (
								<p style={{ color: 'red' }}>{errors.lastName.message}</p>
							)) ||
							(errors.phoneNumber && (
								<p style={{ color: 'red' }}>{errors.phoneNumber.message}</p>
							))}
						<button type="submit">Продолжить</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Delivery;
