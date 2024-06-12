import scss from './Delivery.module.scss';
import { useNavigate } from 'react-router-dom';
import { IconWalletCard, IconKamazCar } from '@/src/assets/icons';
import { IconBusinessplan, IconCash, IconWallet } from '@tabler/icons-react';

const Delivery = () => {
	const navigate = useNavigate();
	return (
		<section className={scss.DeliveryPage}>
			<div className="container">
				<div className={scss.content}>
					<p onClick={() => navigate('/')}>
						Главная » <span>Контакты</span>
					</p>
					<div className={scss.delivery_text_div}>
						<h3>Доставка</h3>
						<div></div>
					</div>
					<p className={scss.city_text_and_delivery}>
						Город доставки <span>Бишкек</span>
					</p>
					<div className={scss.cards_and_texts_content_div}>
						<div className={scss.div_cards_1}>
							<div className={scss.card_content}>
								<div className={scss.cards_texts}>
									<IconKamazCar />
									<div className={scss.texts}>
										<h3>Самовывоз со склада</h3>
										<p>Забрать в течение 14 дней</p>
									</div>
								</div>
								<div className={scss.card_content2}>
									<IconWallet style={{ color: '#c11bab' }} />
									<p>Предоплата не требуется</p>
								</div>
							</div>
							<div className={scss.card_content}>
								<div className={scss.cards_texts}>
									<IconKamazCar />
									<div className={scss.texts}>
										<h3>Самовывоз из магазина</h3>
										<p>Забрать в течение 14 дней</p>
									</div>
								</div>
								<div className={scss.card_content2}>
									<IconWallet style={{ color: '#c11bab' }} />
									<p>Предоплата не требуется</p>
								</div>
							</div>
							<div className={scss.card_content}>
								<div className={scss.cards_texts}>
									<IconKamazCar />
									<div className={scss.texts}>
										<h3>Доставка</h3>
										<p>
											По городу 200сом, по регионам Бесплатная доставка при
											покупках свыше -10000c.
										</p>
									</div>
								</div>
								<div className={scss.card_content2}>
									<IconWallet style={{ color: '#c11bab' }} />
									<p>Предоплата не требуется</p>
								</div>
							</div>
						</div>
					</div>
					<h2>Способы оплаты</h2>
					<div className={scss.cards_and_texts_content_div_2}>
						<div className={scss.card_content_2}>
							<IconCash style={{ color: '#c11bab' }} />
							<div className={scss.card_texts_div}>
								<p>Оплата картой </p>
								<p>онлайн</p>
							</div>
						</div>
						<div className={scss.card_content_2}>
							<IconBusinessplan style={{ color: '#c11bab' }} />
							<div className={scss.card_texts_div}>
								<p>Наличными при</p>
								<p>получении</p>
							</div>
						</div>
						<div className={scss.card_content_2}>
							<IconWalletCard />
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

export default Delivery;
