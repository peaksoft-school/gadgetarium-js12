import { Link, useNavigate } from 'react-router-dom';
import scss from './Login.module.scss';
import logo from '@/src/assets/logo.png';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, Input } from 'antd';
import { LoginForms } from '@/src/types/schema';

const Login = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm<LoginForms>({
		mode: 'onBlur'
	});

	const onSubmit: SubmitHandler<LoginForms> = (data) => {
		console.log(data);
		navigate('/auth/register');
		reset();
	};

	return (
		<div className={scss.loginPages}>
			<div className="container">
				<div className={scss.content}>
					<div>
						<img src={logo} alt="logo" />
					</div>
					<div className={scss.displayFormDiv}>
						<div className={scss.formsDiv}>
							<div className={scss.forms}>
								<h3>Войти</h3>
								<form
									className={scss.formsInputs}
									onSubmit={handleSubmit(onSubmit)}
								>
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
												placeholder="Email"
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
												placeholder="Password"
												{...field}
											/>
										)}
									/>
									{(errors.email && (
										<p className={scss.errors}>{errors.email.message}</p>
									)) ||
										(errors.password && (
											<p className={scss.errors}>{errors.password.message}</p>
										))}
									<div className={scss.buttonDiv}>
										<Button className={scss.buttonSubmit}>Войти</Button>
									</div>
									<button className={scss.googleButton}>
										<img
											src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%23EA4335'%20d='M24%209.5c3.54%200%206.71%201.22%209.21%203.6l6.85-6.85C35.9%202.38%2030.47%200%2024%200%2014.62%200%206.51%205.38%202.56%2013.22l7.98%206.19C12.43%2013.72%2017.74%209.5%2024%209.5z'/%3e%3cpath%20fill='%234285F4'%20d='M46.98%2024.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58%202.96-2.26%205.48-4.78%207.18l7.73%206c4.51-4.18%207.09-10.36%207.09-17.65z'/%3e%3cpath%20fill='%23FBBC05'%20d='M10.53%2028.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92%2016.46%200%2020.12%200%2024c0%203.88.92%207.54%202.56%2010.78l7.97-6.19z'/%3e%3cpath%20fill='%2334A853'%20d='M24%2048c6.48%200%2011.93-2.13%2015.89-5.81l-7.73-6c-2.15%201.45-4.92%202.3-8.16%202.3-6.26%200-11.57-4.22-13.47-9.91l-7.98%206.19C6.51%2042.62%2014.62%2048%2024%2048z'/%3e%3cpath%20fill='none'%20d='M0%200h48v48H0z'/%3e%3c/svg%3e"
											alt="logo google"
										/>
										<span>Google</span>
									</button>
									<div className={scss.divForms}>
										<p>
											Нет аккаунта?{' '}
											<Link className={scss.link} to={'/auth/register'}>
												Зарегистрироваться
											</Link>{' '}
											<br />
										</p>
										<Link className={scss.Link} to={'/auth/forgotPassword'}>
											Забыли пароль
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

export default Login;