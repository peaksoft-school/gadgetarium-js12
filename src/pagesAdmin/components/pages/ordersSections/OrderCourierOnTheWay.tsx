import { IconSearch, IconTrash } from '@tabler/icons-react';
import scss from './OrderInProcessing.module.scss';
import { Link } from 'react-router-dom';
import {
	useDeleteAdminOrderMutation,
	useGetAdminOrderQuery
} from '@/src/redux/api/adminOrders';
import { useState } from 'react';
import CustomSelect from '@/src/ui/customSelect/CustomSelect';
import ModalWindow from '@/src/ui/modal/Modal';

const OrderCourierOnTheWay = () => {
	const { data: adminOrders } = useGetAdminOrderQuery(0);
	const [deleteOrder] = useDeleteAdminOrderMutation();

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalName, setModalName] = useState('');

	const [day, setDay] = useState(true);
	const [month, setMonth] = useState(false);
	const [year, setYear] = useState(false);

	const [orderIdToDelete, setOrderIdToDelete] = useState('');

	const handleDeleteOrder = async () => {
		try {
			await deleteOrder({
				_id: orderIdToDelete,
				fullname: '',
				modalName: '',
				number: '',
				date: '',
				quantity: '',
				totalPrice: '',
				orderType: '',
				status: '',
				product: '',
				discount: '',
				discountPrice: '',
				fullOldPrice: '',
				state: '',
				phone: '',
				address: ''
			});
			setModalIsOpen(false);
		} catch (error) {
			console.error('Failed to delete order: ', error);
		}
	};

	const statusToColor = (status: string) => {
		switch (status) {
			case 'В ожидании':
				return '#2C68F5';
			case 'В обработке':
				return '#F99808';
			case 'Курьер в пути':
				return '#08A592';
			case 'Доставлены':
				return '#2FC509';
			case 'Отменены':
				return '#F10000';
			default:
				return '#000000';
		}
	};

	const processingOrders =
		adminOrders?.filter((order) => order.status === 'Курьер в пути') || [];

	const handleOpenModal = (orderId: string, event: any) => {
		event.stopPropagation();
		event.preventDefault();
		setModalIsOpen(true);
		setOrderIdToDelete(orderId);
	};

	const countOrdersByStatus = (orders: any[]) => {
		return orders.reduce(
			(acc: { [x: string]: any }, order: { status: string | number }) => {
				acc[order.status] = (acc[order.status] || 0) + 1;
				return acc;
			},
			{}
		);
	};
	const statusCounts = countOrdersByStatus(adminOrders || []);

	return (
		<section className={scss.order}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content_left}>
						<div className={scss.content_left_1}>
							<div className={scss.search_div}>
								<input type="text" placeholder="Поиск по артикулу или ..." />
								<IconSearch />
							</div>
							<div className={scss.navigation_div}>
								<Link to={'/admin/orders/in-pending'}>
									<h3>
										В ожидании
										{statusCounts['В ожидании'] > 0
											? ` (${statusCounts['В ожидании']})`
											: ''}
									</h3>
								</Link>
								<Link to={'/admin/orders/in-processing'}>
									<h3>
										В обработке
										{statusCounts['В обработке'] > 0
											? ` (${statusCounts['В обработке']})`
											: ''}
									</h3>
								</Link>
								<Link to={''}>
									<h3 className={scss.active_link}>
										Курьер в пути
										{statusCounts['Курьер в пути'] > 0
											? ` (${statusCounts['Курьер в пути']})`
											: ''}
									</h3>
								</Link>
								<Link to={'/admin/orders/delivered'}>
									<h3>
										Доставлены
										{statusCounts['Доставлены'] > 0
											? ` (${statusCounts['Доставлены']})`
											: ''}
									</h3>
								</Link>
								<Link to={'/admin/orders/canceled'}>
									<h3>
										Отменены
										{statusCounts['Отменены'] > 0
											? ` (${statusCounts['Отменены']})`
											: ''}
									</h3>
								</Link>
							</div>

							<div className={scss.border_div}></div>

							<div className={scss.inputs_div}>
								<input type="date" />

								<input type="date" />
							</div>
						</div>

						<div className={scss.content_left_2}>
							<h2>Найдено 250 заказов</h2>

							<div className={scss.table_div}>
								<table>
									<tr>
										<div className={scss.row_1}>
											<th>ID</th>
											<th>ФИО</th>
										</div>
										<div className={scss.rows}>
											<div className={scss.row_2}>
												<th>Номер/дата</th>
												<th>Кол-во</th>
												<th>Общая сумма</th>
												<th>Оформление заказа</th>
											</div>

											<div className={scss.row_3}>
												<th>Статус</th>
												<th>Действия</th>
											</div>
										</div>
									</tr>
									<tr className={scss.tr}>
										{processingOrders?.map((e) => (
											<Link to={`single-order/${e._id}`}>
												<div className={scss.tr_div}>
													<div className={scss.tr_row_1}>
														<td className={scss.id_col}>{e._id}</td>
														<td>{e.fullname}</td>
													</div>
													<div className={scss.tr_row_2}>
														<td className={scss.number_col}>
															<h2>{e.number}</h2> <span>{e.date}</span>
														</td>
														<td className={scss.quantity_col}>{e.quantity}</td>
														<td className={scss.total_price_col}>
															{e.totalPrice}
														</td>
														<td className={scss.order_type_col}>
															{e.orderType}
														</td>
														<CustomSelect
															orderId={e._id}
															orderStatus={e.status}
															currentColor={statusToColor(e.status)}
														/>
														<IconTrash
															onClick={(event) => {
																handleOpenModal(e._id, event);
																setModalName(e.modalName);
															}}
														/>
													</div>
												</div>
											</Link>
										))}
										<ModalWindow open={modalIsOpen}>
											<div className={scss.modal}>
												<h2>
													Вы уверены, что хотите удалить товар
													<span> {modalName}</span>?
												</h2>

												<div className={scss.modal_buttons}>
													<button
														onClick={() => setModalIsOpen(false)}
														className={scss.cancel_modal_button}
													>
														Отменить
													</button>
													<button
														onClick={handleDeleteOrder}
														className={scss.delete_modal_button}
													>
														Удалить
													</button>
												</div>
											</div>
										</ModalWindow>
									</tr>
								</table>
							</div>
						</div>
					</div>

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
			</div>
		</section>
	);
};

export default OrderCourierOnTheWay;
