import scss from './SubHeader.module.scss';
import { FC, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { IconGadgetarium } from '@/src/assets/icons';
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconHeart,
	IconScale,
	IconShoppingCart
} from '@tabler/icons-react';
import { ConfigProvider, Input, Rate, Tooltip, theme } from 'antd';
import CatalogMenu from '@/src/ui/catalogMenu/CatalogMenu';
import { useGetBasketQuery } from '@/src/redux/api/basket';
import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import { useGetComparisonQuery } from '@/src/redux/api/comparison';
import { ProductsForHover } from '@/src/ui/productsForHover/ProductsForHover';
import { useGetGlobalSearchQuery } from '@/src/redux/api/globalSearch';

interface SubHeaderProps {
	isMobile: boolean;
	isScrolled: boolean;
}

const SubHeader: FC<SubHeaderProps> = ({ isScrolled }) => {
	const { data: BasketData = [] } = useGetBasketQuery();
	const { data: FavoriteData = [] } = useGetFavoriteQuery();
	const { data: ComparisonData = [] } = useGetComparisonQuery();
	const [comparisonProducts, setComparisonProducts] = useState<boolean>(false);
	const [favoriteProducts, setFavoriteProducts] = useState<boolean>(false);
	const [basketProducts, setBasketProducts] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const {
		data: globalSearch = [],
		refetch,

		isLoading
	} = useGetGlobalSearchQuery({ request: inputValue }, { skip: !inputValue });
	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		console.log(value);

		setInputValue(value);
		setSearchParams({ request: value });
		refetch();
		if (value) {
			refetch();
		}
		if (value === '') {
			searchParams.delete('request');
			setSearchParams(searchParams);
		}
	};

	const antdThemeConfig = {
		algorithm: theme.darkAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			// borderRadius: 2,
			colorBgContainer: '#1a1a25'
		}
	};
	return (
		<header
			className={
				isScrolled ? `${scss.Header} ${scss.active}` : `${scss.Header}`
			}
		>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.button_catalog_search}>
						{isScrolled && (
							<>
								<Link className={scss.logo} to="/">
									<IconGadgetarium />
								</Link>
							</>
						)}
						<CatalogMenu />
						<span className={scss.hr_line}></span>
						<ConfigProvider theme={antdThemeConfig}>
							<Input.Search
								className={scss.search}
								size="large"
								placeholder="Поиск по каталогу магазина"
								value={inputValue}
								onChange={handleChangeSearch}
								allowClear
							/>
							{searchParams.get('request') && (
								<div className={scss.main_search}>
									<div className={scss.search_global}>
										{globalSearch.length === 0 ? (
											<>
												<div className={scss.not_found}>
													<h3>Нет результатов...</h3>
												</div>
											</>
										) : (
											<>
												{globalSearch?.map((el) => (
													<div
														onClick={() => {
															navigate(`/api/gadget/by-id/${el.gadgetId}`);
															setInputValue('');
														}}
														className={scss.div_product_map}
														key={el.subGadgetId}
													>
														<div className={scss.div_img}>
															<img
																className={scss.img_product}
																src={el.image}
																alt={el.brandNameOfGadget}
															/>
														</div>
														<div className={scss.div_product_contents}>
															<p className={scss.tag_color_green}>
																В наличии ({el.quantity})
															</p>
															<h3>
																{el.brandNameOfGadget.length >= 28
																	? el.brandNameOfGadget.slice(0, 22) + '...'
																	: el.brandNameOfGadget}
															</h3>
															<p className={scss.rating_search}>
																Рейтинг
																<Rate
																	className={scss.rate}
																	allowHalf
																	defaultValue={el.rating}
																/>
																({el.rating})
															</p>
															<div className={scss.div_buttons_and_price}>
																<div className={scss.product_price}>
																	<h2>{el.price} c</h2>
																</div>
															</div>
														</div>
													</div>
												))}
											</>
										)}
									</div>
								</div>
							)}
						</ConfigProvider>
					</div>
					<div className={scss.icon_networks}>
						{!isScrolled && (
							<>
								<a
									className={scss.icon_facebook}
									target="_blank"
									href="	https://www.facebook.com/?locale=ru_RU"
								>
									<IconBrandFacebook />
								</a>
								<a
									className={scss.icon_instagram}
									target="_blank"
									href="https://www.instagram.com/taa1ai.bekovna?igsh=MTh5a3VrZjgza2hxNA=="
								>
									<IconBrandInstagram />
								</a>
								<a
									className={scss.icon_whatsapp}
									target="_blank"
									href="https://wa.me/qr/TU2DHKCN5KLKC1"
								>
									<IconBrandWhatsapp />
								</a>
							</>
						)}
					</div>
					<div className={scss.icon_basket_heart}>
						<Link
							onMouseEnter={() => setComparisonProducts(true)}
							onMouseLeave={() => setComparisonProducts(false)}
							to="/comparison"
							className={scss.icon}
						>
							<span
								className={
									ComparisonData.length !== 0
										? `${scss.count_for_products} ${scss.count_for_products_active}`
										: `${scss.count_for_products}`
								}
							>
								{ComparisonData.length <= 99 ? ComparisonData.length : '99+'}
							</span>
							<IconScale />
						</Link>
						<Link
							onMouseEnter={() => setFavoriteProducts(true)}
							onMouseLeave={() => setFavoriteProducts(false)}
							to="/favorite"
							className={scss.icon}
						>
							<span
								className={
									FavoriteData.length !== 0
										? `${scss.count_for_products} ${scss.count_for_products_active}`
										: `${scss.count_for_products}`
								}
							>
								{FavoriteData.length <= 99 ? FavoriteData.length : '99+'}
							</span>
							<IconHeart />
						</Link>
						<Link
							onMouseEnter={() => setBasketProducts(true)}
							onMouseLeave={() => setBasketProducts(false)}
							to="/basket"
							className={scss.icon}
						>
							<span
								className={
									BasketData.length !== 0
										? `${scss.count_for_products} ${scss.count_for_products_active}`
										: `${scss.count_for_products}`
								}
							>
								{BasketData.length <= 99 ? BasketData.length : '99+'}
							</span>
							<IconShoppingCart />
						</Link>
					</div>
				</div>
			</div>
			{localStorage.getItem('isAuth') === 'true' && comparisonProducts && (
				<Tooltip
					children={
						<ProductsForHover
							setComparisonProducts={setComparisonProducts}
							comparisonProducts={comparisonProducts}
						/>
					}
				/>
			)}
			{localStorage.getItem('isAuth') === 'true' && favoriteProducts && (
				<Tooltip
					children={
						<ProductsForHover
							favoriteProducts={favoriteProducts}
							setFavoriteProducts={setFavoriteProducts}
						/>
					}
				/>
			)}
			{localStorage.getItem('isAuth') === 'true' && basketProducts && (
				<Tooltip
					children={
						<ProductsForHover
							basketProducts={basketProducts}
							setBasketProducts={setBasketProducts}
						/>
					}
				/>
			)}
		</header>
	);
};

export default SubHeader;
