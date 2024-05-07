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
import { useComparisonPutProductMutation } from '@/src/redux/api/comparison';
const FavoriteSection = () => {
	const navigate = useNavigate();
	const { data } = useGetFavoriteQuery();
	const [addBasketProduct] = useBasketPutProductMutation();
	const [addComparisonProducts] = useComparisonPutProductMutation();
	const [addFavoriteProducts] = useFavoritePutProductMutation();
	const handleAddBasketProduct = async (_id: number, isInBasket: boolean) => {
		await addBasketProduct({ _id, isInBasket: !isInBasket });
	};
	const handleAddComparisonProducts = async (
		_id: number,
		isComparison: boolean
	) => {
		await addComparisonProducts({ _id, isComparison: !isComparison });
	};
	const handleDeleteIsFavoriteProducts = async (
		_id: number,
		isFavorite: boolean
	) => {
		console.log(isFavorite);
		await addFavoriteProducts({ _id, isFavorite: false });
	};
	const handleAddFavoriteProduct = async (_id: number, isFavorite: boolean) => {
		await addFavoriteProducts({ _id, isFavorite: !isFavorite });
	};
	return (
		<div className={scss.FavoriteSection}>
			<div className="container">
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
											handleDeleteIsFavoriteProducts(el._id, el.isFavorite)
										)
									}
								/>{' '}
								<p
									onClick={() =>
										data?.forEach((el) =>
											handleDeleteIsFavoriteProducts(el._id, el.isFavorite)
										)
									}
								>
									Очистить список товаров
								</p>
							</div>
							<div className={scss.container_products}>
								{data &&
									data?.map((item) => (
										<div key={item._id} className={scss.container_product}>
											<div className={scss.content_product}>
												<div
													className={
														scss.product_basket_and_favorite_buttons_and_photo
													}
												>
													{item.sale ? (
														<img src={item.sale} alt={item.productName} />
													) : (
														<div></div>
													)}
													<div className={scss.div_icons}>
														<IconScale
															onClick={() =>
																handleAddComparisonProducts(
																	item._id,
																	item.isComparison
																)
															}
															style={
																item.isComparison
																	? { color: 'rgb(181, 18, 154)' }
																	: { color: 'rgb(170, 177, 191)' }
															}
														/>
														{item.isFavorite ? (
															<div
																onClick={() =>
																	handleAddFavoriteProduct(
																		item._id,
																		item.isFavorite
																	)
																}
															>
																<IconHeartRed />
															</div>
														) : (
															<IconHeart
																onClick={() =>
																	handleAddFavoriteProduct(
																		item._id,
																		item.isFavorite
																	)
																}
															/>
														)}
													</div>
												</div>
												<div className={scss.photo_div}>
													<img src={item.image} alt={item.productName} />
												</div>
												<div className={scss.products_name_and_rating}>
													<p className={scss.text_stock}>{item.stock}</p>
													<p className={scss.product_name}>
														{item.productName}
													</p>
													<p>
														Рейтинг <Rate defaultValue={item.Rating} />
													</p>
												</div>
												<div
													className={
														scss.div_for_product_prices_and_basket_button
													}
												>
													<div className={scss.prices_div_product}>
														<h2>{item.price}</h2>
														<p>{item.oldPrice}</p>
													</div>
													<AddBasketButton
														onClick={() =>
															item &&
															handleAddBasketProduct(item._id, item.isInBasket)
														}
														children={
															item.isInBasket === true
																? 'В корзине'
																: 'В корзину'
														}
														className={
															item.isInBasket === true
																? `${scss.noo_active_basket_button} ${scss.active_basket_button}`
																: `${scss.noo_active_basket_button}`
														}
													/>
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
			</div>
		</div>
	);
};

export default FavoriteSection;
