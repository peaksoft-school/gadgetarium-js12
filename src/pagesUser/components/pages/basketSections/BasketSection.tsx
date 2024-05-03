/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	useBasketProductDeleteAllMutation,
	useBasketPutProductMutation,
	useGetBasketQuery
} from '@/src/redux/api/basket';
import png from '../../../../assets/sammy_shopping_1_1.png';
import scss from './BasketSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IconCardonDelete, IconRedHeart } from '@/src/assets/icons';
import { IconHeart, IconX } from '@tabler/icons-react';
import { Button, Checkbox, Rate } from 'antd';
import { useEffect, useState } from 'react';
import { useFavoritePutProductMutation } from '@/src/redux/api/favorite';
type OrderPrice = {
	NumberOfGoods: string | number;
	YourDiscount: string | number;
	Sum: string | number;
	Total: number;
};
interface ProductType {
	id: number;
	image: string;
	productName: string;
	price: number;
	quantity: number | string;
	isFavorite: boolean;
	isInBasket: boolean;
	isComparison: boolean;
	token: string;
	Rating: string;
	productCode: number;
	buyProduct: string;
	buyProductQuantity: number;
	orderPrice: OrderPrice;
	isChecked: boolean;
}
const BasketSection = () => {
	const [basketDeleteProduct] = useBasketPutProductMutation();
	const [favoriteAddProduct] = useFavoritePutProductMutation();
	const navigate = useNavigate();
	const [checkboxIsResult, setCheckboxIsResult] = useState<boolean>(false);
	const [allProductItemId, setAllProductItemId] = useState<any>();
	const [basketProductAllDelete] = useBasketProductDeleteAllMutation();
	const { data } = useGetBasketQuery();
	const handleBasketProductDelete = async (id: number, isInBasket: boolean) => {
		await basketDeleteProduct({ id, isInBasket: !isInBasket });
	};
	const handleFavoriteAddProduct = async (id: number, isFavorite: boolean) => {
		await favoriteAddProduct({ id, isFavorite: !isFavorite });
	};
	const handleBasketProductAllDelete = async (isInBasket: boolean) => {
		await basketProductAllDelete({ isInBasket });
	};

	const handleAllProductItemId = () => {
		if (data) {
			const sum = data.reduce((acc, item) => {
				const price =
					typeof item.price === 'number' ? item.price : parseFloat(item.price);
				return acc + (isNaN(price) ? 0 : price);
			}, 0);
			setAllProductItemId(sum);
		}
	};
	useEffect(() => {
		
	}, []);

	return (
		<div className={scss.BasketSection}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div_page_text}>
						<p className={scss.home_page_text} onClick={() => navigate('/')}>
							Главная »
						</p>
						<p>Корзина</p>
					</div>
					<h1>Товары в корзине</h1>
					<span className={scss.hr}></span>
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
									{/* <input type="checkbox" /> */}
									<Checkbox
										onClick={() => handleAllProductItemId()}
										// onChange={onChange}
										checked={checkboxIsResult ? true : false}
									
									></Checkbox>
									<p>Отметить все</p>
								</div>
								<div
									onClick={() => handleBasketProductAllDelete(false)}
									className={scss.button_is_basket_results_div}
								>
									<IconCardonDelete />
									<p>Удалить</p>
								</div>
								<div
									className={scss.button_is_basket_results_div}
									onClick={() => navigate('/favorite')}
								>
									<>
										<IconHeart color="rgb(144, 156, 181)" />
									</>

									<p>Переместить в избранное</p>
								</div>
							</div>
							<div className={scss.basket_products}>
								<div className={scss.container_basket_product}>
									{data?.map((item, index) => (
										<div key={item.id} className={scss.basket_product_content}>
											<Checkbox
												
											></Checkbox>
											<div className={scss.content_product_div}>
												<div className={scss.contents_product}>
													<img src={item.image} alt={item.productName} />
													<div className={scss.product_info_text_div}>
														<p>{item.productName}</p>
														<div className={scss.product_content}>
															<div
																className={scss.rating_product_and_buy_product}
															>
																<p>
																	Рейтинг <Rate defaultValue={5} />
																	{item.Rating}
																</p>
																<p className={scss.buy_product_text}>
																	В наличии {item.buyProduct}
																</p>
															</div>
															<div
																className={scss.div_product_count_and_price_div}
															>
																<div>
																	<button>-</button>
																	<span>{item.buyProductQuantity}</span>
																	<button>+</button>
																</div>
																<h3>{item.price}</h3>
															</div>
														</div>
														<div className={scss.div_product_code_and_buttons}>
															<p>Код товара: {item.productCode}</p>
															{item.isInBasket === true ? (
																// <h1 onChange={handleCheckboxFalse}>Hello</h1>
																<input type="checkbox" />
															) : null}
															<div className={scss.buttons_div}>
																<div
																	className={scss.div}
																	onClick={() =>
																		handleFavoriteAddProduct(
																			item.id,
																			item.isFavorite
																		)
																	}
																>
																	{item.isFavorite === true ? (
																		<IconRedHeart />
																	) : (
																		<IconHeart color="rgb(144, 156, 181)" />
																	)}
																	<p>В избранное</p>
																</div>
																<div
																	className={scss.div}
																	onClick={() =>
																		handleBasketProductDelete(
																			item.id,
																			item.isInBasket
																		)
																	}
																>
																	<IconX />
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
										<h3>Сумма заказа</h3>
										<div></div>
										<div className={scss.div_contents_and_results_price}>
											<div className={scss.price_result_product_div}>
												<p>Количество товаров:</p>
												{data
													?.slice(0, 1)
													.map((item) => (
														<p key={item.id}>{item.orderPrice.NumberOfGoods}</p>
													))}
											</div>
											<div className={scss.price_result_product_div}>
												<p>Ваша скидка:</p>
												{data?.slice(0, 1).map((item) => (
													<p className={scss.color_red_p} key={item.id}>
														{item.orderPrice.YourDiscount}
													</p>
												))}
											</div>
											<div className={scss.price_result_product_div}>
												<p>Сумма:</p>
												{data
													?.slice(0, 1)
													.map((item) => (
														<p key={item.id}>{item.orderPrice.Sum}</p>
													))}
											</div>
											<div className={scss.price_result_product_div}>
												<h3>Итого</h3>
												<p>{allProductItemId}</p>
											</div>
										</div>
										<Button
											onClick={() => navigate('')}
											className={scss.button}
										>
											Перейти к оформлению
										</Button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BasketSection;
