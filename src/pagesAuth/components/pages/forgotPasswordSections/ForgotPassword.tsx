import scss from './ForgotPasswordPages.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Input } from 'antd';
import logo from '@/src/assets/Group 337504.png';

export const ForgotPasswordPages = () => {
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
						<img src={logo} alt="logo" />
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
											required: 'Код обязателен для заполнения',
											minLength: {
												value: 4,
												message: 'Код должен содержать минимум 4 символов'
											}
										}}
										render={({ field }) => (
											<Input
												className={scss.inputs}
												id="code"
												placeholder="code"
												{...field}
											/>
										)}
									/>
									<Controller
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
									/>
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
										<Button className={scss.buttonSubmit}>Войти</Button>
									</div>
									<div className={scss.divForms}>
										<Link className={scss.link} to={'/auth/login'}>
											Я вспомнил свой пароль
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
