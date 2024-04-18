import scss from './AuthDropdown.module.scss';
import { Link } from 'react-router-dom';
import { Dropdown, MenuProps } from 'antd';
import { IconUserProfile } from '@/src/assets/icons';

const items: MenuProps['items'] = [
	{
		key: '1',
		label: (
			<Link rel="noopener noreferrer" to="#">
				Вход
			</Link>
		)
	},
	{
		key: '2',
		label: (
			<Link rel="noopener noreferrer" to="#">
				Регистрация
			</Link>
		)
	}
];

const AuthDropdown = () => {
	return (
		<Dropdown menu={{ items }} placement="bottomRight">
			<button className={scss.button}>
				<IconUserProfile />
			</button>
		</Dropdown>
	);
};

export default AuthDropdown;
