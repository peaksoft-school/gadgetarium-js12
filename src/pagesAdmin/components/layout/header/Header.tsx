import { IconGadgetarium } from '@/src/assets/icons';
import scss from './Header.module.scss';
import { FC, useEffect, useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import BurgerButton from '@/src/ui/burgerButton/BurgerButton';
import BurgerMenu from '@/src/ui/burgerMenu/BurgerMenu';
import { DatePicker, Dropdown, MenuProps } from 'antd/es';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';

import CustomImageAdd from '@/src/ui/customImageAdd/CustomImageAdd';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import LogoutModal from '@/src/ui/logOutModal/LogoutModal';

const links = [
	{
		name: 'Товары',
		link: '/admin'
	},
	{
		name: 'Заказы',
		link: '/admin/orders/in-pending',
		links: '/admin/ordersAdmin'
	},
	{
		name: 'Отзывы и рейтинг',
		link: '/admin/review'
	}
];

const Header: FC = () => {
	const [isMobile, setIsMobile] = useState(true);
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalLogOut, setIsModalLogOut] = useState<boolean>(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const showModalCancel = () => {
		setIsModalOpen(false);
	};

	const showModalLogOut = () => {
		setIsModalLogOut(true);
	};
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link rel="noopener noreferrer" to="#" onClick={showModalLogOut}>
					Выйти
				</Link>
			)
		}
	];

	const { pathname } = useLocation();

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
								<button onClick={showModal} className={scss.create_button}>
									Создать рассылку
								</button>
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
								checked={isOpenMobileMenu}
								onChange={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
							/>
							<BurgerMenu
								isOpenMobileMenu={isOpenMobileMenu}
								setIsOpenMobileMenu={setIsOpenMobileMenu}
							/>
						</>
					)}
				</div>
				<div>
					<CustomModal
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen}
					>
						<div className={scss.create_newsletter}>
							<h1>Создать скидку</h1>

							<CustomImageAdd />
							<div className={scss.size_sale}>
								<label htmlFor="name">Название рассылки *</label>
								<input
									type="text"
									name="name"
									placeholder="Введите название рассылки"
								/>
							</div>
							<div className={scss.size_sale}>
								<label htmlFor="name">Описание рассылки *</label>
								<input
									type="text"
									name="name"
									placeholder="Введите название рассылки "
								/>
							</div>
							<div className={scss.dates}>
								<div>
									<label htmlFor="name">Дата начала акции *</label>
									<DatePicker
										name="name"
										className={scss.date}
										placeholder="От"
									/>
								</div>
								<div>
									<label htmlFor="name">Дата окончания акции *</label>
									<DatePicker
										name="name"
										className={scss.date}
										placeholder="Выберите дату"
									/>
								</div>
							</div>
							<div className={scss.buttons}>
								<CancelButtonCustom onClick={showModalCancel}>
									ОТМЕНИТЬ
								</CancelButtonCustom>
								<CustomButtonAdd onClick={showModalCancel}>
									ОТПРАВИТЬ
								</CustomButtonAdd>
							</div>
						</div>
					</CustomModal>
					<LogoutModal
						isModalLogOut={isModalLogOut}
						setIsModalLogOut={setIsModalLogOut}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
