import { useState } from 'react';
import scss from './Footer.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconGadgetarium } from '@/src/assets/icons';
import {
	IconClock,
	IconMail,
	IconMapPin,
	IconPhone
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

interface InputType {
	email: string;
}

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Введите корректный email')
		.required('Email обязателен для заполнения')
});

const Footer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<InputType>({
		resolver: yupResolver(schema)
	});

	const [isSubscribed, setIsSubscribed] = useState<string | boolean>(false);

	const onSubmit = (data: InputType) => {
		console.log(data);
		setIsSubscribed(true);
	};

	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.firstContainer}>
						<div className={scss.first_footer_div}>
							<p>Каталог</p>
							<div className={scss.hh5}>
								<a href="#">Смартфоны</a>
								<a href="#">Ноутбуки и планшеты</a>
								<a href="#">Смарт-часы и браслеты</a>
								<a href="#">Аксессуары </a>
							</div>
						</div>
						<div className={scss.second_footer_div}>
							<p>Будь с нами</p>
							<div className={scss.hh5}>
								<a href="#">Акции</a>
								<a href="#">Новинки</a>
								<a href="#">Популярные категории </a>
							</div>
						</div>
						<div className={scss.third_footer_div}>
							<p>Помощь и сервисы</p>
							<div className={scss.hh5}>
								<Link to="/aboutstore">О магазине</Link>
								<Link to="/delivery">Доставка</Link>
								<Link to="/faq">FAQ</Link>
								<Link to="/contacts">Контакты</Link>
							</div>
						</div>
					</div>
					<div className={scss.last_footer_div}>
						<div className={scss.fourth_footer_div}>
							<form
								className={scss.SubsInputButton}
								onSubmit={handleSubmit(onSubmit)}
							>
								<p className={scss.promoDiscount}>
									Расскажем об акциях и скидках{' '}
								</p>
								<div className={scss.flex_input_button}>
									<input
										{...register('email')}
										className={`${scss.emailInput} ${errors.email ? scss.errorInput : ''}`}
										placeholder="Email"
									/>
									<button type="submit" className={scss.subscribeButton}>
										Подписаться
									</button>
								</div>
								<p className={scss.addSubscrib}>
									Нажимая на кнопку «подписаться» Вы соглашаетесь <br /> на
									обработку персональных данных
								</p>
								{errors.email ? (
									<div
										style={{
											color: 'red'
										}}
									>
										{errors.email.message}
									</div>
								) : isSubscribed ? (
									<div style={{ color: 'green' }}>Вы успешно подписались!</div>
								) : null}
							</form>
						</div>
						<div className={scss.fifth_footer_div}>
							<a className={scss.icon} href="https://wa.me/996706215289">
								<IconPhone /> +996 (400) 00 00 00
							</a>
							<a
								className={scss.icon}
								href="https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1"
							>
								<IconMail /> gadgetariumjs12@gmail.com
							</a>
							<a
								className={scss.icon}
								href="https://maps.app.goo.gl/2kKxda66CbUbMZU79"
							>
								<IconMapPin /> г.Бишкек, ул. Гражданская 119
							</a>
							<a className={scss.icon} href="#">
								<IconClock /> С 10:00 до 21:00 (без выходных)
							</a>
						</div>
					</div>
				</div>
				<div className={scss.gadget}>
					<div className={scss.rectangle_hr}></div>
					<div className={scss.gadgetIcon}>
						<IconGadgetarium />
						<div className={scss.div}>
							<p>© 2024 Gadgetarium. Интернет магазин </p>
							<p>Все права защищены.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
