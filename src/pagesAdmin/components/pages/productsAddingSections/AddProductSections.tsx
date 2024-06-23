/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dayjs from 'dayjs';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import scss from './AddProductSections.module.scss';
import { Button, ConfigProvider, DatePicker, Input, Modal, Select } from 'antd';
import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import React, { useRef, useState } from 'react';
import {
	useAddBrandApiMutation,
	useGetBrandApiQuery
} from '@/src/redux/api/brandApi';
import {
	IconCalendarMinus,
	IconColorPicker,
	IconPhotoPlus
} from '@tabler/icons-react';
import { IconPlus } from '@/src/assets/icons';
import { generate, green, presetPalettes, red } from '@ant-design/colors';
import { ColorPicker, theme } from 'antd';
import type { ColorPickerProps } from 'antd';
import { gBiteCatalog, moreGBiteCatalog, simCards } from '@/src/data/Catalog';
import {
	OptionsForLaptop,
	optionsSmartWatchesAndBracelets
} from '@/src/data/InputSelect';
// import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { usePostAddProductApiMutation } from '@/src/redux/api/addProductApi';
import { usePostUploadMutation } from '@/src/redux/api/pdf';

type Presets = Required<ColorPickerProps>['presets'][number];

const genPresets = (presets = presetPalettes) =>
	Object.entries(presets).map<Presets>(([label, colors]) => ({
		label,
		colors
	}));

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
		link: '',
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
	materialBracelet: string;
	materialBody: string;
	sizeWatch: string;
	dumas: string;
	genderWatch: string;
	waterproof: string;
	wireless: string;
	shapeBody: string;
}
const arrayForm: ArrayTypes = {
	mainColour: '',
	memory: '',
	ram: '',
	countSim: 0,
	images: [],
	materialBracelet: '',
	materialBody: '',
	sizeWatch: '',
	dumas: '',
	genderWatch: '',
	waterproof: '',
	wireless: '',
	shapeBody: ''
};

export const AddProductSections = () => {
	const [addProductApi] = usePostAddProductApiMutation();
	const location = useLocation();
	const navigate = useNavigate();
	const [postUpload] = usePostUploadMutation();

	const [searchParams, setSearchParams] = useSearchParams();
	const inputForFileRef = React.useRef<HTMLInputElement>(null);
	const { data: brandArray = [] } = useGetBrandApiQuery();
	const [warranty, setWarranty] = useState<number>(0);
	const [productName, setProductName] = useState<string>('');
	const [categoryId, setCategoryId] = useState<string>('');
	const [dateOfIssue, setDateOfIssue] = useState<string>('');
	const [brandInputValue, setBrandInputValue] = useState<string>('');
	const [brandId, setBrandId] = useState<string>('');
	const [addBrandApi] = useAddBrandApiMutation();
	const [subCategoryValue, setSubCategoryValue] = useState<string>('');
	console.log(subCategoryValue, 'ids category');
	const colorInputRef = React.useRef<HTMLInputElement>(null);

	const [modalForBrand, setModalForBrand] = useState<boolean>(false);
	const [fileValue, setFileValue] = useState<FormData>();
	const { data } = useGetCatalogProductsQuery();
	const addProductFileRef = useRef<HTMLInputElement[]>([]);
	const dateOfIssueString = dayjs(dateOfIssue).format('YYYY-MM-DD');

	const { data: subCategoryArray = [] } = useSubCategoriesQuery(
		Number(categoryId)
	);

	const { token } = theme.useToken();
	const presets = genPresets({
		primary: generate(token.colorPrimary),
		red,
		green
	});

	const handleClickRef = () => {
		if (inputForFileRef.current) {
			return inputForFileRef.current.click();
		}
	};

	const changeWarrantyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWarranty(Number(e.target.value));
		console.log(warranty, 'Гарантия');
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
		const { file } = DATA;
		try {
			console.log('test');
			await addBrandApi({
				brandName: searchParams.toString(),
				file: file!
			});
			setBrandInputValue('');
			// setFileValue();
		} catch (error) {
			console.error(error);
		}
	};

	const handleOpenFileInputForAddProduct = (index: number) => {
		if (addProductFileRef.current[index]) {
			return addProductFileRef.current[index]?.click();
		}
	};

	const [array, setArray] = useState<ArrayTypes[]>([arrayForm]);
	const handleOPen = () => {
		setArray([...array, arrayForm]);
	};

	const handleChangeProductValue = (
		index: number,
		key: keyof ArrayTypes,
		value: any
	) => {
		console.log(value, 'esentur');

		setArray((prevProducts) =>
			prevProducts.map((product, idx) =>
				idx === index ? { ...product, [key]: value } : product
			)
		);
	};

	const handleAddProductsFunk = async () => {
		const productsRequestsResults = array.map((product) => ({
			mainColour: product.mainColour,
			memory: product.memory,
			ram: product.ram,
			countSim: Number(product.countSim),
			images: product.images,
			materialBracelet: product.materialBracelet,
			materialBody: product.materialBody,
			sizeWatch: product.sizeWatch,
			dumas: product.dumas,
			genderWatch: product.genderWatch,
			waterproof: product.waterproof,
			wireless: product.wireless,
			shapeBody: product.shapeBody
		}));
		console.log(productsRequestsResults, 'url result');

		const DATA: ADDPRODUCTAPI.PostAddProductRequest = {
			nameOfGadget: productName,
			dateOfIssue: dateOfIssueString,
			warranty: warranty,
			productsRequests: productsRequestsResults
		};
		console.log(DATA, 'ARRAY FRO DATA');

		const {
			nameOfGadget,
			warranty: number,
			dateOfIssue,
			productsRequests
		} = DATA;
		try {
			await addProductApi({
				subCategoryId: Number(subCategoryValue),
				brandId: Number(brandId),
				productsRequests,
				dateOfIssue,
				nameOfGadget,
				warranty: number
			});
			navigate('/admin/product-adding/part-2');
		} catch (error) {
			console.error(error);
		}
	};
	const handleClickInputColorRef = () => {
		if (colorInputRef.current) {
			colorInputRef.current.click();
		}
	};
	const changeAddProductsFilesFunk = async (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const files = event.target.files;
		if (files) {
			const formData = new FormData();
			for (let i = 0; i < files.length; i++) {
				formData.append('files', files[i]);
			}

			try {
				const response = await postUpload(formData).unwrap();
				const uploadedFiles = response.data; // Adjust this based on your server response structure

				setArray((prevValue) => {
					const newArray = [...prevValue];
					const currentImages = newArray[index].images || [];
					newArray[index].images = [...currentImages, ...uploadedFiles].slice(
						0,
						6
					);
					return newArray;
				});
			} catch (error) {
				console.error('Failed to upload files', error);
			}
		}
	};

	const styleAddProductFormDiv = () => {
		if (categoryId === '1' || categoryId === '2') {
			return `${scss.forms_for_add_product} ${scss.forms_for_add_product_active}`;
		} else {
			return `${scss.forms_for_add_product}`;
		}
	};

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
						<div className={styleAddProductFormDiv()}>
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
												style={{ background: 'white' }}
												options={data?.map((el) => ({
													label: (
														<p
															className={scss.color}
															onClick={() => setCategoryId(el.id.toString())}
														>
															{el.categoryName}
														</p>
													),
													value: el.id.toString()
												}))}
											/>
										</div>
										<div className={scss.label_and_input_div}>
											<label>Бренд *</label>
											<Select
												className={scss.input}
												placeholder="Выбрать"
												onChange={handleChange}
												options={brandArray.map((item) => ({
													value: item.id.toString(),
													label: (
														<div
															onClick={() => setBrandId(item.id.toString())}
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
												}))}
											/>
											{/* <div
												className={scss.div_for_brand_content}
												onClick={() => setBrandActive(!brandActive)}
											>
												<div>
													{brandValue && <img src={brandValue} alt="logo" />}
												</div>
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
																<div
																	className={scss.card_for_brand}
																	onClick={() => setBrandValue(el.image)}
																>
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
											</div> */}
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
																	setSubCategoryValue(el.id.toString())
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
													onChange={(momentDate) =>
														setDateOfIssue(momentDate.format('YYYY-MM-DD'))
													}
													value={dateOfIssue ? dayjs(dateOfIssue) : null} // Check if `dateOfIssue` is valid
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
								{(categoryId === '1' || categoryId === '2') && (
									<div className={scss.card_input_pole}>
										{array.map((el, index) => (
											<div
												key={index + 1}
												className={scss.card_container_for_forms}
											>
												<div className={scss.product_count_div}>
													<Input
														placeholder={`Продукт ${index + 1}`}
														className={scss.input_for_product_count}
													/>
												</div>
												<div className={scss.card_inputs}>
													<div className={scss.label_and_input_div}>
														<label>Основной цвет</label>
														{/* <ColorPicker presets={presets} value={colorValue} onChange={(e: React.ChangeEvent<ColorPickerProps>) => setColorValue(e.target.value)}>
															<div className={scss.color_input} type="primary">
																<p>Основной цвет</p>
																<IconFrame />
															</div>
														</ColorPicker> */}
														<div
															onClick={handleClickInputColorRef}
															className={scss.color_div}
														>
															<p>{el.mainColour}</p>

															<ColorPicker
																presets={presets}
																// ref={colorInputRef}
																onChange={(color) =>
																	handleChangeProductValue(
																		index,
																		'mainColour',
																		color.toHexString()
																	)
																}
																defaultValue="#1677ff"
																value={el.mainColour}
															/>
															<IconColorPicker
																width={'19px'}
																height={'19px'}
																color="rgb(145, 150, 158)"
															/>
														</div>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Объем памяти</label>
														<Select
															className={scss.input_for_form}
															placeholder="Объем памяти"
															options={
																gBiteCatalog &&
																gBiteCatalog.map((el, index) => ({
																	value: String(index + 1),
																	label: <p>{el.gb}</p>
																}))
															}
															onChange={(value) =>
																handleChangeProductValue(
																	index,
																	'memory',
																	gBiteCatalog[Number(Number(value) - 1)].gb
																)
															}
															value={el.memory}
														/>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Оперативная память</label>

														<Select
															className={scss.input_for_form}
															placeholder="Оперативная память"
															options={
																moreGBiteCatalog &&
																moreGBiteCatalog.map((el, index) => ({
																	value: String(index + 1),
																	label: <p>{el.gb}</p>
																}))
															}
															onChange={(value) =>
																handleChangeProductValue(
																	index,
																	'ram',
																	moreGBiteCatalog[Number(Number(value) - 1)].gb
																)
															}
															value={el.ram}
														/>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Кол-во SIM-карт</label>

														<Select
															className={scss.input_for_form}
															placeholder="Кол-во SIM-карт"
															options={
																simCards &&
																simCards.map((el, index) => ({
																	value: String(index + 1),
																	label: <p>{el.sumCard}</p>
																}))
															}
															onChange={(value) =>
																handleChangeProductValue(
																	index,
																	'countSim',
																	simCards[Number(Number(value) - 1)].sumCard
																)
															}
															value={el.countSim}
														/>
													</div>
												</div>
												<div className={scss.file_div}>
													<label>Добавьте фото</label>
													<div
														className={scss.div_for_file}
														onClick={() =>
															handleOpenFileInputForAddProduct(index)
														}
													>
														<input
															type="file"
															ref={(ref) => {
																if (ref) {
																	addProductFileRef.current[index] = ref;
																}
															}}
															style={{ display: 'none' }}
															multiple
															onChange={(e) => {
																changeAddProductsFilesFunk(index, e);
															}}
														/>
														<IconPhotoPlus
															color="rgb(145, 150, 158)"
															width={'36px'}
															height={'33px'}
														/>
														<div className={scss.file_div_contents}>
															<p>Нажмите или перетащите сюда файл</p>
															<p>
																Минимальное разрешение - 450x600 <br />{' '}
																максимальное количество - 6 фото
															</p>
														</div>
													</div>
												</div>
											</div>
										))}
										<div className={scss.button_add_div_object}>
											<p
												className={scss.button_add_object}
												onClick={handleOPen}
											>
												<IconPlus />
												<span>Добавить продукт</span>
											</p>
										</div>
										<div
											className={
												categoryId === '1' || categoryId === '2'
													? `${scss.open_buttno_for_category_noo_active} ${scss.add_product_button_div}`
													: `${scss.open_buttno_for_category_noo_active}`
											}
										>
											<Button
												className={scss.add_product_button}
												onClick={() => {
													handleAddProductsFunk();
												}}
											>
												Далее
											</Button>
										</div>
									</div>
								)}
								{(categoryId === '3' || categoryId === '4') && (
									<div className={scss.card_input_pole}>
										{array.map((el, index) => (
											<div
												className={scss.card_container_for_forms}
												key={index}
											>
												<div className={scss.product_count_div}>
													<Input
														placeholder={`Продукт ${index + 1}`}
														className={scss.input_for_product_count}
													/>
												</div>
												<div className={scss.card_inputs}>
													<div className={scss.label_and_input_div}>
														<label>Основной цвет</label>

														{/* <ColorPicker presets={presets}>
															<div className={scss.color_input} type="primary">
																<p>Основной цвет</p>
																<IconFrame />
															</div>
														</ColorPicker> */}
														<div className={scss.color_div}>
															<p>{el.mainColour}</p>
															<ColorPicker
																presets={presets}
																// ref={colorInputRef}
																onChange={(color) =>
																	handleChangeProductValue(
																		index,
																		'mainColour',
																		color.toHexString()
																	)
																}
																defaultValue="#1677ff"
																value={el.mainColour}
															/>
															<IconColorPicker
																width={'19px'}
																height={'19px'}
																color="rgb(145, 150, 158)"
															/>
														</div>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Объем памяти</label>

														<Select
															className={scss.input_for_form}
															placeholder="Объем памяти"
															options={
																gBiteCatalog &&
																gBiteCatalog.map((el, index) => ({
																	value: String(index + 1),
																	label: <p>{el.gb}</p>
																}))
															}
															onChange={(event) =>
																handleChangeProductValue(
																	index,
																	'memory',
																	gBiteCatalog[Number(Number(event) - 1)].gb
																)
															}
															value={el.memory}
														/>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Оперативная память</label>

														<Select
															className={scss.input_for_form}
															placeholder="Оперативная память"
															options={
																moreGBiteCatalog &&
																moreGBiteCatalog.map((el, index) => ({
																	value: String(index + 1),
																	label: <p>{el.gb}</p>
																}))
															}
															onChange={(value) =>
																handleChangeProductValue(
																	index,
																	'ram',
																	moreGBiteCatalog[Number(Number(value) - 1)].gb
																)
															}
															value={el.ram}
														/>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Материал браслета/ремешка</label>

														<Select
															className={scss.input_for_form}
															placeholder="Материал браслета/ремешка"
															options={
																optionsSmartWatchesAndBracelets &&
																optionsSmartWatchesAndBracelets.map(
																	(el, index) => ({
																		value: String(index + 1),
																		label: <p>{el.label}</p>
																	})
																)
															}
															onChange={(value) =>
																handleChangeProductValue(
																	index,
																	'materialBracelet',
																	optionsSmartWatchesAndBracelets[
																		Number(Number(value) - 1)
																	].label
																)
															}
															value={el.materialBracelet}
														/>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Материал корпуса</label>

														<Select
															className={scss.input_for_form}
															placeholder="Объем памяти"
															options={
																optionsSmartWatchesAndBracelets &&
																optionsSmartWatchesAndBracelets.map(
																	(el, index) => ({
																		value: String(index + 1),
																		label: <p>{el.label}</p>
																	})
																)
															}
															onChange={(value) =>
																handleChangeProductValue(
																	index,
																	'materialBody',
																	optionsSmartWatchesAndBracelets[
																		Number(Number(value) - 1)
																	].label
																)
															}
															value={el.materialBody}
														/>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Размер смарт часов (mm)</label>

														<Select
															className={scss.input_for_form}
															placeholder="Размер смарт часов (mm)"
															options={
																OptionsForLaptop &&
																OptionsForLaptop.map((el, index) => ({
																	value: String(index + 1),
																	label: <p>{el.label}</p>
																}))
															}
															onChange={(value) =>
																handleChangeProductValue(
																	index,
																	'sizeWatch',
																	OptionsForLaptop[Number(Number(value) - 1)]
																		.label
																)
															}
															value={el.sizeWatch}
														/>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Диагональ дисплея (дюйм)</label>

														<Select
															className={scss.input_for_form}
															placeholder="Объем памяти"
															options={
																OptionsForLaptop &&
																OptionsForLaptop.map((el, index) => ({
																	value: String(index + 1),
																	label: <p>{el.label}</p>
																}))
															}
															onChange={(value) =>
																handleChangeProductValue(
																	index,
																	'dumas',
																	OptionsForLaptop[Number(Number(value) - 1)]
																		.label
																)
															}
															value={el.dumas}
														/>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Пол</label>
														<Radio.Group
															onChange={(e) =>
																handleChangeProductValue(
																	index,
																	'genderWatch',
																	e.target.value
																)
															}
															value={el.genderWatch}
														>
															<Radio value={'Унисекс'}>Унисекс</Radio>
															<Radio value={'Женский'}>Женский</Radio>
															<Radio value={'Мужской'}>Мужской</Radio>
														</Radio.Group>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Водонепроницаемые</label>
														<Radio.Group
															onChange={(e) =>
																handleChangeProductValue(
																	index,
																	'waterproof',
																	e.target.value
																)
															}
															value={el.waterproof}
														>
															<Radio value={'Да'}>Да</Radio>
															<Radio value={'Нет'}>Нет</Radio>
														</Radio.Group>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Беспроводные интерфейсы</label>
														<Radio.Group
															onChange={(e) =>
																handleChangeProductValue(
																	index,
																	'wireless',
																	e.target.value
																)
															}
															value={el.wireless}
														>
															<Radio value={'Bluetooth'}>Bluetooth</Radio>
															<Radio value={'Wi-Fi'}>Wi-Fi</Radio>
															<Radio value={'GPS'}>GPS</Radio>
															<Radio value={'NFC'}>NFC</Radio>
														</Radio.Group>
													</div>
													<div className={scss.label_and_input_div}>
														<label>Форма корпуса</label>
														<Radio.Group
															onChange={(e) =>
																handleChangeProductValue(
																	index,
																	'shapeBody',
																	e.target.value
																)
															}
															value={el.shapeBody}
														>
															<Radio value={'Квадратная'}>Квадратная</Radio>
															<Radio value={'Круглая'}>Круглая</Radio>
															<Radio value={'Овальная'}>Овальная</Radio>
															<Radio value={'Прямоугольная'}>
																Прямоугольная
															</Radio>
														</Radio.Group>
													</div>
												</div>
												<div className={scss.file_div}>
													<label>Добавьте фото</label>
													<div
														className={scss.div_for_file}
														onClick={() =>
															handleOpenFileInputForAddProduct(index)
														}
													>
														<input
															type="file"
															ref={(ref) => {
																if (ref) {
																	addProductFileRef.current[index] = ref;
																}
															}}
															style={{ display: 'none' }}
															multiple
															onChange={(e) => {
																changeAddProductsFilesFunk(index, e);
															}}
														/>
														<IconPhotoPlus
															color="rgb(145, 150, 158)"
															width={'36px'}
															height={'33px'}
														/>
														<div className={scss.file_div_contents}>
															<p>Нажмите или перетащите сюда файл</p>
															<p>
																Минимальное разрешение - 450x600 <br />{' '}
																максимальное количество - 6 фото
															</p>
														</div>
													</div>
												</div>
											</div>
										))}
										<div className={scss.button_add_div_object}>
											<p
												className={scss.button_add_object}
												onClick={handleOPen}
											>
												<IconPlus />
												<span>Добавить продукт</span>
											</p>
										</div>
										<div
											className={
												categoryId === '3' ||
												(categoryId === '4' && array.length === 3)
													? `${scss.open_buttno_for_category_noo_active_watch} ${scss.add_product_button_div_watch}`
													: `${scss.open_buttno_for_category_noo_active_watch}`
											}
										>
											<Button
												onClick={handleAddProductsFunk}
												className={scss.add_product_button}
											>
												Далее
											</Button>
										</div>
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
