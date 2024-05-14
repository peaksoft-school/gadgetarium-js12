/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation, useNavigate } from 'react-router-dom';
import scss from './AddProductSections.module.scss';
import { ConfigProvider, Input, Select } from 'antd';
interface PagesArrayTypes {
	id: number;
	link: string;
	title: string;
	border?: string;
}
const pagesArray: PagesArrayTypes[] = [
	{
		id: 1,
		link: '/admin/add-product-page',
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

export const AddProductSections = () => {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<section className={scss.AddProductSections}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.main_text_for_pages}>
						<p
							className={scss.product_page_text}
							onClick={() => navigate('/productsAdmin')}
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
											filterSort={(optionA, optionB) =>
												(optionA?.label ?? '')
													.toLowerCase()
													.localeCompare((optionB?.label ?? '').toLowerCase())
											}
											options={[
												{
													value: '1',
													label: 'смартфоны'
												},
												{
													value: '2',
													label: 'ноутбуки'
												},
												{
													value: '3',
													label: 'аксессуары'
												},
												{
													value: '4',
													label: 'планшеты'
												}
											]}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Выберите подкатегорию *</label>
										<Select
											size="large"
											showSearch
											className={scss.input}
											placeholder="Выберите бренд товара"
											optionFilterProp="children"
											filterOption={(input, option) =>
												(option?.label ?? '').includes(input)
											}
											style={{ background: 'white' }}
											filterSort={(optionA, optionB) =>
												(optionA?.label ?? '')
													.toLowerCase()
													.localeCompare((optionB?.label ?? '').toLowerCase())
											}
											options={[
												{
													value: '1',
													label: 'смартфоны'
												},
												{
													value: '2',
													label: 'ноутбуки'
												},
												{
													value: '3',
													label: 'аксессуары'
												},
												{
													value: '4',
													label: 'планшеты'
												}
											]}
										/>
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
											size="large"
											showSearch
											className={scss.input}
											placeholder="Выберите бренд товара"
											optionFilterProp="children"
											filterOption={(input, option) =>
												(option?.label ?? '').includes(input)
											}
											style={{ background: 'white' }}
											filterSort={(optionA, optionB) =>
												(optionA?.label ?? '')
													.toLowerCase()
													.localeCompare((optionB?.label ?? '').toLowerCase())
											}
											options={[
												{
													value: '1',
													label: 'смартфоны'
												},
												{
													value: '2',
													label: 'ноутбуки'
												},
												{
													value: '3',
													label: 'аксессуары'
												},
											]}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Гарантия (месяцев) *</label>
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
