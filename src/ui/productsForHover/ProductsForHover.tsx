import { useGetComparisonQuery } from '@/src/redux/api/comparison';
import scss from './ProductsForHover.module.scss';
import { IconX } from '@tabler/icons-react';
import { FC } from 'react';
import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import { useGetBasketQuery } from '@/src/redux/api/basket';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
interface ProductsForHoverTypes {
	setComparisonProducts?: (value: boolean) => void;
	comparisonProducts?: boolean;
	favoriteProducts?: boolean;
	setFavoriteProducts?: (value: boolean) => void;
	basketProducts?: boolean;
	setBasketProducts?: (value: boolean) => void;
}
export const ProductsForHover: FC<ProductsForHoverTypes> = ({
	setComparisonProducts,
	comparisonProducts,
	favoriteProducts,
	setFavoriteProducts,
	basketProducts,
	setBasketProducts
}) => {
	const { data: ComparisonData } = useGetComparisonQuery();
	const { data: FavoriteData } = useGetFavoriteQuery();
	const { data: BasketData } = useGetBasketQuery();
	const navigate = useNavigate();
	return (
		<section
			onMouseEnter={() => {
				if (comparisonProducts && setComparisonProducts) {
					setComparisonProducts(true);
				} else if (favoriteProducts && setFavoriteProducts) {
					setFavoriteProducts(true);
				} else if (basketProducts && setBasketProducts) {
					setBasketProducts(true);
				}
			}}
			onMouseLeave={() => {
				if (comparisonProducts && setComparisonProducts) {
					setComparisonProducts(false);
				} else if (favoriteProducts && setFavoriteProducts) {
					setFavoriteProducts(false);
				} else if (basketProducts && setBasketProducts) {
					setBasketProducts(false);
				}
			}}
			className={scss.products_hover_container}
		>
			<div className={scss.content_for_hover_products}>
				{comparisonProducts &&
					(ComparisonData?.length !== 0 ? (
						<div className={scss.overlfow_div}>
							{ComparisonData?.map((el) => (
								<div key={el.id} className={scss.display_content}>
									{el.images.map((e) => (
										<img src={e} alt={el.nameOfGadget} />
									))}
									<div className={scss.product_name_and_price_div}>
										<p>{el.nameOfGadget}</p>
										<h3>{el.price}</h3>
										<IconX color="rgb(144, 156, 181)" />
									</div>
								</div>
							))}
						</div>
					) : (
						<h2>Not comparison</h2>
					))}
				{comparisonProducts && ComparisonData?.length !== 0 && (
					<Button onClick={() => navigate('/comparison')}>Сравнить</Button>
				)}
				{favoriteProducts &&
					(FavoriteData?.length !== 0 ? (
						<div className={scss.overlfow_div}>
							{FavoriteData?.map((el) => (
								<div key={el.id} className={scss.display_content}>
									<img src={el.image} alt={el.nameOfGadget} />

									<div className={scss.product_name_and_price_div}>
										<p>{el.nameOfGadget}</p>
										<h3>{el.price}</h3>
										<IconX color="rgb(144, 156, 181)" />
									</div>
								</div>
							))}
						</div>
					) : (
						<h2>Not favorite</h2>
					))}
				{favoriteProducts && FavoriteData?.length !== 0 && (
					<Button onClick={() => navigate('/favorite')}>
						Перейти в избранное
					</Button>
				)}
				{basketProducts &&
					(BasketData?.length !== 0 ? (
						<div className={scss.overlfow_div}>
							{BasketData?.map((el) => (
								<div key={el.id} className={scss.display_content}>
									<img src={el.image} alt={el.nameOfGadget} />

									<div className={scss.product_name_and_price_div}>
										<p>{el.nameOfGadget}</p>
										<h3>{el.price}</h3>
										<IconX color="rgb(144, 156, 181)" />
									</div>
								</div>
							))}
						</div>
					) : (
						<h2>Not basket</h2>
					))}
				{basketProducts && BasketData?.length !== 0 && (
					<Button onClick={() => navigate('/basket')}>Корзина</Button>
				)}
			</div>
		</section>
	);
};
