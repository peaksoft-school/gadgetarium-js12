/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from 'react-router-dom';
import scss from './ComparisonSection.module.scss';
import comparison from '@/src/assets/sammy_finance_1.png';
import {
	IconBrand,
	IconColor,
	IconDelete,
	IconScales,
	IconScreen,
	IconSim,
	IconStorage,
	IconSystem
} from '@/src/assets/icons';
import AddBasketButton from '@/src/ui/customButtons/AddBasketButton';
import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { Checkbox, ConfigProvider } from 'antd';
import type { CheckboxProps } from 'antd';
import ButtonArrowLeft from '@/src/ui/customButtons/ButtonArrowLeft';
import ButtonArrowRight from '@/src/ui/customButtons/ButtonArrowRight';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
import {
	useComparisonPatchProductsMutation,
	useGetComparisonQuery
} from '@/src/redux/api/comparison';
const ComparisonSection = () => {
	const onChange: CheckboxProps['onChange'] = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const [addComparison] = useComparisonPatchProductsMutation();
	const { data, isLoading } = useGetComparisonQuery();
	const [addBasketProducts] = useBasketPutProductMutation();
	const [filtredResults, setFiltredResults] = useState<string>('Apple');
	const navigate = useNavigate();
	const [brand, setBrand] = useState<boolean>(false);
	const [loaded, setLoaded] = useState<any>(false);
	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			// ! slider
			loop: false,
			mode: 'free-snap',
			slides: {
				perView: 1,
				spacing: 10
			},
			breakpoints: {
				'(min-width: 650px)': {
					slides: { perView: 2, spacing: 15 }
				},
				'(min-width: 1000px)': {
					slides: { perView: 3, spacing: 25 }
				},
				'(min-width: 1400px)': {
					slides: { perView: 6, spacing: 25 }
				}
			},

			// ! navigation + buttons
			initial: 0,
			created() {
				setLoaded(true);
			}
		},
		// ! auto play
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;

				function clearNextTimeout() {
					clearTimeout(timeout);
				}

				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 1111800);
				}

				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			}
		]
	);

	useEffect(() => {
		const handleChange = () => {
			const result = window.innerWidth;
			if (result >= 900) {
				setBrand(true);
			} else {
				setBrand(false);
			}
		};
		handleChange();
		window.addEventListener('resize', handleChange);
		return () => {
			window.removeEventListener('resize', handleChange);
		};
	}, []);
	const handleAddBasketProducts = async (_id: number, isInBasket: boolean) => {
		console.log(isInBasket);
		await addBasketProducts({ _id, isInBasket: !isInBasket });
	};

	const handleComparisonProducts = async (_id: number) => {
		await addComparison({ _id, isComparison: false });
	};

	const handleProductsIsDeleteComparison = async (_id: number) => {
		await addComparison({ _id, isComparison: false });
	};

	return (
		<section className={scss.ComparisonSection}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div_for_texts_pages}>
						<p onClick={() => navigate('/')} className={scss.home_page_text}>
							Главная »
						</p>
						<p>Сравнение</p>
					</div>
					<h1>Сравнение товаров</h1>
					{data?.length === 0 && <span className={scss.hr}></span>}
					{data?.length === 0 ? (
						<>
							<div className={scss.favorite_empty_img_div}>
								<img src={comparison} alt="favorite" />
							</div>
							<div className={scss.text_after_img}>
								<h2>Сравнивать пока нечего</h2>
								<p>
									Добавляйте сюда товары, чтобы сравнить их характеристики.{' '}
									<br /> Так выбрать станет проще!
								</p>
								<Link to="/">
									<button>К покупкам</button>
								</Link>
							</div>
						</>
					) : (
						<>
							{isLoading ? (
								<h1>IsLoading...</h1>
							) : (
								<>
									<div className={scss.second_content}>
										<div className={scss.three_buttons}>
											<button
												className={
													filtredResults.includes('Apple')
														? `${scss.noo_active_button} ${scss.active_button}`
														: `${scss.noo_active_button}`
												}
											>
												Смартфоны(
												{/* {data &&
													data?.filter(
														(el) =>
															el.comparisonProduct &&
															el.comparisonProduct.brand === 'Apple'
													).length} */}
												)
											</button>
											<button
												className={
													filtredResults.includes('mac')
														? `${scss.noo_active_button} ${scss.active_button}`
														: `${scss.noo_active_button}`
												}
											>
												Ноутбуки (
												{/* {data &&
													data?.filter(
														(el) =>
															el.comparisonProduct &&
															el.comparisonProduct.brand === 'mac'
													).length} */}
												){' '}
											</button>
											<button
												className={
													filtredResults.includes('AirPods')
														? `${scss.noo_active_button} ${scss.active_button}`
														: `${scss.noo_active_button}`
												}
											>
												Наушники (
												{/* {data &&
													data?.filter(
														(el) =>
															el.comparisonProduct &&
															el.comparisonProduct.brand === 'AirPods'
													).length} */}
												)
											</button>
										</div>
										<div className={scss.checkboxes}>
											<ConfigProvider
												theme={{
													components: {
														Checkbox: {
															colorPrimary: '#C11BAB',
															colorBgContainer: 'white',
															algorithm: true
														}
													}
												}}
											>
												<Checkbox
													
													onChange={onChange}
												>
													<p>Показывать только различия</p>
												</Checkbox>
											</ConfigProvider>
											<div
												onClick={() =>
													data?.forEach((el) =>
														handleProductsIsDeleteComparison(el.id)
													)
												}
												className={scss.cleaningText}
											>
												<IconDelete />
												<p>Очистить список</p>
											</div>
										</div>
										<>
											<div className={scss.all_blocks}>
												<div className={scss.first_block}>
													<div className={scss.second_half_block}>
														{!brand ? (
															<>
																<div className={scss.icons}>
																	<IconBrand />
																	<IconScreen />
																	<IconColor />
																	<IconSystem />
																	<IconStorage />
																	<IconStorage />
																	<IconScales />
																	<IconSim />
																</div>
															</>
														) : (
															<>
																<p>Бренд</p>
																<p>Экран</p>
																<p>Цвет</p>
																<p>Операционная система</p>
																<p>Память</p>
																<p>Оперативная память</p>
																<p>Вес</p>
																<p>SIM-карты</p>
															</>
														)}
													</div>
												</div>
												<div
													ref={ref}
													className={`keen-slider ${scss.slider_results}`}
												>
													{data &&
														data?.map((item, index) => (
															<div key={index} className="keen-slider__slide">
																<div className={scss.slider_block}>
																	<div className={scss.card}>
																		<div className={scss.card_content_div}>
																			<button
																				onClick={() =>
																					handleComparisonProducts(item._id)
																				}
																				className={scss.delete_button}
																			>
																				<IconDelete />
																			</button>
																			{item && (
																				<div className={scss.div_photos}>
																					{item.images.map((el, index) => (
																						<Link to={`/api/gadget/by-id/${item.id}`}>
																							<img
																								src={el}
																								alt={item.nameOfGadget}
																								key={index}
																							/>
																						</Link>
																					))}
																				</div>
																			)}
																			{item && item.nameOfGadget && (
																				<p className={scss.charackter}>
																					{item.nameOfGadget} Gello Hello
																				</p>
																			)}
																			{item && item.price && (
																				<p
																					className={
																						item.nameOfGadget.length < 25
																							? `${scss.charackter_price} ${scss.active_margin}`
																							: `${scss.charackter_price}`
																					}
																				>
																					{item.price} c
																				</p>
																			)}
																			<AddBasketButton
																				onClick={() =>
																					handleAddBasketProducts(item.id)
																				}
																				// children={
																				// 	item.comparisonProduct &&
																				// 	item.comparisonProduct.isInBasket ===
																				// 		true
																				// 		? `В корзине`
																				// 		: `В корзину`
																				// }
																				children="В корзину"
																				// className={
																				// 	item.comparisonProduct &&
																				// 	item.comparisonProduct.isInBasket
																				// 		? `${scss.add_bas_button} ${scss.active}`
																				// 		: `${scss.add_bas_button}`
																				// }
																				className={scss.add_bas_button}
																			/>
																		</div>
																	</div>
																	<div className={scss.table_div}>
																		{/* {item.comparisonProduct && (
																			<>
																				<p>{item.comparisonProduct.brand}</p>
																				<p>{item.comparisonProduct.screen}</p>
																				<p>{item.comparisonProduct.color}</p>
																				<p>{item.comparisonProduct.os}</p>
																				<p>{item.comparisonProduct.memory}</p>
																				<p>{item.comparisonProduct.ram}</p>
																				<p>{item.comparisonProduct.weight}</p>
																				<p>{item.comparisonProduct.sim}</p>
																			</>
																		)} */}
																	</div>
																</div>
															</div>
														))}
												</div>
											</div>
											{loaded && instanceRef.current && (
												<>
													<span
														className={`${scss.left} `}
														onClick={(e: any) =>
															e.stopPropagation() || instanceRef.current?.prev()
														}
													>
														<ButtonArrowLeft />
													</span>
													<span
														className={`${scss.right}`}
														onClick={(e: any) =>
															e.stopPropagation() || instanceRef.current?.next()
														}
													>
														<ButtonArrowRight />
													</span>{' '}
												</>
											)}
										</>
									</div>
								</>
							)}
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default ComparisonSection;
