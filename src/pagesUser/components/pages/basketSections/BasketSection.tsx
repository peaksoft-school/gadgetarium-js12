import {
	useBasketProductDeleteAllMutation,
	useBasketProductMutation,
	useBasketProductResultQuantityMutation,
	useBasketPutProductMutation,
	useGetBasketOrderAmountQuery,
	useGetBasketQuery
} from '@/src/redux/api/basket';
import png from '../../../../assets/sammy_shopping_1_1.png';
import scss from './BasketSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import {
	IconHeart,
	IconX,
	IconExclamationMark,
	IconHeartFilled,
	IconTrash
} from '@tabler/icons-react';
import { Button, Checkbox, ConfigProvider, Rate, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import { useFavoritePutProductMutation } from '@/src/redux/api/favorite';

const BasketSection = () => {
	const [basketDeleteProduct] = useBasketPutProductMutation();
	const [basketProductResultQuantity] =
		useBasketProductResultQuantityMutation();
	const [favoriteAddProduct] = useFavoritePutProductMutation();
	const [basketProduct] = useBasketProductMutation();
	const [basketProductsAllId] = useBasketProductDeleteAllMutation();
	const navigate = useNavigate();
	const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
	const [arrayNumbers, setArrayNumbers] = useState<number[]>([]);
	const [inputValueItemId, setInputValueItemId] = useState<number>();
	const [selectAll, setSelectAll] = useState<boolean>(false);
	const [inputValueQuantity, setInputValueQuantity] = useState<number>(0);
	const [totalAmount, setTotalAmount] = useState<number>(0);
	const { data, isLoading } = useGetBasketQuery();
	const { data: orderAmount = [] } = useGetBasketOrderAmountQuery();

	useEffect(() => {
		const calculateTotalAmount = () => {
			const total = selectedProducts.reduce((sum, productId) => {
				const product = orderAmount.find((item) => item.id === productId);
				return sum + (product ? product.price + 0 : 0);
			}, 0);
			setTotalAmount(total);
		};

		calculateTotalAmount();
	}, [selectedProducts, orderAmount]);

	const handleBasketProductDelete = async (id: number) => {
		await basketDeleteProduct({
			id,
			basket: false
		});
	};

	const handleFavoriteAddProduct = async (subGadgetId: number) => {
		await favoriteAddProduct(subGadgetId);
	};

	const handleSelectProduct = async (productId: number) => {
		if (selectedProducts.includes(productId)) {
			setSelectedProducts(selectedProducts.filter((id) => id !== productId));
			setArrayNumbers(arrayNumbers.filter((el) => el !== productId));
			localStorage.removeItem('selectedProducts');
			localStorage.setItem(
				'selectedProducts',
				JSON.stringify(selectedProducts.filter((el) => el !== productId))
			);
			await basketProduct({ id: null });
		} else {
			setSelectedProducts([...selectedProducts, productId]);
			setArrayNumbers((prevState) => [...prevState, productId]);
			localStorage.setItem(
				'selectedProducts',
				JSON.stringify([...selectedProducts, productId])
			);
			await basketProduct({
				id: productId
			});
		}
	};

	const handleSelectAll = async (id: number) => {
		if (selectAll) {
			setSelectedProducts([]);
			localStorage.setItem(
				'selectedProducts',
				JSON.stringify(setSelectedProducts([]))
			);
			await basketProductsAllId({ id: null });
		} else {
			setSelectedProducts(data?.map((item) => item.id) || []);
			localStorage.setItem(
				'selectedProducts',
				JSON.stringify(data?.map((item) => item.id))
			);
			await basketProductsAllId({
				id: id
			});
		}
		setSelectAll(!selectAll);
	};

	const handleInputValueForProductQuantity = (value: number | null) => {
		if (value !== null) {
			setInputValueQuantity(value);
		}
		console.log(value);
		console.log(inputValueQuantity);
	};

	const handleProductQuantityFunkForEnter = async (id: number) => {
		console.log(inputValueQuantity);
		setSelectedProducts([...selectedProducts, id]);
		localStorage.setItem(
			'selectedProducts',
			JSON.stringify([...selectedProducts, id])
		);
		await basketProductResultQuantity({
			id,
			buyProductQuantity: inputValueQuantity
		});
	};

	const allSelected = selectedProducts.length === (data?.length || 0);
	const someSelected = selectedProducts.length > 0;
	const localProductsResults = localStorage.getItem('selectedProducts');
	console.log(localProductsResults);

	const calculateButtonClass = () => {
		if (selectedProducts.some((id) => data?.map((el) => el.id).includes(id))) {
			return `${scss.nooActiveButton} ${scss.activeButton}`;
		} else {
			return `${scss.nooActiveButton}`;
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
												checked={allSelected && someSelected}
												onChange={() =>
													data?.forEach((el) => handleSelectAll(el.id))
												}
											>
												<p>Отметить все</p>
											</Checkbox>
										</ConfigProvider>
									</div>
									<div className={scss.button_is_basket_results_div}>
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
										onClick={() => navigate('/favorite')}
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
												key={item.id}
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
														checked={
															selectedProducts.includes(item.id) &&
															localProductsResults?.includes(item.id.toString())
														}
														onChange={() => handleSelectProduct(item.id)}
													/>
												</ConfigProvider>
												<div className={scss.content_product_div}>
													<div className={scss.contents_product}>
														<img src={item.image} alt={item.nameOfGadget} />
														<div className={scss.product_info_text_div}>
															<p>{item.nameOfGadget}</p>
															<div className={scss.product_content}>
																<div
																	className={
																		scss.rating_product_and_buy_product
																	}
																>
																	<p>
																		Рейтинг <Rate defaultValue={5} />
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
																		<button>-</button>
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
																				max={100}
																				defaultValue={item.quantity}
																				onChange={
																					handleInputValueForProductQuantity
																				}
																				onClick={() =>
																					setInputValueItemId(item.id)
																				}
																				value={
																					inputValueItemId === item.id
																						? inputValueQuantity
																						: null
																				}
																				onKeyPress={(
																					e: React.KeyboardEvent<HTMLInputElement>
																				) => {
																					if (e.key === 'Enter') {
																						handleProductQuantityFunkForEnter(
																							item.id
																						);
																					}
																				}}
																			/>
																		</ConfigProvider>
																		<button>+</button>
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
																			handleFavoriteAddProduct(item.id)
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
																			handleBasketProductDelete(item.id)
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
											{someSelected && (
												<>
													<h3>Сумма заказа</h3>
													<div></div>
													<div className={scss.div_contents_and_results_price}>
														<div className={scss.price_result_product_div}>
															<p>Количество товаров:</p>
															<p>{selectedProducts.length} шт</p>
														</div>
														<div className={scss.price_result_product_div}>
															<p>Ваша скидка:</p>
															<p className={scss.color_red_p}>0</p>
														</div>
														<div className={scss.price_result_product_div}>
															<p>Сумма:</p>
															<p>{totalAmount} c</p>
														</div>
														<div className={scss.price_result_product_div}>
															<h3>Итого</h3>
															<p>{totalAmount} c</p>
														</div>
													</div>
												</>
											)}
											<Button
												onClick={() => {
													someSelected && navigate('/pay/delivery');
												}}
												className={calculateButtonClass()}
											>
												Перейти к оформлению
											</Button>
											{!someSelected && (
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
