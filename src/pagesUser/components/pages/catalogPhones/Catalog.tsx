/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	Link,
	useNavigate,
	useParams,
	useSearchParams
} from 'react-router-dom';
import scss from './Catalog.module.scss';
import arrow from '@/src/assets/map/arrowtop.png';
import arrowDown from '@/src/assets/map/arrowDown.png';
import arrowBlue from '@/src/assets/map/arrowTopBlue.png';
import arrowBlueBottom from '@/src/assets/map/arrowBottomBlue.png';
import qs from 'qs';
import {
	coloursCatalog,
	gBiteCatalog,
	moreGBiteCatalog
} from '@/src/data/Catalog';
import React, { useEffect, useState } from 'react';
import { useGetFiltredGadgetQuery } from '@/src/redux/api/filterGadget';
import {
	IconHeart,
	IconScale,
	IconShoppingCart,
	IconX
} from '@tabler/icons-react';
import PhonesDropdown from '@/src/ui/catalogPhonesDropdown/PhonesDropdown';
import { Rate } from 'antd';
import {
	useBasketPutProductMutation,
	useGetBasketQuery
} from '@/src/redux/api/basket';
import { useAddProductsForFavoriteMutation } from '@/src/redux/api/favorite';
import { useAddProductsFotComparisonMutation } from '@/src/redux/api/comparison';
import { useSubCategoriesQuery } from '@/src/redux/api/catalogProducts';
const Catalog = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const parseUrl = qs.parse(window.location.search.substring(1));
	const { brand } = parseUrl;
	const navigate = useNavigate();
	const { filtredIds } = useParams();
	const searchForBrand = searchParams.get('brand') || `${brand}`;
	const { data: subCategories = [] } = useSubCategoriesQuery(filtredIds!);
	const [addProductBasket] = useBasketPutProductMutation();
	const [addProductsForFavorite] = useAddProductsForFavoriteMutation();
	const [addComparisonProducts] = useAddProductsFotComparisonMutation();
	const { data: BasketData = [] } = useGetBasketQuery();
	const [priceLow, setPriceLow] = useState<string>('');
	const [filtredForBrand, setFiltredForBrand] = useState<string | null>('');
	const [priceHigh, setPriceHigh] = useState('');
	// console.log(posts, 'is Array');
	const filtredProducts = React.useRef(false);
	const [categoryArray, setCategoryArray] = useState(() => {
		const brands = searchParams.getAll('brand');
		return brand?.length ? brands : [];
	});
	const [filtredForColors, setFiltredForColors] = useState(() => {
		const brands = searchParams.getAll('colour');
		return brand?.length ? brands : [];
	});
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [reduceOne, setReduceOne] = useState(false);
	const [filtredBasketProductsItemId, setFiltredBasketProductsItemId] =
		useState<number[] | null>(null);
	const [reduceTwo, setReduceTwo] = useState(false);
	const [reduceThree, setReduceThree] = useState(false);
	const [reduceFour, setReduceFour] = useState(false);
	const [reduceFive, setReduceFive] = useState(false);

	// !

	const [hideColours, setHideColours] = useState(false);

	const [allPhones, setAllPhones] = useState(false);
	const firstPhones = 12;
	const [phonesToShow] = useState(firstPhones);
	const [allPhonesHide, setAllPhonesHide] = useState(false);

	const handleShowAllPhones = () => {
		setAllPhones(true);
		setAllPhonesHide(true);
	};

	const handleHideAllPhones = () => {
		setAllPhones(false);
		setAllPhonesHide(false);
	};

	const handleRemoveCategories = () => {
		setSelectedCategories([]);
		setPriceHigh('');
		setPriceLow('');
		searchParams.delete('brand');
		searchParams.delete('discount');
		searchParams.delete('sort');
		searchParams.delete('colour');
		setSearchParams(searchParams);
		setCategoryArray([]);
		setFiltredForColors([]);
		setReduceOne(true);
		setReduceTwo(true);
		setReduceThree(true);
		setReduceFour(true);
		setReduceFive(true);
	};

	const handleSelectedCategory = (category: string) => {
		if (!categoryArray.includes(category)) {
			searchParams.append('brand', category);
			setCategoryArray((prevValue) => [...prevValue, category]);
			navigate(`/catalog/${filtredIds}/filtred?${searchParams.toString()}`);
		} else {
			const removeIsBrand = categoryArray.filter((c) => c !== category);
			searchParams.delete('brand');
			searchParams.delete('sort');
			searchParams.delete('discount');
			searchParams.delete('colour');
			removeIsBrand.forEach((c) => searchParams.append('brand', c));
			setCategoryArray(removeIsBrand);
			navigate(`/catalog/${filtredIds}/filtred?${searchParams.toString()}`);
		}
	};

	const handleColorsFiltredProducts = (colors: string) => {
		if (!filtredForColors.includes(colors)) {
			searchParams.append('colour', colors);
			setFiltredForColors((prevValue) => [...prevValue, colors]);
			setSearchParams(searchParams);
			navigate(`/catalog/${filtredIds}/filtred?${searchParams.toString()}`);
		} else {
			const removeColors = filtredForColors.filter((c) => c !== colors);
			searchParams.delete('colour');
			removeColors.forEach((c) => searchParams.append('colour', c));
			setFiltredForColors(removeColors);
			navigate(`/catalog/${filtredIds}/filtred?${searchParams.toString()}`);
		}
	};

	const { data: posts, isLoading } = useGetFiltredGadgetQuery({
		id: Number(filtredIds),
		brand: [searchParams.toString()]
	});

	const handleBasketProductsFunk = async (id: number) => {
		await addProductBasket({ id });
	};

	const handleAddProductsFavoriteFunk = async (id: number) => {
		await addProductsForFavorite({ id });
	};
	const handleAddProductsComparisonFunk = async (id: number) => {
		await addComparisonProducts({ id });
	};

	useEffect(() => {
		const filtredBasketProductsItemId = BasketData.map((el) => {
			return el.id;
		});
		if (filtredBasketProductsItemId) {
			setFiltredBasketProductsItemId(filtredBasketProductsItemId);
		}
	}, []);
	return (
		<section className={scss.catalog}>
			<div className="container">
				<div className={scss.content}>
					<p className={scss.navigationP} onClick={() => navigate('/')}>
						Главная » <h3>Смартфоны</h3>
					</p>
					<div className={scss.divHeading}>
						<h3>Cмартфоны</h3>
						<span></span>
						<div className={scss.borderDiv}>
							<div></div>
						</div>
					</div>

					<div className={scss.divGlobal}>
						<div className={scss.divLeft}>
							<p>Найдено 167 Товаров</p>
							<div className={scss.divBackgroundLeft}>
								<h4 onClick={handleRemoveCategories}>Сбросить все фильтры</h4>
								<div className={scss.divLine}></div>

								{reduceOne ? (
									<div>
										<div
											className={scss.category}
											onClick={() => setReduceOne(false)}
										>
											<p>Категория</p>
											<img src={arrowDown} alt="ArrowDown" />
										</div>
									</div>
								) : (
									<div>
										<div
											className={scss.category}
											onClick={() => setReduceOne(true)}
										>
											<p>Категория</p>
											<img src={arrow} alt="ArrowTop" />
										</div>

										<div className={scss.categoriesDiv}>
											{subCategories?.map((e, index) => (
												<div className={scss.categories} key={index}>
													<input
														id={e.categoryName}
														type="checkbox"
														checked={categoryArray.includes(e.categoryName)}
														// data-category-name={e.categoryName}
														onChange={() =>
															handleSelectedCategory(e.categoryName)
														}
													/>
													<label htmlFor={e.categoryName}>
														<p>{e.categoryName}</p>
													</label>
												</div>
											))}
										</div>
									</div>
								)}

								<div className={scss.divLine}></div>

								{reduceTwo ? (
									<div>
										<div
											className={scss.costDiv}
											onClick={() => setReduceTwo(false)}
										>
											<p>Стоимость</p>
											<img src={arrowDown} alt="ArrowDown" />
										</div>
										<div className={scss.anotherCostDiv}></div>
									</div>
								) : (
									<div>
										<div
											className={scss.costDiv}
											onClick={() => setReduceTwo(true)}
										>
											<p>Стоимость</p>
											<img src={arrow} alt="ArrowTop" />
										</div>

										<div className={scss.priceDiv}>
											<input type="number" value={priceLow} />
											<p className={scss.pOne}>от</p>
											<input type="number" value={priceHigh} />
											<p className={scss.pTwo}>до</p>
										</div>

										<div className={scss.priceChangerDiv}>
											<div className={scss.progress}></div>
											<input
												className={scss.price}
												type="range"
												value={priceLow}
												onChange={(e) => setPriceLow(e.target.value)}
												max="100000"
												min="250"
											/>
											<div className={scss.progressTwo}></div>
											<input
												className={scss.priceTwo}
												value={priceHigh}
												onChange={(e) => setPriceHigh(e.target.value)}
												type="range"
												min="40000"
												max="300000"
											/>
										</div>
									</div>
								)}

								<div className={scss.divLine}></div>

								{reduceThree ? (
									<div>
										<div
											className={scss.colourDiv}
											onClick={() => setReduceThree(false)}
										>
											<p>Цвет</p>
											<img src={arrowDown} alt="ArrowDown" />
										</div>
									</div>
								) : (
									<div>
										{hideColours ? (
											<div>
												<div
													className={scss.colourDiv}
													onClick={() => setReduceThree(true)}
												>
													<p>Цвет</p>
													<img src={arrow} alt="ArrowTop" />
												</div>
												<div
													className={scss.clapDiv}
													onClick={() => setHideColours(false)}
												>
													<img src={arrowBlueBottom} alt="ArrowTop" />
													<p>Раскрыть </p>
												</div>
											</div>
										) : (
											<div>
												<div
													className={scss.colourDiv}
													onClick={() => setReduceThree(true)}
												>
													<p>Цвет</p>
													<img src={arrow} alt="ArrowTop" />
												</div>

												{coloursCatalog.map((e) => (
													<div className={scss.colours} key={e.colour}>
														<input
															id={e.colour}
															type="checkbox"
															checked={filtredForColors.includes(e.colour)}
															onChange={() =>
																handleColorsFiltredProducts(e.colour)
															}
														/>
														<label htmlFor={e.colour}>
															<p>{e.colour}</p>
															<span>({e.quantity})</span>
														</label>
													</div>
												))}

												<div
													className={scss.clapDiv}
													onClick={() => setHideColours(true)}
												>
													<img src={arrowBlue} alt="ArrowTop" />
													<p>Скрыть</p>
												</div>
											</div>
										)}
									</div>
								)}

								<div className={scss.divLine}></div>

								{reduceFour ? (
									<div>
										<div
											className={scss.gbDiv}
											onClick={() => setReduceFour(false)}
										>
											<p>Объем памяти (GB)</p>
											<img src={arrowDown} alt="ArrowDown" />
										</div>
									</div>
								) : (
									<div>
										<div
											className={scss.gbDiv}
											onClick={() => setReduceFour(true)}
										>
											<p>Объем памяти (GB)</p>
											<img src={arrow} alt="ArrowTop" />
										</div>

										{gBiteCatalog.map((e) => (
											<div className={scss.gigabytes}>
												<input
													id={e.gb}
													type="checkbox"
													checked={selectedCategories.includes(e.gb)}
													onChange={() => handleSelectedCategory(e.gb)}
													onClick={() => handleSelectedCategory(e.gb)}
												/>
												<label htmlFor={e.gb}>
													<p>{e.gb}</p>
												</label>
											</div>
										))}

										<div className={scss.gigabytesMoreDiv}>
											<img src={arrowBlueBottom} alt="BlueBottomArrow" />
											<p>Еще 14</p>
										</div>
									</div>
								)}

								<div className={scss.divLine}></div>

								{reduceFive ? (
									<div>
										<div
											className={scss.moreGbDiv}
											onClick={() => setReduceFive(false)}
										>
											<p>Объем оперативной памяти (GB)</p>
											<img src={arrowDown} alt="ArrowDown" />
										</div>
									</div>
								) : (
									<div>
										<div
											className={scss.moreGbDiv}
											onClick={() => setReduceFive(true)}
										>
											<p>Объем оперативной памяти (GB)</p>
											<img src={arrow} alt="ArrowTop" />
										</div>

										{moreGBiteCatalog.map((e) => (
											<div className={scss.moreGb}>
												<input
													id={e.gb}
													type="checkbox"
													checked={selectedCategories.includes(e.gb)}
													onChange={() => handleSelectedCategory(e.gb)}
													onClick={() => handleSelectedCategory(e.gb)}
												/>
												<label htmlFor={e.gb}>
													<p>{e.gb}</p>
												</label>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
						<div className={scss.divRight}>
							<div className={scss.filterDiv}>
								<div className={scss.categoriesRight}>
									{categoryArray &&
										categoryArray.map((categories) => (
											<div className={scss.category_right}>
												<p>{categories}</p>
												<IconX
													onClick={() => handleSelectedCategory(categories)}
												/>
											</div>
										))}
								</div>
								<div className={scss.sortDiv}>
									<PhonesDropdown />
								</div>
							</div>
							<div className={scss.cardss}>
								{isLoading ? (
									<h1>IsLoading...</h1>
								) : (
									<>
										{posts?.responses.map((e) => (
											<div className={scss.cards} key={e.id}>
												<div className={scss.card}>
													<div
														className={
															e.percent === 0
																? `${scss.top_card} ${scss.active_top_card}`
																: `${scss.top_card}`
														}
													>
														<p
															className={
																e.percent === 0
																	? `${scss.p} ${scss.percent}`
																	: `${scss.p}`
															}
														>
															{e.percent !== 0 && e.percent}{' '}
														</p>{' '}
														<div className={scss.top_icons}>
															<IconScale
																style={
																	e.compression
																		? { color: 'pink' }
																		: { color: 'black' }
																}
																onClick={() =>
																	handleAddProductsComparisonFunk(e.id)
																}
															/>

															<IconHeart
																style={
																	e.likes
																		? { color: 'red' }
																		: { color: 'black' }
																}
																onClick={() =>
																	handleAddProductsFavoriteFunk(e.id)
																}
															/>
														</div>
													</div>
													<div className={scss.middle_image_card}>
														<Link to={`/catalog/phones/${e.id}`}>
															<img src={e.image} alt="Phone" />
														</Link>
													</div>
													<div className={scss.middle_card}>
														<p className={scss.phone_quantity}>
															В наличии {e.quantity}
														</p>
														<h3>{e.brandNameOfGadget}</h3>
														<div className={scss.phone_rating}>
															<p>Рейтинг</p>
															<Rate defaultValue={e.rating} />
															<p>({e.rating})</p>
														</div>
													</div>
													<div className={scss.bottom_card}>
														<div className={scss.phone_prices}>
															<p className={scss.phone_price}>{e.price}</p>
															<p className={scss.phone_old_price}>
																{e.currentPrice}
															</p>
														</div>
														<div
															className={
																filtredBasketProductsItemId?.some(
																	(el) => el !== e.id
																)
																	? `${scss.bottom_cart} ${scss.active_basket_button}`
																	: `${scss.bottom_cart}`
															}
															onClick={() => {
																handleBasketProductsFunk(e.id);
															}}
														>
															<IconShoppingCart />
															<p>В корзину</p>
														</div>
													</div>
												</div>
											</div>
										))}
									</>
								)}
							</div>
							<div className={scss.showButtons}>
								{!allPhones && (
									<button
										onClick={handleShowAllPhones}
										className={scss.moreButton}
									>
										Показать ещё
									</button>
								)}
								{allPhonesHide && (
									<button
										onClick={handleHideAllPhones}
										className={scss.moreButton}
									>
										Скрыть
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Catalog;
