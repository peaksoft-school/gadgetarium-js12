import scss from './ProductsMainSection.module.scss';
import Input, { SearchProps } from 'antd/es/input';
import {
	ConfigProvider,
	DatePicker,
	DatePickerProps,
	Pagination,
	theme
} from 'antd';
import { IconChartCircles } from '@tabler/icons-react';
import PhonesDropdown from '@/src/ui/catalogPhonesDropdown/PhonesDropdown';
import { adminProducts } from '@/src/routes';
import { useState } from 'react';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import UploadBanner from '@/src/ui/customImageAdd/UploadBanner';

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
							<div className={scss.cards}>
								<div className={scss.card_title}>
									<div className={scss.id_img}>
										<p>ID</p>
										<p>Фото</p>
									</div>
									<p>Артикул</p>
									<p>Наименование товара</p>
									<p>Дата создания</p>
									<p>Кол-во</p>
									<p>Цена товара</p>
									<p>Текущая цена</p>
									<p>Действия</p>
								</div>
								{adminProducts.map((item, index) => (
									<div key={index} className={scss.card}>
										<div className={scss.three}>
											<p>{item.idProduct}</p>
											<img src={item.image} alt="" />
										</div>
										<p>{item.articul}</p>
										{/* //! */}
										{/* <div className={scss.sixThree}> */}
										{item.productName.map((productName, index) => (
											<>
												<div key={index}>
													<p>{productName.quantity}</p>
													<p>{productName.name}</p>
												</div>
											</>
										))}
										{item.createDate.map((productName, index) => (
											<>
												<div key={index}>
													<p>{productName.date}</p>
													<p>{productName.time}</p>
												</div>
											</>
										))}
										<p>{item.quantityProduct}</p>
										{item.priceProduct.map((productName, index) => (
											<>
												<div key={index}>
													<p>{productName.price}</p>
													<p>{productName.discount}</p>
												</div>
											</>
										))}
										<p>{item.CurrentPrice}</p>
										{item.actions.map((productName, index) => (
											<>
												<div className={scss.icons} key={index}>
													<p>{productName.ubdate}</p>
													<p>{productName.delete}</p>
												</div>
											</>
										))}
										{/* </div> */}
									</div>
								))}
							</div>
						</div>
						<div>
							<Pagination defaultCurrent={10} total={70} />;
						</div>
					</div>
					<div className={scss.right_content}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							dignissimos commodi illum libero ipsum animi quasi magnam,
							delectus necessitatibus amet ipsa. Harum quia expedita mollitia
							quibusdam iure quidem dolore voluptates.
						</p>
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
								<label htmlFor="name">Размер скидки *</label>
								<input type="text" name="name" placeholder="0%  " />
							</div>
							<div className={scss.dates}>
								<div>
									<label htmlFor="name">Дата начала скидки * </label>
									<DatePicker
										name="name"
										className={scss.date}
										onChange={onChange}
										placeholder="От"
									/>
								</div>
								<div>
									<label htmlFor="name">Дата окончания скидки *</label>
									<DatePicker
										name="name"
										className={scss.date}
										onChange={onChange}
										placeholder="Выберите дату"
									/>
								</div>
							</div>
							<div className={scss.buttons}>
								<CancelButtonCustom setIsModalOpen={setIsModalOpen}>
									ОТМЕНИТЬ
								</CancelButtonCustom>
								<CustomButtonAdd>ОТПРАВИТЬ</CustomButtonAdd>
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
								<CancelButtonCustom setIsModalOpen={setIsModalOpenBanner}>
									ОТМЕНИТЬ
								</CancelButtonCustom>
								<CustomButtonAdd>ОТПРАВИТЬ</CustomButtonAdd>
							</div>
						</div>
					</CustomModal>
				</div>
			</div>
		</div>
	);
};

export default ProductsMainSection;
