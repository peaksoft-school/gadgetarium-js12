import { useState } from 'react';
import scss from './ProductsRecom.module.scss';
import { Rate, Skeleton, Tooltip } from 'antd';
import AddBasketButton from '../../../../ui/customButtons/AddBasketButton.tsx';
import { IconFileLike, IconHeart, IconScale } from '@tabler/icons-react';
import ShowMoreButton from '@/src/ui/customButtons/ShowMoreButton.tsx';
import { IconRedHeart } from '@/src/assets/icons';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
import { useFavoritePutProductMutation } from '@/src/redux/api/favorite';
import { useComparisonPatchProductsMutation } from '@/src/redux/api/comparison';
import { useNavigate } from 'react-router-dom';
import { useGetProductsRecomQuery } from '@/src/redux/api/productsRecom/index.ts';

const ProductsRecom = () => {
	const { data: productData, isLoading, refetch } = useGetProductsRecomQuery();
	const [comparisonPutProduct] = useComparisonPatchProductsMutation();
	const [basketPutProduct] = useBasketPutProductMutation();
	const [putFavoriteProduct] = useFavoritePutProductMutation();
	const [isVisible, setIsVisible] = useState(5);
	const [showMore, setShowMore] = useState(false);

	const navigate = useNavigate();

	const handleVisible = () => {
		setIsVisible(isVisible + 5);
		setShowMore(!showMore);
	};

	const handleShowMore = () => {
		setIsVisible(isVisible - 5);
		setShowMore(!showMore);
	};

	const handleScaleClick = async (subGadgetId: number) => {
		await comparisonPatchProduct(subGadgetId);
		refetch();
	};

	const handleHeartClick = async (subGadgetId: number) => {
		await putFavoriteProduct(subGadgetId);
		refetch();
	};

	const handleBasket = async (subGadgetId: number) => {
		await basketPutProduct({
			id: subGadgetId,
			basket: false
		});
		refetch();
	};

	return (
		<div className={scss.ProductsRecom}>
			<div className="container">
				<div className={scss.content}>
					<h2 className={scss.recom_text}>Мы рекомендуем</h2>
					<div className={scss.title}>
						<div className={scss.product_cards}>
							{isLoading ? (
								<>
									<Skeleton.Button
										active
										block
										style={{ width: 290, height: 450 }}
									/>
									<Skeleton.Button
										active
										block
										style={{ width: 290, height: 450 }}
									/>
									<Skeleton.Button
										active
										block
										style={{ width: 290, height: 450 }}
									/>
									<Skeleton.Button
										active
										block
										style={{ width: 290, height: 450 }}
									/>
									<Skeleton.Button
										active
										block
										style={{ width: 290, height: 450 }}
									/>
								</>
							) : (
								<>
									{productData?.mainPages.slice(0, isVisible).map((item) => (
										<div className={scss.div_product_map} key={item.id}>
											<div className={scss.div_icons}>
												<div className={scss.minus_promotion}>
													<IconFileLike />
												</div>
												<div className={scss.div_two_icons}>
													<button
														onMouseEnter={() => setActiveScaleId(item.id)}
														onMouseLeave={() => setActiveScaleId(null)}
														onClick={() => handleScaleClick(item.id)}
													>
														<Tooltip
															title={
																item.comparison === false
																	? 'Добавить к сравнению'
																	: 'Удалить из сравнения'
															}
															color="#c11bab"
														>
															<IconScale
																className={
																	item.comparison === true
																		? `${scss.scale} ${scss.active}`
																		: scss.scale
																}
															/>
														</Tooltip>
													</button>
													<Tooltip
														title={
															item.likes === false
																? 'Добавить в избранное'
																: 'Удалить из избранного'
														}
														color="#c11bab"
													>
														<button
															className={scss.heart}
															onClick={() => handleHeartClick(item.id)}
															onMouseEnter={() => setActiveHeartId(item.id)}
															onMouseLeave={() => setActiveHeartId(null)}
														>
															{item.likes === true ? (
																<IconRedHeart />
															) : (
																<IconHeart />
															)}
														</button>
													</Tooltip>
												</div>
											</div>
											<div className={scss.div_img}>
												<img
													className={scss.img_product}
													src={item.image}
													alt={item.nameOfGadget}
												/>
											</div>
											<div className={scss.div_product_contents}>
												<p className={scss.tag_color_green}>
													В наличии {item.quantity}
												</p>
												<h3>{item.nameOfGadget}</h3>
												<p>
													Рейтинг <Rate allowHalf defaultValue={3.5} />{' '}
													{item.rating}
												</p>
												<div className={scss.div_buttons_and_price}>
													<div className={scss.product_price}>
														<h2>{item.price} c</h2>
													</div>
													{item.basket ? (
														<button onClick={() => navigate('/basket')}>
															basket
														</button>
													) : (
														<AddBasketButton
															onClick={() => handleBasket(item.id)}
															children={'В корзину'}
															className={scss.add_bas_button}
														/>
													)}
												</div>
											</div>
										</div>
									))}
								</>
							)}
						</div>
						<div className={scss.show_more_button}>
							<ShowMoreButton
								onClick={!showMore ? handleVisible : handleShowMore}
								children={showMore ? 'Скрыть' : 'Показать ещё'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsRecom;
