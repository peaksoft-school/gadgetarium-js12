import { FC, useState } from 'react';
import scss from './HeaderMobile.module.scss';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { IconGadgetarium } from '@/src/assets/icons';
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconHeart,
	IconLoader,
	IconScale,
	IconShoppingCart
} from '@tabler/icons-react';
import mini_logo from '@/src/assets/mini-logo.png';
import AuthDropdown from '@/src/ui/authDropdown/AuthDropdown.tsx';
import { userLinks } from '@/src/routes';
import { ConfigProvider, Input, Rate, theme } from 'antd';
import BurgerButton from '@/src/ui/burgerButton/BurgerButton.tsx';
import { useGetBasketQuery } from '@/src/redux/api/basket';
import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import { useGetComparisonQuery } from '@/src/redux/api/comparison';
import { useGetGlobalSearchQuery } from '@/src/redux/api/globalSearch';

interface HeaderMobileProps {
	isOpenMobileMenu: boolean;
	setIsOpenMobileMenu: (isOpenMobileMenu: boolean) => void;
}

const HeaderMobile: FC<HeaderMobileProps> = ({
	isOpenMobileMenu,
	setIsOpenMobileMenu
}) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const { data: BasketData = [] } = useGetBasketQuery();
	const { data: FavoriteData = [] } = useGetFavoriteQuery();
	const [inputValue, setInputValue] = useState('');
	const { data: ComparisonData = [] } = useGetComparisonQuery();
	const { pathname } = useLocation();

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
			refetch();
		}
	};

	const handleCloseMobileMenu = () => {
		setIsOpenMobileMenu(false);
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
		<>
			<header className={scss.HeaderMobile}>
				<div className="container">
					<div className={scss.content}>
						<Link className={scss.logo} to="/">
							<img src={mini_logo} alt="	-logo" />
						</Link>
						<ConfigProvider theme={antdThemeConfig}>
							<div className={scss.test}>
								
							<Input.Search
								className={scss.search}
								placeholder="Поиск по каталогу магазина"
								allowClear
								onChange={handleChangeSearch}
								value={inputValue}
							/>
							{searchParams.get('request') && (
								<div className={scss.main_search}>
									<div className={scss.search_global}>
										{isLoading ? (
											<>
												<div className={scss.loader}>
													<IconLoader />
												</div>
											</>
										) : (
											<>
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
																	<div className={scss.one_products}>
																		<p>
																			{el.brandNameOfGadget.length >= 28
																				? el.brandNameOfGadget.slice(0, 22) +
																					'...'
																				: el.brandNameOfGadget}
																		</p>
																		<p className={scss.rating_search}>
																			Рейтинг
																			<Rate
																				className={scss.rate}
																				allowHalf
																				disabled
																				defaultValue={el.rating}
																			/>
																			({el.rating})
																		</p>
																	</div>
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
											</>
										)}
									</div>
								</div>
							)}
							</div>
						</ConfigProvider>
						<BurgerButton
							checked={isOpenMobileMenu}
							onChange={() => {
								setIsOpenMobileMenu(!isOpenMobileMenu);
							}}
						/>
					</div>
				</div>
				<div
					className={
						isOpenMobileMenu
							? `${scss.burger_menu} ${scss.active}`
							: `${scss.burger_menu}`
					}
				>
					<div className={scss.mobile_logo_menu}>
						<Link className={scss.logo} to="/">
							<IconGadgetarium />
						</Link>
						<div className={scss.profile}>
							<AuthDropdown />
						</div>
					</div>
					{userLinks.map((item, index) => (
						<li key={index}>
							<Link
								style={{
									transform: isOpenMobileMenu ? 'scale(1)' : 'scale(0)'
								}}
								className={
									pathname === item.link
										? `${scss.link} ${scss.active}`
										: `${scss.link}`
								}
								to={item.link}
								onClick={handleCloseMobileMenu}
							>
								<div className={scss.icon_burger_menu}>{item.icon}</div>
								<div className={scss.label_burger_menu}>{item.label}</div>
							</Link>
						</li>
					))}
					<div className={scss.icons_mobile}>
						<div className={scss.icon_networks}>
							<a
								className={scss.icon_site}
								href="https://www.facebook.com/?locale=ru_RU"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconBrandFacebook />
							</a>
							<a
								className={scss.icon_site}
								href="https://www.instagram.com/taa1ai.bekovna?igsh=MTh5a3VrZjgza2hxNA=="
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconBrandInstagram />
							</a>
							<a
								className={scss.icon_site}
								href="https://wa.me/qr/TU2DHKCN5KLKC1"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconBrandWhatsapp />
							</a>
						</div>
						<hr />
						<div className={scss.icon_basket_heart}>
							<Link to="/comparison" className={scss.icon}>
								<span
									className={
										ComparisonData.length !== 0
											? `${scss.count_for_products} ${scss.count_for_products_active}`
											: `${scss.count_for_products}`
									}
								>
									{ComparisonData.length <= 99 ? ComparisonData.length : '99+'}
								</span>
								<IconScale
									style={
										ComparisonData.length !== 0
											? { color: '#ff00d4' }
											: { color: '' }
									}
								/>
							</Link>
							<Link to="/favorite" className={scss.icon}>
								<span
									className={
										FavoriteData.length !== 0
											? `${scss.count_for_products} ${scss.count_for_products_active}`
											: `${scss.count_for_products}`
									}
								>
									{FavoriteData.length <= 99 ? FavoriteData.length : '99+'}
								</span>
								<IconHeart
									style={
										FavoriteData.length !== 0
											? { color: '#ff00d4' }
											: { color: '' }
									}
								/>
							</Link>
							<Link to="/basket" className={scss.icon}>
								<span
									className={
										BasketData.length !== 0
											? `${scss.count_for_products} ${scss.count_for_products_active}`
											: `${scss.count_for_products}`
									}
								>
									{BasketData.length <= 99 ? BasketData.length : '99+'}
								</span>
								<IconShoppingCart
									style={
										BasketData.length !== 0
											? { color: '#ff00d4' }
											: { color: '' }
									}
								/>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default HeaderMobile;
