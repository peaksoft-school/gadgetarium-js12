import { FC } from 'react';
import scss from './WrapperPay.module.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Delivery from '@/src/pagesUser/components/pages/placingAnOrder/Delivery.tsx';
import Payment from '@/src/pagesUser/components/pages/placingAnOrder/Payment.tsx';
import Review from '@/src/pagesUser/components/pages/placingAnOrder/Review.tsx';

const WrapperPay: FC = () => {
	return (
		<>
			<section className={scss.WrapperPay}>
				<div className="container">
					<div className={scss.content}>
						<h1>awd</h1>
						{/*!left_block*/}
						<div className={scss.left_block}>
							<h2>Оформление заказа</h2>
							<hr />
							<div>
								<div className={scss.transition_numbers}>
									<Link to="/pay/deliveryoptions" className={scss.number_one}>
										1
									</Link>
									<p>Варианты доставки</p>
									<Link to="/pay/payment" className={scss.number_one}>
										2
									</Link>
									<p>Оплата</p>
									<Link to="/pay/orderoverview" className={scss.number_one}>
										3
									</Link>
									<p>Обзор заказа</p>
								</div>
							</div>
							<div className={scss.content_routes}>
								<Routes>
									<Route path="/delivery" element={<Delivery />} />
									<Route path="/payment" element={<Payment />} />
									<Route path="/review" element={<Review />} />
								</Routes>
							</div>
						</div>
						{/*!right_block*/}
						<div className={scss.right_block}>Сумма заказа!</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default WrapperPay;
