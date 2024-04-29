import scss from './OrderOverview.module.scss';

const OrderOverview = () => {
	return (
		<div className={scss.OrderOverview}>
			<div className="container">
				<div className={scss.content}>
					<h2>Обзор заказа</h2>
					<div className={scss.texts}>
						<div className={scss.total}>
							<h3>
								Итого <p>250 000 с</p>
							</h3>
							<hr />
						</div>
						<div className={scss.delivery}>
							<p className={scss.text_delivery}>Доставка</p>
							<p> г.Бишкек, ул. Ахунбаева, д. 14, кв. 15</p>
							<p className={scss.change}>Изменить</p>
						</div>
						<div className={scss.payment}>
							<p className={scss.text_payment}>Оплата</p>
							<p> Картой онлайн</p>
							<p className={scss.change}>Изменить</p>
						</div>
						<hr />
					</div>
					<button>Оформить заказ</button>
				</div>
			</div>
		</div>
	);
};

export default OrderOverview;
