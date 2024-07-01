/* eslint-disable react-hooks/rules-of-hooks */
import {
	useDeleteByIdBasketProductMutation,
	// useBasketPutProductMutation,
	useGetBasketOrderAmountQuery,
	useGetBasketQuery,
	useDeleteAllBasketMutation,
	useBasketPutProductMutation
} from '@/src/redux/api/basket';
import png from '../../../../assets/sammy_shopping_1_1.png';
import scss from './BasketSection.module.scss';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
	IconHeart,
	IconX,
	IconExclamationMark,
	IconHeartFilled,
	IconTrash
} from '@tabler/icons-react';
import { Button, Checkbox, ConfigProvider, Rate, InputNumber } from 'antd';
import React, { useState } from 'react';
import {
	useAddAllFavoritesProductsMutation,
	useFavoritePutProductMutation
} from '@/src/redux/api/favorite';

const BasketSection = () => {
	const [basketAddApi] = useBasketPutProductMutation();
	const [deleteAllProductsForBasket] = useDeleteAllBasketMutation();
	const [favoriteAddProduct] = useFavoritePutProductMutation();
	const [addAllFavoriteProducts] = useAddAllFavoritesProductsMutation();
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const [countInputs, setCountInputs] = useState<Record<number, string>>({});
	const { data, isLoading, refetch } = useGetBasketQuery();
	const [deleteBasket] = useDeleteByIdBasketProductMutation();
	const [idsArray, setIdsArray] = useState<string[]>(() => {
		const ids = searchParams.getAll('ids');
		return ids.length ? ids : [];
	});

	// const handleBasketProductDelete = async (subGadgetId: number) => {
	// 	await basketDeleteProduct({ id: subGadgetId, basket: false });
	// };
	
	const handleIdsProducts = (id: number) => {
		const ids = id.toString();
		if (!idsArray.includes(ids)) {
			searchParams.append('ids', ids);
			setIdsArray((prevValue) => [...prevValue, ids]);
			navigate(`/basket?${searchParams.toString()}`);
		} else {
			const removeIds = idsArray.filter((c) => c !== ids);
			searchParams.delete('ids');
			removeIds.forEach((e) => searchParams.append('ids', e));
			setIdsArray(removeIds);
			navigate(`/basket?${searchParams.toString()}`);
		}
	};

	const handleProductsIds = (id: number) => {
		const ids = id.toString();
		if (!idsArray.includes(ids)) {
			searchParams.append('ids', ids);
			setIdsArray((prevValue) => [...prevValue, ids]);
			navigate(`/basket?${searchParams.toString()}`);
		} else {
			setIdsArray([]);
			searchParams.delete('ids');
			searchParams.delete('quantity');
			setSearchParams(searchParams);
			navigate(`/basket?${searchParams.toString()}`);
		}
	};

	const { data: resultsProductsPrices } = useGetBasketOrderAmountQuery({
		ids: [searchParams.toString()]
	});

	async function handleDeleteAllProducts() {
		try {
			await deleteAllProductsForBasket({
				ids: searchParams.get('ids') ? [searchParams.toString()] : []
			});
			searchParams.delete('ids');
			setSearchParams(searchParams);
		} catch (error) {
			console.error(error);
		}
	}

	const handleAddAllFavoriteProducts = async () => {
		try {
			await addAllFavoriteProducts({
				subGadgetIds: searchParams.get('ids')
					? [`subGadgetIds=${searchParams.getAll('ids')}`]
					: ['']
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleInputValueForProductQuantity = async (
		id: number,
		quantity: string
	) => {
		try {
			const searchParams = new URLSearchParams();
			searchParams.set('quantity', String(quantity));

			await basketAddApi({
				id,
				quantity: `quantity=${searchParams.get('quantity')}`
			});

			setCountInputs((prev) => ({
				...prev,
				[id]: String(quantity)
			}));
		} catch (error) {
			console.error('Error updating product quantity:', error);
		}
	};

	const handleFavoriteAddProduct = async (id: number) => {
		try {
			await favoriteAddProduct(id);
			refetch()
		} catch (error) {
			console.error(error);
		}
	};
	const handlePluesCountProduct = (id: number) => {
		setCountInputs((prev) => {
			const newValue = (parseInt(prev[id]) || 0) + 1;
			handleInputValueForProductQuantity(id, newValue.toString());
			return { ...prev, [id]: newValue.toString() };
		});
	};

	const handleMinuesProduct = (id: number) => {
		setCountInputs((prev) => {
			const newValue = Math.max((parseInt(prev[id]) || 0) - 1, 1);
			handleInputValueForProductQuantity(id, newValue.toString());
			return { ...prev, [id]: newValue.toString() };
		});
	};

	const handleDeleteBasket = async (gadgetId: number) => {
		await deleteBasket(gadgetId);
	};
	const handleOrderAmounts = () => {
		navigate(`/pay/delivery?${window.location.search.substring(1)}`);
	};

	const allSelected = idsArray.length === (data?.length || 0);
	const someSelected = idsArray.length > 0;
	const calculateButtonClass = () => {
		if (searchParams.get('ids')) {
			return `${scss.nooActiveButton} ${scss.activeButton}`;
		} else {
			return `${scss.nooActiveButton}`;
		}
	};

	const changeCountBasketProducts = (
		id: number,
		value: string | number | null
	) => {
		if (value !== null) {
			const newValue = value.toString();
			handleInputValueForProductQuantity(id, newValue);
			setCountInputs((prev) => ({
				...prev,
				[id]: newValue
			}));
		}
	};

	return (
		<div className={scss.BasketSection}>
			<div className="container">
				{isLoading ? (
					<h1>IsLoading...</h1>
				) : (
					<div className={scss.content}>
						<div className={scss.div_page_text}>
							<p className={scss.home_page_text} onClick={() => navigate('/')}>
								Главная »
							</p>
							<p>Корзина</p>
						</div>
						<h1>Товары в корзине</h1>
						<div className={scss.hr}></div>
						{data?.length === 0 ? (
							<>
								<img src={png} alt="png" />
								<div className={scss.text_after_img}>
									<h2>Ваша корзина пуста</h2>
									<p>Но вы всегда можете ее наполнить </p>
									<Link to="/">
										<button>К покупкам</button>
									</Link>
								</div>
							</>
						) : !localStorage.getItem('token') ? (
							<>
								<img src={png} alt="png" />
								<div className={scss.text_after_img}>
									<h2>Ваша корзина пуста</h2>
									<p>Но вы всегда можете ее наполнить </p>
									<Link to="/">
										<button>К покупкам</button>
									</Link>
								</div>
							</>
						) : (
							<div className={scss.basket_product_container_div}>
								<div className={scss.basket_product_result_div}>
									<div className={scss.button_is_basket_results_div}>
										<ConfigProvider
											theme={{
												components: {
													Checkbox: {
														colorPrimary: '#c11bab',
														colorBgContainer: 'white',
														algorithm: true
													}
												}
											}}
										>
											<Checkbox
												onChange={() =>
													data?.forEach((c) => handleProductsIds(c.subGadgetId))
												}
												checked={allSelected && someSelected}
												// checked={idsArray.}
											>
												<p>Отметить все</p>
											</Checkbox>
										</ConfigProvider>
									</div>
									<div
										className={scss.button_is_basket_results_div}
										onClick={handleDeleteAllProducts}
									>
										<IconTrash
											color="rgb(144, 156, 181)"
											width={'24px'}
											height={'24px'}
											cursor={'pointer'}
										/>
										<p>Удалить</p>
									</div>
									<div
										className={scss.button_is_basket_results_div}
										onClick={handleAddAllFavoriteProducts}
									>
										<IconHeart
											color="rgb(144, 156, 181)"
											width={'24px'}
											height={'24px'}
											cursor={'pointer'}
										/>
										<p>Переместить в избранное</p>
									</div>
								</div>
								<div className={scss.basket_products}>
									<div className={scss.container_basket_product}>
										{data?.map((item) => (
											<div
												key={item.subGadgetId}
												className={scss.basket_product_content}
											>
												<ConfigProvider
													theme={{
														components: {
															Checkbox: {
																colorPrimary: '#c11bab',
																colorBgContainer: 'white',
																algorithm: true
															}
														}
													}}
												>
													<Checkbox
														checked={idsArray.includes(
															item.subGadgetId.toString()
														)}
														onChange={() => handleIdsProducts(item.subGadgetId)}
													/>
												</ConfigProvider>
												<div className={scss.content_product_div}>
													<div className={scss.contents_product}>
														<img
															onClick={() =>
																navigate(`/api/gadget/by-id/${item.gadgetId}`)
															}
															src={item.image}
															alt={item.nameOfGadget}
														/>
														<div className={scss.product_info_text_div}>
															<p>{item.nameOfGadget}</p>
															<div className={scss.product_content}>
																<div
																	className={
																		scss.rating_product_and_buy_product
																	}
																>
																	<p>
																		Рейтинг <Rate defaultValue={item.rating} />
																		{item.rating}
																	</p>
																	<p className={scss.buy_product_text}>
																		В наличии {item.quantity}
																	</p>
																</div>
																<div
																	className={
																		scss.div_product_count_and_price_div
																	}
																>
																	<div>
																		<button
																			onClick={() =>
																				handleMinuesProduct(item.subGadgetId)
																			}
																		>
																			-
																		</button>
																		<ConfigProvider
																			theme={{
																				components: {
																					InputNumber: {
																						handleHoverColor: '#eb2f96',
																						colorText: 'black',
																						algorithm: true
																					}
																				}
																			}}
																		>
																			<InputNumber
																				color="black"
																				id="inputValueQuantity"
																				className={scss.input_number}
																				min={1}
																				max={item.quantity}
																				// defaultValue={item.quantity}
																				onChange={(value) =>
																					changeCountBasketProducts(
																						item.subGadgetId,
																						value
																					)
																				}
																				value={
																					parseInt(
																						countInputs[item.subGadgetId]
																					) || 1
																				}
																				onKeyPress={(
																					e: React.KeyboardEvent<HTMLInputElement>
																				) => {
																					if (e.key === 'Enter') {
																						e.preventDefault();
																						handleInputValueForProductQuantity(
																							item.subGadgetId,
																							countInputs[item.subGadgetId]
																						);
																					}
																				}}
																			/>
																		</ConfigProvider>
																		<button
																			onClick={() =>
																				handlePluesCountProduct(
																					item.subGadgetId
																				)
																			}
																		>
																			+
																		</button>
																	</div>
																	<h3>{item.price} c</h3>
																</div>
															</div>
															<div
																className={scss.div_product_code_and_buttons}
															>
																<p>Код товара: {item.nameOfGadget}</p>
																<div className={scss.buttons_div}>
																	<div
																		className={scss.div}
																		onClick={() =>
																			handleFavoriteAddProduct(item.subGadgetId)
																		}
																	>
																		{item.likes === true ? (
																			<>
																				<IconHeartFilled
																					color="red"
																					width={'18px'}
																					height={'18px'}
																				/>
																			</>
																		) : (
																			<IconHeart
																				width={'18px'}
																				height={'18px'}
																				color="rgb(144, 156, 181)"
																			/>
																		)}
																		<p>В избранное</p>
																	</div>
																	<div
																		className={scss.div}
																		onClick={() =>
																			handleDeleteBasket(item.subGadgetId)
																		}
																	>
																		<IconX width={'16px'} height={'16px'} />
																		<p>Удалить</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
									<div className={scss.content_product_price}>
										<div className={scss.contents_product_price_div}>
											{searchParams.get('ids') && (
												<>
													<h3>Сумма заказа</h3>
													<div></div>
													<div className={scss.div_contents_and_results_price}>
														<div className={scss.price_result_product_div}>
															<p>Количество товаров:</p>
															<p>
																{resultsProductsPrices?.quantity}
																шт
															</p>
														</div>
														<div className={scss.price_result_product_div}>
															<p>Ваша скидка: </p>
															<p className={scss.color_red_p}>
																{resultsProductsPrices?.currentPrice} c
															</p>
														</div>
														<div className={scss.price_result_product_div}>
															<p>Сумма:</p>
															<p>{resultsProductsPrices?.discountPrice} c</p>
														</div>
														<div className={scss.price_result_product_div}>
															<h3>Итого</h3>
															<p> {resultsProductsPrices?.price} c</p>
														</div>
													</div>
												</>
											)}
											<Button
												onClick={() => {
													searchParams.get('ids') && handleOrderAmounts();
												}}
												className={calculateButtonClass()}
											>
												Перейти к оформлению
											</Button>
											{!searchParams.get('ids') && (
												<button className={scss.buttonNooActive}>
													<IconExclamationMark color="#464343" />{' '}
													<p>
														Выберите товары, чтобы перейти к оформлению заказа
													</p>
												</button>
											)}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default BasketSection;
