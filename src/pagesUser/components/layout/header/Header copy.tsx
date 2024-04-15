import scss from './Header.module.scss';
import {
	IconBasketProducts,
	IconCatalog,
	IconFacebook,
	IconGadgetarium,
	IconHeart,
	IconInstagram,
	IconWeight,
	IconWhatsapp
} from '@/src/assets/icons';
import { Link, useLocation } from 'react-router-dom';
import CustomSearch from '@/src/UI/customInputs/customSearch/CustomSearch';
import { useEffect, useState } from 'react';

import DesktopHeaderMenu from '@/src/UI/desktopHeaderMenu/DesktopHeaderMenu';

const links = [
	{
		label: 'Главная',
		link: '/'
	},
	{
		label: 'О магазине',
		link: '/aboutstore'
	},
	{
		label: 'Доставка',
		link: '/delivery'
	},
	{
		label: 'FAG',
		link: '/fag'
	},
	{
		label: 'Контакты',
		link: '/contacts'
	}
];

const Header = () => {
	const [isMenu, setIsMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [burgerMenu, setBurgerMenu] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 87);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.sup_header}>
						<Link className={scss.logo} to="/">
							<IconGadgetarium />
						</Link>
						<nav className={scss.nav}>
							<ul>
								{links.map((item) => (
									<li>
										<Link
											className={
												pathname === item.link
													? `${scss.link} ${scss.active}`
													: `${scss.link}`
											}
											to={item.link}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<div className={scss.profile}>
							<a href="#">+996 (504) 80 10 88</a>
							<DesktopHeaderMenu />
						</div>
					</div>
					<div className={scss.hr}></div>
					<div className={scss.sub_header}>
						<div className={scss.button_catalog_search}>
							<button>
								<IconCatalog />
								Каталог
							</button>
							<div className={scss.hr_line}></div>
							<CustomSearch />
						</div>
						<div className={scss.icon_networks}>
							<div className={scss.icon_facebook}>
								<IconFacebook />
							</div>
							<div className={scss.icon_instagram}>
								<IconInstagram />
							</div>
							<div className={scss.icon_whatsapp}>
								<IconWhatsapp />
							</div>
						</div>
						<div className={scss.icon_basket_heart}>
							<div className={scss.icon_weight}>
								<IconWeight />
							</div>
							<div className={scss.icon_heart}>
								<IconHeart />
							</div>
							<div className={scss.icon_basket}>
								<IconBasketProducts />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
