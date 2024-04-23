import React, { useState } from 'react';
import scss from './ProductsPromotion.module.scss';
import {
	useBasketPutProductMutation,
	useGetProductsQuery
} from '@/src/redux/api/product';
import { Rate, Skeleton } from 'antd';
import AddBasketButton from '../../../../ui/customButtons/AddBasketButton';
import { IconHeart, IconScale } from '@tabler/icons-react';
import photoIsIphone from '../../../../assets/productImage/IphoneCard.png';
import ShowMoreButton from '@/src/ui/customButtons/ShowMoreButton';
import { IconRedHeart } from '@/src/assets/icons';

const ProductsPromotion = () => {
	const { data: productData = [], isLoading } = useGetProductsQuery();
	const [basketPutProduct] = useBasketPutProductMutation();
	const [isVisible, setIsVisible] = useState(5);
	const [showMore, setShowMore] = useState(false);
	const [activeScaleId, setActiveScaleId] = useState<null | number | string>(
		null
	);
	const [activeHeartId, setActiveHeartId] = useState<null | number | string>(
		null
	);
	const [isBasket, setIsBasket] = useState(false);

	const handleBasket = () => {
		setIsBasket(!isBasket);
	};

	const handleVisible = () => {
		setIsVisible(isVisible + 5);
		setShowMore(!showMore);
	};

	const handleShowMore = () => {
		setIsVisible(isVisible - 5);
		setShowMore(!showMore);
	};

	const handleScaleClick = async (_id: number, isInBasket: boolean) => {
		await basketPutProduct({ _id, isInBasket: !isInBasket });
		setActiveScaleId(activeScaleId === _id ? null : _id);
	};

	const handleHeartClick = async (_id: number, isFavorite: boolean) => {
		await basketPutProduct({ _id, isFavorite: !isFavorite });
		setActiveHeartId(activeHeartId === _id ? null : _id);
	};

	return (
		<div className={scss.Container_store}>
			{isLoading ? (
				<Skeleton />
			) : (
				<>
					{productData?.slice(0, isVisible).map((item) => (
						<div className={scss.div_product_map} key={item._id}>
							<div className={scss.div_icons}>
								<div className={scss.minus_promotion}> -10%</div>
								<div className={scss.div_two_icons}>
									<IconScale
										onClick={() => handleScaleClick(item._id, item.isInBasket)}
										className={
											item.isInBasket === true
												? `${scss.scale} ${scss.active}`
												: scss.scale
										}
									/>
									<div
										className={scss.heart}
										onClick={() => handleHeartClick(item._id, item.isFavorite)}
									>
										{item.isFavorite === true || activeHeartId === item._id ? (
											<IconRedHeart />
										) : (
											<IconHeart />
										)}
									</div>
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
									Рейтинг <Rate allowHalf defaultValue={3.5} /> {item.Rating}
								</p>
								<div className={scss.div_buttons_and_price}>
									<div className={scss.product_price}>
										<h2>{item.price} </h2>
										<p>{item.previousPrice}</p>
									</div>
									<AddBasketButton
										children={isBasket ? 'В корзине' : 'В корзину'}
										onClick={handleBasket}
									/>
								</div>
							</div>
						</div>
					))}
					<div className={scss.show_more_button}>
						<ShowMoreButton
							onClick={!showMore ? handleVisible : handleShowMore}
							children={showMore ? 'Скрыть' : 'Показать ещё'}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductsPromotion;
