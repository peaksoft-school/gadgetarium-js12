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
import type { CheckboxProps } from 'antd';
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
	const onChange: CheckboxProps['onChange'] = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const buttonStyleResultRef = React.useRef(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [addBasketProducts] = useBasketPutProductMutation();
	const [clearAllProducts] = useClearAllProductsComparisonMutation();
	const [deleteByIdProduct] = useDeleteByIdProductComparisonMutation();
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
		console.log(subGadgetId, 'ids');
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
	React.useEffect(() => {
		if (!buttonStyleResultRef.current) {
			buttonStyleResultRef.current = false;
			console.log('render test2');
		}
		buttonStyleResultRef.current = false;
	}, [searchParams]);
	const handleAddBasketProducts = async (id: number, basket: boolean) => {
		console.log(basket);

		await addBasketProducts({ id, basket: !basket });
	};

	const { data, isLoading } = useGetComparisonCompareQuery({
		gadgetType: searchParams.toString(),
		isDifferences: searchParams.toString()
	});

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
					{data?.subGadgetResponses && data.subGadgetResponses === 0 && (
						<span className={scss.hr}></span>
					)}
					{data?.subGadgetResponses && data?.subGadgetResponses === 0 ? (
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
														searchParams
															.getAll('gadgetType')
															.includes('PHONE') ||
														buttonStyleResultRef.current === false
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
																{data?.subGadgetResponses.map((el) => (
																	<>
																		{searchParams
																			.getAll('isDifferences')
																			.includes('false') && buttonStyleResultRef.current === false && (
																			<>
																				{el.characteristics &&
																					el.characteristics.map(
																						(item, index) => (
																							<p key={index}>
																								{item.values_key}
																							</p>
																						)
																					)}
																				{el.uniqF &&
																					el.uniqF?.map((el, index) => (
																						<p key={index}>{el}</p>
																					))}
																			</>
																		)}
																		{searchParams
																			.getAll('isDifferences')
																			.includes('true') &&
																			el.uniqueCharacteristics &&
																			el.uniqueCharacteristics.map(
																				(uniqueCharacteristic, index) => (
																					<p key={index}>
																						{uniqueCharacteristic.values_key}{' '}
																					</p>
																				)
																			)}
																	</>
																))}
															</>
														)}
													</div>
												</div>
												<div
													ref={ref}
													className={`keen-slider ${scss.slider_results}`}
												>
													{data &&
													searchParams.getAll('isDifferences').includes('false') && buttonStyleResultRef.current === false
														? data?.subGadgetResponses.map((item, index) => (
																<div key={index} className="keen-slider__slide">
																	<div className={scss.slider_block}>
																		<div className={scss.card}>
																			<div className={scss.card_content_div}>
																				<button
																					onClick={() =>
																						handleComparisonProducts(item.id)
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
																						src={item.image}
																						alt={item.nameOfGadget}
																					/>
																				</div>
																				{item && item.nameOfGadget && (
																					<p className={scss.charackter}>
																						{item.nameOfGadget}
																					</p>
																				)}
																				{item && (
																					<p className={scss.charackter_price}>
																						{item.price} c
																					</p>
																				)}
																				{item.basket ? (
																					<button
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
																			{item && (
																				<>
																					{data.subGadgetResponses.map((el) => (
																						<>
																							{el.characteristics &&
																								el.characteristics.map(
																									(item, index) => (
																										<p key={index}>
																											{item.values}
																										</p>
																									)
																								)}
																							{el.uniqF &&
																								el.uniqF?.map((el, index) => (
																									<p key={index}>{el}</p>
																								))}
																						</>
																					))}
																				</>
																			)}
																		</div>
																	</div>
																</div>
															))
														: data?.subGadgetResponses.map((item, index) => (
																// item.compareFieldResponse.
																<div key={index} className="keen-slider__slide">
																	<div className={scss.slider_block}>
																		<div className={scss.card}>
																			<div className={scss.card_content_div}>
																				<button
																					onClick={() =>
																						handleComparisonProducts(item.id)
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
																						src={
																							item.compareFieldResponse &&
																							item.compareFieldResponse.image
																						}
																						alt={
																							item.compareFieldResponse &&
																							item.compareFieldResponse
																								.nameOfGadget
																						}
																					/>
																				</div>
																				{item && item.compareFieldResponse && (
																					<p className={scss.charackter}>
																						{item.compareFieldResponse &&
																							item.compareFieldResponse
																								.nameOfGadget}
																					</p>
																				)}
																				{item && (
																					<p className={scss.charackter_price}>
																						{item.compareFieldResponse &&
																							item.compareFieldResponse
																								.price}{' '}
																						c
																					</p>
																				)}
																				{item.basket ? (
																					<button
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
																			{item.uniqueCharacteristics &&
																				item.uniqueCharacteristics.map(
																					(uniqueCharacteristic, index) => (
																						<p key={index}>
																							{uniqueCharacteristic.values}
																						</p>
																					)
																				)}
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
