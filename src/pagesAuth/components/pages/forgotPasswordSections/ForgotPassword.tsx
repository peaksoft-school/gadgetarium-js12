import scss from './ForgotPasswordPages.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Input } from 'antd';
import logo from '@/src/assets/logo.png';
import { usePostForgotMutation } from '@/src/redux/api/auth';
import { ToastContainer } from 'react-toastify';
import { notify } from '@/src/utils/helpers/notify';

export const ForgotPassword = () => {
	const [postForgot] = usePostForgotMutation();
	const navigate = useNavigate();
	const {
		// register,
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
			if (response.success) {
				notify('Ссылка отправлено в почту', 'Войти', '/auth/login');
				reset();
				navigate('/auth/login');
			} else {
				throw new Error(response.message || 'Email не существует!');
			}
		} catch (error: any) {
			notify(
				error.message || 'Email не существует!',
				'Регистрация',
				'/auth/register'
			);
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
										// {...register('email')}
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
											Отправить
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
