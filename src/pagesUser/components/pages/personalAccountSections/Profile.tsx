/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconEye, IconEyeOff, IconPhotoPlus } from '@tabler/icons-react';
import scss from './Profile.module.scss';
import { useForm } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	usePostProfilesInformationQueryMutation,
	usePutProfilesImageQueryMutation,
	useGetProfilesQuery,
	usePatchProfilesPasswordMutation
} from '@/src/redux/api/personalAccount/profile';
import { message } from 'antd';

const Profile = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		setValue
	} = useForm({
		mode: 'onSubmit'
	});

	const profiles = [
		{
			label: 'Имя',
			error: 'firstName',
			placeholder: 'Введите ваше имя'
		},
		{
			label: 'Фамилия',
			error: 'lastName',
			placeholder: 'Введите вашу фамилию'
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

	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const [profilePasswords] = usePatchProfilesPasswordMutation();
	const [profileInformation] = usePostProfilesInformationQueryMutation();
	const [profileImage] = usePutProfilesImageQueryMutation();
	const { data: profileData, refetch } = useGetProfilesQuery({});
	const navigate = useNavigate();

	const [messageApi, contextHolder] = message.useMessage();

	useEffect(() => {
		if (profileData) {
			setValue('firstName', profileData.firsName);
			setValue('lastName', profileData.lastName);
			setValue('email', profileData.email);
			setValue('phone', profileData.phoneNumber);
			setValue('address', profileData.address);

			setFirstName(profileData.firsName);
			setLastName(profileData.lastName);
			setEmail(profileData.email);
			setPhone(profileData.phoneNumber);
			setAddress(profileData.address);
		}
		refetch();
	}, [profileData, setValue]);

	const navigateForgot = () => {
		navigate('/auth/forgotPassword');
	};

	const handlePostNewPassword = async () => {
		try {
			const passwords = {
				oldPassword: oldPassword,
				newPassword: newPassword,
				confirmationPassword: confirmPassword
			};
			const res = await profilePasswords(passwords);
			reset();
			console.log(res);
		} catch (error) {
			message.warning('Вы неправильно ввели старый пароль');
			console.error(error, 'Вы неправильно ввели старый пароль');
		}
		if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
			return;
		} else {
		}
	};

	const handleMessage = () => {
		messageApi.open({
			type: 'success',
			content: 'Вы неправильно ввели старый пароль',
			className: 'custom-class',
			style: {
				marginTop: '6vh',
				marginLeft: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '300px',
				height: '50x',
				// fontWeight: 'bold',
				color: 'black',
				borderRadius: '10px'
			}
		});
	};

	const handlePostNewInformation = async () => {
		const informations = {
			userName: firstName,
			lastName: lastName,
			email: email,
			phoneNumber: phone,
			address: address
		};
		try {
			const res = await profileInformation(informations);
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	};

	const onSubmit = () => {
		handlePostNewInformation();
		handlePostNewPassword();
	};

	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
		if (file) {
			const formData = new FormData();
			formData.append('image', file);
			try {
				const res = await profileImage(formData);
				console.log(res);
			} catch (error) {
				console.error('Error uploading profile image:', error);
			}
		}
	};

	return (
		<section className={scss.profile}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.page_content_1}>
						<p className={scss.navigation_p}>
							Личный кабинет » <h3>Учетная запись</h3>
						</p>
						{contextHolder}
						<button onClick={handleMessage}>Message </button>
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
						<div className={scss.div_left} onClick={handleImageClick}>
							<IconPhotoPlus />
							<p>Нажмите для добавления фотографии</p>
							<input
								type="file"
								ref={fileInputRef}
								style={{ display: 'none' }}
								onChange={handleFileChange}
							/>
						</div>
						<div className={scss.div_right}>
							<h1>Личные данные</h1>
							<div className={scss.div_fields}>
								<form onSubmit={handleSubmit(onSubmit)}>
									{profiles.map((e) => (
										<div className={scss.fields} key={e.error}>
											<label>
												{e.label} <span>*</span>
											</label>
											<input
												type="text"
												placeholder={e.placeholder}
												{...register(`${e.error}`, {
													required: 'Это поле обязательно для заполнения!'
												})}
												onChange={(event) => {
													if (e.error === 'firstName') {
														setFirstName(event.target.value);
													} else if (e.error === 'lastName') {
														setLastName(event.target.value);
													} else if (e.error === 'email') {
														setEmail(event.target.value);
													} else if (e.error === 'phone') {
														setPhone(event.target.value);
													}
												}}
												value={
													e.error === 'firstName'
														? firstName
														: e.error === 'lastName'
															? lastName
															: e.error === 'email'
																? email
																: e.error === 'phone'
																	? phone
																	: ''
												}
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
												required: 'Это поле обязательно для заполнения!'
											})}
											value={address}
											onChange={(event) => setAddress(event.target.value)}
										/>
										<div>
											<p>{errors?.address?.message?.toString()}</p>
										</div>
									</div>

									{isShown ? (
										<div className={scss.password_buttons}>
											{passwords.map((e) => (
												<div className={scss.password_fields} key={e.error}>
													<label>
														{e.label} <span>*</span>
													</label>
													<input
														type={
															passwordVisibility[e.error] ? 'text' : 'password'
														}
														placeholder={e.placeholder}
														{...register(`${e.error}`, {
															required: 'Это поле обязательно для заполнения!'
														})}
														onChange={(event) => {
															if (e.error === 'old') {
																setOldPassword(event.target.value);
															} else if (e.error === 'new') {
																setNewPassword(event.target.value);
															} else if (e.error === 'confirm') {
																setConfirmPassword(event.target.value);
															}
														}}
														value={
															e.error === 'old'
																? oldPassword
																: e.error === 'new'
																	? newPassword
																	: e.error === 'confirm'
																		? confirmPassword
																		: ''
														}
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
												onClick={navigateForgot}
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
