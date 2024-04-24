import { useParams } from 'react-router-dom';
import scss from './ShippingAndPaymentPage.module.scss';
import { useGetProductsItemIdQuery } from '@/src/redux/api/product';
import { IconKamazCar } from '@/src/assets/icons';

export const ShippingAndPaymentPage = () => {
	const { productId } = useParams();
	const { data } = useGetProductsItemIdQuery(productId!);
	return (
		<section className={scss.ShippingAndPaymentPage}>
			<div className={scss.shippingAndPayment_contents_div}>
				<h2>Доставка</h2>
				<p>
					Город доставки <h3>Бишкек</h3>
				</p>
				<div className={scss.contents_shipping}>
					<div className={scss.content_and_photo}>
						<div className={scss.cards_contents}>
							<IconKamazCar />
							<div className={scss.texts}>
								<h3>Самовывоз со склада</h3>
								<p>Забрать в течение 14 дней</p>
							</div>
						</div>
						<h2>{data?.deliveryAndPayment.sum}</h2>
						<div className={scss.cards_contents}>
							<IconKamazCar />
							<div className={scss.texts}>
								<h3>Самовывоз из магазина</h3>
								<p>Забрать в течение 14 дней</p>
							</div>
						</div>
						<h2>{data?.deliveryAndPayment.sun2} с</h2>
						<div className={scss.cards_contents}>
							<IconKamazCar />
							<div className={scss.texts}>
								<h3>Доставка</h3>
								<p>Бесплатная доставка при покупках свыше — 10 000с.</p>
							</div>
						</div>
						<h2>от {data?.deliveryAndPayment.sum3} с</h2>
					</div>
					<div className={scss.content_and_photo_content}>
						<div className={scss.content_Div}>
							<IconKamazCar />
							<>
								<p>Предоплата не требуется</p>
							</>
						</div>
						<div className={scss.content_Div}>
							<IconKamazCar />
							<>
								<p>Предоплата не требуется</p>
							</>
						</div>
						<div className={scss.content_Div}>
							<IconKamazCar />
							<>
								<p>Предоплата не требуется</p>
							</>
						</div>
					</div>
				</div>
				<div className={scss.shipping_and_payment_content}>
					<h2>Способы оплаты</h2>
					<div className={scss.content_and_photo_content}>
						<div className={scss.content_Div}>
							<IconKamazCar />
							<div className={scss.div_texts}>
								<p>Оплата картой</p>
								<p>онлайн</p>
							</div>
						</div>
						<div className={scss.content_Div}>
							<IconKamazCar />
							<div className={scss.div_texts}>
								<p>Оплата картой</p>
								<p>онлайн</p>
							</div>
						</div>
						<div className={scss.content_Div}>
							<IconKamazCar />
							<div className={scss.div_texts}>
								<p>Оплата картой</p>
								<p>онлайн</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
