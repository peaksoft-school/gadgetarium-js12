import { IconUserProfile } from '@/src/assets/icons';
import { Menu } from '@mantine/core';

const DesktopHeaderMenu = () => {
	return (
		<div>
			<Menu shadow="md" width={150}>
				<Menu.Target>
					<button style={{ cursor: 'pointer' }}>
						<IconUserProfile />
					</button>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item>Войти</Menu.Item>
					<Menu.Item>Регистрация</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</div>
	);
};

export default DesktopHeaderMenu;
