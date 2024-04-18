import { useNavigate } from 'react-router-dom';
import scss from './ContactsPage.module.scss';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
export const ContactsPage = () => {
	const navigate = useNavigate();
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur'
	});
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
									<h3>АДРЕС:</h3>
									<p>г. Бишкек, ул. Гражданская 119</p>
								</div>
								<div className={scss.text_div_1}>
									<h3>Телефон:</h3>
									<p>г+996(400) 00-00-00</p>
								</div>
								<div className={scss.text_div_1}>
									<h3>Почта:</h3>
									<p>Gadgetarium.kg</p>
								</div>
								<div className={scss.text_div_1}>
									<h3>Режим работы:</h3>
									<p>10:00 - 21:00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
