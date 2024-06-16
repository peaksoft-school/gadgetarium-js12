import { useState } from 'react';
import scss from './Infographics.module.scss';
import {
	useGetInfoDay,
	useGetInfoMonth,
	useGetInfoOrder,
	useGetInfoYear
} from '@/src/redux/api/admin/infoGraphics';

const Infographics = () => {
	const [day, setDay] = useState(true);
	const [month, setMonth] = useState(false);
	const [year, setYear] = useState(false);
	const { data, isLoading } = useGetInfoOrder('');
	const { data: dataDay } = useGetInfoDay(0);
	const { data: dataMonth } = useGetInfoMonth(0);
	const { data: dataYear } = useGetInfoYear(0);

	const buyPrice = data?.buyPrice ?? 0;
	const orderPrice = data?.orderPrice ?? 0;
	const buyCount = data?.buyCount ?? 0;
	const orderCount = data?.orderCount ?? 0;

	const dayCurrentPeriod = dataDay?.currentPeriod ?? 0;
	const dayPreviousPeriod = dataDay?.previousPeriod ?? 0;

	const monthCurrentPeriod = dataMonth?.currentPeriod ?? 0;
	const monthPreviousPeriod = dataMonth?.previousPeriod ?? 0;

	const yearCurrentPeriod = dataYear?.currentPeriod ?? 0;
	const yearPreviousPeriod = dataYear?.previousPeriod ?? 0;

	return (
		<div className={scss.Infographics}>
			<div className={scss.content_right}>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<div className={scss.parts}>
						<div className={scss.right_part_1}>
							<h3>инфоГрафика</h3>
							<div className={scss.prices_div}>
								<div className={scss.price_div_1}>
									<h2>
										{buyPrice} <span>С</span>
									</h2>
									<h3>Выкупили на сумму</h3>
									<h2 className={scss.another_h2}>{buyCount} шт</h2>
								</div>

								<div className={scss.border_straight_div}></div>

								<div className={scss.price_div_2}>
									<h2>
										{orderPrice} <span>С</span>
									</h2>
									<h3>Заказали на сумму</h3>
									<h2 className={scss.another_h2}> {orderCount} шт</h2>
								</div>
							</div>
						</div>

						<div className={scss.right_part_2}>
							<div className={scss.days_div}>
								<h2
									className={day ? scss.active_day_h2 : scss.day_h2}
									onClick={() => {
										setDay(true);
										setMonth(false);
										setYear(false);
									}}
								>
									За день
								</h2>
								<h2
									className={month ? scss.active_month_h2 : scss.month_h2}
									onClick={() => {
										setMonth(true);
										setDay(false);
										setYear(false);
									}}
								>
									За месяц
								</h2>
								<h2
									className={year ? scss.active_year_h2 : scss.year_h2}
									onClick={() => {
										setYear(true);
										setMonth(false);
										setDay(false);
									}}
								>
									За год
								</h2>
							</div>

							<div className={scss.box_div}>
								<div className={scss.box_information_div}>
									<h3>Доставлено товаров на сумму</h3>

									{day && (
										<div className={scss.periods_div}>
											<div className={scss.present_period_div}>
												<h2>
													{dayCurrentPeriod} <span>с</span>
												</h2>
												<h3>Текущий период</h3>
											</div>

											<div className={scss.last_period_div}>
												<h2>{dayPreviousPeriod} с</h2>
												<h3>Предыдущий период</h3>
											</div>
										</div>
									)}

									{month && (
										<div className={scss.periods_div}>
											<div className={scss.present_period_div}>
												<h2>
													{monthCurrentPeriod} <span>с</span>
												</h2>
												<h3>Текущий период</h3>
											</div>

											<div className={scss.last_period_div}>
												<h2>{monthPreviousPeriod} с</h2>
												<h3>Предыдущий период</h3>
											</div>
										</div>
									)}

									{year && (
										<div className={scss.periods_div}>
											<div className={scss.present_period_div}>
												<h2>
													{yearCurrentPeriod} <span>с</span>
												</h2>
												<h3>Текущий период</h3>
											</div>

											<div className={scss.last_period_div}>
												<h2>{yearPreviousPeriod} с</h2>
												<h3>Предыдущий период</h3>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Infographics;
