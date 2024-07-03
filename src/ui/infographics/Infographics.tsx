import scss from './Infographics.module.scss';
import {
	useGetInfoDay,
	useGetInfoOrder
} from '@/src/redux/api/admin/infoGraphics';
import { useSearchParams } from 'react-router-dom';

const Infographics = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { data, isLoading } = useGetInfoOrder();
	const { data: dataDay } = useGetInfoDay({
		forPeriod: `forPeriod=${searchParams.get('forPeriod') || ''}`
	});
	const handleAmountFunk = (value: string) => {
		searchParams.set('forPeriod', value);
		setSearchParams(searchParams);
	};

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
										{data?.buyPrice ? data.buyPrice : 0} <span>С</span>
									</h2>
									<h3>Выкупили на сумму</h3>
									<h2 className={scss.another_h2}>
										{data?.buyCount ? data.buyCount : 0} шт
									</h2>
								</div>

								<div className={scss.border_straight_div}></div>

								<div className={scss.price_div_2}>
									<h2>
										{data?.orderPrice ? data.orderPrice : 0} <span>С</span>
									</h2>
									<h3>Заказали на сумму</h3>
									<h2 className={scss.another_h2}>
										{' '}
										{data?.orderCount ? data.orderCount : 0} шт
									</h2>
								</div>
							</div>
						</div>

						<div className={scss.right_part_2}>
							<div className={scss.days_div}>
								<h2
									className={
										searchParams.get('forPeriod')?.includes('FOR_DAY') || ''
											? scss.active_day_h2
											: scss.day_h2
									}
									onClick={() => {
										handleAmountFunk('FOR_DAY');
									}}
								>
									За день
								</h2>
								<h2
									className={
										searchParams.get('forPeriod')?.includes('FOR_MONTH')
											? scss.active_month_h2
											: scss.month_h2
									}
									onClick={() => {
										handleAmountFunk('FOR_MONTH');
									}}
								>
									За месяц
								</h2>
								<h2
									className={
										searchParams.get('forPeriod')?.includes('FOR_YEAR')
											? scss.active_year_h2
											: scss.year_h2
									}
									onClick={() => {
										handleAmountFunk('FOR_YEAR');
									}}
								>
									За год
								</h2>
							</div>

							<div className={scss.box_div}>
								<div className={scss.box_information_div}>
									<h3>Доставлено товаров на сумму</h3>

									<div className={scss.periods_div}>
										<div className={scss.present_period_div}>
											<h2>
												{dataDay?.currentPeriod ? dataDay?.currentPeriod : 0}{' '}
												<span>с</span>
											</h2>
											<h3>Текущий период</h3>
										</div>

										<div className={scss.last_period_div}>
											<h2>
												{dataDay?.previousPeriod ? dataDay?.previousPeriod : 0}{' '}
												с
											</h2>
											<h3>Предыдущий период</h3>
										</div>
									</div>
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
