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
import scss from './Header.module.scss';
import { Link } from 'react-router-dom';
import EightPoints from '@/src/assets/icons/eight-points';
import CustomSearch from '@/src/UI/customInputs/customSearch/CustomSearch';
import { useEffect, useState } from 'react';

const Header = () => {
	const [activePage, setActivePage] = useState('');
	const [isMenu, setIsMenu] = useState(false);
	const [isFixed, ,] = useState(false);

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${scss.Header} ${isScrolled ? scss.scrolled : ''}`}>
			<div className="container">
				<div className={scss.content}>
					{/* //!HEADER FIRST */}
					<div className={scss.headerFirst}>
						<Link to="/">
							<IconGadgetarium />
						</Link>
						<ul className={scss.pages}>
							<li>
								<Link
									className={`${scss.link} ${activePage === '/' && scss.activeBackground}`}
									to="/"
									onClick={() => setActivePage('/')}
								>
									Главная
								</Link>
							</li>
							<li>
								<Link
									className={`${scss.link} ${activePage === '/aboutstore' && scss.activeBackground}`}
									to="/aboutstore"
									onClick={() => setActivePage('/aboutstore')}
								>
									О магазине
								</Link>
							</li>
							<li>
								<Link
									className={`${scss.link} ${activePage === '/delivery' && scss.activeBackground}`}
									to="/delivery"
									onClick={() => setActivePage('/delivery')}
								>
									Доставка
								</Link>
							</li>
							<li>
								<Link
									className={`${scss.link} ${activePage === '/fag' && scss.activeBackground}`}
									to="/fag"
									onClick={() => setActivePage('/fag')}
								>
									FAG
								</Link>
							</li>
							<li>
								<Link
									className={`${scss.link} ${activePage === '/contacts' && scss.activeBackground}`}
									to="/contacts"
									onClick={() => setActivePage('/contacts')}
								>
									Контакты
								</Link>
							</li>
						</ul>
						<div className={scss.userProfile}>
							<div
								className={scss.profileClick}
								onClick={() => setIsMenu(!isMenu)}
							>
								<Profile />
							</div>
							<div>
								{isMenu ? (
									<div className={scss.isMenuProfile}>
										<button>Войти</button>
										<button>Регистрация</button>
									</div>
								) : null}
							</div>
						</div>
					</div>
					<div className={scss.test}></div>
					{/* //!HEADER FIXED */}
					<div
						className={`${scss.headerSecond} ${isScrolled ? scss.scrolled : ''}`}
						style={{ position: scrollY > 100 ? 'fixed' : 'static' }}
					>
						<div className={scss.catalogSearch}>
							<div
								// className={`${scss.isfixedIcon} ${isFixed ? scss.fixed : ''}`}
								className={`${scss.titleFixed} ${isFixed ? 'fixed' : ''}`}
							>
								<Link to="/">
									<IconGadgetarium />
								</Link>
							</div>
							<button className={scss.buttonCatalog}>
								<EightPoints />
								Каталог
							</button>
							<div className={scss.hr}></div>
							<div>
								<CustomSearch />
							</div>
						</div>
						<div className={scss.iconsSocialNetwork}>
							<IconFacebook />
							<IconInstagram />
							<IconWhatsapp />
							{/* <span>0</span> */}
						</div>
						<div className={scss.iconFavoriteBas}>
							<IconComparison />
							{/* <span>8</span>	 */}
							<IconFavorite />
							<IconBasket />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
