import { FC } from 'react';
import scss from './HeaderMobile.module.scss';
import { Link, useLocation } from 'react-router-dom';
import {
	IconBasketProducts,
	IconFacebook,
	IconGadgetarium,
	IconHeart,
	IconInstagram,
	IconWeight,
	IconWhatsapp
} from '@/src/assets/icons';
import mini_logo from '@/src/assets/mini-logo.png';
import AuthDropdown from '@/src/UI/authDropdown/AuthDropdown.tsx';
import { userLinks } from '@/src/routes';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import BurgerButton from '@/src/UI/burgerButton/BurgerButton.tsx';

interface HeaderMobileProps {
	isOpenMobileMenu: boolean;
	setIsOpenMobileMenu: (isOpenMobileMenu: boolean) => void;
}

const HeaderMobile: FC<HeaderMobileProps> = ({
	isOpenMobileMenu,
	setIsOpenMobileMenu
}) => {
	const { pathname } = useLocation();

	const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
		console.log(info?.source, value);

	return (
		<>
			<header className={scss.HeaderMobile}>
				<div className="container">
					<div className={scss.content}>
						<Link className={scss.logo} to="/">
							<img src={mini_logo} alt="mini-logo" />
						</Link>
						<Input.Search
							className={scss.search}
							placeholder="Поиск по каталогу магазина"
							allowClear
							onSearch={onSearch}
						/>
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
							<IconGadgetarium className={scss.icon_gadgetarium_mobile} />
						</Link>
						<div>
							<div className={scss.profile}>
								<AuthDropdown />
							</div>
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
							>
								<div className={scss.icon_burger_menu}>{item.icon}</div>
								<div className={scss.label_burger_menu}>{item.label}</div>
							</Link>
						</li>
					))}
					<div className={scss.icons_mobile}>
						<div className={scss.icon_networks}>
							<a
								className={scss.icon_facebook}
								href="https://www.facebook.com/?locale=ru_RU"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconFacebook />
							</a>
							<a
								className={scss.icon_instagram}
								href="https://www.instagram.com/taa1ai.bekovna?igsh=MTh5a3VrZjgza2hxNA=="
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconInstagram />
							</a>
							<a
								className={scss.icon_whatsapp}
								href="https://wa.me/qr/TU2DHKCN5KLKC1"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconWhatsapp />
							</a>
						</div>
						<hr />
						<div className={scss.icon_basket_heart}>
							<div className={scss.icon_weight}>
								<span className={scss.icon_zero}>0</span>
								<IconWeight className={scss.weight} />
							</div>
							<div className={scss.icon_heart}>
								<span>0</span>
								<IconHeart className={scss.heart} />
							</div>
							<div className={scss.icon_basket}>
								<span>0</span>
								<IconBasketProducts className={scss.basket} />
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default HeaderMobile;
