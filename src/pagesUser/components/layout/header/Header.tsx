import scss from './Header.module.scss';
import {
	IconAdgetarium,
	IconBasketProducts,
	IconCatalog,
	IconFacebook,
	IconGadgetarium,
	IconGadgetariumMobile,
	IconHeart,
	IconInstagram,
	IconWeight,
	IconWhatsapp
} from '@/src/assets/icons';
import { Link, useLocation } from 'react-router-dom';
import CustomSearch from '@/src/UI/customInputs/customSearch/CustomSearch';
import { useEffect, useState } from 'react';

import DesktopHeaderMenu from '@/src/UI/desktopHeaderMenu/DesktopHeaderMenu';

import {
	IconBuildingStore,
	IconDeviceLandlinePhone,
	IconHome,
	IconQuestionMark,
	IconTruckDelivery
} from '@tabler/icons-react';
import BurgerMenu from '@/src/UI/burgerMenu/BurgerMenu';
import BurgerButton from '@/src/UI/burgerButton/BurgerButton';

const links = [
	{
		label: 'Главная',
		link: '/',
		icon: <IconHome />
	},
	{
		label: 'О магазине',
		link: '/aboutstore',
		icon: <IconBuildingStore />
	},
	{
		label: 'Доставка',
		link: '/delivery',
		icon: <IconTruckDelivery />
	},
	{
		label: 'FAQ',
		link: '/faq',
		icon: <IconQuestionMark />
	},
	{
		label: 'Контакты',
		link: '/contacts',
		icon: <IconDeviceLandlinePhone />
	}
];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(true);
	const { pathname } = useLocation();
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 75);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const changeIsMobile = () => {
			if (window.innerWidth < 960) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		changeIsMobile();
		window.addEventListener('resize', changeIsMobile);

		return () => {
			window.removeEventListener('resize', changeIsMobile);
		};
	}, []);

	return (
		<header className={scss.Header}>
			{!isMobile ? (
				<>
					<div className={scss.sup_header}>
						<div className="container">
							<div className={scss.content}>
								<Link className={scss.logo} to="/">
									<IconGadgetarium className={scss.icon_gadgetarium} />
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
						</div>
					</div>
					{/* //!!!!!!!!! */}
					<div
						className={
							isScrolled
								? `${scss.sub_header} ${scss.fixed}`
								: `${scss.sub_header}`
						}
					>
						<div className="container">
							<div className={scss.content}>
								<div className={scss.button_catalog_search}>
									{isScrolled && (
										<>
											<Link className={scss.logo} to="/">
												<IconGadgetarium
													className={scss.icon_gadgetarium_fixed}
												/>
											</Link>
										</>
									)}
									<button>
										<IconCatalog />
										Каталог
									</button>
									<div className={scss.hr_line}></div>
									<CustomSearch />
								</div>
								<div className={scss.icon_networks}>
									{!isScrolled && (
										<>
											<a
												className={scss.icon_facebook}
												href="	https://www.facebook.com/?locale=ru_RU"
											>
												<IconFacebook />
											</a>
											<a
												className={scss.icon_instagram}
												href="https://www.instagram.com/taa1ai.bekovna?igsh=MTh5a3VrZjgza2hxNA=="
											>
												<IconInstagram />
											</a>
											<a
												className={scss.icon_whatsapp}
												href="https://wa.me/qr/TU2DHKCN5KLKC1"
											>
												<IconWhatsapp />
											</a>
										</>
									)}
								</div>
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
					</div>
				</>
			) : (
				<>
					<div
						className={
							isScrolled
								? `${scss.sup_mobile} ${scss.blur}`
								: `${scss.sup_mobile}`
						}
					>
						<div className="container">
							<div className={scss.content_mobile}>
								<Link className={scss.logo} to="/">
									<div className={scss.icon_g_adget}>
										<IconGadgetariumMobile className={scss.icon_g} />
									</div>
									<IconAdgetarium className={scss.icon_adgetarium} />
								</Link>

								<CustomSearch />
								<div>
									<BurgerButton
										checked={!isOpenMobileMenu}
										onChange={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
									/>
									<BurgerMenu isOpenMobileMenu={isOpenMobileMenu} />
								</div>
							</div>
						</div>
					</div>
					<div className={scss.burger_menu}></div>
				</>
			)}
		</header>
	);
};

export default Header;
