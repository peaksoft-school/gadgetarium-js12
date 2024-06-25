import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';
import { FC, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import { Dropdown, MenuProps } from 'antd/es';
import scss from './Header.module.scss';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import CustomImageAdd from '@/src/ui/customImageAdd/CustomImageAdd';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import LogoutModal from '@/src/ui/logOutModal/LogoutModal';
import { usePostNewslaterMutation } from '@/src/redux/api/goods';
import { IconGadgetarium } from '@/src/assets/icons';
import BurgerButton from '@/src/ui/burgerButton/BurgerButton';
import BurgerMenu from '@/src/ui/burgerMenu/BurgerMenu';

const links = [
	{
		name: 'Товары',
		link: '/admin'
	},
	{
		name: 'Заказы',
		links: '/admin/ordersAdmin',
		link: '/admin/orders/in-pending'
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
	const navigate = useNavigate();

	const showModal = () => {
		setIsModalOpen(true);
	};

	const showModalCancel = () => {
		setIsModalOpen(false);
	};

	const showModalLogOut = () => {
		localStorage.getItem('isAuth');
		navigate('/login');
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

	const [postNewslater] = usePostNewslaterMutation();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState<string>('');
	const [endDate, setEndDate] = useState<string>('');
	const [image, setImage] = useState<string>('');

	const handlePostNewslater = async () => {
		const newNewslaterData = {
			image: image,
			nameOfNewsLetter: name,
			description: description,
			startDateOfDiscount: startDate,
			endDateOfDiscount: endDate
		};
		console.log(newNewslaterData);

		const res = await postNewslater(newNewslaterData);
		console.log(res);
	};

	const handleStartDateChange = (date: Moment | null) => {
		if (date) {
			setStartDate(date.format('YYYY-MM-DD'));
		} else {
			setStartDate('');
		}
	};

	const handleEndDateChange = (date: Moment | null) => {
		if (date) {
			setEndDate(date.format('YYYY-MM-DD'));
		} else {
			setEndDate('');
		}
	};

	function handleRemoveLocalStorageCategoryId() {
		localStorage.removeItem('categoryIdForAddProduct');
	}

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div
						className={scss.logo}
						onClick={() => {
							navigate('/admin'), handleRemoveLocalStorageCategoryId();
						}}
					>
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
												onClick={handleRemoveLocalStorageCategoryId}
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

							<CustomImageAdd image={image} setImage={setImage} />
							<div className={scss.size_sale}>
								<label htmlFor="name">Название рассылки *</label>
								<input
									type="text"
									name="name"
									className={scss.input}
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Введите название рассылки"
								/>
							</div>
							<div className={scss.size_sale}>
								<label htmlFor="name">Описание рассылки *</label>
								<input
									type="text"
									className={scss.input}
									name="name"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									placeholder="Введите название рассылки "
								/>
							</div>
							<div className={scss.dates}>
								<div>
									<label htmlFor="name">Дата начала акции *</label>
									<DatePicker
										name="startDate"
										className={scss.date}
										value={startDate ? moment(startDate, 'YYYY-MM-DD') : null}
										onChange={handleStartDateChange}
										placeholder="От"
										format="YYYY-MM-DD"
									/>
								</div>
								<div>
									<label htmlFor="name">Дата окончания акции *</label>
									<DatePicker
										name="endDate"
										className={scss.date}
										value={endDate ? moment(endDate, 'YYYY-MM-DD') : null}
										onChange={handleEndDateChange}
										placeholder="Выберите дату"
										format="YYYY-MM-DD"
									/>
								</div>
							</div>
							<div className={scss.buttons}>
								<CancelButtonCustom onClick={showModalCancel}>
									ОТМЕНИТЬ
								</CancelButtonCustom>
								<CustomButtonAdd onClick={handlePostNewslater}>
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
