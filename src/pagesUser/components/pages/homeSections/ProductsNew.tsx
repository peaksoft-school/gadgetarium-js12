import { useState } from 'react';
import scss from './ProductsNew.module.scss';
import { Rate, Skeleton, Tooltip } from 'antd';
import AddBasketButton from '../../../../ui/customButtons/AddBasketButton.tsx';
import { IconHeart, IconScale } from '@tabler/icons-react';
import ShowMoreButton from '@/src/ui/customButtons/ShowMoreButton.tsx';
import { IconRedHeart } from '@/src/assets/icons';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
import { useFavoritePutProductMutation } from '@/src/redux/api/favorite';
import { useComparisonPatchProductsMutation } from '@/src/redux/api/comparison';
import { useGetProductsNewsQuery } from '@/src/redux/api/productsNews/index.ts';
import { useNavigate } from 'react-router-dom';

const ProductsNew = () => {
	const { data: productData, isLoading, refetch } = useGetProductsNewsQuery();
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
		<div className={scss.ProductsNew}>
			<div className="container">
				<div className={scss.content}>
					<h2 className={scss.new}>Новинки</h2>
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
												<div className={scss.minus_promotion}>New</div>
												<div className={scss.div_two_icons}>
													<button
														onMouseEnter={() => setActiveScaleId(item.id)}
														onMouseLeave={() => setActiveScaleId(null)}
														onClick={() =>
															handleScaleClick(item.id, item.isComparison)
														}
													>
														<Tooltip
															title={
																item.isComparison === false
																	? 'Добавить к сравнению'
																	: 'Удалить из сравнения'
															}
															color="#c11bab"
														>
															<IconScale
																className={
																	item.isComparison === true
																		? `${scss.scale} ${scss.active}`
																		: scss.scale
																}
															/>
														</Tooltip>
													</button>
													<Tooltip
														title={
															item.isFavorite === false
																? 'Добавить в избранное'
																: 'Удалить из избранного'
														}
														color="#c11bab"
													>
														<button
															className={scss.heart}
															onClick={() =>
																handleHeartClick(item.id, item.isFavorite)
															}
															onMouseEnter={() => setActiveHeartId(item.id)}
															onMouseLeave={() => setActiveHeartId(null)}
														>
															{item.isFavorite === true ? (
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
													В наличии {item.buyProduc}
												</p>
												<h3>{item.productName}</h3>
												<p>
													Рейтинг <Rate allowHalf defaultValue={3.5} />{' '}
													{item.Rating}
												</p>
												<div className={scss.div_buttons_and_price}>
													<div className={scss.product_price}>
														<h2>{item.price} c</h2>
													</div>
													<AddBasketButton
														onClick={() =>
															handleBasket(item.id, item.isInBasket)
														}
														children={
															item.isInBasket === true
																? `В корзине`
																: `В корзину`
														}
														className={
															item.isInBasket === true
																? `${scss.add_bas_button} ${scss.active}`
																: `${scss.add_bas_button}`
														}
													/>
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

export default ProductsNew;
