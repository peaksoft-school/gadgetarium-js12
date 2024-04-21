import scss from './Register.module.scss';
import logo from '@/src/assets/logo.png';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Input } from 'antd';

export const Register = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm<RegisterForms>({
		mode: 'onBlur'
	});

	const onSubmit: SubmitHandler<RegisterForms> = (data) => {
		console.log(data);
		navigate('/auth/login');
		reset();
	};
	return (
		<div className={scss.registerPages}>
			<div className="container">
				<div className={scss.content}>
					<div>
						<img src={logo} alt="logo" />
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
											<Input
												className={scss.inputs}
												id="firsName"
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
											required: 'Телефон номер обязателен для заполнения',
											minLength: {
												value: 9,
												message:
													'Телефон номер должен содержать минимум 9 символов'
											}
										}}
										render={({ field }) => (
											<Input
												className={scss.inputs}
												id="phoneNumber"
												placeholder="+996 (_ _ _) _ _  _ _  _ _"
												{...field}
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
											<Input.Password
												className={scss.inputs}
												id="password"
												placeholder="Напишите пароль"
												{...field}
											/>
										)}
									/>
									<Controller
										name="confirmThePassword"
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
											<Input.Password
												className={scss.inputs}
												id="confirmThePassword"
												placeholder="Подтвердите пароль"
												{...field}
											/>
										)}
									/>
									{(errors.firsName && (
										<p className={scss.errors}>{errors.firsName.message}</p>
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
										<Button className={scss.buttonSubmit}>Войти</Button>
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
