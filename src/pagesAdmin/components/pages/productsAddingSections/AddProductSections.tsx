/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation, useNavigate } from 'react-router-dom';
import scss from './AddProductSections.module.scss';
import { ConfigProvider, Input, Select } from 'antd';
import { OptionsForScreenProtection } from '@/src/data/InputSelect';
import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import { useState } from 'react';
import { useGetBrandApiQuery } from '@/src/redux/api/brandApi';

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
	const { data: brandArray = [] } = useGetBrandApiQuery();
	const [categoryId, setCategoryId] = useState<string>('');
	const [idForCategory, setIdForCategory] = useState<number>(0);
	const [subCategoryValue, setSubCategoryValue] = useState<string>('');
	const { data } = useGetCatalogProductsQuery();
	const [brandActive, setBrandActive] = useState<boolean>(false);
	const { data: subCategoryArray = [] } = useSubCategoriesQuery(
		Number(categoryId)
	);
	const [array, setArray] = useState<ArrayTypes[]>([]);
	return (
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
												<p>+ Создать новый бренд</p>
											</div>
										</div>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Название товара *</label>
										<Input
											className={scss.input_for_text}
											placeholder="Введите название товара"
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
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Дата выпуска *</label>
										<Input
											className={scss.input_for_text}
											placeholder="Введите дату выпуска"
										/>
									</div>
								</div>
							</div>
						</ConfigProvider>
					</div>
				</div>
			</div>
		</section>
	);
};
