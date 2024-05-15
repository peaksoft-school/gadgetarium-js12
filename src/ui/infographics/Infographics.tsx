import { useState } from 'react';
import scss from './Infographics.module.scss';

const Infographics = () => {
	const [day, setDay] = useState(true);
	const [month, setMonth] = useState(false);
	const [year, setYear] = useState(false);
	return (
		<div className={scss.Infographics}>
			<div className={scss.content_right}>
				<div className={scss.right_part_1}>
					<h3>инфоГрафика</h3>
					<div className={scss.prices_div}>
						<div className={scss.price_div_1}>
							<h2>
								7 556 <span>С</span>
							</h2>
							<h3>Выкупили на сумму</h3>
							<h2 className={scss.another_h2}>12 шт</h2>
						</div>

						<div className={scss.border_straight_div}></div>

						<div className={scss.price_div_2}>
							<h2>
								34 562 <span>С</span>
							</h2>
							<h3>Заказали на сумму</h3>
							<h2 className={scss.another_h2}>56 шт</h2>
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
											120 000 <span>с</span>
										</h2>
										<h3>Текущий период</h3>
									</div>

									<div className={scss.last_period_div}>
										<h2>100 500 с</h2>
										<h3>Предыдущий период</h3>
									</div>
								</div>
							)}

							{month && (
								<div className={scss.periods_div}>
									<div className={scss.present_period_div}>
										<h2>
											240 000 <span>с</span>
										</h2>
										<h3>Текущий период</h3>
									</div>

									<div className={scss.last_period_div}>
										<h2>201 000 с</h2>
										<h3>Предыдущий период</h3>
									</div>
								</div>
							)}

							{year && (
								<div className={scss.periods_div}>
									<div className={scss.present_period_div}>
										<h2>
											360 000 <span>с</span>
										</h2>
										<h3>Текущий период</h3>
									</div>

									<div className={scss.last_period_div}>
										<h2>301 500 с</h2>
										<h3>Предыдущий период</h3>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Infographics;
