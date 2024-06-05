/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	useFavoritePutProductMutation,
	useGetFavoriteQuery
} from '@/src/redux/api/favorite';
import favorite from '../../../../assets/sammy_order_completed_by_a_delivery_girl_1.png';
import scss from './FavoriteSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IconHeart, IconPlaystationX, IconScale } from '@tabler/icons-react';
import { Button, Rate } from 'antd';
import IconHeartRed from '@/src/assets/icons/icon-heart-red';
import AddBasketButton from '@/src/ui/customButtons/AddBasketButton';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
// import { useComparisonPutProductMutation } from '@/src/redux/api/comparison';
const FavoriteSection = () => {
	const navigate = useNavigate();
	const { data, isLoading } = useGetFavoriteQuery();
	const [addBasketProduct] = useBasketPutProductMutation();
	// const [addComparisonProducts] = useComparisonPutProductMutation();
	const [addFavoriteProducts] = useFavoritePutProductMutation();
	const handleAddBasketProduct = async (id: number, isInBasket: boolean) => {
		await addBasketProduct({ id, basket: !isInBasket });
	};
	// const handleAddComparisonProducts = async (
	// 	id: number,
	// 	comparison: boolean
	// ) => {
	// 	await addComparisonProducts({ id, comparison: !comparison });
	// };
	const handleDeleteIsFavoriteProducts = async (id: number, likes: boolean) => {
		console.log(likes);
		await addFavoriteProducts({ id, likes: false });
	};
	const handleAddFavoriteProduct = async (id: number, likes: boolean) => {
		await addFavoriteProducts({ id, likes: !likes });
	};
	return (
		<div className={scss.FavoriteSection}>
			<div className="container">
				{isLoading ? (
					<h1>IsLoading...</h1>
				) : (
					<div className={scss.content}>
						<div className={scss.content_products_page}>
							<p
								className={scss.text_home_user_page}
								onClick={() => navigate('/')}
							>
								Главная »
							</p>
							<p>Избранное</p>
						</div>
						<div className={scss.div_for_text_and_border}>
							<h2>Избранное</h2>
							<div className={scss.border}></div>
						</div>
						{data?.length === 0 ? (
							<>
								<div className={scss.photo_div}>
									<img src={favorite} alt="favorite" />
								</div>
								<div className={scss.text_after_img}>
									<h3>В избранном пока пусто</h3>
									<div className={scss.texts_div}>
										<p>Воспользуйтесь поиском или каталогом,</p>
										<p> выберите нужные товары и добавьте их в избранное!</p>
									</div>
									<Link to="/">
										<button>К покупкам</button>
									</Link>
								</div>
							</>
						) : (
							<div className={scss.container_products_favorite}>
								<div className={scss.icon_and_text_div}>
									<IconPlaystationX
										style={{ cursor: 'pointer' }}
										onClick={() =>
											data?.forEach((el) =>
												handleDeleteIsFavoriteProducts(el.id, el.likes)
											)
										}
									/>{' '}
									<p
										onClick={() =>
											data?.forEach((el) =>
												handleDeleteIsFavoriteProducts(el.id, el.likes)
											)
										}
									>
										Очистить список товаров
									</p>
								</div>
								<div className={scss.container_products}>
									{data &&
										data?.map((item) => (
											<div key={item.id} className={scss.container_product}>
												<div className={scss.content_product}>
													<div
														className={
															scss.product_basket_and_favorite_buttons_and_photo
														}
													>
														{item.image ? (
															<img src={item.image} alt={item.brandName} />
														) : (
															<div></div>
														)}
														<div className={scss.div_icons}>
															<IconScale
																onClick={() =>
																	handleAddComparisonProducts(
																		item.id,
																		item.comparison
																	)
																}
																style={
																	item.comparison
																		? {
																				color: 'rgb(181, 18, 154)',
																				cursor: 'pointer'
																			}
																		: {
																				color: 'rgb(170, 177, 191)',
																				cursor: 'pointer'
																			}
																}
															/>
															{item.likes ? (
																<div
																	style={{ cursor: 'pointer' }}
																	onClick={() =>
																		handleAddFavoriteProduct(
																			item.id,
																			item.likes
																		)
																	}
																>
																	<IconHeartRed />
																</div>
															) : (
																<IconHeart
																	cursor={'pointer'}
																	onClick={() =>
																		handleAddFavoriteProduct(
																			item.id,
																			item.likes
																		)
																	}
																/>
															)}
														</div>
													</div>
													<div className={scss.photo_div}>
														<Link to={`/gadget/${item.id}`}>
															<img src={item.image} alt={item.brandName} />
														</Link>
													</div>
													<div className={scss.products_name_and_rating}>
														<p className={scss.text_stock}>{item.price}</p>
														<p className={scss.product_name}>
															{item.nameOfGadget}
														</p>
														<p>
															Рейтинг <Rate defaultValue={item.rating} />
														</p>
													</div>
													<div
														className={
															scss.div_for_product_prices_and_basket_button
														}
													>
														<div className={scss.prices_div_product}>
															<h2>{item.price}</h2>
															<p>{item.price}</p>
														</div>
														<div
															className={
																!item.price
																	? `${scss.button_for_basket_div_noo_active} ${scss.button_for_basket_div_active}`
																	: `${scss.button_for_basket_div_noo_active}`
															}
														>
															<AddBasketButton
																onClick={() =>
																	item &&
																	handleAddBasketProduct(item.id, item.basket)
																}
																children={
																	item.basket === true
																		? 'В корзине'
																		: 'В корзину'
																}
																className={
																	item.basket === true
																		? `${scss.noo_active_basket_button} ${scss.active_basket_button}`
																		: `${scss.noo_active_basket_button}`
																}
															/>
														</div>
													</div>
												</div>
											</div>
										))}
								</div>
								<div className={scss.button_div}>
									<Button className={scss.button}>Продолжить покупки</Button>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default FavoriteSection;
