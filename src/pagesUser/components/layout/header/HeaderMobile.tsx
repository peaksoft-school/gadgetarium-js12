import { FC } from 'react';
import scss from './HeaderMobile.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { IconGadgetarium } from '@/src/assets/icons';
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconHeart,
	IconScale,
	IconShoppingCart
} from '@tabler/icons-react';
import mini_logo from '@/src/assets/mini-logo.png';
import AuthDropdown from '@/src/ui/authDropdown/AuthDropdown.tsx';
import { userLinks } from '@/src/routes';
import { ConfigProvider, Input, theme } from 'antd';
import { SearchProps } from 'antd/es/input';
import BurgerButton from '@/src/ui/burgerButton/BurgerButton.tsx';
import { useGetBasketQuery } from '@/src/redux/api/basket';
import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import { useGetComparisonQuery } from '@/src/redux/api/comparison';

interface HeaderMobileProps {
	isOpenMobileMenu: boolean;
	setIsOpenMobileMenu: (isOpenMobileMenu: boolean) => void;
}

const HeaderMobile: FC<HeaderMobileProps> = ({
	isOpenMobileMenu,
	setIsOpenMobileMenu
}) => {
	const { data: BasketData = [] } = useGetBasketQuery();
	const { data: FavoriteData = [] } = useGetFavoriteQuery();
	const { data: ComparisonData = [] } = useGetComparisonQuery();
	const { pathname } = useLocation();

	const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
		console.log(info?.source, value);

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
							<Input.Search
								className={scss.search}
								placeholder="Поиск по каталогу магазина"
								allowClear
								onSearch={onSearch}
							/>
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
								<span>
									{ComparisonData.length <= 99 ? ComparisonData.length : '99+'}
								</span>
								<IconScale />
							</Link>
							<Link to="/favorite" className={scss.icon}>
								<span>
									{FavoriteData.length <= 99 ? FavoriteData.length : '99+'}
								</span>
								<IconHeart />
							</Link>
							<Link to="/basket" className={scss.icon}>
								<span>
									{BasketData.length <= 99 ? BasketData.length : '99+'}
								</span>
								<IconShoppingCart />
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default HeaderMobile;
