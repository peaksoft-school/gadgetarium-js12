import scss from './Header.module.scss';
import {
	IconBasket,
	IconComparison,
	IconFacebook,
	IconFavorite,
	IconGadgetarium,
	IconInstagram,
	IconWhatsapp,
	Profile
} from '@/src/assets/icons';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import EightPoints from '@/src/assets/icons/eight-points';
import CustomSearch from '@/src/UI/customInputs/customSearch/CustomSearch';
import { useEffect, useState } from 'react';

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
	const [activePage, setActivePage] = useState('');
	const [isMenu, setIsMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [burgerMenu, setBurgerMenu] = useState(false);

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
						<nav>
							<ul>
								{links.map((item) => (
									<li>
										<Link to={item.link}>{item.label}</Link>
									</li>
								))}
							</ul>
						</nav>
						<div>
							<a href="#">+996 504 80 10 88</a>
						</div>
					</div>
					<div className={scss.sub_header}></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
