import scss from './CatalogMenu.module.scss';
import { IconGridDots } from '@tabler/icons-react';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
	{
		key: '1',
		label: <Link to="/catalog/phones">Смартфоны</Link>,
		children: [
			{
				key: '2-1',
				label: 'Apple'
			},
			{
				key: '2-2',
				label: 'Samsung'
			},
			{
				key: '2-3',
				label: 'Redmi'
			}
		]
	},
	{
		key: '2',
		label: 'Ноутбуки и планшеты',
		children: [
			{
				key: '2-1',
				label: 'Ремешки для часов'
			},
			{
				key: '2-2',
				label: 'Зарядные устройства'
			},
			{
				key: '2-3',
				label: 'Защита экрана'
			},
			{
				key: '2-4',
				label: 'Чехлы и корпусы'
			},
			{
				key: '2-5',
				label: 'Подставки'
			},
			{
				key: '2-6',
				label: 'Кабели и адаптеры'
			}
		]
	},
	{
		key: '3',
		label: 'Смарт-часы и браслеты',
		children: [
			{
				key: '2-1',
				label: 'Ремешки для часов'
			},
			{
				key: '2-2',
				label: 'Зарядные устройства'
			},
			{
				key: '2-3',
				label: 'Защита экрана'
			},
			{
				key: '2-4',
				label: 'Чехлы и корпусы'
			},
			{
				key: '2-5',
				label: 'Подставки'
			},
			{
				key: '2-6',
				label: 'Кабели и адаптеры'
			}
		]
	},
	{
		key: '4',
		label: 'Аксессуары',
		children: [
			{
				key: '2-1',
				label: 'Ремешки для часов'
			},
			{
				key: '2-2',
				label: 'Зарядные устройства'
			},
			{
				key: '2-3',
				label: 'Защита экрана'
			},
			{
				key: '2-4',
				label: 'Чехлы и корпусы'
			},
			{
				key: '2-5',
				label: 'Подставки'
			},
			{
				key: '2-6',
				label: 'Кабели и адаптеры'
			}
		]
	}
];

const CatalogMenu = () => {
	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm,
		token: {
			colorBgElevated: 'white',
			colorText: ' black',
			colorPrimaryBorderHover: 'red',
			controlItemBgActiveHover: '#bae0ff'
		}
	};
	return (
		<div className={scss.catalog_menu}>
			<ConfigProvider theme={antdThemeConfig}>
				<Dropdown
					menu={{ items }}
					overlayStyle={{
						width: '250px',
						borderRadius: '10px'
					}}
					placement="bottomLeft"
					arrow={{ pointAtCenter: true }}
				>
					<button className={scss.catalog}>
						<IconGridDots />
						Каталог
					</button>
				</Dropdown>
			</ConfigProvider>
		</div>
	);
};

export default CatalogMenu;
