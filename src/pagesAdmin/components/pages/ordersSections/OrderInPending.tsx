/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconTrash } from '@tabler/icons-react';
import scss from './OrderInProcessing.module.scss';
import { Link } from 'react-router-dom';
import {
	useDeleteAdminOrderMutation,
	useGetAdminOrderQuery,
	usePostAdminOrderMutation
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

const OrderInPending = () => {
	const { data, isLoading } = useGetAdminOrderQuery("");
	const [deleteOrder] = useDeleteAdminOrderMutation();

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalName, setModalName] = useState('');

	const [orderIdToDelete, setOrderIdToDelete] = useState('');

	const handleDeleteOrder = async () => {
		try {
			await deleteOrder({
				id: orderIdToDelete,
				fullName: '',
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
			console.error(error)
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

	const [postProduct] = usePostAdminOrderMutation()

	const handlePost = async () => {
		const newData = {
			searchWord: "",
			status: "",
			quantity: 0,
			startDate: "2024-06-10",
			endDate: "2024-06-10",
			page: 1,
			size: 1,
			orderResponses: [
				{
					id: 1,
					fullName: "Айзат Жумагулова",
					modalName: "Айзат Жумагуловой",
					article: "000000-455247",
					date: "14:33",
					count: 2,
					price: "90 000 с",
					typeOrder: "Самовывоз",
					status: "Отменены",
				}
			]
		}
	  try {
			const res = await postProduct(newData)
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	}

	const processingOrders =
		Array.isArray(data)
			? data.filter((order) => order.status === 'Доставлены')
			: [];

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
		if (!Array.isArray(orders)) return {};
		return orders.reduce(
			(acc: { [x: string]: number }, order: { status: string | number }) => {
				acc[order.status] = (acc[order.status] || 0) + 1;
				return acc;
			},
			{}
		);
	};
	const statusCounts = countOrdersByStatus("" || []);

	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			colorBgContainer: 'transparent'
		}
	};

	const idDate = data?.id ?? 1
	const fullNameDate = data?.fullName ?? "Айзат Жумагулова"
	const modalNameDate = data?.modalName ?? "Айзат Жумагуловой"
	const articleDate = data?.article ?? "000000-455247"
	const countDate = data?.count ?? 2
	const priceDate = data?.price ?? "90 000"
	const typeOrderDate = data?.typeOrder ?? "Самовывоз"
	const dateDate = data?.date ?? "13.06.2024"
	const statusDate = data?.status ?? "В ожидании"

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
								<Link to={''}>
									<h3 className={scss.active_link}>
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
							<button onClick={handlePost}>LET IT GO</button>

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
											<h1>IsLoading...</h1>
										) : (
											<tr className={scss.tr}>
													<Link to={`single-order/${idDate}`}>
														<div className={scss.tr_div}>
															<div className={scss.tr_row_1}>
																<td className={scss.id_col}>{idDate}</td>
																<td>{fullNameDate}</td>
															</div>
															<div className={scss.tr_row_2}>
																<td className={scss.number_col}>
																	<h2>{articleDate}</h2> <span>{dateDate}</span>
																</td>
																<td className={scss.quantity_col}>
																	{countDate} шт.
																</td>
																<td className={scss.total_price_col}>
																	{priceDate}
																</td>
																<td className={scss.order_type_col}>
																	{typeOrderDate}
																</td>
																<CustomSelect
																	orderId={idDate}
																	orderStatus={statusDate}
																	currentColor={statusToColor(statusDate)}
																/>
																<IconTrash
																	className={scss.trash}
																	onClick={(event) => {
																		handleOpenModal(idDate, event);
																		setModalName(modalNameDate);
																	}}
																/>
															</div>
														</div>
													</Link>
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

export default OrderInPending;
