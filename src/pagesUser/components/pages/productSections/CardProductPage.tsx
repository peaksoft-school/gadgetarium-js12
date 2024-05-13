/* eslint-disable @typescript-eslint/no-explicit-any */
import scss from './CardProductPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import InfoPageForProduct from '../InfoPageForProduct';
import { useGetProductsItemIdQuery } from '@/src/redux/api/product';
import { useState } from 'react';
import { IconArrowLeft, IconArrowRight, IconHeart } from '@tabler/icons-react';
import { ConfigProvider, Modal, Rate } from 'antd';
import ColorButton from '@/src/ui/colours/Colour';
import AddBasketButton from '@/src/ui/customButtons/AddBasketButton';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
import { useFavoritePutProductMutation } from '@/src/redux/api/favorite';
import { IconRedHeart } from '@/src/assets/icons';

const CardProductPage = () => {
	const [basketAddProduct] = useBasketPutProductMutation();
	const [favoriteAddProduct] = useFavoritePutProductMutation();
	const { productId } = useParams();
	const [isSlider, setIsSlider] = useState<number>(1);
	const [sliderResult, setSliderresult] = useState<number>(0);
	const [contentIsModal, setContentIsModal] = useState<string>('');
	const [modal2Open, setModal2Open] = useState(false);
	const navigate = useNavigate();
	const { data, refetch, isLoading } = useGetProductsItemIdQuery(productId!);
	console.log(data);
	const handleIndexSlider = (index: number) => {
		if (index === 0) {
			setIsSlider(1);
			setSliderresult(0);
		} else if (index === 1) {
			setIsSlider(2);
			setSliderresult(1);
		} else if (index === 2) {
			setIsSlider(3);
			setSliderresult(2);
		} else if (index === 3) {
			setIsSlider(4);
			setSliderresult(3);
		} else if (index === 4) {
			setIsSlider(5);
			setSliderresult(4);
		} else if (index === 5) {
			setIsSlider(6);
			setSliderresult(5);
		} else if (index === 6) {
			setIsSlider(7);
			setSliderresult(6);
		}
	};
	console.log(isSlider, sliderResult);
	const addBasketProduct = async (id: number, isInBasket: boolean) => {
		console.log(isInBasket);
		await basketAddProduct({ id, isInBasket: !isInBasket });
		refetch();
	};
	const addFavoriteProduct = async (id: number, isFavorite: boolean) => {
		console.log(isFavorite);
		await favoriteAddProduct({ id, isFavorite: !isFavorite });
		refetch();
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
									<p>{data?.productName}</p>
								</div>
								<div className={scss.div_brad_product}>
									<h2>APPLE</h2>
									<div></div>
								</div>
							</div>
							<div className={scss.display_keen_slider}>
								<div className={scss.slider_div_contents}>
									<div className={scss.slider_div}>
										{data?.photos
											.slice(sliderResult, isSlider)
											.map((item, index) => (
												<img
													onClick={() => {
														setContentIsModal(item);
														setModal2Open(!modal2Open);
													}}
													src={item}
													key={index}
													alt={data.productName}
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
										{data?.photos.map((item, index) => (
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
														alt={data.productName}
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
									<h3>{data?.productName}</h3>
									<div className={scss.product_content}>
										<div className={scss.border_and_contents}>
											<div className={scss.product_rating_and_numbers}>
												<p className={scss.text_buy_product}>
													{data?.buyProduc}
												</p>
												<p>
													Артикул: <span>030696</span>
												</p>
												<div>
													<Rate defaultValue={5} />
													<p>{data?.Rating}</p>
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
														{data?.previousPrice}
													</h3>
												</div>
											</div>
											<div className={scss.product_colors_and_content}>
												<div className={scss.product_colors}>
													<ColorButton
														width="26px"
														height="26px"
														backgroundColor="rgb(0, 0, 0)"
													/>
													<ColorButton
														width="26px"
														height="26px"
														backgroundColor="rgb(128, 128, 160)"
													/>
													<ColorButton
														width="26px"
														height="26px"
														backgroundColor="rgb(121, 89, 116)"
													/>
													<ColorButton
														width="26px"
														height="26px"
														backgroundColor="rgb(211, 32, 46)"
													/>
													<ColorButton
														width="26px"
														height="26px"
														backgroundColor="rgb(57, 117, 242)"
													/>
												</div>
												<div className={scss.div_buttons_counts}>
													<button>-</button>
													{/* <span>{data?.quantity}</span> */}
													<span>1</span>
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
																data?.isFavorite === true
																	? `${scss.nooActiveButton} ${scss.activeButton}`
																	: `${scss.nooActiveButton}`
															}
															onClick={() =>
																data &&
																addFavoriteProduct(data.id, data.isFavorite)
															}
														>
															{data?.isFavorite === true ? (
																<IconRedHeart />
															) : (
																<IconHeart color="rgb(144, 156, 181)" />
															)}
														</button>
														<AddBasketButton
															onClick={() =>
																data &&
																addBasketProduct(data.id, data.isInBasket)
															}
															children={
																data?.isInBasket === true
																	? 'В корзине'
																	: 'В корзину'
															}
															className={
																data?.isInBasket === true
																	? `${scss.add_bas_button} ${scss.active}`
																	: `${scss.add_bas_button}`
															}
														/>
													</div>
												</div>
												<div className={scss.info_product}>
													<div className={scss.div_screen}>
														<p>
															Экран............................................
														</p>
														<h4>{data?.Screen}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>
															Цвет..............................................
														</p>
														<h4>{data?.colorProduct}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>Дата выпуска..............................</p>
														<h4>{data?.DateOfIssue}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>Операционная система............</p>
														<h4>{data?.operatingSystem}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>
															Память.........................................
														</p>
														<h4>{data?.Memory}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>SIM-карты...................................</p>
														<h4>{data?.SIMCards}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>Гарантия (месяцев)...................</p>
														<h4>{data?.WarrantyMonths}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>Процессор..................................</p>
														<h4>{data?.CPU}</h4>
													</div>
													<div className={scss.div_screen}>
														<p>
															Вес...............................................
														</p>
														<h4>{data?.Weight}</h4>
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
						alt={data?.productName}
					/>
				</Modal>
			</ConfigProvider>
		</>
	);
};

export default CardProductPage;
