import scss from './ForgotPasswordPages.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Input, message } from 'antd';
import logo from '@/src/assets/logo.png';
import { usePostForgotMutation } from '@/src/redux/api/auth';
import { ToastContainer } from 'react-toastify';
import { IconLoader } from '@tabler/icons-react';

export const ForgotPassword = () => {
	const [postForgot, { isLoading }] = usePostForgotMutation();
	const navigate = useNavigate();
	const {
		reset,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<ForgotPasswordForms>({
		mode: 'onBlur'
	});
	const onSubmit: SubmitHandler<ForgotPasswordForms> = async (data) => {
		try {
			const response = await postForgot(data).unwrap();
			if (response.message) {
				console.log('Notify for success');
				message.success('Ссылка отправлено в почту');
				setTimeout(() => {
					console.log('Navigating to /auth/login');
					navigate('/auth/login');
					reset();
				}, 2000);
			} else {
				throw new Error(response.message || 'Email не существует!');
			}
		} catch (error: any) {
			console.log('Notify for error');
			message.warning(error.message || 'Email не существует!');
			setTimeout(() => {
				navigate('/auth/register');
			}, 2000);
			console.log('Ошибка:', error);
		}
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
												style={errors.email && { border: '1px solid red' }}
											/>
										)}
									/>

									{errors.email && (
										<p className={scss.errors}>{errors.email.message}</p>
									)}
									<div className={scss.buttonDiv}>
										<Button
											type="primary"
											htmlType="submit"
											className={scss.buttonSubmit}
										>
											{isLoading ? <IconLoader /> : 'Отправить'}
										</Button>
									</div>
									<div className={scss.divForms}>
										<p style={{ fontSize: '12px' }}>Нет аккаунта? </p>
										<Link className={scss.link} to={'/auth/register'}>
											Зарегистироваться
										</Link>
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
