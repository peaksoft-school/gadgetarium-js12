/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	useDeleteAllProductMutation,
	useFavoritePutProductMutation,
	useGetFavoriteQuery
} from '@/src/redux/api/favorite';
import favorite from '../../../../assets/sammy_order_completed_by_a_delivery_girl_1.png';
import scss from './FavoriteSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IconHeart, IconPlaystationX, IconScale } from '@tabler/icons-react';
import { Button, Rate, Tooltip } from 'antd';
import AddBasketButton from '@/src/ui/customButtons/AddBasketButton';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
import { IconRedHeart } from '@/src/assets/icons';
import { useComparisonPatchProductsMutation } from '@/src/redux/api/comparison';
const FavoriteSection = () => {
	const navigate = useNavigate();
	const { data, isLoading, refetch } = useGetFavoriteQuery();
	const [comparisonPatchProduct] = useComparisonPatchProductsMutation();
	const [putFavoriteProduct] = useFavoritePutProductMutation();
	const [basketPutProduct] = useBasketPutProductMutation();
	const [deleteAll] = useDeleteAllProductMutation();

	const handleBasket = async (subGadgetId: number) => {
		await basketPutProduct({
			id: subGadgetId,
			basket: false
		});
		refetch();
	};

	const handleScaleClick = async (subGadgetId: number) => {
		await comparisonPatchProduct(subGadgetId);
		refetch();
	};

	const handleHeartClick = async (subGadgetId: number) => {
		await putFavoriteProduct(subGadgetId);
		refetch();
	};

	const handleDeleteIsFavoriteProducts = async (subGadgetId: number) => {
		await deleteAll(subGadgetId);
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
								<div
									className={scss.icon_and_text_div}
									onClick={() =>
										data?.forEach((el) =>
											handleDeleteIsFavoriteProducts(el.likes)
										)
									}
								>
									<IconPlaystationX style={{ cursor: 'pointer' }} />
									<p>Очистить список товаров</p>
								</div>
								<div className={scss.container_products}>
									{data &&
										data?.map((item) => (
											<div
												key={item.subGadgetId}
												className={scss.container_product}
											>
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
															<button
																className={scss.scale}
																onClick={() => handleScaleClick(item.id)}
															>
																<Tooltip
																	title={
																		item.comparison
																			? 'Удалить из сравнения'
																			: 'Добавить к сравнению'
																	}
																	color="#c11bab"
																>
																	<IconScale
																		className={
																			item.comparison
																				? `${scss.scale} ${scss.active}`
																				: scss.scale
																		}
																	/>
																</Tooltip>
															</button>
															<Tooltip
																title={
																	item.likes
																		? 'Удалить из избранного'
																		: 'Добавить в избранное'
																}
																color="#c11bab"
															>
																<button
																	className={scss.heart}
																	onClick={() =>
																		handleHeartClick(item.id)
																	}
																>
																	{item.likes ? (
																		<IconRedHeart />
																	) : (
																		<IconHeart />
																	)}
																</button>
															</Tooltip>
														</div>
													</div>
													<div className={scss.photo_div}>
														<img src={item.image} alt={item.brandName} />
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
															<h2>{item.price}c</h2>
															<p>{item.price}</p>
														</div>
														<div
															className={
																!item.price
																	? `${scss.button_for_basket_div_noo_active} ${scss.button_for_basket_div_active}`
																	: `${scss.button_for_basket_div_noo_active}`
															}
														>
															{item.basket === true ? (
																<button
																	onClick={() => navigate('/basket')}
																	className={scss.add_bas_button_active}
																>
																	Перейти в корзину
																</button>
															) : (
																<AddBasketButton
																	onClick={() => handleBasket(item.id)}
																	className={scss.add_bas_button}
																>
																	В корзину
																</AddBasketButton>
															)}
														</div>
													</div>
												</div>
											</div>
										))}
								</div>
								<div className={scss.button_div}>
									<Button onClick={() => navigate('/')} className={scss.button}>
										Продолжить покупки
									</Button>
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
