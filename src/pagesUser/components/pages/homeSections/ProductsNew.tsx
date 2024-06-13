/* eslint-disable prefer-const */
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
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductsNew = () => {
	const [comparisonPatchProduct] = useComparisonPatchProductsMutation();
	const [basketPutProduct] = useBasketPutProductMutation();
	const [putFavoriteProduct] = useFavoritePutProductMutation();
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const handleShowAllPhones = (page: number) => {
		let size = 5 + page;
		searchParams.set('page', '1');
		searchParams.set('size', size.toString());
		setSearchParams(searchParams);
		navigate(`/?${searchParams.toString()}`);
	};

	const handlePaginationResult = () => {
		searchParams.set('page', '1');
		searchParams.set('size', '5');
		setSearchParams(searchParams);
		navigate(`/?${searchParams.toString()}`);
	};

	const { data, isLoading, refetch } = useGetProductsNewsQuery({
		page: searchParams.toString(),
		size: searchParams.toString()
	});

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
			id: subGadgetId
		});
		refetch();
	};

	console.log(data?.mainPages);

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
									{data?.mainPages.map((el) => (
										<div className={scss.div_product_map} key={el.id}>
											<div className={scss.div_icons}>
												<div className={scss.minus_promotion}>
													{el.newProduct}New
												</div>
												<div className={scss.div_two_icons}>
													<button
														onClick={() => handleScaleClick(el.subGadgetId)}
													>
														<Tooltip
															title={
																el.comparison
																	? 'Удалить из сравнения'
																	: 'Добавить к сравнению'
															}
															color="#c11bab"
														>
															<IconScale
																className={
																	el.comparison
																		? `${scss.scale} ${scss.active}`
																		: scss.scale
																}
															/>
														</Tooltip>
													</button>
													<Tooltip
														title={
															el.likes
																? 'Удалить из избранного'
																: 'Добавить в избранное'
														}
														color="#c11bab"
													>
														<button
															className={scss.heart}
															onClick={() => handleHeartClick(el.subGadgetId)}
														>
															{el.likes ? <IconRedHeart /> : <IconHeart />}
														</button>
													</Tooltip>
												</div>
											</div>
											<div className={scss.div_img}>
												<img
													className={scss.img_product}
													src={el.image}
													alt={el.nameOfGadget}
												/>
											</div>
											<div className={scss.div_product_contents}>
												<p className={scss.tag_color_green}>
													В наличии {el.quantity}
												</p>
												<h3>
													{el.nameOfGadget.length >= 28
														? el.nameOfGadget.slice(0, 22) + '...'
														: el.nameOfGadget}
												</h3>
												<p>
													Рейтинг <Rate allowHalf defaultValue={3.5} />
													{el.rating}
												</p>
												<div className={scss.div_buttons_and_price}>
													<div className={scss.product_price}>
														<h2>{el.price} c</h2>
													</div>
													{el.basket === true ? (
														<button
															onClick={() => navigate('/basket')}
															className={scss.add_bas_button_active}
														>
															Перейти в корзину
														</button>
													) : (
														<AddBasketButton
															onClick={() => handleBasket(el.subGadgetId)}
															className={scss.add_bas_button}
														>
															В корзину
														</AddBasketButton>
													)}
												</div>
											</div>
										</div>
									))}
								</>
							)}
						</div>
						<div className={scss.show_more_button}>
							{data?.mainPages.length.toString() ===
							searchParams.get('size') ? (
								<ShowMoreButton
									children={'Показать ещё'}
									onClick={() => handleShowAllPhones(data?.mainPages.length)}
								/>
							) : (
								<ShowMoreButton
									children={'Скрыть'}
									onClick={handlePaginationResult}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsNew;
