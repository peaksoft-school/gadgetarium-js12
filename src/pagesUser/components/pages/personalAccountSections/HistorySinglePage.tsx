import { Link, useNavigate, useParams } from 'react-router-dom';
import scss from './HistorySinglePage.module.scss';
import { useEffect, useState } from 'react';
import { useGetPersonalByIdQuery } from '@/src/redux/api/personalAccount/orderHistory';
import { Rate } from 'antd';

const HistorySinglePage = () => {
	const { id } = useParams<{ id: string }>();
	const { data: orderPersonalId, isLoading } = useGetPersonalByIdQuery(id);
	const navigate = useNavigate();
	const [status1, setStatus1] = useState(true);
	const [status2, setStatus2] = useState(true);
	const [status3, setStatus3] = useState(true);
	const [status4, setStatus4] = useState(true);

	useEffect(() => {
		if (orderPersonalId) {
			setStatus1(Boolean(orderPersonalId.status?.trim()));
			setStatus2(Boolean(orderPersonalId.status?.trim()));
			setStatus3(Boolean(orderPersonalId.status?.trim()));
			setStatus4(Boolean(orderPersonalId.status?.trim()));
		}
	}, [orderPersonalId]);

	return (
		<section className={scss.history}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.page_content_1}>
						<p className={scss.navigation_p}>
							<Link to="/personal-account/history-of-orders">
								<p>Личный кабинет »</p>
							</Link>
							<h3
								onClick={() => navigate('/personal-account/history-of-orders')}
							>
								История заказов »
							</h3>
							<h3>{orderPersonalId?.number}</h3>
						</p>
						<div className={scss.div_heading}>
							<h3>История заказов</h3>
							<div></div>
						</div>
					</div>
					<div className={scss.page_content_2}>
						{isLoading ? (
							<div>Loading...</div>
						) : (
							orderPersonalId && (
								<div className={scss.content_2}>
									<h1>{orderPersonalId.number}</h1>

									<div className={scss.order_products}>
										{orderPersonalId.privateGadgetResponse.map((e) => (
											<div className={scss.order_product} key={e.id}>
												<img src={e.gadgetImage} alt="Product" />
												<h3>{e.nameOfGadget}</h3>
												<div className={scss.card_rating}>
													<p>
														Рейтинг <Rate allowHalf defaultValue={e.rating} />(
														{e.countRating})
													</p>
												</div>
												<h2>{e.currentPrice} c</h2>
											</div>
										))}
									</div>
									<div className={scss.columns}>
										<div className={scss.column_1}>
											<div className={scss.column_information}>
												<div className={scss.status}>
													<p>Статус</p>
													<div className={scss.statuses}>
														<button className={scss.wait_status}>
															О ожидании
														</button>
														<button>
															<span
																className={
																	status1
																		? scss.delivered_status
																		: scss.no_status
																}
															>
																{orderPersonalId.status}
															</span>
															<span
																className={
																	status2
																		? scss.cancelled_status
																		: scss.no_status
																}
															>
																{orderPersonalId.status}
															</span>
															<span
																className={
																	status3 ? scss.way_status : scss.no_status
																}
															>
																{orderPersonalId.status}
															</span>
															<span
																className={
																	status4
																		? scss.processing_status
																		: scss.no_status
																}
															>
																{orderPersonalId.status}
															</span>
														</button>
													</div>
												</div>

												<div className={scss.client}>
													<p>Клиент</p>
													<p className={scss.order_p}>
														{orderPersonalId.clientFullName}
													</p>
												</div>

												<div className={scss.first_name}>
													<p>Имя</p>
													<p className={scss.order_p}>
														{orderPersonalId.userName}
													</p>
												</div>

												<div className={scss.address}>
													<p>Адрес</p>
													<p className={scss.order_p}>
														{orderPersonalId.address}
													</p>
												</div>

												<div className={scss.phone}>
													<p>Телефон</p>
													<p className={scss.order_p}>
														{orderPersonalId.phoneNumber}
													</p>
												</div>

												<div className={scss.email}>
													<p>Email</p>
													<p className={scss.order_p}>
														{orderPersonalId.email}
													</p>
												</div>
											</div>

											<div className={scss.total_information}>
												<div className={scss.total}>
													<p className={scss.total_p}>
														Скидка: <span>{orderPersonalId.discount}</span>
													</p>
													<p className={scss.total_p}>
														Итого: <span>{orderPersonalId.currentPrice}</span>
													</p>
												</div>
											</div>
										</div>
										<div className={scss.column_2}>
											<div className={scss.date}>
												<p>Дата</p>
												<p className={scss.order_p}>
													{orderPersonalId.createdAt}
												</p>
											</div>

											<div className={scss.payment}>
												<p>Способ оплаты</p>
												<p className={scss.order_p}>
													{orderPersonalId.payment}
												</p>
											</div>

											<div className={scss.last_name}>
												<p>Фамилия</p>
												<p className={scss.order_p}>
													{orderPersonalId.lastName}
												</p>
											</div>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HistorySinglePage;
