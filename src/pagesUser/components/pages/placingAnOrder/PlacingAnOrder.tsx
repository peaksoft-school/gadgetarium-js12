import scss from './PlacingAnOrder.module.scss';
import { Link } from 'react-router-dom';

const PlacingAnOrder = () => {
	return (
		<div className={scss.PlacingAnOrder}>
			<div className="container">
				<div className={scss.content}>
					<h2>Оформление заказа</h2>
					<hr />
					<div>
						<div className={scss.transition_numbers}>
							<Link to="/deliveryoptions" className={scss.number_one}>
								1
							</Link>
							<p>Варианты доставки</p>
							<Link to="/payment" className={scss.number_one}>
								2
							</Link>
							<p>Оплата</p>
							<Link to="/orderoverview" className={scss.number_one}>
								3
							</Link>
							<p>Обзор заказа</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlacingAnOrder;
