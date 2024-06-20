import { Link, useLocation } from 'react-router-dom';
import scss from './NewForgotPassword.module.scss';
import logo from '@/src/assets/logo.png';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, ConfigProvider, Input } from 'antd';
import React from 'react';
import { usePatchNewPasswordMutation } from '@/src/redux/api/auth';
import { ToastContainer } from 'react-toastify';
import { notify } from '@/src/utils/helpers/notify';

const NewForgotPassword = () => {
	const [passwordVisible, setPasswordVisible] = React.useState(false);
	const [patchNewPassword] = usePatchNewPasswordMutation();
	const location = useLocation();
	const token = new URLSearchParams(location.search).get('token');

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm<NewForgotPassword>({
		mode: 'onBlur'
	});
	const onSubmit: SubmitHandler<NewForgotPassword> = async (data, event) => {
		event?.preventDefault();

		try {
			const newData = {
				password: data.password,
				confirmPassword: data.confirmPassword,
				token
			};
			await patchNewPassword(newData);

			console.log('onSubmit', data);
			notify('Пароль успешно изменён', 'Войти', '/auth/login');
			reset();
		} catch (error) {
			console.log('not patch response', error);
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
										{...register('password')}
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
										{...register('confirmPassword')}
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
													placeholder="Подвердить пароль"
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
									{(errors.password && (
										<p className={scss.errors}>{errors.password.message}</p>
									)) ||
										(errors.confirmPassword && (
											<p className={scss.errors}>
												{errors.confirmPassword.message}
											</p>
										))}
									<div className={scss.buttonDiv}>
										<Button
											className={scss.buttonSubmit}
											type="primary"
											htmlType="submit"
										>
											Сменит пароль
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
