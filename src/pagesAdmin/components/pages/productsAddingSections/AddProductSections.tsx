/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import scss from './AddProductSections.module.scss';
import { Button, ConfigProvider, DatePicker, Input, Modal, Select } from 'antd';
import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import React, { useState } from 'react';
import {
	useAddBrandApiMutation,
	useGetBrandApiQuery
} from '@/src/redux/api/brandApi';
import { IconCalendarMinus, IconPhotoPlus } from '@tabler/icons-react';

interface PagesArrayTypes {
	id: number;
	link: string;
	title: string;
	border?: string;
}
const pagesArray: PagesArrayTypes[] = [
	{
		id: 1,
		link: '/admin/product-adding/part-1',
		title: 'Добавление товара',
		border: ' '
	},
	{
		id: 2,
		link: '/admin/product-adding/part-2',
		title: 'Установка цены и количества товара',
		border: ' '
	},
	{
		id: 3,
		link: '',
		title: 'Описание и обзор'
	}
];
const handleChange = (value: string) => {
	console.log(`selected ${value}`);
};
interface ArrayTypes {
	mainColour: string;
	memory: string;
	ram: string;
	countSim: number;
	images: string[];
	materialBracelet?: string;
	materialBody?: string;
	sizeWatch?: string;
	dumas?: string;
	genderWatch?: string;
	waterproof?: string;
	wireless?: string;
	shapeBody?: string;
}
export const AddProductSections = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const inputForFileRef = React.useRef<HTMLInputElement>(null);
	const { data: brandArray = [] } = useGetBrandApiQuery();
	const [warranty, setWarranty] = useState<number>(0);
	const [productName, setProductName] = useState<string>('');
	const [dateOfIssue, setDateOfIssue] = useState<number>();
	const [categoryId, setCategoryId] = useState<string>('');
	const [brandInputValue, setBrandInputValue] = useState<string>('');
	const [idForCategory, setIdForCategory] = useState<number>(0);
	const [addBrandApi] = useAddBrandApiMutation();
	const [subCategoryValue, setSubCategoryValue] = useState<string>('');
	const [modalForBrand, setModalForBrand] = useState<boolean>(false);
	const [fileValue, setFileValue] = useState<FormData>();
	const { data } = useGetCatalogProductsQuery();
	const [brandActive, setBrandActive] = useState<boolean>(false);
	const { data: subCategoryArray = [] } = useSubCategoriesQuery(
		Number(categoryId)
	);

	const handleClickRef = () => {
		if (inputForFileRef.current) {
			return inputForFileRef.current.click();
		}
	};

	const changeWarrantyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (categoryId) {
			setWarranty(Number(e.target.value));
		}
	};

	const changeBrandInputValue = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.value) {
			setBrandInputValue(event.target.value);
		}
	};

	const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const filInputValue = e.target.files;
		if (filInputValue && filInputValue[0]) {
			const file = filInputValue[0];
			const formData = new FormData();
			formData.append('file', file);
			setFileValue(formData);
		}
	};

	const handlePostBrandFunk = async () => {
		searchParams.set('brandName', brandInputValue);
		setSearchParams(searchParams);
		const DATA = {
			file: fileValue
		};
		try {
			console.log('test');
			await addBrandApi({
				brandName: searchParams.toString(),
				file: DATA.file && DATA.file
			});
			setBrandInputValue('');
			setFileValue({});
		} catch (error) {
			console.error(error);
		}
	};

	const [array, setArray] = useState<ArrayTypes[]>([]);
	return (
		<>
			<section className={scss.AddProductSections}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.main_text_for_pages}>
							<p
								className={scss.product_page_text}
								onClick={() => navigate('/admin/productsAdmin')}
							>
								Товары »
							</p>
							<p>Добавление товара</p>
						</div>
						<div className={scss.page_name_and_border}>
							<h3>Добавление товара</h3>
							<div className={scss.border}></div>
						</div>
						<div className={scss.navigate_buttons}>
							{pagesArray.map((el) => (
								<div
									key={el.id}
									className={scss.add_product_button}
									onClick={() => navigate(`${el.link}`)}
								>
									<div
										className={
											el.link === location.pathname
												? `${scss.div} ${scss.div_active}`
												: `${scss.div}`
										}
									>
										{el.id}
									</div>
									<p
										className={
											el.link === location.pathname
												? `${scss.p} ${scss.p_active}`
												: `${scss.p}`
										}
									>
										{el.title}
									</p>
									{el.border && (
										<div className={scss.add_product_border}>{el.border}</div>
									)}
								</div>
							))}
						</div>
						<div className={scss.forms_for_add_product}>
							<ConfigProvider
								theme={{
									components: {
										Select: {
											colorPrimary: 'black',
											colorBgElevated: 'white',
											colorText: 'black'
										}
									}
								}}
							>
								<div className={scss.for_category_product_form_div}>
									<div className={scss.category_and_brand_forms}>
										<div className={scss.label_and_input_div}>
											<label>Выберите категорию *</label>
											<Select
												size="large"
												showSearch
												className={scss.input}
												placeholder="Выбрать"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').includes(input)
												}
												style={{ background: 'white' }}
												options={data?.map((el) => ({
													label: (
														<p onClick={() => setCategoryId(el.id.toString())}>
															{el.categoryName}
														</p>
													),
													value: el.id.toString()
												}))}
											/>
										</div>
										<div className={scss.label_and_input_div}>
											<label>Выберите подкатегорию *</label>
											{/* <Select
											className={scss.input}
											placeholder="Выбрать"
											onChange={handleChange}
											options={brandArray.map((item) => ({
												value: item.id.toString(),
												label: (
													<div
														style={{
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'start',
															gap: '11px'
														}}
													>
														<img
															style={{
																width: '100%',
																maxWidth: '23px',
																height: '23px'
															}}
															src={item.image}
															alt={item.brandName}
														/>
														<p
															style={{
																color: 'rgb(41, 41, 41)',
																fontSize: '16px'
															}}
														>
															{item.brandName}
														</p>
													</div>
												)
											}
										))}
										/> */}
											<div
												className={scss.div_for_brand_content}
												onClick={() => setBrandActive(!brandActive)}
											>
												{categoryId && (
													<div
														className={
															brandActive
																? `${scss.noo_active_brand_div} ${scss.active_brand_div}`
																: scss.noo_active_brand_div
														}
													>
														{brandArray.map((el) => (
															<div key={el.id} className={scss.card_container}>
																<div className={scss.card_for_brand}>
																	<img src={el.image} alt={el.brandName} />
																	<p>{el.brandName}</p>
																</div>
															</div>
														))}
														<p onClick={() => setModalForBrand(true)}>
															+ Создать новый бренд
														</p>
													</div>
												)}
											</div>
										</div>
										<div className={scss.label_and_input_div}>
											<label>Название товара *</label>
											<Input
												className={scss.input_for_text}
												placeholder="Введите название товара"
												onChange={(
													event: React.ChangeEvent<HTMLInputElement>
												) => {
													if (categoryId) {
														setProductName(event.target.value);
													}
												}}
												value={productName}
											/>
										</div>
									</div>
									<div className={scss.category_and_brand_forms}>
										<div className={scss.label_and_input_div}>
											<label>Выберите подкатегорию *</label>
											<Select
												className={scss.input}
												placeholder="Выбрать"
												options={
													subCategoryArray &&
													subCategoryArray.map((el) => ({
														value: el.id.toString(),
														label: (
															<p
																onClick={() =>
																	setSubCategoryValue(el.categoryName)
																}
															>
																{el.categoryName}
															</p>
														)
													}))
												}
												value={subCategoryValue}
											/>
										</div>
										<div className={scss.label_and_input_div}>
											<label>Гарантия (месяцев) *</label>
											<Input
												className={scss.input_for_text}
												placeholder="Введите гарантию товара"
												onChange={changeWarrantyValue}
												value={warranty}
											/>
										</div>
										<div className={scss.label_and_input_div}>
											<label>Дата выпуска *</label>
											{categoryId ? (
												<DatePicker
													className={scss.input_for_text}
													placeholder="Введите дату выпуска"
													onChange={(
														e
													) => setDateOfIssue(Number(e.target.value))}
													value={dateOfIssue}
												/>
											) : (
												<div className={scss.noo_active_date_input}>
													<p>Введите дату выпуска</p>
													<IconCalendarMinus
														color="rgb(145, 150, 158)"
														width={'20px'}
														height={'20px'}
													/>
												</div>
											)}
										</div>
									</div>
								</div>
								{categoryId === '1' || categoryId === '2' && (
									<div className={scss.card_input_pole}>
										
									</div>
								)}
							</ConfigProvider>
						</div>
					</div>
				</div>
			</section>
			{modalForBrand && (
				<ConfigProvider
					theme={{
						components: {
							Modal: {
								colorBgElevated: '#fff',
								algorithm: true
							}
						}
					}}
				>
					<Modal
						centered
						open={modalForBrand}
						footer={false}
						onCancel={() => setModalForBrand(false)}
						onOk={() => setModalForBrand(false)}
					>
						<div className={scss.container_modal_for_brand}>
							<div className={scss.content_modal}>
								<h2>Добавление бренда</h2>
								<div>
									<div className={scss.file_div} onClick={handleClickRef}>
										<input
											type="file"
											ref={inputForFileRef}
											onChange={changeFile}
											style={{ display: 'none' }}
										/>
										<IconPhotoPlus
											color="rgb(145, 150, 158)"
											width={'25px'}
											height={'23px'}
										/>
										<p>Нажмите для добавления фотографии</p>
									</div>
								</div>
								<div className={scss.div_for_label_and_input}>
									<label>Название бренда</label>
									<Input
										className={scss.input_for_brand}
										placeholder="Введите название бренда"
										onChange={changeBrandInputValue}
										// value={brandInputValue}
									/>
								</div>
								<div className={scss.buttons_div}>
									<Button
										className={scss.button_for_cancel}
										onClick={() => setModalForBrand(false)}
									>
										отменить
									</Button>
									<Button
										className={scss.button_for_add}
										onClick={() => {
											handlePostBrandFunk();
											setModalForBrand(false);
										}}
									>
										отправить
									</Button>
								</div>
							</div>
						</div>
					</Modal>
				</ConfigProvider>
			)}
		</>
	);
};
