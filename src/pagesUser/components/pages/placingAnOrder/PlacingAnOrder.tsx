import { useLocation, useNavigate } from 'react-router-dom';
import scss from './PlacingAnOrder.module.scss';

const PlacingAnOrder = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavigate = (path) => {
		navigate(path);
	};

	return (
		<div className={scss.PlacingAnOrder}>
			<div className="container">
				<div className={scss.content}>
					<h2>Оформление заказа</h2>
					<hr />
					<div className={scss.transition_numbers}>
						<div
							onClick={() => handleNavigate('/deliveryoptions')}
							className={`${scss.number_one} ${location.pathname === '/deliveryoptions' && scss.active}`}
						>
							1
						</div>
						<p>Варианты доставки</p>
						<div
							onClick={() => handleNavigate('/payment')}
							className={`${scss.number_one} ${location.pathname === '/payment' && scss.active}`}
						>
							2
						</div>
						<p>Оплата</p>
						<div
							onClick={() => handleNavigate('/orderoverview')}
							className={`${scss.number_one} ${location.pathname === '/orderoverview' && scss.active}`}
						>
							3
						</div>
						<p>Обзор заказа</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlacingAnOrder;
