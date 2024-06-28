/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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
import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { Checkbox, ConfigProvider, Skeleton } from 'antd';
import ButtonArrowLeft from '@/src/ui/customButtons/ButtonArrowLeft';
import ButtonArrowRight from '@/src/ui/customButtons/ButtonArrowRight';
import { useBasketPutProductMutation } from '@/src/redux/api/basket';
import {
	useClearAllProductsComparisonMutation,
	useDeleteByIdProductComparisonMutation,
	useGetComparisonCompareQuery
} from '@/src/redux/api/comparison';
import { IconPlaystationX } from '@tabler/icons-react';
const ComparisonSection = () => {
	const buttonStyleResultRef = React.useRef(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [addBasketProducts] = useBasketPutProductMutation();
	const [clearAllProducts] = useClearAllProductsComparisonMutation();
	const [deleteByIdProduct] = useDeleteByIdProductComparisonMutation();
	const navigate = useNavigate();
	const [brand, setBrand] = useState<boolean>(false);
	const [loaded, setLoaded] = useState<any>(false);
	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
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
			initial: 0,
			created() {
				setLoaded(true);
			}
		},
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
	const { data, isLoading, refetch } = useGetComparisonCompareQuery({
		gadgetType: `gadgetType=${searchParams.get('gadgetType') || ''}`,
		isDifferences: `isDifferences=${searchParams.get('isDifferences') || ''}`
	});
	const handleCategoryResultsFunk = (category: string) => {
		searchParams.set('gadgetType', category);
		setSearchParams(searchParams);
		refetch();
	};

	const handleClearAllProductsFunk = async () => {
		try {
			await clearAllProducts({});
			refetch();
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteByIdProductFunk = async (subGadgetId: number) => {
		await deleteByIdProduct(subGadgetId);
		refetch()
	};

	const handleChangeIsDifferencesResultFunk = (checked: boolean) => {
		searchParams.set('isDifferences', checked.toString());
		setSearchParams(searchParams);
		refetch()
	};

	useEffect(() => {
		const handleChange = () => {
			const result = window.innerWidth;
			setBrand(result >= 900);
		};
		handleChange();
		window.addEventListener('resize', handleChange);
		return () => {
			window.removeEventListener('resize', handleChange);
		};
	}, []);

	const handleAddBasketProducts = async (subGadgetId: number) => {
		await addBasketProducts({ id: subGadgetId, basket: false });
		refetch()
	};

	

	useEffect(() => {
		if (searchParams.get('isDifferences') || searchParams.get('gadgetType')) {
			buttonStyleResultRef.current = true;
		} else {
			buttonStyleResultRef.current = false;
		}
	}, [searchParams]);
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
					{data && data.length === 0 && <span className={scss.hr}></span>}
					{data && data?.length === 0 ? (
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
					) : !localStorage.getItem('token') ? (
						<div>
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
						</div>
					) : (
						<>
							{isLoading ? (
								<>
									<div className={scss.buttons}>
										<Skeleton.Button
											active
											block
											style={{ width: 140, height: 30 }}
										/>
										<Skeleton.Button
											active
											block
											style={{ width: 140, height: 30 }}
										/>
										<Skeleton.Button
											active
											block
											style={{ width: 140, height: 30 }}
										/>
									</div>
									<div className={scss.comparison_cards}>
										<Skeleton.Button
											active
											block
											style={{ width: 240, height: 450 }}
										/>
										<Skeleton.Button
											active
											block
											style={{ width: 240, height: 450 }}
										/>
										<Skeleton.Button
											active
											block
											style={{ width: 240, height: 450 }}
										/>
										<Skeleton.Button
											active
											block
											style={{ width: 240, height: 450 }}
										/>
										<Skeleton.Button
											active
											block
											style={{ width: 240, height: 450 }}
										/>
									</div>
									<div>
										<Skeleton.Button
											active
											block
											style={{ width: 1530, height: 450 }}
										/>
									</div>
								</>
							) : (
								<>
									<div className={scss.second_content}>
										<div className={scss.three_buttons}>
											{data![0].phoneCount !== 0 && (
												<button
													onClick={() => handleCategoryResultsFunk('PHONE')}
													className={
														buttonStyleResultRef.current === false ||
														searchParams.getAll('gadgetType').includes('PHONE')
															? `${scss.noo_active_button} ${scss.active_button}`
															: `${scss.noo_active_button}`
													}
												>
													Смартфоны(
													{data![0].phoneCount})
												</button>
											)}
											{data![0].laptopCount !== 0 && (
												<button
													onClick={() => handleCategoryResultsFunk('LAPTOP')}
													className={
														searchParams.getAll('gadgetType').includes('LAPTOP')
															? `${scss.noo_active_button} ${scss.active_button}`
															: `${scss.noo_active_button}`
													}
												>
													Ноутбуки (
													{data![0].laptopCount && data![0].laptopCount}){' '}
												</button>
											)}
											{data![0].watchCount !== 0 && (
												<button
													onClick={() => handleCategoryResultsFunk('WATCH')}
													className={
														searchParams.getAll('gadgetType').includes('WATCH')
															? `${scss.noo_active_button} ${scss.active_button}`
															: `${scss.noo_active_button}`
													}
												>
													Наушники ({data![0].watchCount && data![0].watchCount}
													)
												</button>
											)}
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
													onChange={(e) =>
														handleChangeIsDifferencesResultFunk(
															e.target.checked
														)
													}
													checked={
														searchParams
															.getAll('isDifferences')
															.includes('true')
															? true
															: false
													}
												>
													<p>Показывать только различия</p>
												</Checkbox>
											</ConfigProvider>
											<div
												onClick={handleClearAllProductsFunk}
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
																<p>Брент</p>
																<p>Цвет</p>
																<p>Память</p>
																<p>Оперативная память</p>
																<p>Сим карта</p>
																<p>Гарантия</p>
															</>
														)}
													</div>
												</div>
												{isLoading ? (
													<>
														<h2>IsLoading...</h2>
													</>
												) : (
													<>
														<div
															ref={ref}
															className={`keen-slider ${scss.slider_results}`}
														>
															{data &&
																data?.map((item, index) => (
																	<div
																		key={item?.subGadgetId}
																		className="keen-slider__slide"
																	>
																		<div className={scss.slider_block}>
																			<div className={scss.card}>
																				<div className={scss.card_content_div}>
																					<button
																						onClick={() =>
																							handleDeleteByIdProductFunk(
																								item!.subGadgetId
																							)
																						}
																						className={scss.delete_button}
																					>
																						{/* <IconDelete /> */}
																						<IconPlaystationX
																							color="rgb(144, 156, 181)"
																							width={'18px'}
																							height={'18px'}
																							onClick={() =>
																								handleDeleteByIdProductFunk(
																									item.subGadgetId
																								)
																							}
																						/>
																					</button>
																					<div className={scss.div_photos}>
																						<img
																							src={item?.image}
																							alt={item.nameOfGadget}
																						/>
																					</div>
																					<p className={scss.charackter}>
																						{item.nameOfGadget}
																					</p>
																					<p className={scss.charackter_price}>
																						{item.price} c
																					</p>

																					{item.basket ? (
																						<button
																							className={
																								scss.active_button_basket_button
																							}
																							onClick={() =>
																								navigate('/basket')
																							}
																						>
																							В корзине Перейти
																						</button>
																					) : (
																						<AddBasketButton
																							onClick={() =>
																								handleAddBasketProducts(
																									item!.subGadgetId
																								)
																							}
																							children={'В корзину'}
																							className={scss.add_bas_button}
																						/>
																					)}
																				</div>
																			</div>
																			<div className={scss.table_div}>
																				<p>
																					{item.brandCompare
																						? item.brandCompare
																						: 'null'}
																				</p>
																				<p>
																					{item.colorCompare
																						? item.colorCompare
																						: 'null'}
																				</p>
																				<p>
																					{item.memoryCompare
																						? item.memoryCompare
																						: 'null'}
																				</p>
																				<p>
																					{item.ramCompare
																						? item.ramCompare
																						: 'null'}
																				</p>
																				<p>
																					{item.simCompare
																						? item.simCompare
																						: 'null'}
																				</p>
																				<p>
																					{item.warrantyCompare
																						? item.warrantyCompare
																						: 'null'}
																				</p>
																			</div>
																		</div>
																	</div>
																))}
														</div>
													</>
												)}
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
