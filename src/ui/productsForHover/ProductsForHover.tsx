import { useGetComparisonQuery } from '@/src/redux/api/comparison';
import scss from './ProductsForHover.module.scss';
import { IconX } from '@tabler/icons-react';
import { FC } from 'react';
import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import { useGetBasketQuery } from '@/src/redux/api/basket';
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
	return (
		<section
			onMouseEnter={() => {
				if (comparisonProducts) {
					setComparisonProducts(true);
				} else if (favoriteProducts) {
					setFavoriteProducts(true);
				} else if (basketProducts) {
					setBasketProducts(true);
				}
			}}
			onMouseLeave={() => {
				if (comparisonProducts) {
					setComparisonProducts(false);
				} else if (favoriteProducts) {
					setFavoriteProducts(false);
				} else if (basketProducts) {
					setBasketProducts(false);
				}
			}}
			className={scss.products_hover_container}
		>
			<div className={scss.content_for_hover_products}>
				{comparisonProducts &&
					(ComparisonData?.length !== 0 ? (
						ComparisonData?.map((el) => (
							<div key={el.id} className={scss.display_content}>
								{el.images.map((e) => (
									<img src={e} alt={el.nameOfGadget} />
								))}
								<div>
									<p>{el.nameOfGadget}</p>
									<h3>{el.price}</h3>
									<IconX />
								</div>
							</div>
						))
					) : (
						<h2>Not comparison</h2>
					))}
				{favoriteProducts &&
					(FavoriteData?.length !== 0 ? (
						FavoriteData?.map((el) => <div key={el.id}></div>)
					) : (
						<h2>Not favorite</h2>
					))}
				{basketProducts &&
					(BasketData?.length !== 0 ? (
						BasketData?.map((el) => <div key={el.id}></div>)
					) : (
						<h2>Not basket</h2>
					))}
			</div>
		</section>
	);
};
