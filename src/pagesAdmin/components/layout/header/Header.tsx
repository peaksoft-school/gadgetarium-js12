import { IconG, IconGadgetarium } from '@/src/assets/icons';
import scss from './Header.module.scss';
import { FC, useEffect, useState } from 'react';
import { Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import BurgerButton from '@/src/UI/burgerButton/BurgerButton';
import BurgerMenu from '@/src/UI/burgerMenu/BurgerMenu';

const links = [
	{
		name: 'Товары',
		link: '/admin'
	},
	{
		name: 'Заказы',
		link: '/admin'
	},
	{
		name: 'Отзывы и рейтинг',
		link: '/admin'
	}
];

const Header: FC = () => {
	const [isMobile, setIsMobile] = useState(true);
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	useEffect(() => {
		const changeIsMobile = () => {
			if (window.innerWidth < 1050) {
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
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<IconGadgetarium classname={scss.gadgetarium_icon} />
					</div>
					{!isMobile ? (
						<>
							<nav className={scss.nav}>
								<ul>
									{links.map((item, index) => (
										<li key={index}>
											<Link to={item.link}>{item.name}</Link>
										</li>
									))}
								</ul>
							</nav>
							<div className={scss.alone_div}>
								<button className={scss.create_button}>Создать рассылку</button>
								<hr />
								<div className={scss.profile}>
									<IconG />
								</div>
								<div className={scss.selected_option_icon}>
									<Menu shadow="md" width={100}>
										<Menu.Target>
											<button className={scss.selected_option}>
												Администратор
												<span className={scss.icon}>
													<IconChevronDown  />
												</span>
											</button>
										</Menu.Target>
										<Menu.Dropdown>
											<Menu.Item>Выйти</Menu.Item>
										</Menu.Dropdown>
									</Menu>
								</div>
							</div>
						</>
					) : (
						<>
								<BurgerButton
									checked={!isOpenMobileMenu}
								onChange={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
							/>
							<BurgerMenu isOpenMobileMenu={isOpenMobileMenu} />
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
