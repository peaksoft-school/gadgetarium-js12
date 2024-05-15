import scss from './ProductsMainSection.module.scss';
import Input, { SearchProps } from 'antd/es/input';
import {
	ConfigProvider,
	DatePicker,
	DatePickerProps,
	Pagination,
	theme
} from 'antd';
import { IconChartCircles, IconEdit, IconTrash } from '@tabler/icons-react';
import PhonesDropdown from '@/src/ui/catalogPhonesDropdown/PhonesDropdown';
import { adminProducts } from '@/src/routes';
import { useState } from 'react';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import UploadBanner from '@/src/ui/customImageAdd/UploadBanner';
import Infographics from '@/src/ui/infographics/Infographics';

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
	console.log(info?.source, value);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};

const ProductsMainSection = () => {
	const [filtered, setFiltered] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenBanner, setIsModalOpenBanner] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
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
										onSearch={onSearch}
									/>
								</ConfigProvider>
							</div>
							<div className={scss.add_product}>
								<button>Добавить товар</button>
								<button onClick={showModal}>Создать скидку</button>
							</div>
						</div>
						<div className={scss.product_buttons}>
							<div className={scss.buttons}>
								<button
									onClick={handleFiltered}
									className={
										filtered
											? `${scss.all_product} ${scss.active}`
											: `${scss.all_product}`
									}
								>
									Все товары
								</button>
								<button
									onClick={handleFiltered}
									className={
										filtered
											? `${scss.all_product} ${scss.active}`
											: `${scss.all_product}`
									}
								>
									В продаже
								</button>
								<button
									onClick={handleFiltered}
									className={
										filtered
											? `${scss.all_product} ${scss.active}`
											: `${scss.all_product}`
									}
								>
									В избранном
								</button>
								<button
									onClick={handleFiltered}
									className={
										filtered
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
								onChange={onChange}
								placeholder="От"
							/>
							<DatePicker
								className={scss.input_date}
								onChange={onChange}
								placeholder="До"
							/>
						</div>
						<div className={scss.products_card}>
							<div className={scss.product_title}>
								<p>Найдено 167 Товаров </p>
								<PhonesDropdown />
							</div>
							<table className={scss.cards}>
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
								<tr className={scss.tr}>
									{adminProducts?.map((item, index) => (
										<div key={index} className={scss.card}>
											<div className={scss.three}>
												<td>{item.idProduct}</td>
												<img src={item.image} alt="" />
											</div>
											<td>{item.articul}</td>
											{item.productName.map((productName, index) => (
												<>
													<div key={index} className={scss.quantity_name}>
														<td>{productName.quantity}</td>
														<td className={scss.name}>{productName.name}</td>
													</div>
												</>
											))}
											{item.createDate.map((productName, index) => (
												<>
													<div key={index} className={scss.date_time}>
														<td>{productName.date}</td>
														<td className={scss.time}>{productName.time}</td>
													</div>
												</>
											))}
											<td>{item.quantityProduct}</td>
											{item.priceProduct.map((productName, index) => (
												<>
													<div key={index} className={scss.price_discount}>
														<td>{productName.price}</td>
														<td className={scss.discount}>
															{productName.discount}
														</td>
													</div>
												</>
											))}
											<td>{item.CurrentPrice}</td>
											<div className={scss.icons}>
												<IconEdit className={scss.trash} />
												<IconTrash />
											</div>
										</div>
									))}
								</tr>
							</table>
						</div>
						<div>
							<Pagination defaultCurrent={10} total={40} />;
						</div>
					</div>
					<div className={scss.right_content}>
						<Infographics />
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
								<input type="text" name="name" placeholder="0%  " />
							</div>
							<div className={scss.dates}>
								<div>
									<label className={scss.label} htmlFor="name">
										Дата начала скидки *{' '}
									</label>
									<DatePicker
										name="name"
										className={scss.date}
										onChange={onChange}
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
										onChange={onChange}
										placeholder="Выберите дату"
									/>
								</div>
							</div>
							<div className={scss.buttons}>
								<CancelButtonCustom onClick={handleCancel}>
									ОТМЕНИТЬ
								</CancelButtonCustom>
								<CustomButtonAdd onClick={handleCancel}>
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
							<UploadBanner />
							<div className={scss.buttons_banner}>
								<CancelButtonCustom onClick={handleCancelBanner}>
									ОТМЕНИТЬ
								</CancelButtonCustom>
								<CustomButtonAdd onClick={handleCancelBanner}>
									ОТПРАВИТЬ
								</CustomButtonAdd>
							</div>
						</div>
					</CustomModal>
				</div>
			</div>
		</div>
	);
};

export default ProductsMainSection;
