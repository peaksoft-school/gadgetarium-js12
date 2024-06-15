import React, { useState } from 'react';
import { Button, Select, Input, DatePicker, ConfigProvider } from 'antd';
import { IconPlus } from '@tabler/icons-react';
import scss from './AddProductSections.module.scss';
import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import { usePostAddProductApiMutation } from '@/src/redux/api/addProductApi';
import { gBiteCatalog, moreGBiteCatalog, simCards } from '@/src/data/Catalog';

interface Product {
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

const initialProduct: Product = {
	mainColour: '',
	memory: '',
	ram: '',
	countSim: 0,
	images: ['']
};

export  const AddProductSections = () => {
	const [addProductApi] = usePostAddProductApiMutation();
	const { data: categoryArray = [] } = useGetCatalogProductsQuery();
	const [categoryId, setCategoryId] = useState<string>('');
	const [brandId, setBrandId] = useState<string>('');
	const [productName, setProductName] = useState<string>('');
	const [warranty, setWarranty] = useState<number>(0);
	const [dateOfIssue, setDateOfIssue] = useState<number>();
	const { data: subCategoryArray = [] } = useSubCategoriesQuery(
		Number(categoryId)
	);
	const [products, setProducts] = useState<Product[]>([initialProduct]);
console.log(products, 'array');

	const handleAddNewProduct = () => {
		setProducts([...products, initialProduct]);
	};

	const handleChangeProductValue = (
		index: number,
		key: keyof Product,
		value: any
	) => {
		setProducts((prevProducts) =>
			prevProducts.map((product, idx) =>
				idx === index ? { ...product, [key]: value } : product
			)
		);
	};

	const handleAddProducts = async () => {
		const productsRequests = products.map((product) => ({
			mainColour: product.mainColour,
			memory: product.memory,
			ram: product.ram,
			countSim: product.countSim,
			images: product.images
		}));

		try {
			await addProductApi({
				subCategoryId: Number(subCategoryId),
				brandId: Number(brandId),
				nameOfGadget: productName,
				warranty,
				dateOfIssue,
				productsRequests
			});
			// Очищаем форму после успешной отправки
			setCategoryId('');
			setBrandId('');
			setProductName('');
			setWarranty(0);
			setDateOfIssue(undefined);
			setProducts([initialProduct]);
		} catch (error) {
			console.error('Ошибка при добавлении товара:', error);
		}
	};

	return (
		<section className={scss.AddProductSections}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.main_text_for_pages}>
						<p className={scss.product_page_text}>Товары »</p>
						<p>Добавление товара</p>
					</div>
					<div className={scss.page_name_and_border}>
						<h3>Добавление товара</h3>
						<div className={scss.border}></div>
					</div>
					<div className={scss.forms_for_add_product}>
						<ConfigProvider>
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
											onChange={(value) => setCategoryId(value)}
											value={categoryId}
										>
											{categoryArray.map((el) => (
												<Select.Option key={el.id} value={el.id.toString()}>
													{el.categoryName}
												</Select.Option>
											))}
										</Select>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Бренд *</label>
										<Select
											className={scss.input}
											placeholder="Выбрать"
											onChange={(value) => setBrandId(value)}
											value={brandId}
										>
											{/* Замените на актуальный источник данных для брендов */}
										</Select>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Название товара *</label>
										<Input
											className={scss.input_for_text}
											placeholder="Введите название товара"
											onChange={(e) => setProductName(e.target.value)}
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
											onChange={(value) => console.log(value)}
											value={subCategoryArray}
										>
											{subCategoryArray.map((el) => (
												<Select.Option key={el.id} value={el.id.toString()}>
													{el.categoryName}
												</Select.Option>
											))}
										</Select>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Гарантия (месяцев) *</label>
										<Input
											className={scss.input_for_text}
											placeholder="Введите гарантию товара"
											onChange={(e) => setWarranty(Number(e.target.value))}
											value={warranty}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Дата выпуска *</label>
										<DatePicker
											className={scss.input_for_text}
											placeholder="Введите дату выпуска"
											onChange={(date, dateString) =>
												setDateOfIssue(Number(new Date(dateString).getTime()))
											}
										/>
									</div>
								</div>
							</div>
							<div className={scss.card_input_pole}>
								{products.map((product, index) => (
									<div key={index} className={scss.card_container_for_forms}>
										<div className={scss.card_inputs}>
											<div className={scss.label_and_input_div}>
												<label>Основной цвет</label>
												<input
													type="color"
													className={scss.color_input}
													value={product.mainColour}
													onChange={(e) =>
														handleChangeProductValue(
															index,
															'mainColour',
															e.target.value
														)
													}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Объем памяти</label>
												<Select
													className={scss.input_for_form}
													placeholder="Объем памяти"
													onChange={(value) =>
														handleChangeProductValue(index, 'memory', value)
													}
													value={product.memory}
												>
													{gBiteCatalog.map((item, idx) => (
														<Select.Option key={idx} value={item.gb}>
															{item.gb}
														</Select.Option>
													))}
												</Select>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Оперативная память</label>
												<Select
													className={scss.input_for_form}
													placeholder="Оперативная память"
													onChange={(value) =>
														handleChangeProductValue(index, 'ram', value)
													}
													value={product.ram}
												>
													{moreGBiteCatalog.map((item, idx) => (
														<Select.Option key={idx} value={item.gb}>
															{item.gb}
														</Select.Option>
													))}
												</Select>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Кол-во Sim карт</label>
												<Select
													className={scss.input_for_form}
													placeholder="Кол-во Sim карт"
													onChange={(value) =>
														handleChangeProductValue(index, 'countSim', value)
													}
													value={product.countSim}
												>
													{simCards.map((item, idx) => (
														<Select.Option key={idx} value={item.sim}>
															{item.sim}
														</Select.Option>
													))}
												</Select>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Изображения</label>
												<Input
													type="file"
													multiple
													className={scss.input_for_text}
													onChange={(e) => {
														const files = Array.from(e.target.files ?? []);
														handleChangeProductValue(
															index,
															'images',
															files.map((file) => URL.createObjectURL(file))
														);
													}}
												/>
											</div>
										</div>
									</div>
								))}
								<Button className={scss.button} onClick={handleAddNewProduct}>
									<IconPlus /> Добавить продукт
								</Button>
							</div>
							<Button className={scss.button} onClick={handleAddProducts}>
								Добавить товар
							</Button>
						</ConfigProvider>
					</div>
				</div>
			</div>
		</section>
	);
};

