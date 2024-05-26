import { useParams } from 'react-router-dom';
import scss from './ShippingAndPaymentPage.module.scss';
import {
	IconCashUponReceipt,
	IconKamazCar,
	IconUponReceipt
} from '@/src/assets/icons';
import { IconCreditCard, IconWallet } from '@tabler/icons-react';
import { useGetDeliveryProductQuery } from '@/src/redux/api/deliveryApi';

export const ShippingAndPaymentPage = () => {
	const { productId } = useParams();
	const { data, isLoading } = useGetDeliveryProductQuery(productId!);
	return (
		<section className={scss.ShippingAndPaymentPage}>
			{isLoading ? (
				<h1>isLoading...</h1>
			) : (
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
							<h2>0 с</h2>
							<div className={scss.cards_contents}>
								<IconKamazCar />
								<div className={scss.texts}>
									<h3>Самовывоз из магазина</h3>
									<p>Забрать в течение 14 дней</p>
								</div>
							</div>
							<h2>0 с</h2>
							<div className={scss.cards_contents}>
								<IconKamazCar />
								<div className={scss.texts}>
									<h3>Доставка</h3>
									<p>Бесплатная доставка при покупках свыше — 10 000с.</p>
								</div>
							</div>
							<h2>от {data?.deliveryPrice} с</h2>
						</div>
						<div className={scss.content_and_photo_content}>
							<div className={scss.content_Div}>
								{/* <IconCreditCard color="rgb(203, 17, 171)" /> */}
								<IconWallet color="rgb(203, 17, 171)" />
								<>
									<p>Предоплата не требуется</p>
								</>
							</div>
							<div className={scss.content_Div}>
								<IconWallet color="rgb(203, 17, 171)" />
								<>
									<p>Предоплата не требуется</p>
								</>
							</div>
							<div className={scss.content_Div}>
								<IconWallet color="rgb(203, 17, 171)" />
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
								<IconCreditCard color="rgb(203, 17, 171)" />{' '}
								<div className={scss.div_texts}>
									<p>Оплата картой</p>
									<p>онлайн</p>
								</div>
							</div>
							<div className={scss.content_Div}>
								<IconCashUponReceipt />
								<div className={scss.div_texts}>
									<p>Наличными при</p>
									<p>получении</p>
								</div>
							</div>
							<div className={scss.content_Div}>
								<IconUponReceipt />
								<div className={scss.div_texts}>
									<p>Картой</p>
									<p>при получении</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
