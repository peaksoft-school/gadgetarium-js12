// /* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import scss from './CardProductPage.module.scss';
// import { useNavigate, useParams } from 'react-router-dom';
// import {
// 	useDeleteProductsMutation,
// 	useProductPatchForQuantityMutation
// } from '@/src/redux/api/product';
// import React, { useState } from 'react';
// import { IconArrowLeft, IconArrowRight, IconTrash } from '@tabler/icons-react';
// import { Button, ConfigProvider, InputNumber, Modal, Rate } from 'antd';
// import ColorButton from '@/src/ui/colours/Colour';
// import InfoProduct from './InfoProduct';
// import { ProductDetails } from './ProductDetails';
// import { useGetCardProductQuery } from '@/src/redux/api/cardProductPage';

// const CardProductPage = () => {
// 	const [deleteProducts] = useDeleteProductsMutation();
// 	const { productId } = useParams();
// 	const [isSlider, setIsSlider] = useState<number>(1);
// 	const [productPatchForQuantity] = useProductPatchForQuantityMutation();
// 	const [sliderResult, setSliderresult] = useState<number>(0);
// 	const [contentIsModal, setContentIsModal] = useState<string>('');
// 	const [modal2Open, setModal2Open] = useState(false);
// 	const navigate = useNavigate();
// 	const { data, refetch, isLoading } = useGetCardProductQuery(productId!);
// 	const [resultProductPage, setResultProductPage] = useState<boolean>(true);
// 	const [productQuantity, setProductQuantity] = useState<number>(
// 		data?.quantity!
// 	);
// 	const handleIndexSlider = (index: number) => {
// 		if (index === 0) {
// 			setIsSlider(1);
// 			setSliderresult(0);
// 		} else if (index === 1) {
// 			setIsSlider(2);
// 			setSliderresult(1);
// 		} else if (index === 2) {
// 			setIsSlider(3);
// 			setSliderresult(2);
// 		} else if (index === 3) {
// 			setIsSlider(4);
// 			setSliderresult(3);
// 		} else if (index === 4) {
// 			setIsSlider(5);
// 			setSliderresult(4);
// 		} else if (index === 5) {
// 			setIsSlider(6);
// 			setSliderresult(5);
// 		} else if (index === 6) {
// 			setIsSlider(7);
// 			setSliderresult(6);
// 		}
// 	};
// 	const changeInputValue = (value: number | null) => {
// 		if (value !== null) {
// 			setProductQuantity(value);
// 		}
// 	};
// 	const handleProductPatchForQuantity = async (id: number) => {
// 		await productPatchForQuantity({ id, quantity: productQuantity });
// 	};
// 	const handleDeleteProducts = async (id: number) => {
// 		await deleteProducts(id);
// 		refetch();
// 	};
// 	return (
// 		<>
// 			<section className={scss.CardProductPage}>
// 				<div className="container">
// 					{isLoading ? (
// 						<h1>IsLoading...</h1>
// 					) : (
// 						<div className={scss.content}>
// 							<div className={scss.content_main_text_page}>
// 								<div className={scss.div_content_product_and_pages}>
// 									<p onClick={() => navigate('/')}>Товары »</p>
// 									{resultProductPage ? (
// 										<p onClick={() => navigate('')}>{data?.nameOfGadget}</p>
// 									) : (
// 										<p>Детали товара</p>
// 									)}
// 								</div>
// 								<div className={scss.div_brad_product}>
// 									{resultProductPage ? (
// 										<h2>{data?.nameOfGadget}</h2>
// 									) : (
// 										<h2 className={scss.product_details_text}>Детали товара</h2>
// 									)}
// 									<div></div>
// 								</div>
// 							</div>
// 							<div className={scss.product_buttons}>
// 								<button
// 									className={
// 										resultProductPage
// 											? `${scss.button_noo_active} ${scss.button_active}`
// 											: `${scss.button_noo_active}`
// 									}
// 									onClick={() => setResultProductPage(true)}
// 								>
// 									Товар
// 								</button>
// 								<button
// 									className={
// 										!resultProductPage
// 											? `${scss.button_noo_active} ${scss.button_active}`
// 											: `${scss.button_noo_active}`
// 									}
// 									onClick={() => setResultProductPage(false)}
// 								>
// 									Детали товара
// 								</button>
// 							</div>
// 							{resultProductPage ? (
// 								<div className={scss.display_keen_slider}>
// 									<div className={scss.slider_div_contents}>
// 										<div className={scss.slider_div}>
// 											{data?.photos
// 												.slice(sliderResult, isSlider)
// 												.map((item, index) => (
// 													<img
// 														onClick={() => {
// 															setContentIsModal(item);
// 															setModal2Open(!modal2Open);
// 														}}
// 														src={item}
// 														key={index}
// 														alt={data.nameOfGadget}
// 													/>
// 												))}
// 										</div>
// 										<div className={scss.photosProduct}>
// 											<IconArrowLeft
// 												style={
// 													sliderResult === 0
// 														? { color: 'black' }
// 														: { color: 'rgb(203, 17, 171)', cursor: 'pointer' }
// 												}
// 												onClick={() => {
// 													if (isSlider === 1 && sliderResult === 0) {
// 														null;
// 													} else {
// 														setIsSlider((prevValue) => prevValue - 1);
// 														setSliderresult((prevValue) => prevValue - 1);
// 													}
// 												}}
// 											/>
// 											{data?.photos.map((item, index) => (
// 												<>
// 													<div
// 														className={
// 															index === sliderResult
// 																? `${scss.slider_photos_div} ${scss.activeBorder}`
// 																: `${scss.slider_photos_div}`
// 														}
// 														key={index}
// 													>
// 														<img
// 															onClick={() => handleIndexSlider(index)}
// 															src={item}
// 															alt={data.nameOfGadget}
// 														/>
// 													</div>
// 												</>
// 											))}
// 											<IconArrowRight
// 												style={
// 													sliderResult === 5
// 														? { color: 'black' }
// 														: { color: 'rgb(203, 17, 171)', cursor: 'pointer' }
// 												}
// 												onClick={() => {
// 													if (isSlider === 6 && sliderResult === 5) {
// 														null;
// 													} else {
// 														setIsSlider((prevValue) => prevValue + 1);
// 														setSliderresult((prevValue) => prevValue + 1);
// 													}
// 												}}
// 											/>
// 										</div>
// 									</div>
// 									<div className={scss.product_info}>
// 										<h3>{data?.nameOfGadget}</h3>
// 										<div className={scss.product_content}>
// 											<div className={scss.border_and_contents}>
// 												<div className={scss.product_rating_and_numbers}>
// 													<p className={scss.text_buy_product}>
// 														{data?.price}
// 													</p>
// 													<p>
// 														Артикул: <span>030696</span>
// 													</p>
// 													<div>
// 														<Rate defaultValue={5} />
// 														<p>{data?.rating}</p>
// 													</div>
// 												</div>
// 												<div></div>
// 											</div>
// 											<div className={scss.colors_and_price_info_div_product}>
// 												<div className={scss.title_texts_and_price}>
// 													<h3>Цвет товара:</h3>
// 													<h3>Количество:</h3>
// 													<div className={scss.prices_div}>
// 														<div>-16%</div>
// 														<h2>{data?.price}</h2>
// 														<h3 className={scss.previous_price}>
// 															{data?.price}
// 														</h3>
// 													</div>
// 												</div>
// 												<div className={scss.product_colors_and_content}>
// 													<div className={scss.product_colors}>
// 														<ColorButton
// 															width="26px"
// 															height="26px"
// 															backgroundColor="rgb(0, 0, 0)"
// 														/>
// 														<ColorButton
// 															width="26px"
// 															height="26px"
// 															backgroundColor="rgb(128, 128, 160)"
// 														/>
// 														<ColorButton
// 															width="26px"
// 															height="26px"
// 															backgroundColor="rgb(121, 89, 116)"
// 														/>
// 														<ColorButton
// 															width="26px"
// 															height="26px"
// 															backgroundColor="rgb(211, 32, 46)"
// 														/>
// 														<ColorButton
// 															width="26px"
// 															height="26px"
// 															backgroundColor="rgb(57, 117, 242)"
// 														/>
// 													</div>
// 													<div className={scss.div_buttons_counts}>
// 														<button>-</button>
// 														<ConfigProvider
// 															theme={{
// 																components: {
// 																	InputNumber: {
// 																		colorText: 'rgb(43, 44, 47)',
// 																		algorithm: true
// 																	}
// 																}
// 															}}
// 														>
// 															<InputNumber
// 																className={scss.input_for_quantity}
// 																min={1}
// 																max={100}
// 																defaultValue={data?.quantity}
// 																type="number"
// 																onChange={changeInputValue}
// 																value={productQuantity}
// 																onKeyPress={(
// 																	e: React.KeyboardEvent<HTMLInputElement>
// 																) => {
// 																	if (e.key === 'Enter') {
// 																		handleProductPatchForQuantity(data?.id!);
// 																	}
// 																}}
// 															/>
// 														</ConfigProvider>
// 														<button>+</button>
// 													</div>
// 													<div className={scss.border_div}></div>
// 												</div>
// 												<div className={scss.product_info_container}>
// 													<div
// 														className={scss.product_info_main_text_and_buttons}
// 													>
// 														<h3>Коротко о товаре:</h3>
// 														<div
// 															className={scss.div_buttons_favorite_and_basket}
// 														>
// 															<button
// 																className={scss.nooActiveButton}
// 																onClick={() =>
// 																	data && handleDeleteProducts(data.id)
// 																}
// 															>
// 																<IconTrash color="rgb(144, 156, 181)" />
// 															</button>
// 															<Button
// 																onClick={() => navigate(`/admin/edit-page/${data?.id}`)}
// 																className={scss.add_bas_button}
// 															>
// 																редактировать
// 															</Button>
// 														</div>
// 													</div>
// 													<div className={scss.info_product}>
// 														<div className={scss.div_screen}>
// 															<p>
// 																Экран............................................
// 															</p>
// 															<h4>{data?.Screen}</h4>
// 														</div>
// 														<div className={scss.div_screen}>
// 															<p>
// 																Цвет..............................................
// 															</p>
// 															<h4>{data?.colorProduct}</h4>
// 														</div>
// 														<div className={scss.div_screen}>
// 															<p>Дата выпуска..............................</p>
// 															<h4>{data?.DateOfIssue}</h4>
// 														</div>
// 														<div className={scss.div_screen}>
// 															<p>Операционная система............</p>
// 															<h4>{data?.operatingSystem}</h4>
// 														</div>
// 														<div className={scss.div_screen}>
// 															<p>
// 																Память.........................................
// 															</p>
// 															<h4>{data?.Memory}</h4>
// 														</div>
// 														<div className={scss.div_screen}>
// 															<p>
// 																SIM-карты...................................
// 															</p>
// 															<h4>{data?.SIMCards}</h4>
// 														</div>
// 														<div className={scss.div_screen}>
// 															<p>Гарантия (месяцев)...................</p>
// 															<h4>{data?.WarrantyMonths}</h4>
// 														</div>
// 														<div className={scss.div_screen}>
// 															<p>Процессор..................................</p>
// 															<h4>{data?.CPU}</h4>
// 														</div>
// 														<div className={scss.div_screen}>
// 															<p>
// 																Вес...............................................
// 															</p>
// 															<h4>{data?.Weight}</h4>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							) : (
// 								<ProductDetails />
// 							)}
// 						</div>
// 					)}
// 				</div>
// 				{resultProductPage && <InfoProduct />}
// 			</section>
// 			<ConfigProvider
// 				theme={{
// 					components: {
// 						Modal: {
// 							colorBgElevated: 'white',
// 							algorithm: true
// 						}
// 					}
// 				}}
// 			>
// 				<Modal
// 					title="Iphones"
// 					centered
// 					open={modal2Open}
// 					onOk={() => setModal2Open(false)}
// 					onCancel={() => setModal2Open(false)}
// 				>
// 					<div className={scss.container_modal_img}>
// 						<img
// 							className={scss.modal_img}
// 							src={contentIsModal}
// 							alt={data?.nameOfGadget}
// 						/>
// 					</div>
// 				</Modal>
// 			</ConfigProvider>
// 		</>
// 	);
// };

// export default CardProductPage;
