import scss from './ForgotPasswordPages.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Input } from 'antd';
import logo from '@/src/assets/logo.png';

export const ForgotPassword = () => {
	const navigate = useNavigate();
	const {
		reset,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<ForgotPasswordForms>({
		mode: 'onBlur'
	});
	const onSubmit: SubmitHandler<ForgotPasswordForms> = (data) => {
		console.log(data);
		navigate('/auth/login');
		reset();
	};
	return (
		<div className={scss.forgotPasswordPages}>
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
								<h3>Забыли пароль</h3>
								<form
									className={scss.formsInputs}
									onSubmit={handleSubmit(onSubmit)}
								>
									<Controller
										name="code"
										control={control}
										defaultValue=""
										rules={{
											required: 'Email обязателен для заполнения',
											minLength: {
												value: 4,
												message: 'Email должен содержать минимум 10 символов'
											}
										}}
										render={({ field }) => (
											<Input
												className={scss.inputs}
												id="email"
												placeholder="Email"
												{...field}
											/>
										)}
									/>
									{/* <Controller
										name="password"
										control={control}
										defaultValue=""
										rules={{
											required: 'Пароль обязателен для заполнения',
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
									/> */}
									{(errors.code && (
										<p className={scss.errors}>{errors.code.message}</p>
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
										<Button className={scss.buttonSubmit}>Отправить</Button>
									</div>
									<div className={scss.divForms}>
										<Link className={scss.link} to={'/auth/register'}>
											Зарегистироваться
										</Link>
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
