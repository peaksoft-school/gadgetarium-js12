import scss from './BurgerMenu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import { FC } from 'react';
import { Dropdown, MenuProps } from 'antd/es';

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
						<Dropdown menu={{ items }} placement="bottomRight">
							<button className={scss.button}>
								Администратор
								<span className={scss.icon}>
									{' '}
									<IconChevronDown />
								</span>
							</button>
						</Dropdown>
					</div>
				</div>
			</div>
		</>
	);
};
export default BurgerMenu;
