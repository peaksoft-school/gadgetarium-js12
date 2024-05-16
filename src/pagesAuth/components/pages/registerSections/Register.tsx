import scss from './Register.module.scss';
import logo from '@/src/assets/logo.png';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, ConfigProvider, Input } from 'antd';
import PhoneNumberValidation from '@/src/ui/phoneNumberValidation/PhoneNumberValidation';
import { usePostRegisterMutation } from '@/src/redux/api/auth';

export const Register = () => {
	const [postRequest] = usePostRegisterMutation();
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm<RegisterForms>({
		mode: 'onBlur'
	});

	const onSubmit: SubmitHandler<RegisterForms> = async (data) => {
		try {
			const response = await postRequest(data);
			console.log('is working ', response);
			console.log(data);
			reset();
		} catch {
			console.log('not working');
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
										{...register('firstName')}
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
												id="firstName"
												placeholder="Напишите ваше имя"
												{...field}
											/>
										)}
									/>
									<Controller
										{...register('lastName')}
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
												id="lastName"
												placeholder="Напишите ваше фамилию"
												{...field}
											/>
										)}
									/>
									<PhoneNumberValidation />
									<Controller
										{...register('email')}
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
												{...field}
											/>
										)}
									/>
									<Controller
										{...register('password')}
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
												/>
											</ConfigProvider>
										)}
									/>
									<Controller
										{...register('confirmThePassword')}
										control={control}
										defaultValue=""
										rules={{
											required: 'Подтвердите пароль обязателен для заполнения',
											minLength: {
												value: 8,
												message:
													'Подтвердите пароль должен содержать минимум 8 символов'
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
										// (errors.phoneNumber && (
										// 	<p className={scss.errors}>
										// 		{errors.phoneNumber.message}
										// 	</p>
										// )) ||
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
											Создать аккаунт
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
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
