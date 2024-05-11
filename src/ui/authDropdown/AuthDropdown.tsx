import scss from './AuthDropdown.module.scss';
import { Link } from 'react-router-dom';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import { IconUser } from '@tabler/icons-react';

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

const AuthDropdown = () => {
	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm
	};
	return (
		<ConfigProvider theme={antdThemeConfig}>
			<Dropdown menu={{ items }} placement="bottomRight">
				<button className={scss.button}>
					<IconUser />
				</button>
			</Dropdown>
		</ConfigProvider>
	);
};

export default AuthDropdown;
