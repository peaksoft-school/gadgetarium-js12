import { IconGadgetarium } from '@/src/assets/icons';
import scss from './Header.module.scss';
import { FC, useEffect, useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import BurgerButton from '@/src/ui/burgerButton/BurgerButton';
import BurgerMenu from '@/src/ui/burgerMenu/BurgerMenu';
import { Dropdown, MenuProps } from 'antd/es';

const links = [
	{
		name: 'Товары',
		link: '/admin/productsAdmin'
	},
	{
		name: 'Заказы',
		link: '/admin/ordersAdmin'
	},
	{
		name: 'Отзывы и рейтинг',
		link: '/admin/review'
	}
];

const items: MenuProps['items'] = [
	{
		key: '1',
		label: (
			<Link rel="noopener noreferrer" to="#">
				Выйти
			</Link>
		)
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
						<IconGadgetarium />
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
									<h1>G</h1>
								</div>
								<div className={scss.selected_option_icon}>
									<Dropdown menu={{ items }} placement="bottomRight">
										<button className={scss.button}>
											Администратор
											<span className={scss.icon}>
												<IconChevronDown />
											</span>
										</button>
									</Dropdown>
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
