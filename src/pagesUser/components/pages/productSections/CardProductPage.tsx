/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import scss from './CardProductPage.module.scss';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import InfoPageForProduct from '../InfoPageForProduct';
import React, { useCallback, useState } from 'react';
import { IconArrowLeft, IconArrowRight, IconHeart } from '@tabler/icons-react';
import { Button, ConfigProvider, InputNumber, Modal, Rate } from 'antd';
import ColorButton from '@/src/ui/colours/Colour';
import AddBasketButton from '@/src/ui/customButtons/AddBasketButton';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
import { useFavoritePutProductMutation } from '@/src/redux/api/favorite';
import { IconRedHeart } from '@/src/assets/icons';
import { useGetCardProductQuery } from '@/src/redux/api/cardProductPage';
import { ViewedProducts } from '@/src/ui/viewedProducts/ViewedProducts';
import { useGetProductsColorsApiQuery } from '@/src/redux/api/productColorApi';
import { useGetProductMemoryQuery } from '@/src/redux/api/memoryForProductApi';
const CardProductPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [basketAddProduct] = useBasketPutProductMutation();
	const [favoriteAddProduct] = useFavoritePutProductMutation();
	const { productId } = useParams();
	const { data: productColor } = useGetProductsColorsApiQuery(productId!);
	const { data: productMemoryData } = useGetProductMemoryQuery(productId!);
	const [isSlider, setIsSlider] = useState<number>(1);
	const [sliderResult, setSliderresult] = useState<number>(0);
	const [contentIsModal, setContentIsModal] = useState<string>('');
	const [modal2Open, setModal2Open] = useState(false);
	const navigate = useNavigate();

	// const handleIndexSlider = (index: number) => {
	// 	if (index === 0) {
	// 		setIsSlider(1);
	// 		setSliderresult(0);
	// 	} else if (index === 1) {
	// 		setIsSlider(2);
	// 		setSliderresult(1);
	// 	} else if (index === 2) {
	// 		setIsSlider(3);
	// 		setSliderresult(2);
	// 	} else if (index === 3) {
	// 		setIsSlider(4);
	// 		setSliderresult(3);
	// 	} else if (index === 4) {
	// 		setIsSlider(5);
	// 		setSliderresult(4);
	// 	} else if (index === 5) {
	// 		setIsSlider(6);
	// 		setSliderresult(5);
	// 	} else if (index === 6) {
	// 		setIsSlider(7);
	// 		setSliderresult(6);
	// 	}
	// };
	const handleIndexSlider = useCallback((index: number) => {
		setIsSlider(index + 1);
		setSliderresult(index);
	}, []);

	const handleColorProductFunk = (color: string, memory: string) => {
		console.log(color, 'color');
		searchParams.set('color', color);
		searchParams.set('memory', 'GB_256')
		setSearchParams(searchParams);
		navigate(`/api/gadget/by-id/${productId}?${searchParams.toString()}`);
	};

	const handleMemoryProductFunk = (memory: string) => {
		searchParams.set('memory', memory);
		setSearchParams(searchParams);
		navigate(`/api/gadget/by-id/${productId}?${searchParams.toString()}`);
	};
	// let colorParams;
	// let memoryParams;
	// colorParams = `color=${searchParams.get('color')}`;
	// console.log(colorParams, 'test render');
	// memoryParams = `memory=${searchParams.get('memory')}`;
console.log(searchParams.getAll('color')[0], 'searchPamam');

	const { data, isLoading } = useGetCardProductQuery({
		id: Number(productId && productId),
		color: `color=${searchParams.getAll('color')[0]}` || undefined,
		memory: `memory=${searchParams.getAll('memory')[0]}` || undefined,
		// quantity: `quantity=${searchParams.getAll('quantity')[0]}`
	});
	const addBasketProduct = async (id: number) => {
		await basketAddProduct({ id });
		// refetch();
	};
	const addFavoriteProduct = async (id: number) => {
		await favoriteAddProduct({ id });
		// refetch();
	};

	return (
		<>
			<section className={scss.CardProductPage}>
				<div className="container">
					{isLoading ? (
						<h1>IsLoading...</h1>
					) : (
						<div className={scss.content}>
							<div className={scss.content_main_text_page}>
								<div className={scss.div_content_product_and_pages}>
									<p onClick={() => navigate('/')}>Главная »</p>
									<p onClick={() => navigate('')}> Смартфоны »</p>
									<p>{data?.nameOfGadget}</p>
								</div>
								<div className={scss.div_brad_product}>
									<h2>APPLE</h2>
									<div></div>
								</div>
							</div>

							<div className={scss.display_keen_slider}>
								<div className={scss.slider_div_contents}>
									<div className={scss.slider_div}>
										{data?.images
											.slice(sliderResult, isSlider)
											.map((item, index) => (
												<img
													onClick={() => {
														setContentIsModal(item);
														setModal2Open(!modal2Open);
													}}
													src={item}
													key={index}
													alt={data.nameOfGadget}
												/>
											))}
									</div>
									<div className={scss.photosProduct}>
										<IconArrowLeft
											style={
												sliderResult === 0
													? { color: 'black' }
													: { color: 'rgb(203, 17, 171)', cursor: 'pointer' }
											}
											onClick={() => {
												if (isSlider === 1 && sliderResult === 0) {
													null;
												} else {
													setIsSlider((prevValue) => prevValue - 1);
													setSliderresult((prevValue) => prevValue - 1);
												}
											}}
										/>
										{data?.images.map((item, index) => (
											<>
												<div
													className={
														index === sliderResult
															? `${scss.slider_photos_div} ${scss.activeBorder}`
															: `${scss.slider_photos_div}`
													}
													key={index}
												>
													<img
														onClick={() => handleIndexSlider(index)}
														src={item}
														alt={data.nameOfGadget}
													/>
												</div>
											</>
										))}
										<IconArrowRight
											style={
												sliderResult === 5
													? { color: 'black' }
													: { color: 'rgb(203, 17, 171)', cursor: 'pointer' }
											}
											onClick={() => {
												if (isSlider === 6 && sliderResult === 5) {
													null;
												} else {
													setIsSlider((prevValue) => prevValue + 1);
													setSliderresult((prevValue) => prevValue + 1);
												}
											}}
										/>
									</div>
								</div>
								<div className={scss.product_info}>
									<h3>{data?.nameOfGadget}</h3>
									<div className={scss.product_content}>
										<div className={scss.border_and_contents}>
											<div className={scss.product_rating_and_numbers}>
												<p className={scss.text_buy_product}>
													({data?.quantity})
												</p>
												<p>
													Артикул: <span>{data?.articleNumber}</span>
												</p>
												<div>
													<Rate defaultValue={data?.rating} />
													<p>{data?.rating}</p>
												</div>
											</div>
											<div></div>
										</div>
										<div className={scss.colors_and_price_info_div_product}>
											<div className={scss.title_texts_and_price}>
												<h3>Цвет товара:</h3>
												<h3>Количество:</h3>
												<div className={scss.prices_div}>
													<div>-16%</div>
													<h2>{data?.price}</h2>
													<h3 className={scss.previous_price}>
														{data?.currentPrice}
													</h3>
												</div>
											</div>
											<div className={scss.product_colors_and_content}>
												<div className={scss.product_colors}>
													{productColor?.map((el, index) => (
														<div key={index}>
															<ColorButton
																onClick={() => {
																	handleColorProductFunk(el, data?.memory)
																	
																}}
																width="26px"
																height="26px"
																backgroundColor={el}
															/>
														</div>
													))}
												</div>
												<div className={scss.div_buttons_counts}>
													<button>-</button>
													<ConfigProvider
														theme={{
															components: {
																InputNumber: {
																	colorText: 'rgb(43, 44, 47)',
																	algorithm: true
																}
															}
														}}
													>
														<InputNumber
															className={scss.input_for_quantity}
															min={1}
															max={100}
															// defaultValue={data?.quantity}
															defaultValue={data?.quantity}
															type="number"
															onKeyPress={(
																e: React.KeyboardEvent<HTMLInputElement>
															) => {}}
														/>
													</ConfigProvider>
													<button>+</button>
												</div>
												<div className={scss.border_div}></div>
											</div>
											<div className={scss.product_info_container}>
												<div
													className={scss.product_info_main_text_and_buttons}
												>
													<h3>Коротко о товаре:</h3>
													<div className={scss.div_buttons_favorite_and_basket}>
														<button
															className={
																data?.likes === true
																	? `${scss.nooActiveButton} ${scss.activeButton}`
																	: `${scss.nooActiveButton}`
															}
															onClick={() =>
																data && addFavoriteProduct(data.gadgetId)
															}
														>
															{data?.likes === true ? (
																<IconRedHeart />
															) : (
																<IconHeart color="rgb(144, 156, 181)" />
															)}
														</button>
														{data?.basket ? (
															<Button
																className={scss.active_basket_button_navigate}
																onClick={() => navigate('/basket')}
															>
																В корзине Перейти
															</Button>
														) : (
															<AddBasketButton
																onClick={() =>
																	data && addBasketProduct(data.subGadgetId)
																}
																children={'В корзину'}
																className={scss.add_bas_button}
															/>
														)}
													</div>
												</div>
												<div className={scss.buttons_for_memory}>
													{productMemoryData?.map((el, index) => (
														<Button
															onClick={() => {
																if (el.includes(data?.memory)) {
																	handleMemoryProductFunk(el);
																
																} else {
																	return;
																}
															}}
															className={
																el.includes(data?.memory)
																	? `${scss.button_for_product_memory} ${scss.active_memory_button}`
																	: `${scss.button_for_product_memory}`
															}
															key={index}
														>
															{el}
														</Button>
													))}
												</div>
												<div className={scss.info_product}>
													<div className={scss.div_screen}>
														<p>
															Экран............................................
														</p>
														{/* <h4>{data?.Screen}</h4> */}
													</div>
													<div className={scss.div_screen}>
														<p>
															Цвет..............................................
														</p>
														<h4>{data?.mainColour}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>Дата выпуска..............................</p>
														<h4>{data?.releaseDate}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>Операционная система............</p>
														{/* <h4>{data?.operatingSystem}</h4> */}
													</div>
													<div className={scss.div_screen}>
														<p>
															Память.........................................
														</p>
														<h4>{data?.memory}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>SIM-карты...................................</p>
														<h4>{data?.countSim}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>Гарантия (месяцев)...................</p>
														<h4>{data?.warranty}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>Процессор..................................</p>
														{/* <h4>{data?.CPU}</h4> */}
													</div>
													{/* <div className={scss.div_screen}>
														<p>
															Вес...............................................
														</p>
														<h4>{data?.Weight}</h4>
													</div> */}
													<div className={scss.div_screen}>
														<p>
															процент.......................................
														</p>
														<h4>{data?.percent}</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				<InfoPageForProduct />
				<ViewedProducts />
			</section>
			<ConfigProvider
				theme={{
					components: {
						Modal: {
							colorBgElevated: 'white',
							algorithm: true
						}
					}
				}}
			>
				<Modal
					title="Iphones"
					centered
					open={modal2Open}
					onOk={() => setModal2Open(false)}
					onCancel={() => setModal2Open(false)}
				>
					<img
						className={scss.modal_img}
						src={contentIsModal}
						alt={data?.nameOfGadget}
					/>
				</Modal>
			</ConfigProvider>
		</>
	);
};

export default CardProductPage;
