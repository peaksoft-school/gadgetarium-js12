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
import { Checkbox, ConfigProvider } from 'antd';
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

	const handleCategoryResultsFunk = (category: string) => {
		console.log(category, 'category');
		searchParams.set('gadgetType', category);
		setSearchParams(searchParams);
		navigate(`/comparison?${window.location.search.substring(1)}`);
	};

	const handleClearAllProductsFunk = async () => {
		try {
			await clearAllProducts();
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteByIdProductFunk = async (subGadgetId: number) => {
		await deleteByIdProduct(subGadgetId);
	};

	const handleChangeIsDifferencesResultFunk = (checked: boolean) => {
		if (checked) {
			searchParams.set('isDifferences', 'true');
			setSearchParams(searchParams);
			navigate(`/comparison?${window.location.search.substring(1)}`);
		} else {
			searchParams.set('isDifferences', 'false');
			setSearchParams(searchParams);
			navigate(`/comparison?${window.location.search.substring(1)}`);
		}
	};

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

	const handleAddBasketProducts = async (id: number) => {
		await addBasketProducts({ id });
	};

	const { data, isLoading } = useGetComparisonCompareQuery({
		gadgetType: searchParams.toString(),
		isDifferences: searchParams.toString()
	});

	React.useEffect(() => {
		if (searchParams.get('isDifferences')) {
			buttonStyleResultRef.current = true;
		} else if (searchParams.get('gadgetType')) {
			buttonStyleResultRef.current = true;
		} else {
			buttonStyleResultRef.current = false;
		}
	}, [
		searchParams,
		handleCategoryResultsFunk,
		handleChangeIsDifferencesResultFunk
	]);

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
					{data?.subGadgetResponses && data.subGadgetResponses.length === 0 && (
						<span className={scss.hr}></span>
					)}
					{data?.subGadgetResponses && data?.subGadgetResponses.length === 0 ? (
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
											{data?.categoryCounts['phone quantity'] && (
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
													{data?.categoryCounts['phone quantity']})
												</button>
											)}
											{data?.categoryCounts['LAPTOP quantity'] && (
												<button
													onClick={() => handleCategoryResultsFunk('LAPTOP')}
													className={
														searchParams.getAll('gadgetType').includes('LAPTOP')
															? `${scss.noo_active_button} ${scss.active_button}`
															: `${scss.noo_active_button}`
													}
												>
													Ноутбуки (
													{data?.categoryCounts['LAPTOP quantity'] &&
														data?.categoryCounts['LAPTOP quantity']}
													){' '}
												</button>
											)}
											{data?.categoryCounts['WATCH quantity'] && (
												<button
													onClick={() => handleCategoryResultsFunk('WATCH')}
													className={
														searchParams.getAll('gadgetType').includes('WATCH')
															? `${scss.noo_active_button} ${scss.active_button}`
															: `${scss.noo_active_button}`
													}
												>
													Наушники (
													{data?.categoryCounts['WATCH quantity'] &&
														data.categoryCounts['WATCH quantity']}
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
																{data?.subGadgetResponses.map(
																	(el) =>
																		el.characteristics &&
																		el.characteristics.map((item, index) => (
																			<p key={index}>{item.values_key}</p>
																		))
																)}
																{data?.subGadgetResponses.map(
																	(el) =>
																		el.uniqueCharacteristics &&
																		el.uniqueCharacteristics.map(
																			(item, index) => (
																				<p key={index}>{item.values_key}</p>
																			)
																		)
																)}
																{data?.subGadgetResponses.slice(0, 1).map(
																	(el) =>
																		el.uniqF && (
																			<>
																				<p>Материал Браслет</p>
																				<p>Размер Смотреть</p>
																				<p>Mатериал Тело</p>
																				<p>Дюма</p>
																				<p>Пол Часы</p>
																				<p>беспроводной</p>
																				<p>водонепроницаемый</p>
																				<p>Форма Тело</p>
																			</>
																		)
																)}
																{data?.subGadgetResponses.slice(0, 1).map(
																	(el) =>
																		el.uniFiled && (
																			<>
																				<p>Материал Браслет</p>
																				<p>Размер Смотреть</p>
																				<p>Mатериал Тело</p>
																				<p>Дюма</p>
																				<p>Пол Часы</p>
																				<p>беспроводной</p>
																				<p>водонепроницаемый</p>
																				<p>Форма Тело</p>
																			</>
																		)
																)}
															</>
														)}
													</div>
												</div>
												<div
													ref={ref}
													className={`keen-slider ${scss.slider_results}`}
												>
													{data?.subGadgetResponses &&
														data?.subGadgetResponses.map((item, index) =>
															item.compareFieldResponse ? (
																<div
																	key={item.compareFieldResponse?.id}
																	className="keen-slider__slide"
																>
																	<div className={scss.slider_block}>
																		<div className={scss.card}>
																			<div className={scss.card_content_div}>
																				<button
																					onClick={() =>
																						handleDeleteByIdProductFunk(
																							item.compareFieldResponse!.id
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
																								item.compareFieldResponse!.id
																							)
																						}
																					/>
																				</button>
																				<div className={scss.div_photos}>
																					<img
																						src={
																							item.compareFieldResponse?.image
																						}
																						alt={
																							item.compareFieldResponse
																								.nameOfGadget
																						}
																					/>
																				</div>
																				{item.compareFieldResponse
																					.nameOfGadget && (
																					<p className={scss.charackter}>
																						{
																							item.compareFieldResponse
																								.nameOfGadget
																						}
																					</p>
																				)}
																				{item.compareFieldResponse.price && (
																					<p className={scss.charackter_price}>
																						{item.compareFieldResponse.price} c
																					</p>
																				)}
																				{item.basket ? (
																					<button
																						className={
																							scss.active_button_basket_button
																						}
																						onClick={() => navigate('/basket')}
																					>
																						В корзине Перейти
																					</button>
																				) : (
																					<AddBasketButton
																						onClick={() =>
																							handleAddBasketProducts(
																								item.compareFieldResponse!.id
																							)
																						}
																						children={'В корзину'}
																						className={scss.add_bas_button}
																					/>
																				)}
																			</div>
																		</div>
																		<div className={scss.table_div}>
																			{item.uniqueCharacteristics &&
																				item.uniqueCharacteristics.map(
																					(item, index) => (
																						<p key={index}>
																							{item.values.length >= 22
																								? item.values.slice(0, 18) +
																									'...'
																								: item.values}
																						</p>
																					)
																				)}
																			{item.uniFiled &&
																				item.uniFiled.map((el, index) => (
																					<p key={index}>{el}</p>
																				))}
																		</div>
																	</div>
																</div>
															) : (
																<div key={index} className="keen-slider__slide">
																	<div className={scss.slider_block}>
																		<div className={scss.card}>
																			<div className={scss.card_content_div}>
																				<button
																					onClick={() =>
																						handleDeleteByIdProductFunk(item.id)
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
																								item.id
																							)
																						}
																					/>
																				</button>
																				<div className={scss.div_photos}>
																					<img
																						src={item.image && item.image}
																						alt={
																							item.nameOfGadget &&
																							item.nameOfGadget
																						}
																					/>
																				</div>
																				{item && item.nameOfGadget && (
																					<p className={scss.charackter}>
																						{item.nameOfGadget &&
																							item.nameOfGadget}
																					</p>
																				)}
																				{item.price && (
																					<p className={scss.charackter_price}>
																						{item.price && item.price} c
																					</p>
																				)}
																				{item.basket ? (
																					<button
																						className={
																							scss.active_button_basket_button
																						}
																						onClick={() => navigate('/basket')}
																					>
																						basket
																					</button>
																				) : (
																					<AddBasketButton
																						onClick={() =>
																							handleAddBasketProducts(
																								item.id
																								// item.basket
																							)
																						}
																						children={'В корзину'}
																						className={scss.add_bas_button}
																					/>
																				)}
																			</div>
																		</div>
																		<div className={scss.table_div}>
																			{item.characteristics && (
																				<>
																					{item.characteristics &&
																						item.characteristics.map(
																							(item, index) => (
																								<p key={index}>
																									{item.values.length >= 22
																										? item.values.slice(0, 18) +
																											'...'
																										: item.values}
																									{/* <p>{item.values}</p> */}
																								</p>
																							)
																						)}
																				</>
																			)}
																			{item.uniqF &&
																				item.uniqF &&
																				item.uniqF
																					?.slice(0, 8)
																					.map((el, index) => (
																						<p key={index}>{el}</p>
																					))}
																		</div>
																	</div>
																</div>
															)
														)}
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