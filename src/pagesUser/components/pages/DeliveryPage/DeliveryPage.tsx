import { useNavigate } from 'react-router-dom';
import scss from './DeliveryPage.module.scss';
import {  IconCard2, IconKamazCar } from '@/src/assets/icons';
// IconCard
const DeliveryPage = () => {
	const navigate = useNavigate();
	return (
		<section className={scss.DeliveryPage}>
			<div className="container">
				<div className={scss.content}>
					<p onClick={() => navigate('/')}>
						Главная » <h3>Контакты</h3>
					</p>
					<div className={scss.delivery_text_div}>
						<h3>Доставка</h3>
						<div></div>
					</div>
					<p className={scss.city_text_and_delivery}>
						Город доставки <h4>Бишкек</h4>
					</p>
					<div className={scss.cards_and_texts_content_div}>
						<div className={scss.div_cards_1}>
							<div className={scss.card_content}>
								<IconKamazCar />
								<div className={scss.cards_texts}>
									<h3>Самовывоз со склада</h3>
									<p>Забрать в течение 14 дней</p>
								</div>
							</div>
							<div className={scss.card_content}>
								<IconKamazCar />
								<div className={scss.cards_texts}>
									<h3>Самовывоз со склада</h3>
									<p>Забрать в течение 14 дней</p>
								</div>
							</div>
							<div className={scss.card_content}>
								<IconKamazCar />
								<div className={scss.cards_texts}>
									<h3>Доставка</h3>
									<p>
										По городу 200сом, по регионам Бесплатная доставка <br /> при
										покупках свыше — 10 000с.
									</p>
								</div>
							</div>
						</div>
						<div className={scss.div_cards_2}>
							<div className={scss.card_content2}>
								<IconCard2 />
								<p>Предоплата не требуется</p>
							</div>
							<div className={scss.card_content2}>
								<IconCard2 />
								<p>Предоплата не требуется</p>
							</div>
							<div className={scss.card_content2}>
								<IconKamazCar />
								<p>Предоплата не требуется</p>
							</div>
						</div>
					</div>
					<h2>Способы оплаты</h2>
					<div className={scss.cards_and_texts_content_div_2}>
						<div className={scss.card_content_2}>
							<IconCard2 />
							<div className={scss.card_texts_div}>
								<p>Оплата картой </p>
								<p>онлайн</p>
							</div>
						</div>
						<div className={scss.card_content_2}>
							<IconCard2 />
							<div className={scss.card_texts_div}>
								<p>Наличными при</p>
								<p>получении</p>
							</div>
						</div>
						<div className={scss.card_content_2}>
							<IconCard2 />
							<div className={scss.card_texts_div}>
								<p>Картой </p>
								<p>при получении</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DeliveryPage;
