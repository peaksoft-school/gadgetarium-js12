/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconTrash } from '@tabler/icons-react';
import scss from './OrderInProcessing.module.scss';
import { Link, useSearchParams } from 'react-router-dom';
import {
	useGetAdminOrderQuery,
	useDeleteAdminOrderMutation
} from '@/src/redux/api/adminOrders';
import { useState } from 'react';
import CustomSelect from '@/src/ui/customSelect/CustomSelect';
import Infographics from '@/src/ui/infographics/Infographics';
import {
	ConfigProvider,
	DatePicker,
	// DatePickerProps,
	Input,
	Pagination,
	Skeleton,
	Tooltip,
	theme
} from 'antd';
// import { SearchProps } from 'antd/es/input';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import moment from 'moment';

const OrderDelivered = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const { data, isLoading } = useGetAdminOrderQuery({
		page: searchParams.get('page') || '',
		size: searchParams.get('size') || '',
		keyword: searchParams.get('keyword') || '',
		status: 'Доставлено',
		startDate: searchParams.get('startDate') || '',
		endDate: searchParams.get('endDate') || ''
	});

	const [deleteOrder] = useDeleteAdminOrderMutation();
	console.log(data);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalName, setModalName] = useState('');
	const [orderId, setOrderId] = useState<string>('');

	const handleDeleteOrder = async () => {
		try {
			await deleteOrder(orderId);
			setModalIsOpen(false);
		} catch (error) {
			console.error('Failed to delete order: ', error);
		}
	};

	const statusToColor = (status: string) => {
		switch (status) {
			case ' Ожидание':
				return '#2C68F5';
			case 'Готово':
				return '#F99808';
			case 'Курьер в пути':
				return '#08A592';
			case 'Доставлено':
				return '#2FC509';
			case 'Отменено':
				return '#F10000';
			default:
				return '#000000';
		}
	};
	const changeProductsPagination = (page: any) => {
		searchParams.set('page', page);
		setSearchParams(searchParams);
	};
	const handleOpenModal = (
		orderId: string,
		event: React.MouseEvent<SVGSVGElement, MouseEvent>
	) => {
		event.stopPropagation();
		event.preventDefault();
		setModalIsOpen(true);
		setOrderId(orderId);
	};

	const changeDateFunk = (date: moment.Moment | null) => {
		if (date) {
			const formattedDate = date.format('YYYY-MM-DD');
			searchParams.set('startDate', formattedDate);
			setSearchParams(searchParams);
		} else return;
	};

	const changeDateFunk2 = (date: moment.Moment | null) => {
		if (date) {
			const formattedDate = date.format('YYYY-MM-DD');
			searchParams.set('endDate', formattedDate);
			setSearchParams(searchParams);
		} else return;
	};

	const changeSearchInputValueFunk = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		searchParams.set('keyword', event.target.value);
		setSearchParams(searchParams);
		if (event.target.value === '') {
			searchParams.delete('keyword');
			setSearchParams(searchParams);
		}
	};

	const filteredOrders = data?.orderResponses || [];

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

	const statusCounts = {
		...countOrdersByStatus(data?.orderResponses || []),
		Ожидание: data?.waiting || 0,
		Готово: data?.progress || 0,
		'Курьер в пути': data?.onTheWay || 0,
		Доставлено: data?.delivered || 0,
		Отменено: data?.canceled || 0
	};

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
										onChange={changeSearchInputValueFunk}
										value={searchParams.get('keyword') || ''}
									/>
								</ConfigProvider>
							</div>
							<div className={scss.navigation_div}>
								<Link to={'/admin/orders/in-pending'}>
									<h3>
										Ожидание
										{statusCounts['Ожидание'] > 0
											? ` (${statusCounts['Ожидание']})`
											: ''}
									</h3>
								</Link>
								<Link to={'/admin/orders/in-processing'}>
									<h3>
										Готово
										{statusCounts['Готово'] > 0
											? ` (${statusCounts['Готово']})`
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
									<h3 className={scss.active_link}>
										Доставлено
										{statusCounts['Доставлено'] > 0
											? ` (${statusCounts['Доставлено']})`
											: ''}
									</h3>
								</Link>
								<Link to={'/admin/orders/canceled'}>
									<h3>
										Отменено
										{statusCounts['Отменено'] > 0
											? ` (${statusCounts['Отменено']})`
											: ''}
									</h3>
								</Link>
							</div>

							<div className={scss.border_div}></div>

							<div className={scss.inputs_div}>
								<DatePicker
									className={scss.input_date}
									onChange={changeDateFunk}
									placeholder="От"
									value={
										searchParams.get('startDate')
											? moment(searchParams.get('startDate'))
											: undefined
									}
								/>
								<DatePicker
									className={scss.input_date}
									onChange={changeDateFunk2}
									placeholder="До"
									value={
										searchParams.get('endDate')
											? moment(searchParams.get('endDate'))
											: undefined
									}
								/>
							</div>
						</div>

						<div className={scss.content_left_2}>
							<h2>Найдено {filteredOrders?.length} заказов</h2>

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
											<>
												<Skeleton.Button
													active
													block
													style={{ width: 1100, height: 60 }}
												/>
												<Skeleton.Button
													active
													block
													style={{ width: 1100, height: 60 }}
												/>
												<Skeleton.Button
													active
													block
													style={{ width: 1100, height: 60 }}
												/>
												<Skeleton.Button
													active
													block
													style={{ width: 1100, height: 60 }}
												/>
												<Skeleton.Button
													active
													block
													style={{ width: 1100, height: 60 }}
												/>
												<Skeleton.Button
													active
													block
													style={{ width: 1100, height: 60 }}
												/>
											</>
										) : (
											<tr className={scss.tr}>
												{filteredOrders?.map((e: any) => (
													<>
														<Link to={`single-order/${e.id}`}>
															<div className={scss.tr_div}>
																<div className={scss.tr_row_1}>
																	<td className={scss.id_col}>{e.id}</td>
																	<td>
																		{' '}
																		{e.fullName.length > 15 ? (
																			<>
																				{e.fullName.slice(0, 14)}
																				<Tooltip
																					title={e.fullName}
																					color="#c11bab"
																				>
																					<span style={{ cursor: 'pointer' }}>
																						...
																					</span>
																				</Tooltip>
																			</>
																		) : (
																			e.fullName
																		)}
																	</td>
																</div>
																<div className={scss.tr_row_2}>
																	<td className={scss.number_col}>
																		<h2>{e.article}</h2> <span>{e.date}</span>
																	</td>
																	<td className={scss.quantity_col}>
																		{e.count}
																	</td>
																	<td className={scss.total_price_col}>
																		{e.price}
																	</td>
																	<td className={scss.order_type_col}>
																		{e.typeOrder === true
																			? 'Самовывоз'
																			: 'Доставка'}{' '}
																	</td>
																	<CustomSelect
																		orderId={e.id}
																		orderStatus={e.status}
																		currentColor={statusToColor(e.status)}
																	/>
																	<IconTrash
																		onClick={(event) => {
																			handleOpenModal(e.id, event);
																			setModalName(e.modalName);
																		}}
																	/>
																</div>
															</div>
														</Link>
													</>
												))}
											</tr>
										)}
										<div className={scss.pagination}>
											{
												// data?.paginationGadgets!.length / data?.page! > 1 && (
												<Pagination
													total={data?.delivered}
													pageSize={data?.size}
													current={data?.page}
													showQuickJumper={true}
													onChange={changeProductsPagination}
												/>
												// )
											}
										</div>
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
			<CustomModal isModalOpen={modalIsOpen} setIsModalOpen={setModalIsOpen}>
				<div className={scss.modal}>
					<h2>
						Вы уверены, что хотите удалить товар
						<span> {modalName}</span>?
					</h2>

					<div className={scss.modal_buttons}>
						<CancelButtonCustom onClick={() => setModalIsOpen(false)}>
							Отменить
						</CancelButtonCustom>
						<CustomButtonAdd onClick={handleDeleteOrder}>
							Удалить
						</CustomButtonAdd>
					</div>
				</div>
			</CustomModal>
		</section>
	);
};

export default OrderDelivered;
