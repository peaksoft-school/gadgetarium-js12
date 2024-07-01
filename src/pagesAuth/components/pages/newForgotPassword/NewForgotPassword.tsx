import { Link, useLocation, useNavigate } from 'react-router-dom';
import scss from './NewForgotPassword.module.scss';
import logo from '@/src/assets/logo.png';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, ConfigProvider, Input, message } from 'antd';
import React from 'react';
import { usePatchNewPasswordMutation } from '@/src/redux/api/auth';
import { ToastContainer } from 'react-toastify';
import { IconLoader } from '@tabler/icons-react';

interface NewForgotPasswordForm {
	password: string;
	confirmPassword: string;
}

const NewForgotPassword = () => {
	const [passwordVisible, setPasswordVisible] = React.useState(false);
	const [patchNewPassword, { isLoading }] = usePatchNewPasswordMutation();
	const location = useLocation();
	const token = new URLSearchParams(location.search).get('token');
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		control,
		watch,
		formState: { errors }
	} = useForm<NewForgotPasswordForm>({
		mode: 'onBlur'
	});

	const onSubmit: SubmitHandler<NewForgotPasswordForm> = async (
		data,
		event
	) => {
		event?.preventDefault();
		if (data.password !== data.confirmPassword) {
			message.warning('Пароли не совпадают');
			return;
		}

		try {
			const newData = {
				password: data.password,
				confirmPassword: data.confirmPassword,
				token
			};
			const response = await patchNewPassword(newData).unwrap();
			console.log('onSubmit', response);
			message.success('Пароль успешно изменён');
			setTimeout(() => {
				navigate('/auth/login');
			}, 3000);
			reset();
		} catch (error) {
			if (error.status === 403) {
				message.warning('Длина пароля должна быть больше или равна 6.');
			} else {
				message.error('Произошла ошибка при смене пароля');
			}
			console.error('Ошибка при смене пароля', error);
		}
	};

	return (
		<div className={scss.loginPages}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>
					<div className={scss.displayFormDiv}>
						<div className={scss.formsDiv}>
							<div className={scss.forms}>
								<h3>Создать новый пароль</h3>
								<form
									className={scss.formsInputs}
									onSubmit={handleSubmit(onSubmit)}
								>
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
											<Input
												className={scss.inputs}
												id="newPassword"
												placeholder="Новый пароль"
												{...field}
												style={errors.password && { border: '1px solid red' }}
											/>
										)}
									/>
									<Controller
										name="confirmPassword"
										control={control}
										defaultValue=""
										rules={{
											required: 'Подтверждение пароля обязательно',
											minLength: {
												value: 8,
												message: 'Пароль должен содержать минимум 8 символов'
											},
											validate: (value) => {
												if (value !== watch('password')) {
													return 'Пароли не совпадают';
												}
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
													placeholder="Подтвердить пароль"
													{...field}
													style={
														errors.confirmPassword
															? { border: '1px solid red', color: 'black' }
															: { color: 'black' }
													}
													visibilityToggle={{
														visible: passwordVisible,
														onVisibleChange: setPasswordVisible
													}}
												/>
											</ConfigProvider>
										)}
									/>
									{errors.password && (
										<p className={scss.errors}>{errors.password.message}</p>
									)}
									{errors.confirmPassword && (
										<p className={scss.errors}>
											{errors.confirmPassword.message}
										</p>
									)}
									<div className={scss.buttonDiv}>
										<Button
											className={scss.buttonSubmit}
											type="primary"
											htmlType="submit"
											loading={isLoading}
										>
											Сменить пароль
										</Button>
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

export default NewForgotPassword;
