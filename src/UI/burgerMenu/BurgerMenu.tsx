import scss from './BurgerMenu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { FC } from 'react';

interface BurgerMenuProps {
	isOpenMobileMenu: boolean;
}

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

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpenMobileMenu }) => {
	const { pathname } = useLocation();
	return (
		<>
			<div
				className={
					isOpenMobileMenu
						? `${scss.burger_button} ${scss.active}`
						: `${scss.burger_button}`
				}
			>
				<nav className={scss.nav}>
					<ul>
						{links.map((item, index) => (
							<li key={index}>
								<Link
									className={
										pathname === item.link
											? `${scss.link} ${scss.active}`
											: `${scss.link}`
									}
									to={item.link}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className={scss.alone_div}>
					<button className={scss.create_button}>Создать рассылку</button>
					<div className={scss.selected_option_icon}>
						<Menu shadow="md" width={100}>
							<Menu.Target>
								<button className={scss.selected_option}>
									Администратор
									<span className={scss.icon}>
										<IconChevronDown stroke={2} />
									</span>
								</button>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item>Выйти</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					</div>
				</div>
			</div>
		</>
	);
};
export default BurgerMenu;
