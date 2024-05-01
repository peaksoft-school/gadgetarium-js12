import { useBasketPutProductMutation, useGetBasketQuery } from '@/src/redux/api/basket';
import png from '../../../../assets/sammy_shopping_1_1.png';
import scss from './BasketSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IconCardonDelete } from '@/src/assets/icons';
import { IconHeart, IconX } from '@tabler/icons-react';
import { Checkbox, Rate } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
	console.log(`checked = ${e.target.checked}`);
};
const BasketSection = () => {
	const [basketDeleteProduct] = useBasketPutProductMutation();
	const navigate = useNavigate();
	const { data } = useGetBasketQuery();
	const handleBasketProductDelete = async (id: number, isInBasket: boolean) => {
		await basketDeleteProduct({id, isInBasket: !isInBasket})
	}
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
									<Checkbox onChange={onChange}></Checkbox>
									<p>Отметить все</p>
								</div>
								<div className={scss.button_is_basket_results_div}>
									<IconCardonDelete />
									<p>Удалить</p>
								</div>
								<div
									className={scss.button_is_basket_results_div}
									onClick={() => navigate('/favorite')}
								>
									<IconHeart color="rgb(144, 156, 181)" />

									<p>Переместить в избранное</p>
								</div>
							</div>
							<div className={scss.basket_products}>
								<div className={scss.container_basket_product}>
									{data?.map((item) => (
										<div key={item.id} className={scss.basket_product_content}>
											<Checkbox onChange={onChange}></Checkbox>
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
															<div className={scss.div_product_count_and_price_div}>
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
																<div className={scss.buttons_div}>
																	<div className={scss.div} onClick={() => navigate('/favorite')}>
																		<IconHeart/>
																		<p>В избранное</p>
																	</div>
																	<div className={scss.div} onClick={() => handleBasketProductDelete(item.id, item.isInBasket)}>
																		<IconX/>
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
