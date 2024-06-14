import scss from './AuthDropdown.module.scss';
import { Link } from 'react-router-dom';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import { IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import LogoutModal from '../logOutModal/LogoutModal';

const AuthDropdown = () => {
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link rel="noopener noreferrer" to="/auth/login">
					Вход
				</Link>
			)
		},
		{
			key: '2',
			label: (
				<Link rel="noopener noreferrer" to="/auth/register">
					Регистрация
				</Link>
			)
		}
	];
	const showModalLogOut = () => {
		setOpenModal(true);
	};
	const itemsUser: MenuProps['itemsUser'] = [
		{
			key: '1',
			label: (
				<Link
					rel="noopener noreferrer"
					to="/personal-account/history-of-orders"
				>
					История заказов
				</Link>
			)
		},
		{
			key: '2',
			label: (
				<Link rel="noopener noreferrer" to="/personal-account/favorite">
					Избранное
				</Link>
			)
		},
		{
			key: '2',
			label: (
				<Link rel="noopener noreferrer" to="/personal-account/profile">
					Профиль
				</Link>
			)
		},
		{
			key: '2',
			label: (
				<Link rel="noopener noreferrer" to="#" onClick={showModalLogOut}>
					Выйти
				</Link>
			)
		}
	];
	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm
	};

	const [openModal, setOpenModal] = useState(false);

	const authDropdown = localStorage.getItem('isAuth');
	const menuItems = authDropdown ? itemsUser : items;

	return (
		<>
			<ConfigProvider theme={antdThemeConfig}>
				<Dropdown menu={{ items: menuItems }} placement="bottomRight">
					<button className={scss.button}>
						<IconUser />
					</button>
				</Dropdown>
			</ConfigProvider>
			<LogoutModal isModalLogOut={openModal} setIsModalLogOut={setOpenModal} />
		</>
	);
};

export default AuthDropdown;
