import { useNavigate } from 'react-router-dom';
import scss from './Contacts.module.scss';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Input } from 'antd';
import { MapComponent } from './MapComponent';
import { usePostNewsLetterContactUsMutation } from '@/src/redux/api/follow';

const { TextArea } = Input;
export const Contacts = () => {
	const [postNewsLetterContactUs] = usePostNewsLetterContactUsMutation();
	const navigate = useNavigate();
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<ContactsPagesFormTypes>({
		mode: 'onBlur'
	});
	const onSubmit: SubmitHandler<ContactsPagesFormTypes> = async (data) => {
		reset();
		const contactData: ContactsPagesFormTypes = {
			email: data.email,
			firstname: data.firstname,
			lastname: data.lastname,
			message: data.message,
			phoneNumber: String(data.phoneNumber)
		};
		const { email, firstname, lastname, message, phoneNumber } = contactData;
		try {
			await postNewsLetterContactUs({
				email,
				firstname,
				lastname,
				message,
				phoneNumber
			});
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<section className={scss.ContactsPage}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content_page}>
						<p onClick={() => navigate('/')}>
							Главная » <h3>Контакты</h3>
						</p>
						<div className={scss.contacts_div_text_and_border_div}>
							<h2>Контакты</h2>
							<div></div>
						</div>
					</div>
					<div className={scss.ContactsPage_content_center_text_and_form}>
						<div className={scss.contents_div_center}>
							<p>Магазин Gadgetarium</p>
							<div className={scss.texts_center_contents}>
								<div className={scss.text_div_1}>
									<h3>Адрес:</h3>
									<p>г. Бишкек, ул. Гражданская 119</p>
								</div>
								<div className={scss.text_div_1}>
									<h3>Телефон:</h3>
									<p>+996(400) 00-00-00</p>
								</div>
								<div className={scss.text_div_1}>
									<h3>Почта:</h3>
									<p>gadgetariumjs12@gmail.com</p>
								</div>
								<div className={scss.text_div_1}>
									<h3>Режим работы:</h3>
									<p>10:00 - 21:00</p>
								</div>
							</div>
						</div>
						<form onSubmit={handleSubmit(onSubmit)} className={scss.forms}>
							<h2>Напишите нам</h2>
							<div className={scss.div_form}>
								<div className={scss.div_form_and_label}>
									<div className={scss.input_and_label_div}>
										<label>Имя *</label>
										<Controller
											name="firstname"
											control={control}
											defaultValue=""
											rules={{
												required: 'firstName обязателен для заполнения',
												minLength: {
													value: 3,
													message:
														'firstName должен содержать минимум 3 символов'
												}
											}}
											render={({ field }) => (
												<Input
													id="firstname"
													{...field}
													className={scss.input}
													placeholder="Напишите ваше имя"
													status={errors.firstname ? 'error' : undefined}
												/>
											)}
										/>
									</div>
									<div className={scss.input_and_label_div}>
										<label>Фамилия *</label>
										<Controller
											name="lastname"
											control={control}
											defaultValue=""
											rules={{
												required: 'lastName обязателен для заполнения',
												minLength: {
													value: 4,
													message:
														'lastName должен содержать минимум 4 символов'
												}
											}}
											render={({ field }) => (
												<Input
													{...field}
													id="lastName"
													className={scss.input}
													placeholder="Напишите вашу фамилию"
													status={errors.lastname ? 'error' : undefined}
													style={{ color: 'black' }}
												/>
											)}
										/>
									</div>
								</div>
								<div className={scss.div_form_and_label}>
									<div className={scss.input_and_label_div}>
										<label>E-mail *</label>
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
													id="email"
													{...field}
													className={scss.input}
													placeholder="Напишите ваш email"
													status={errors.email ? 'error' : undefined}
												/>
											)}
										/>
									</div>
									<div className={scss.input_and_label_div}>
										<label>Телефон *</label>
										<Controller
											name="phoneNumber"
											control={control}
											defaultValue=""
											rules={{
												required: 'Телефон номер обязателен для заполнения',
												minLength: {
													value: 13,
													message:
														'Телефон номер должен содержать минимум 13 символов'
												}
											}}
											render={({ field }) => (
												<Input
													id="phoneNumber"
													{...field}
													status={errors.phoneNumber ? 'error' : undefined}
													className={scss.input}
													placeholder="+996 (_ _ _) _ _  _ _  _ _"
												/>
											)}
										/>
									</div>
								</div>
								<div className={scss.message_and_label_div}>
									<label>Сообщение</label>
									<Controller
										name="message"
										control={control}
										defaultValue=""
										rules={{
											required: 'Сообщение обязателен для заполнения',
											maxLength: {
												value: 100,
												message:
													'Сообщение должен содержать максимус 100 символов'
											}
										}}
										render={({ field }) => (
											<TextArea
												id="message"
												{...field}
												status={errors.message ? 'error' : undefined}
												className={scss.input_for_message}
												placeholder="Напишите сообщение"
											/>
										)}
									/>
								</div>
								{(errors.firstname && <p>{errors.firstname.message}</p>) ||
									(errors.lastname && <p>{errors.lastname.message}</p>) ||
									(errors.email && <p>{errors.email.message}</p>) ||
									(errors.phoneNumber && <p>{errors.phoneNumber.message}</p>) ||
									(errors.message && <p>{errors.message.message}</p>)}
								<button
									className={
										// scss.buttonSubmit
										!errors.email &&
										!errors.phoneNumber &&
										!errors.message &&
										!errors.lastname &&
										!errors.firstname
											? `${scss.button_noo_active} ${scss.buttonSubmit}`
											: `${scss.button_noo_active}`
										// ? `${scss.buttonSubmit} ${scss.active_buttonSubmit}`
										// : `${scss.buttonSubmit}`
									}
									type={
										!errors.email &&
										!errors.firstname &&
										!errors.lastname &&
										!errors.phoneNumber &&
										!errors.message
											? 'submit'
											: 'reset'
									}
								>
									Отправить
								</button>
							</div>
						</form>
					</div>
					<MapComponent />
				</div>
			</div>
		</section>
	);
};
