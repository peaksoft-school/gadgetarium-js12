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
import { Link, useNavigate } from 'react-router-dom';
import { usePostFollowMutation } from '@/src/redux/api/follow';

interface InputType {
	email: string;
}

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Введите корректный email')
		.required('Email обязателен для заполнения')
});

// const navigate = useNavigate();
const Footer = () => {
	const navigate = useNavigate();
	const [postFollow] = usePostFollowMutation();
	const top = () => {
		window.scrollTo(0, 0);
	};
	const topp = () => {
		window.scrollTo(0, 0);
		navigate('/');
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<InputType>({
		resolver: yupResolver(schema)
	});

	const [isSubscribed, setIsSubscribed] = useState<string | boolean>(false);

	const onSubmit = (data: InputType) => {
		postFollow({ email: data.email });
		console.log(data);
		setIsSubscribed(true);
   setTimeout(() => {
      setIsSubscribed(false); 
      reset(); 
    }, 3000);
  
	};

	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.firstContainer}>
						<div className={scss.first_footer_div}>
							<p>Каталог</p>
							<div className={scss.hh5}>
								<Link onClick={top} to={'/catalog/1/filtred'}>
									Смартфоны
								</Link>
								<Link onClick={top} to={'/catalog/2/filtred'}>
									Ноутбуки и планшеты
								</Link>
								<Link onClick={top} to={'/catalog/3/filtred'}>
									Смарт-часы и браслеты
								</Link>
								<Link onClick={top} to={'/catalog/4/filtred'}>
									Аксессуары{' '}
								</Link>
							</div>
						</div>
						<div className={scss.second_footer_div}>
							<p>Будь с нами</p>
							<div className={scss.hh5}>
								<a onClick={top} href="#">
									Акции
								</a>
								<a onClick={top} href="#">
									Новинки
								</a>
								<a onClick={top} href="#">
									Популярные категории{' '}
								</a>
							</div>
						</div>
						<div className={scss.third_footer_div}>
							<p>Помощь и сервисы</p>
							<div className={scss.hh5}>
								<Link onClick={top} to="/aboutstore">
									О магазине
								</Link>
								<Link onClick={top} to="/delivery">
									Доставка
								</Link>
								<Link onClick={top} to="/faq">
									FAQ
								</Link>
								<Link onClick={top} to="/contacts">
									Контакты
								</Link>
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
					<div onClick={topp} className={scss.gadgetIcon}>
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
// const postFollow = ({ email }: { email: string }) => {
// 	console.log(`Subscribed with email: ${email}`);
// };
export default Footer;
