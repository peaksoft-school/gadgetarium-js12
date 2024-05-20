/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconTrash } from '@tabler/icons-react';
import scss from './OrderInProcessing.module.scss';
import { Link } from 'react-router-dom';
import {
	useDeleteAdminOrderMutation,
	useGetAdminOrderQuery
} from '@/src/redux/api/adminOrders';
import { useState } from 'react';
import CustomSelect from '@/src/ui/customSelect/CustomSelect';
import Infographics from '@/src/ui/infographics/Infographics';
import {
	ConfigProvider,
	DatePicker,
	DatePickerProps,
	Input,
	theme
} from 'antd';
import { SearchProps } from 'antd/es/input';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
	console.log(info?.source, value);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};

const Order = () => {
	const { data: adminOrders, isLoading } = useGetAdminOrderQuery(0);
	const [deleteOrder] = useDeleteAdminOrderMutation();

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalName, setModalName] = useState('');
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
		adminOrders?.filter((order) => order.status === 'В обработке') || [];

	const handleOpenModal = (
		orderId: string,
		event: React.MouseEvent<SVGSVGElement, MouseEvent>
	) => {
		event.stopPropagation();
		event.preventDefault();
		setModalIsOpen(true);
		setOrderIdToDelete(orderId);
	};

	const countOrdersByStatus = (orders: any[]) => {
		return orders.reduce(
			(acc: { [x: string]: number }, order: { status: string | number }) => {
				acc[order.status] = (acc[order.status] || 0) + 1;
				return acc;
			},
			{}
		);
	};

	const statusCounts = countOrdersByStatus(adminOrders || []);

	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			colorBgContainer: 'transparent'
		}
	};

	return (
		<section className={scss.order}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content_left}>
						<div className={scss.content_left_1}>
							<div className={scss.search_div}>
								<ConfigProvider theme={antdThemeConfig}>
									<Input.Search
										className={scss.search}
										size="large"
										placeholder="Поиск по артикулу или ..."
										allowClear
										onSearch={onSearch}
									/>
								</ConfigProvider>
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
									<h3 className={scss.active_link}>
										В обработке
										{statusCounts['В обработке'] > 0
											? ` (${statusCounts['В обработке']})`
											: ''}
									</h3>
								</Link>
								<Link to={'/admin/orders/courier-on-the-way'}>
									<h3>
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
								<DatePicker
									className={scss.input_date}
									onChange={onChange}
									placeholder="От"
								/>
								<DatePicker
									className={scss.input_date}
									onChange={onChange}
									placeholder="До"
								/>
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
									<>
										{isLoading ? (
											<h1>IsLOading...</h1>
										) : (
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
																<td className={scss.quantity_col}>
																	{e.quantity}
																</td>
																<td className={scss.total_price_col}>
																	{e.totalPrice} c
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
												<CustomModal
													isModalOpen={modalIsOpen}
													setIsModalOpen={setModalIsOpen}
												>
													<div className={scss.modal}>
														<h2>
															Вы уверены, что хотите удалить товар
															<span> {modalName}</span>?
														</h2>

														<div className={scss.modal_buttons}>
															<CancelButtonCustom
																onClick={() => setModalIsOpen(false)}
															>
																Отменить
															</CancelButtonCustom>
															<CustomButtonAdd onClick={handleDeleteOrder}>
																Удалить
															</CustomButtonAdd>
														</div>
													</div>
												</CustomModal>
											</tr>
										)}
									</>
								</table>
							</div>
						</div>
					</div>
					<div>
						<Infographics />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;
