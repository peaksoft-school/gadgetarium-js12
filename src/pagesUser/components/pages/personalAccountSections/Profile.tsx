/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconEye, IconEyeOff, IconPhotoPlus } from '@tabler/icons-react';
import scss from './Profile.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		mode: 'onSubmit'
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const profiles = [
		{
			label: 'Имя',
			error: 'FirstName',
			placeholder: 'Введите ваше имя'
		},
		{
			label: 'Фамилия',
			error: 'LastName',
			placeholder: 'Введите вашу фамилия'
		},
		{
			label: 'E-mail',
			error: 'email',
			placeholder: 'Введите почтовый индекс'
		},
		{
			label: 'Телефон',
			error: 'phone',
			placeholder: 'Введите номер телефона'
		}
	];

	const passwords = [
		{
			label: 'Старый пароль',
			error: 'old',
			placeholder: 'Введите старый пароль'
		},
		{
			label: 'Новый пароль',
			error: 'new',
			placeholder: 'Введите новый пароль'
		},
		{
			label: 'Подтвердите новый пароль',
			error: 'confirm',
			placeholder: 'Подтвердите пароль'
		}
	];

	const [isShown, setIsShown] = useState(false);
	const [passwordVisibility, setPasswordVisibility] = useState<{
		[key: string]: boolean;
	}>({});

	return (
		<section className={scss.profile}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.page_content_1}>
						<p className={scss.navigation_p}>
							Личный кабинет » <h3>Учетная запись</h3>
						</p>

						<div className={scss.div_heading}>
							<h3>Профиль</h3>
							<div></div>
						</div>

						<div className={scss.div_navigation}>
							<Link to="/personal-account/history-of-orders">
								<button>История заказов</button>
							</Link>
							<Link to={'/personal-account/favorite'}>
								<button>Избранное</button>
							</Link>
							<button className={scss.active_button}>Профиль</button>
						</div>
					</div>

					<div className={scss.page_content_2}>
						<div className={scss.div_left}>
							<IconPhotoPlus />
							<p>Нажмите для добавления фотографии</p>
						</div>

						<div className={scss.div_right}>
							<h1>Личные данные</h1>

							<div className={scss.div_fields}>
								<form onSubmit={handleSubmit(onSubmit)}>
									{profiles.map((e) => (
										<div className={scss.fields}>
											<label>
												{e.label} <span>*</span>
											</label>
											<input
												type="text"
												placeholder={e.placeholder}
												{...register(`${e.error}`, {
													required: 'Это поле обьязательна для заполнения!'
												})}
											/>
											<div>
												<p>{errors?.[e.error]?.message?.toString()}</p>
											</div>
										</div>
									))}
									<div className={scss.address_input}>
										<label>
											Адрес доставки <span>*</span>
										</label>
										<input
											type="text"
											placeholder="Введите ваш адрес"
											{...register('address', {
												required: 'Это поле обьязательна для заполнения!'
											})}
										/>
										<div>
											<p>{errors?.address?.message?.toString()}</p>
										</div>
									</div>

									{isShown ? (
										<div className={scss.password_buttons}>
											{passwords.map((e) => (
												<div className={scss.password_fields}>
													<label>
														{e.label} <span>*</span>
													</label>
													<input
														type={
															passwordVisibility[e.error] ? 'text' : 'password'
														}
														placeholder={e.placeholder}
														{...register(`${e.error}`, {
															required: 'Это поле обьязательна для заполнения!'
														})}
													/>

													{passwordVisibility[e.error] ? (
														<IconEye
															onClick={() =>
																setPasswordVisibility((prevState) => ({
																	...prevState,
																	[e.error]: false
																}))
															}
														/>
													) : (
														<IconEyeOff
															onClick={() =>
																setPasswordVisibility((prevState) => ({
																	...prevState,
																	[e.error]: true
																}))
															}
														/>
													)}

													<div>
														<p>{errors?.[e.error]?.message?.toString()}</p>
													</div>
												</div>
											))}
											<p
												style={{
													color: 'blue',
													cursor: 'pointer',
													fontSize: '14px',
													marginLeft: '30px'
												}}
											>
												Забыли пароль
											</p>
										</div>
									) : (
										<div className={scss.show_more}>
											<p onClick={() => setIsShown(true)}>Сменить пароль</p>
										</div>
									)}

									<div className={scss.buttons}>
										<button type="button" className={scss.back_button}>
											Назад
										</button>
										<button type="submit">Редактировать</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
