import scss from './BurgerMenu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import { FC, useState } from 'react';
import { DatePicker, DatePickerProps, Dropdown, MenuProps } from 'antd/es';
import CustomModal from '../modalAdmin/CustomModal';
import CancelButtonCustom from '../adminButtons/CancelButtonCustom';
import CustomButtonAdd from '../adminButtons/CustomButtonAdd';
import CustomImageAdd from '../customImageAdd/CustomImageAdd';
import LogoutModal from '../logOutModal/LogoutModal';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};

interface BurgerMenuProps {
	isOpenMobileMenu: boolean;
	setIsOpenMobileMenu: (isOpen: boolean) => void;
}

const links = [
	{
		name: 'Товары',
		link: '/admin'
	},
	{
		name: 'Заказы',
		link: '/admin/orders/in-pending'
	},
	{
		name: 'Отзывы и рейтинг',
		link: '/admin/review'
	}
];

const BurgerMenu: FC<BurgerMenuProps> = ({
	isOpenMobileMenu,
	setIsOpenMobileMenu
}) => {
	const { pathname } = useLocation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalLogOut, setIsModalLogOut] = useState<boolean>(false);
	const handleCancel = () => {
		setIsOpenMobileMenu(false);
	};

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
									onClick={handleCancel}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className={scss.alone_div}>
					<button className={scss.create_button} onClick={showModal}>
						Создать рассылку
					</button>
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
										onChange={onChange}
									/>
								</div>
								<div>
									<label htmlFor="name">Дата окончания акции *</label>
									<DatePicker
										name="name"
										className={scss.date}
										placeholder="Выберите дату"
										onChange={onChange}
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
		</>
	);
};
export default BurgerMenu;
