import { useState } from 'react';
import scss from './DeliveryOptions.module.scss';
import { Checkbox } from 'antd';

// const iphones = [
// 	{
// 		image:
// 			'https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Images-PNG.png',
// 		name: 'IPhone 15 pro Max 256gb blue 9(MLP3RU)',
// 		articul: 393478,
// 		quantity: '3 шт',
// 		size: 44,
// 		color: 'Blue'
// 	},
// 	{
// 		image:
// 			'https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Images-PNG.png',
// 		name: 'IPhone 15 pro Max 256gb yellow 9(MLP3RU)',
// 		articul: 393478,
// 		quantity: '3 шт',
// 		size: 44,
// 		color: 'Yellow'
// 	}
// ];

const DeliveryOptions = () => {
	const [isCheckedPickup, setIsCheckedPickup] = useState(true);
	const [isCheckedCourier, setIsCheckedPickupCourier] = useState(false);

	const handleCheckboxPickup = () => {
		setIsCheckedPickup(!isCheckedPickup);
		setIsCheckedPickupCourier(false);
	};
	const handleCheckboxCourier = () => {
		setIsCheckedPickupCourier(!isCheckedCourier);
		setIsCheckedPickup(false);
	};

	return (
		<div className={scss.DeliveryOptions}>
			<div className="container">
				<div className={scss.content}>
					<div>
						<h2> {isCheckedPickup ? 'Варианты доставки' : 'Доставка'}</h2>
						<div className={scss.cards_pickup_courier_delivery}>
							<div
								className={scss.checkbox_pickup}
								style={{
									border: isCheckedPickup
										? '2px solid  rgb(203, 17, 171)'
										: '2px solid transparent'
								}}
							>
								<div>
									<Checkbox
										checked={isCheckedPickup}
										onChange={handleCheckboxPickup}
									></Checkbox>
								</div>
								<div className={scss.text_pickup}>
									<h4>Самовывоз из магазина</h4>
									<p>
										Забрать 20 июля, <h5>Бесплатно</h5>
									</p>
								</div>
							</div>
							<div
								className={scss.checkbox_courier_delivery}
								style={{
									border: isCheckedCourier
										? '2px solid rgb(203, 17, 171)'
										: '2px solid transparent'
								}}
							>
								<div>
									<Checkbox
										checked={isCheckedCourier}
										onChange={handleCheckboxCourier}
									></Checkbox>
								</div>
								<div className={scss.text_courier}>
									<h4>Доставка курьером</h4>
									<p>
										Забрать 20 июля, <h5>Бесплатно свыше 10 000 с</h5>
										<p>до 10 000 с — от 200 с</p>
									</p>
								</div>
							</div>
						</div>
						<hr />
						<h2>Личные данные</h2>
						<div
							className={scss.input_personal_data_pickup}
							style={{ display: isCheckedPickup ? 'flex' : 'none' }}
						>
							<div className={scss.name_and_first_name}>
								<div className={scss.label_input}>
									<label htmlFor="name">Имя *</label>
									<input
										type="text"
										placeholder="Напишите ваше имя"
										name="Имя *"
									/>
								</div>
								<div className={scss.label_input}>
									<label htmlFor="name">Фамилия *</label>
									<input type="text" placeholder="Напишите вашу фамилию" />
								</div>
							</div>
							<div className={scss.email_and_phone_number}>
								<div className={scss.label_input}>
									<label htmlFor="name">E-mail *</label>
									<input type="text" placeholder="Напишите ваш email" />
								</div>
								<div className={scss.label_input}>
									<label htmlFor="name">Телефон *</label>
									<input type="text" placeholder="+996 (_ _ _) _ _  _ _  _ _" />
								</div>
							</div>
							<button>Продолжить</button>
						</div>
						<div
							className={scss.input_personal_data_pickup}
							style={{ display: isCheckedCourier ? 'flex' : 'none' }}
						>
							<div className={scss.name_and_first_name}>
								<div className={scss.label_input}>
									<label htmlFor="name">Имя *</label>
									<input
										type="text"
										placeholder="Напишите ваше имя"
										name="Имя *"
									/>
								</div>
								<div className={scss.label_input}>
									<label htmlFor="name">Фамилия *</label>
									<input type="text" placeholder="Напишите вашу фамилию" />
								</div>
							</div>
							<div className={scss.email_and_phone_number}>
								<div className={scss.label_input}>
									<label htmlFor="name">E-mail *</label>
									<input type="text" placeholder="Напишите ваш email" />
								</div>
								<div className={scss.label_input}>
									<label htmlFor="name">Телефон *</label>
									<input type="text" placeholder="+996 (_ _ _) _ _  _ _  _ _" />
								</div>
							</div>
							<div className={scss.label_input}>
								<label htmlFor="name">Адрес доставки *</label>
								<input
									className={scss.adress_input}
									type="text"
									placeholder="ул.Гражданская 119, кв 4, дом 9"
								/>
							</div>
							<button>Продолжить</button>
						</div>
					</div>
					{/* <div className={scss.order_price}>
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
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default DeliveryOptions;
