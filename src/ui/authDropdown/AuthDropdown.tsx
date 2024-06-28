import scss from './AuthDropdown.module.scss';
import { Link } from 'react-router-dom';
import { ConfigProvider, Dropdown, Menu, theme } from 'antd';
import { IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import LogoutModal from '../logOutModal/LogoutModal';
import { useGetProfilesQuery } from '@/src/redux/api/personalAccount/profile';

interface MenuItem {
	key: string;
	label: React.ReactNode;
}

const AuthDropdown = () => {
	const { data: profileData } = useGetProfilesQuery({});

	const showModalLogOut = () => {
		setOpenModal(true);
	};

	const items: MenuItem[] = [
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

	const itemsUser: MenuItem[] = [
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
			key: '3',
			label: (
				<Link rel="noopener noreferrer" to="/personal-account/profile">
					Профиль
				</Link>
			)
		},
		{
			key: '4',
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
				<Dropdown
					overlay={
						<Menu>
							{menuItems.map(
								(item) =>
									item && <Menu.Item key={item.key}>{item.label}</Menu.Item>
							)}
						</Menu>
					}
					placement="bottomRight"
				>
					{profileData?.image ? (
						<img
							className={scss.button}
							src={profileData.image}
							alt="User profile"
						/>
					) : (
						<button className={scss.button}>
							<IconUser />	
						</button>
					)}
				</Dropdown>
			</ConfigProvider>
			<LogoutModal isModalLogOut={openModal} setIsModalLogOut={setOpenModal} />
		</>
	);
};

export default AuthDropdown;
