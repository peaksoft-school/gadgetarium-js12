import { useNavigate } from 'react-router-dom';
import scss from './Catalog.module.scss';
import arrow from '@/src/assets/map/arrowtop.png';
import arrowDown from '@/src/assets/map/arrowDown.png';
import arrowBlue from '@/src/assets/map/arrowTopBlue.png';
import arrowBlueBottom from '@/src/assets/map/arrowBottomBlue.png';
import {
	coloursCatalog,
	gBiteCatalog,
	moreGBiteCatalog,
	phoneCatalog
} from '@/src/data/Catalog';
import { useState } from 'react';
import { useGetPhonesQuery } from '@/src/redux/api/phones';
import starFilled from '@/src/assets/map/starYellow.png';
import starUnfilled from '@/src/assets/map/starNotFilled.png';
import {
	IconHeart,
	IconScale,
	IconShoppingCart,
	IconX
} from '@tabler/icons-react';
import PhonesDropdown from '@/src/ui/catalogPhonesDropdown/PhonesDropdown';

const Catalog = () => {
	const navigate = useNavigate();
	const [priceLow, setPriceLow] = useState<string>('');
	const [priceHigh, setPriceHigh] = useState('');
	const { data: posts } = useGetPhonesQuery(0);
	const categoryArray: string[] = [];
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	const [reduceOne, setReduceOne] = useState(false);
	const [reduceTwo, setReduceTwo] = useState(false);
	const [reduceThree, setReduceThree] = useState(false);
	const [reduceFour, setReduceFour] = useState(false);
	const [reduceFive, setReduceFive] = useState(false);

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
	};

	const handleSelectedCategory = (category: string) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((c) => c !== category));
		} else {
			setSelectedCategories([...selectedCategories, category]);
		}
	};

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
											{phoneCatalog.map((e, index) => (
												<div className={scss.categories} key={index}>
													<input
														id={e.phone}
														type="checkbox"
														checked={
															selectedCategories.includes(e.phone) &&
															categoryArray.push(e.phone)
																? true
																: false
														}
														onChange={() => handleSelectedCategory(e.phone)}
														onClick={() => handleSelectedCategory(e.phone)}
													/>
													<label htmlFor={e.phone}>
														<p>{e.phone}</p>
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
															checked={
																selectedCategories.includes(e.colour) &&
																categoryArray.push(e.colour)
																	? true
																	: false
															}
															onChange={() => handleSelectedCategory(e.colour)}
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
									{categoryArray.map((categories) => (
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
								{posts &&
									posts
										.filter((post) => {
											if (selectedCategories.length === 0) {
												return true;
											}
											const isMatchingCategory =
												post.name &&
												selectedCategories.some((category) =>
													post.name.includes(category)
												);
											return isMatchingCategory;
										})
										.filter((post) => {
											const postPrice = post.price
												? parseFloat(
														post.price.replace(' с', '').replace(' ', '')
													)
												: null;
											const lowPrice =
												priceLow !== '' ? parseFloat(priceLow) : null;
											const highPrice =
												priceHigh !== '' ? parseFloat(priceHigh) : null;

											if (lowPrice === null || highPrice === null) {
												return true;
											}

											return (
												postPrice !== null &&
												postPrice >= lowPrice &&
												postPrice <= highPrice
											);
										})

										.filter((_, index) => allPhones || index < phonesToShow)
										.map((e, index) => (
											<div className={scss.cards} key={index}>
												{index < posts.length - 5 && (
													<div className={scss.card}>
														<div className={scss.top_card}>
															<p>
																{e.discount}{' '}
																<span>
																	<img src={e.status} alt="" />
																</span>
															</p>
															<div className={scss.top_icons}>
																<IconScale />
																<IconHeart />
															</div>
														</div>
														<div className={scss.middle_image_card}>
															<img src={e.img} alt="Phone" />
														</div>
														<div className={scss.middle_card}>
															<p className={scss.phone_quantity}>
																В наличии {e.quantity}
															</p>
															<h3>{e.name}</h3>
															<div className={scss.phone_rating}>
																<p>Рейтинг</p>
																<div className={scss.rating_stars}>
																	<img src={starFilled} alt="Rating_Stars" />
																	<img src={starFilled} alt="Rating_Stars" />
																	<img src={starFilled} alt="Rating_Stars" />
																	<img src={starFilled} alt="Rating_Stars" />
																	<img src={starUnfilled} alt="Rating_Stars" />
																</div>
																<p>({e.rating})</p>
															</div>
														</div>

														<div className={scss.bottom_card}>
															<div className={scss.phone_prices}>
																<p className={scss.phone_price}>{e.price}</p>
																<p className={scss.phone_old_price}>
																	{e.oldPrice}
																</p>
															</div>
															<div className={scss.bottom_cart}>
																<IconShoppingCart />
																<p>В корзину</p>
															</div>
														</div>
													</div>
												)}
											</div>
										))}
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

					<div className={scss.divBottom}>
						<h2>Просмотренные товары</h2>
						<div className={scss.bottomCards}>
							{posts &&
								posts.slice(Math.max(posts.length - 5, 0)).map((e, index) => (
									<div className={scss.cards} key={index}>
										{index < posts.length - 2 && (
											<div className={scss.card}>
												<div className={scss.middle_image_card}>
													<img src={e.Image} alt="Phone" />
												</div>
												<div className={scss.middle_card}>
													<h3>{e.Name}</h3>
													<div className={scss.phone_rating}>
														<p>Рейтинг</p>
														<div className={scss.rating_stars}>
															<img src={starFilled} alt="Rating_Stars" />
															<img src={starFilled} alt="Rating_Stars" />
															<img src={starFilled} alt="Rating_Stars" />
															<img src={starFilled} alt="Rating_Stars" />
															<img src={starFilled} alt="Rating_Stars" />
														</div>
														<p>({e.Rating})</p>
													</div>
												</div>

												<div className={scss.bottom_card}>
													<p className={scss.phone_price}>{e.Price}</p>
												</div>
											</div>
										)}
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Catalog;
