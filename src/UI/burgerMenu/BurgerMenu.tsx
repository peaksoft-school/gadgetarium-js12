import { FC } from 'react';
import scss from './BurgerMenu.module.scss';
import {
	IconBuildingStore,
	IconDeviceLandlinePhone,
	IconHome,
	IconQuestionMark,
	IconTruckDelivery
} from '@tabler/icons-react';
import {
	IconBasketProducts,
	IconFacebook,
	IconGadgetarium,
	IconHeart,
	IconInstagram,
	IconWeight,
	IconWhatsapp
} from '@/src/assets/icons';
import { Link, useLocation } from 'react-router-dom';
import DesktopHeaderMenu from '../desktopHeaderMenu/DesktopHeaderMenu';

interface BurgerMenuProps {
	isOpenMobileMenu: boolean;
}

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

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpenMobileMenu }) => {
	const { pathname } = useLocation();

	return (
		<div>
			<div
				style={{
					height: isOpenMobileMenu ? '500px' : '70px',
					width: isOpenMobileMenu ? '270px' : '50px',
					background: isOpenMobileMenu ? '#cb11ace3' : 'transparent'
				}}
				className={
					isOpenMobileMenu
						? `${scss.burger_menu} ${scss.active}`
						: `${scss.burger_menu}`
				}
			>
				<div className={scss.mobile_logo_menu}>
					<Link
						style={{ display: isOpenMobileMenu ? 'block' : 'none' }}
						className={scss.logo}
						to="/"
					>
						<IconGadgetarium className={scss.icon_gadgetarium_mobile} />
					</Link>
					<div style={{ display: isOpenMobileMenu ? 'block' : 'none' }}>
						<div className={scss.profile}>
							<DesktopHeaderMenu />
						</div>
					</div>
				</div>
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
							<div
								style={{
									display: isOpenMobileMenu ? 'block' : 'none'
								}}
								className={scss.icon_burder_menu}
							>
								{item.icon}
							</div>
							<div
								style={{
									display: isOpenMobileMenu ? 'block' : 'none'
								}}
								className={scss.label_burger_menu}
							>
								{item.label}
							</div>
						</Link>
					</li>
				))}
				<div
					style={{
						display: isOpenMobileMenu ? 'block' : 'none'
					}}
				>
					<div className={scss.icons_mobile}>
						<div className={scss.icon_networks}>
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
			</div>
		</div>
	);
};

export default BurgerMenu;
