import {
	useDeleteByIdComparisonProductMutation,
	useGetComparisonQuery
} from '@/src/redux/api/comparison';
import scss from './ProductsForHover.module.scss';
import { IconX } from '@tabler/icons-react';
import { FC } from 'react';
import {
	useDeleteByIdFavoriteProductMutation,
	useGetFavoriteQuery
} from '@/src/redux/api/favorite';
import {
	useDeleteByIdBasketProductMutation,
	useGetBasketQuery
} from '@/src/redux/api/basket';
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
	const [deleteByIdBasketProduct] = useDeleteByIdBasketProductMutation();
	const [deleteByIdFavoriteProduct] = useDeleteByIdFavoriteProductMutation();
	const [deleteByIdComparisonProduct] =
		useDeleteByIdComparisonProductMutation();
	const navigate = useNavigate();
	const handleDeleteByIdBasketProductFunk = async (gadgetId: number) => {
		try {
			await deleteByIdBasketProduct(gadgetId);
		} catch (error) {
			console.error(error);
		}
	};
	const handleDeleteByIdFavoriteProduct = async (subGadgetId: number) => {
		try {
			await deleteByIdFavoriteProduct(subGadgetId);
		} catch (error) {
			console.error(error);
		}
	};
	const handleDeleteByIdComparisonProduct = async (subGadgetId: number) => {
		try {
			await deleteByIdComparisonProduct(subGadgetId);
		} catch (error) {
			console.error(error);
		}
	};
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
										<IconX
											onClick={() => handleDeleteByIdComparisonProduct(el.id)}
											color="rgb(144, 156, 181)"
											width={'14px'}
											height={'14px'}
											cursor={'pointer'}
										/>
									</div>
								</div>
							))}
						</div>
					) : (
						<h2>Сравнивать пока нечего</h2>
					))}
				{comparisonProducts && ComparisonData?.length !== 0 && (
					<div className={scss.button_div}>
						<Button
							className={scss.button}
							onClick={() => navigate('/comparison')}
						>
							Сравнить
						</Button>
					</div>
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
										<IconX
											onClick={() => handleDeleteByIdFavoriteProduct(el.id)}
											color="rgb(144, 156, 181)"
											width={'14px'}
											height={'14px'}
											cursor={'pointer'}
										/>
									</div>
								</div>
							))}
						</div>
					) : (
						<h2>В избранном пока пусто</h2>
					))}
				{favoriteProducts && FavoriteData?.length !== 0 && (
					<div className={scss.button_div}>
						<Button
							className={scss.button}
							onClick={() => navigate('/favorite')}
						>
							Перейти в избранное
						</Button>
					</div>
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
										<IconX
											onClick={() => handleDeleteByIdBasketProductFunk(el.id)}
											color="rgb(144, 156, 181)"
											width={'14px'}
											height={'14px'}
											cursor={'pointer'}
										/>
									</div>
								</div>
							))}
						</div>
					) : (
						<h2>Ваша корзина пуста</h2>
					))}
				{basketProducts && BasketData?.length !== 0 && (
					<div className={scss.button_div}>
						<Button className={scss.button} onClick={() => navigate('/basket')}>
							Корзина
						</Button>
					</div>
				)}
			</div>
		</section>
	);
};
