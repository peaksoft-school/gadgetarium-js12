import scss from './Register.module.scss';
import logo from '@/src/assets/logo.png';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ConfigProvider, Input, message } from 'antd';
import { usePostRegisterMutation } from '@/src/redux/api/auth';
import PhoneInputWrapper from '@/src/ui/phoneNumberValidation/PhoneNumberValidation';
import { ToastContainer } from 'react-toastify';
import { IconLoader } from '@tabler/icons-react';

export const Register = () => {
	const [postRequest, { isLoading }] = usePostRegisterMutation();
	const navigate = useNavigate();

	const {
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm<RegisterForms>({
		mode: 'onBlur'
	});

	const onSubmit: SubmitHandler<RegisterForms> = async (data, event) => {
		event?.preventDefault();
		if (data.password !== data.confirmThePassword) {
			message.warning('Некоректный пароль или email ');
			return;
		}
		try {
			const response = await postRequest(data);
			if ('data' in response && response.data.token) {
				const { token } = response.data;
				localStorage.setItem('token', token);
				localStorage.setItem('isAuth', 'true');
				message.success('Регистрация выполнен успешно');
				navigate('/');
				reset();
			}
		} catch (error) {
			console.log('Registration failed', error);
			message.warning('Пользователь уже зарегистрирован');
		}
	};

	return (
		<div className={scss.registerPages}>
			<div className="container">
				<div className={scss.content}>
					<div>
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>
					<div className={scss.displayFormDiv}>
						<div className={scss.formsDiv}>
							<div className={scss.forms}>
								<h3>Регистрация</h3>
								<form
									className={scss.formsInputs}
									onSubmit={handleSubmit(onSubmit)}
								>
									<Controller
										name="firstName"
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
											<Input
												className={scss.inputs}
												style={errors.firstName && { border: '1px solid red' }}
												id="firstName"
												placeholder="Напишите ваше имя"
												{...field}
											/>
										)}
									/>
									<Controller
										name="lastName"
										control={control}
										defaultValue=""
										rules={{
											required:
												'Напишите вашу фамилию обязателен для заполнения',
											minLength: {
												value: 4,
												message:
													'Напишите вашу фамилию должен содержать минимум 4 символов'
											}
										}}
										render={({ field }) => (
											<Input
												className={scss.inputs}
												style={errors.lastName && { border: '1px solid red' }}
												id="lastName"
												placeholder="Напишите ваше фамилию"
												{...field}
											/>
										)}
									/>
									<Controller
										name="phoneNumber"
										control={control}
										defaultValue=""
										rules={{
											required: 'PhoneNumber обязателен для заполнения',
											minLength: {
												value: 8,
												message: 'Телефон номер не сообветсвует данному коду '
											}
										}}
										render={({ field }) => (
											<PhoneInputWrapper
												{...field}
												style={
													errors.phoneNumber && { border: '1px solid red' }
												}
												inputStyle={{
													maxWidth: '454px',
													width: '100%',
													height: '40px',
													color: 'black',
													border: '1px solid #cb10ac',
													borderRadius: '5px'
												}}
												country={'us'}
												inputProps={{
													required: true
												}}
											/>
										)}
									/>
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
											<Input
												className={scss.inputs}
												id="email"
												placeholder="Напишите email"
												style={errors.email && { border: '1px solid red' }}
												{...field}
											/>
										)}
									/>
									<Controller
										name="password"
										control={control}
										defaultValue=""
										rules={{
											required: 'password обязателен для заполнения',
											minLength: {
												value: 8,
												message: 'Пароль должен содержать минимум 8 символов'
											}
										}}
										render={({ field }) => (
											<ConfigProvider
												theme={{
													components: {
														Input: {
															colorTextPlaceholder: 'black',
															colorIcon: 'black',
															colorBgContainer: 'white'
														}
													}
												}}
											>
												<Input.Password
													className={scss.inputs}
													id="password"
													placeholder="Напишите пароль"
													{...field}
													style={errors.password && { border: '1px solid red' }}
												/>
											</ConfigProvider>
										)}
									/>
									<Controller
										name="confirmThePassword"
										control={control}
										defaultValue=""
										rules={{
											required: 'Пароль обязателен для заполнения',
											minLength: {
												value: 8,
												message:
													'Пароль должен содержать минимум 8 символов'
											}
										}}
										render={({ field }) => (
											<ConfigProvider
												theme={{
													components: {
														Input: {
															colorTextPlaceholder: 'black',
															colorIcon: 'black',
															colorBgContainer: 'white'
														}
													}
												}}
											>
												<Input.Password
													className={scss.inputs}
													id="confirmThePassword"
													placeholder="Подтвердите пароль"
													{...field}
													style={
														errors.confirmThePassword && {
															border: '1px solid red'
														}
													}
												/>
											</ConfigProvider>
										)}
									/>
									{(errors.firstName && (
										<p className={scss.errors}>{errors.firstName.message}</p>
									)) ||
										(errors.lastName && (
											<p className={scss.errors}>{errors.lastName.message}</p>
										)) ||
										(errors.phoneNumber && (
											<p className={scss.errors}>
												{errors.phoneNumber.message}
											</p>
										)) ||
										(errors.email && (
											<p className={scss.errors}>{errors.email.message}</p>
										)) ||
										(errors.password && (
											<p className={scss.errors}>{errors.password.message}</p>
										)) ||
										(errors.confirmThePassword && (
											<p className={scss.errors}>
												{errors.confirmThePassword.message}
											</p>
										))}
									<div className={scss.buttonDiv}>
										<Button
											className={scss.buttonSubmit}
											type="primary"
											htmlType="submit"
										>
											{isLoading ? <IconLoader /> : 'Создать аккаунт'}
										</Button>
									</div>
									<div className={scss.divForms}>
										<p>
											У вас уже есть аккаунт?
											<Link className={scss.link} to={'/auth/login'}>
												Войти
											</Link>
										</p>
									</div>
									<ToastContainer />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
