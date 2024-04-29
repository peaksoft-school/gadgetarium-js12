import { useState } from 'react';
import scss from './PlacingAnOrder.module.scss';
import DeliveryOptions from './DeliveryOptions';
import Payment from './Payment';
import OrderOverview from './OrderOverview';

const iphones = [
	{
		image:
			'https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Images-PNG.png',
		name: 'IPhone 15 pro Max 256gb blue 9(MLP3RU)',
		articul: 393478,
		quantity: '3 шт',
		size: 44,
		color: 'Blue'
	},
	{
		image:
			'https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Images-PNG.png',
		name: 'IPhone 15 pro Max 256gb yellow 9(MLP3RU)',
		articul: 393478,
		quantity: '3 шт',
		size: 44,
		color: 'Yellow'
	}
];

const PlacingAnOrder = () => {
	const [isDelivery, setIsDelivery] = useState(false);
	const [isPayment, setIsPayment] = useState(false);
	const [isOrderTotal, setIsOrderTotal] = useState(false);

	const handleDelvery = () => {
		setIsDelivery(!isDelivery);
		setIsPayment(false);
		setIsOrderTotal(false);
	};

	const handlePayment = () => {
		setIsPayment(!isPayment);
		setIsOrderTotal(false);
		setIsDelivery(false);
	};

	const handleOrderTotal = () => {
		setIsOrderTotal(!isOrderTotal);
		setIsDelivery(false);
		setIsPayment(false);
	};

	return (
		<div className={scss.PlacingAnOrder}>
			<div className="container">
				<div className={scss.content}>
					<h2>Оформление заказа</h2>
					<hr />
					<div>
						<div className={scss.transition_numbers}>
							<div
								style={{
									backgroundColor: isDelivery ? 'rgb(203, 17, 171)' : '#c6c6c6'
								}}
								onClick={handleDelvery}
								className={scss.number_one}
							>
								1
							</div>
							<p>Варианты доставки</p>
							<div
								style={{
									backgroundColor: isPayment ? 'rgb(203, 17, 171)' : '#c6c6c6'
								}}
								onClick={handlePayment}
								className={scss.number_one}
							>
								2
							</div>
							<p>Оплата</p>
							<div
								style={{
									backgroundColor: isOrderTotal
										? 'rgb(203, 17, 171)'
										: '#c6c6c6'
								}}
								onClick={handleOrderTotal}
								className={scss.number_one}
							>
								3
							</div>
							<p>Обзор заказа</p>
						</div>
					</div>
					<div>
						<div
							className={scss.maines}
							style={{ display: isDelivery ? 'flex' : 'none' }}
						>
							<DeliveryOptions />
							<div className={scss.order_price}>
								<div className={scss.card_order_price}>
									<div className={scss.title}>
										<p>Сумма заказа</p>
										<h5>Изменить</h5>
									</div>
									<div className={scss.line}>.</div>
									<div>
										<p className={scss.quantity_order}>
											Количество товаров: <span>3 шт</span>
										</p>
										<p className={scss.your_seil}>
											Ваша скидка: <span>– 20 000 с</span>
										</p>
										<p className={scss.sum}>
											Сумма: <span>220 900 с</span>
										</p>
									</div>
									<h4 className={scss.total}>
										Итого: <span>200 900 с</span>
									</h4>
								</div>
								<div className={scss.cards_phones}>
									{iphones.map((item, index) => (
										<div key={index} className={scss.phone_card}>
											<img className={scss.image} src={item.image} alt="" />
											<div className={scss.phone_texts}>
												<p className={scss.name}>{item.name}</p>
												<p>Артикул:{item.articul}</p>
												<p> Кол-во:{item.quantity}</p>
												<p>Размер:{item.size}</p>
												<p>Цвет:{item.color}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div style={{ display: isPayment ? 'flex' : 'none' }}>
							<Payment />
						</div>
						<div style={{ display: isOrderTotal ? 'flex' : 'none' }}>
							<OrderOverview />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlacingAnOrder;
