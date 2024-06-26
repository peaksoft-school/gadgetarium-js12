/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import scss from './ProductsMainSection.module.scss';
import Input from 'antd/es/input';
import {
	Checkbox,
	ConfigProvider,
	DatePicker,
	// DatePickerProps,
	Pagination,
	theme
} from 'antd';
import {
	IconChartCircles,
	IconEdit,
	IconPhotoPlus,
	IconTrash,
	IconX
} from '@tabler/icons-react';
import PhonesDropdown from '@/src/ui/catalogPhonesDropdown/PhonesDropdown';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import UploadBanner from '@/src/ui/customImageAdd/UploadBanner';
import Infographics from '@/src/ui/infographics/Infographics';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
	useDeleteGoodsGadgetMutation,
	useGetGoodGadgetQuery,
	usePostGoodsBannerMutation,
	usePostGoodsDiscountMutation
} from '@/src/redux/api/goods';
import type { UploadFile } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
import { usePostUploadMutation } from '@/src/redux/api/pdf';
import { IconDeleteForBanner } from '@/src/assets/icons';
import { useGetSlidersQuery } from '@/src/redux/api/slider';

const ProductsMainSection = () => {
	const [postDiscount] = usePostGoodsDiscountMutation();

	const buttonStyleRef = React.useRef<boolean>(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [modalForBanner, setModalForBanner] = useState<boolean>(false);
	const { data: banner = [] } = useGetSlidersQuery();
	const [filtered, setFiltered] = useState<boolean>(false);
	const bannerInputFileRef = useRef<HTMLInputElement>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [bannerFormResponse, setBannerFormResponse] = useState<string[]>([]);
	const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
	const [isModalOpenBanner, setIsModalOpenBanner] = useState(false);
	const [gadgetId, setGadgetId] = useState<number | null>(null);
	const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
	const [gadgetIds, setGadgetIds] = useState<number[]>([]);
	const [postUploadForBanner] = usePostUploadMutation();
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
	const [searchInput, setSearchInput] = useState<string>('');
	const initialFileList: UploadFile[] = [
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
		}
	];

	const [fileList, setFileList] = useState<UploadFile[]>(initialFileList);
	const [discountSize, setDiscountSize] = useState<number>();
	const [discountStartDay, setDiscountStartDay] = useState('');
	const [discountEndDay, setDiscountEndDay] = useState('');
	const changeDateFunk = (date: moment.Moment | null) => {
		if (date) {
			const formattedDate = date.format('YYYY-MM-DD');
			searchParams.set('startDate', formattedDate);
			setSearchParams(searchParams); // Update searchParams after setting
		} else return;
	};

	const changeDateFunk2 = (date: moment.Moment | null) => {
		if (date) {
			const formattedDate = date.format('YYYY-MM-DD');
			searchParams.set('endDate', formattedDate);
			setSearchParams(searchParams); // Update searchParams after setting
		} else return;
	};

	const navigate = useNavigate();

	const addProduct = () => {
		navigate('/admin/product-adding/part-1');
	};

	const handleClickBannerInputRef = () => {
		if (bannerInputFileRef.current) {
			bannerInputFileRef.current.click();
		}
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

	const showModal = () => {
		setIsModalOpen(true);
	};

	const showModalDelete = () => {
		setIsModalOpenDelete(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleCancelBanner = () => {
		setIsModalOpenBanner(false);
	};

	const showModalBanner = () => {
		setIsModalOpenBanner(true);
	};

	const handleFiltered = () => {
		setFiltered(!filtered);
	};

	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			colorBgContainer: 'transparent'
		}
	};

	const { data } = useGetGoodGadgetQuery({
		page: `page=${searchParams.get('page') || ''}`,
		size: `size=${searchParams.get('size') || ''}`,
		keyword: `keyword=${searchParams.get('keyword') || ''}`,
		discount: `discount=${searchParams.get('discount') || ''}`,
		endDate: `endDate=${searchParams.get('endDate') || ''}`,
		getType: `getType=${searchParams.get('getType') || ''}`,
		sort: `sort=${searchParams.get('sort') || ''}`,
		startDate: `startDate=${searchParams.get('startDate') || ''}`
	});
	const [deleteGadget] = useDeleteGoodsGadgetMutation();
	const [postBanner] = usePostGoodsBannerMutation();

	const handleProductsCategoryButtons = (categoryText: string) => {
		searchParams.set('getType', categoryText);
		setSearchParams(searchParams);
	};
	const handleDeleteGadget = async () => {
		if (gadgetId !== null) {
			await deleteGadget(gadgetId);
			setGadgetId(null);
			setIsModalOpenDelete(false);
		}
	};

	const handlePostBanner = async () => {
		const bannerData = {
			images: fileList.map((file) => file.url)
		};
		const res = await postBanner(bannerData);
		console.log(res);
	};


	const handlePostDiscount = async () => {
		const discountData = {
			gadgetId: [...gadgetIds],
			discountSize: Number(discountSize),
			startDay: discountStartDay,
			endDay: discountEndDay
		};
		const {discountSize: DiscountSize, endDay, gadgetId, startDay} = discountData;
		try {
			await postDiscount({
				discountSize: DiscountSize!,
				endDay,
				gadgetId,
				startDay
			});
			setIsModalOpen(false);
			setGadgetIds([]);
			setDiscountSize(0);
			setDiscountEndDay('');
			setDiscountStartDay('');
		} catch (error) {
			console.error(error);
		}
	};

	const handleHover = (id: number | null) => {
		setHoveredItemId(id);
	};

	const handleSelect = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
		e.stopPropagation();
		e.preventDefault();
		setSelectedItemId(id);
		setGadgetId(id);
	};

	const handleCheckboxClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
	};

	React.useEffect(() => {
		if (searchParams.get('getType')) {
			buttonStyleRef.current = true;
		} else {
			buttonStyleRef.current = false;
		}
	}, [searchParams]);

	const changeBannerFunk = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files;
		if (file) {
			const formData = new FormData();
			for (let i = 0; i < file.length; i++) {
				formData.append('files', file[i]);
			}
			const response = await postUploadForBanner(formData).unwrap();
			setBannerFormResponse(response.data);
			console.log(response.data, 'text');
			await postBanner({
				images: response.data.slice(0, 6)
			});
		}
	};

	const changeCheckbox = (id: number) => {
		if (!gadgetIds.includes(id)) {
			setGadgetIds((prevValue) => [...prevValue, id]);
		} else {
			const filtred = gadgetIds.filter((c) => c !== id);
			setGadgetIds(filtred);
		}
	};

	return (
		<div className={scss.ProductsMainSection}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left_content}>
						<div className={scss.search_input_buttons}>
							<div>
								<ConfigProvider theme={antdThemeConfig}>
									<Input.Search
										className={scss.search}
										size="large"
										placeholder="Поиск по артикулу или ..."
										allowClear
										// onSearch={onSearch}
										onChange={changeSearchInputValueFunk}
										value={
											searchParams.get('keyword')
												? searchParams.get('keyword')
												: ''
										}
									/>
								</ConfigProvider>
							</div>
							<div className={scss.add_product}>
								<button onClick={() => setModalForBanner(true)}>
									Все banner
								</button>
								<button onClick={addProduct}>Добавить товар</button>
								<button onClick={showModal}>Создать скидку</button>
							</div>
						</div>
						<div className={scss.product_buttons}>
							<div className={scss.buttons}>
								<button
									onClick={() => handleProductsCategoryButtons('ALL_PRODUCTS')}
									className={
										searchParams.getAll('getType')?.includes('ALL_PRODUCTS') ||
										buttonStyleRef.current === false
											? `${scss.all_product} ${scss.active}`
											: `${scss.all_product}`
									}
								>
									Все товары
								</button>
								<button
									onClick={() => handleProductsCategoryButtons('ON_SALE')}
									className={
										searchParams.getAll('getType')?.includes('ON_SALE')
											? `${scss.all_product} ${scss.active}`
											: `${scss.all_product}`
									}
								>
									В продаже
								</button>
								<button
									onClick={() => handleProductsCategoryButtons('IN_FAVORITES')}
									className={
										searchParams.getAll('getType')?.includes('IN_FAVORITES')
											? `${scss.all_product} ${scss.active}`
											: `${scss.all_product}`
									}
								>
									В избранном
								</button>
								<button
									onClick={() => handleProductsCategoryButtons('IN_BASKET')}
									className={
										searchParams.getAll('getType')?.includes('IN_BASKET')
											? `${scss.all_product} ${scss.active}`
											: `${scss.all_product}`
									}
								>
									В корзине
								</button>
							</div>
							<button className={scss.banner} onClick={showModalBanner}>
								<IconChartCircles />
								Загрузить баннер
							</button>
						</div>
						<hr />
						<div className={scss.inputs_date}>
							<DatePicker
								className={scss.input_date}
								onChange={(date) => changeDateFunk(date)}
								value={
									searchParams.get('startDate')
										? moment(searchParams.get('startDate'))
										: undefined
								}
								placeholder="От"
							/>
							<DatePicker
								className={scss.input_date}
								onChange={(date) => changeDateFunk2(date)}
								placeholder="До"
								value={
									searchParams.get('endDate')
										? moment(searchParams.get('endDate'))
										: undefined
								}
							/>
						</div>
						<div className={scss.products_card}>
							<div className={scss.product_title}>
								<p>Найдено {data?.paginationGadgets.length} Товаров </p>
								<PhonesDropdown />
							</div>
							<table className={scss.cards}>
								<thead>
									<tr className={scss.card_title}>
										<div className={scss.row_1}>
											<th>ID</th>
											<th>Фото</th>
										</div>
										<div className={scss.rows}>
											<div className={scss.row_2}>
												<th>Артикул</th>
												<th>Наименование товара</th>
												<th>Дата создания</th>
												<th>Кол-во</th>
												<th>Цена товара</th>
											</div>
											<div className={scss.row_3}>
												<th>Текущая цена</th>
												<th>Действия</th>
											</div>
										</div>
									</tr>
								</thead>
								<tbody>
									{data?.paginationGadgets?.map((item, index) => (
										<tr
											key={index}
											className={scss.tr}
											onMouseEnter={() => handleHover(item.subGadgetId)}
											onMouseLeave={() => handleHover(null)}
										>
											<Link
												to={`/admin/goodsPage/product-page/${item?.gadgetId}`}
												className={scss.link_button}
											>
												<div className={scss.card}>
													<div className={scss.three}>
														<td>
															{hoveredItemId === item.subGadgetId ||
															gadgetIds.includes(item.gadgetId) ? (
																<ConfigProvider
																	theme={{
																		components: {
																			Checkbox: {
																				colorPrimary: '#c11bab',
																				colorBgContainer: 'white',
																				algorithm: true
																			}
																		}
																	}}
																>
																	<Checkbox
																		checked={
																			gadgetIds.includes(item.gadgetId)
																				? true
																				: false
																		}
																		onChange={() =>
																			changeCheckbox(item.gadgetId)
																		}
																		onClick={(e) => {
																			e.preventDefault();
																			e.stopPropagation();
																		}}
																	/>
																</ConfigProvider>
															) : (
																<p className={scss.id_for_product}>{item.subGadgetId}</p>
															)}
														</td>
														<img src={item.images} alt="" />
													</div>
													<td>{item?.article}</td>
													<div className={scss.quantity_name}>
														<td>Кол-во товара {item?.quantity}шт.</td>
														<td className={scss.name}>{item?.nameOfGadget}</td>
													</div>
													<div className={scss.date_time}>
														<td>{item?.createdAt}</td>
														{/* <td className={scss.time}>{productName.time}</td> */}
													</div>
													<td>{item?.quantity}</td>
													<div className={scss.price_discount}>
														<td className={scss.price_td}>{item?.price}с</td>
														<td className={scss.discount}>{item?.percent}%</td>
													</div>
													<td className={scss.price_td}>
														{item?.currentPrice}с
													</td>
													<div className={scss.icons}>
														<IconEdit
															className={scss.trash}
															onClick={(e) => {
																navigate(`/admin/edit-page/${item.gadgetId}`);
																e.preventDefault();
																e.stopPropagation();
															}}
														/>
														<IconTrash
															onClick={(e) => {
																showModalDelete();
																e.stopPropagation();
																e.preventDefault();
																setGadgetId(item?.subGadgetId);
															}}
														/>
													</div>
												</div>
											</Link>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div>
							<Pagination defaultCurrent={10} total={40} />
						</div>
					</div>
					<div className={scss.right_content}>
						{' '}
						<Infographics />{' '}
					</div>
				</div>
				<div className={scss.modal_create_newsletter}>
					<CustomModal
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen}
					>
						<div className={scss.create_newsletter}>
							<h1>Создать скидку</h1>
							<div className={scss.size_sale}>
								<label className={scss.label} htmlFor="name">
									Размер скидки *
								</label>
								<input
									className={scss.discount}
									value={discountSize}
									onChange={(e) => setDiscountSize(e.target.value)}
									type="number"
									name="name"
									placeholder="0%  "
								/>
							</div>
							<div className={scss.dates}>
								<div>
									<label className={scss.label} htmlFor="name">
										Дата начала скидки *{' '}
									</label>
									<DatePicker
										name="name"
										className={scss.date}
										value={discountStartDay ? moment(discountStartDay) : null}
										onChange={(date, dateString) =>
											setDiscountStartDay(dateString)
										}
										placeholder="От"
									/>
								</div>
								<div>
									<label className={scss.label} htmlFor="name">
										Дата окончания скидки *
									</label>
									<DatePicker
										name="name"
										className={scss.date}
										value={discountEndDay ? moment(discountEndDay) : null}
										onChange={(date, dateString) =>
											setDiscountEndDay(dateString)
										}
										placeholder="Выберите дату"
									/>
								</div>
							</div>
							<div className={scss.buttons}>
								<CancelButtonCustom onClick={handleCancel}>
									ОТМЕНИТЬ
								</CancelButtonCustom>
								<CustomButtonAdd onClick={handlePostDiscount}>
									ОТПРАВИТЬ
								</CustomButtonAdd>
							</div>
						</div>
					</CustomModal>
					<CustomModal
						isModalOpen={isModalOpenBanner}
						setIsModalOpen={setIsModalOpenBanner}
					>
						<div className={scss.add_banner}>
							<h1>Загрузить баннер</h1>
							{/* <UploadBanner fileList={fileList} setFileList={setFileList} /> */}
							<div
								className={
									bannerFormResponse.length > 0
										? `${scss.noo_active} ${scss.container_add_banner_div}`
										: `${scss.noo_active}`
								}
							>
								<input
									type="file"
									ref={bannerInputFileRef}
									style={{ display: 'none' }}
									onChange={changeBannerFunk}
									multiple
								/>
								<div
									className={
										bannerFormResponse.length >= 6
											? `${scss.icon_and_text_div} ${scss.display_nome_icon_and_text_add_file}`
											: `${scss.icon_and_text_div}`
									}
									onClick={handleClickBannerInputRef}
								>
									<IconPhotoPlus
										color="rgb(145, 150, 158)"
										width={'36px'}
										height={'33px'}
									/>
									<p
										className={
											bannerFormResponse.length >= 1
												? `${scss.noo_active_p} ${scss.active_p}`
												: `${scss.noo_active_p}`
										}
									>
										Нажмите для добавления фотографии
									</p>
								</div>
								{bannerFormResponse.length > 0 &&
									bannerFormResponse.map((el, index) => (
										<div key={index} className={scss.banner_contents}>
											<img src={el} alt="banner photo" />
											<div style={{ position: 'relative', right: '25px' }}>
												<IconDeleteForBanner />
											</div>
										</div>
									))}
							</div>
							<div className={scss.buttons_banner}>
								<CancelButtonCustom onClick={handleCancelBanner}>
									ОТМЕНИТЬ
								</CancelButtonCustom>
								<CustomButtonAdd onClick={handlePostBanner}>
									ОТПРАВИТЬ
								</CustomButtonAdd>
							</div>
						</div>
					</CustomModal>
				</div>
			</div>
			<CustomModal
				isModalOpen={isModalOpenDelete}
				setIsModalOpen={setIsModalOpenDelete}
			>
				<div className={scss.modal}>
					<h2>Вы уверены, что хотите удалить товар?</h2>

					<div className={scss.modal_buttons}>
						<CancelButtonCustom onClick={() => setIsModalOpenDelete(false)}>
							Отменить
						</CancelButtonCustom>
						<CustomButtonAdd onClick={handleDeleteGadget}>
							Удалить
						</CustomButtonAdd>
					</div>
				</div>
			</CustomModal>
			<CustomModal
				isModalOpen={modalForBanner}
				setIsModalOpen={setModalForBanner}
			>
				<div className={scss.modal}>
					<h2>Все banner</h2>
					<div className={scss.container_banners}>
						{banner.map((el) => (
							<div key={el.id} className={scss.image_and_icon_delete_div}>
								<img src={el.images} alt="logo" />
								<IconX style={{ cursor: 'pointer' }} />
							</div>
						))}
					</div>
				</div>
			</CustomModal>
		</div>
	);
};

export default ProductsMainSection;
