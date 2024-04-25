import { useState } from 'react';
import scss from './ProductsNew.module.scss';
import { useGetProductsQuery } from '@/src/redux/api/product';
import { Rate, Skeleton, Tooltip } from 'antd';
import AddBasketButton from '../../../../ui/customButtons/AddBasketButton.tsx';
import { IconHeart, IconScale } from '@tabler/icons-react';
import photoIsIphone from '../../../../assets/productImage/IphoneCard.png';
import ShowMoreButton from '@/src/ui/customButtons/ShowMoreButton.tsx';
import { IconRedHeart } from '@/src/assets/icons';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
import { useFavoritePutProductMutation } from '@/src/redux/api/favorite';
import { useComparisonPutProductMutation } from '@/src/redux/api/comparison';

const ProductsNew = () => {
	const { data: productData = [], isLoading, refetch } = useGetProductsQuery();
	const [comparisonPutProduct] = useComparisonPutProductMutation();
	const [basketPutProduct] = useBasketPutProductMutation();
	const [putFavoriteProduct] = useFavoritePutProductMutation();
	const [isVisible, setIsVisible] = useState(5);
	const [showMore, setShowMore] = useState(false);
	const [activeScaleId, setActiveScaleId] = useState<null | number | string>(
		null
	);
	const [activeHeartId, setActiveHeartId] = useState<null | number | string>(
		null
	);
	const [isBasket, setIsBasket] = useState<null | number | string>(null);

	const handleVisible = () => {
		setIsVisible(isVisible + 5);
		setShowMore(!showMore);
	};

	const handleShowMore = () => {
		setIsVisible(isVisible - 5);
		setShowMore(!showMore);
	};

	const handleScaleClick = async (_id: number, isComparison: boolean) => {
		await comparisonPutProduct({ _id, isComparison: !isComparison });
		refetch();
		setActiveScaleId(activeScaleId === _id ? null : _id);
	};

	const handleHeartClick = async (_id: number, isFavorite: boolean) => {
		await putFavoriteProduct({ _id, isFavorite: !isFavorite });
		refetch();
		setActiveHeartId(activeHeartId === _id ? null : _id);
	};

	const handleBasket = async (_id: number, isInBasket: boolean) => {
		await basketPutProduct({ _id, isInBasket: !isInBasket });
		refetch();
		setIsBasket(isBasket === _id ? null : _id);
	};

	return (
		<div className={scss.ProductsNew}>
			<div className="container">
				<div className={scss.content}>
					<h2 className={scss.new}>Новинки</h2>
					<div className={scss.product_cards}>
						{isLoading ? (
							<Skeleton />
						) : (
							<>
								{productData?.slice(0, isVisible).map((item) => (
									<div className={scss.div_product_map} key={item._id}>
										<div className={scss.div_icons}>
											<div className={scss.minus_promotion}>New</div>
											<div className={scss.div_two_icons}>
												<button
													onMouseEnter={() => setActiveScaleId(item._id)}
													onMouseLeave={() => setActiveScaleId(null)}
													onClick={() =>
														handleScaleClick(item._id, item.isComparison)
													}
												>
													<Tooltip
														title={
															item.isComparison === false
																? 'Добавить к сравнению'
																: 'Удалить из сравнения'
														}
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
												>
													<button
														className={scss.heart}
														onClick={() =>
															handleHeartClick(item._id, item.isFavorite)
														}
														onMouseEnter={() => setActiveHeartId(item._id)}
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
												src={photoIsIphone}
												alt={item.productName}
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
													<p>{item.previousPrice} c</p>
												</div>
												<AddBasketButton
													onClick={() =>
														handleBasket(item._id, item.isInBasket)
													}
													children={
														item.isInBasket === true ? `В корзине` : `В корзину`
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
				</div>
			</div>
			<div className={scss.show_more_button}>
				<ShowMoreButton
					onClick={!showMore ? handleVisible : handleShowMore}
					children={showMore ? 'Скрыть' : 'Показать ещё'}
				/>
			</div>
		</div>
	);
};

export default ProductsNew;
