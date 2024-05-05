import scss from './CatalogMenu.module.scss';
import { IconGridDots } from '@tabler/icons-react';
import { Dropdown, MenuProps } from 'antd';

const items: MenuProps['items'] = [
	{
		key: '1',
		label: 'Смартфоны',
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
				key: '2-3',
				label: 'Чехлы и корпусы'
			},
			{
				key: '2-3',
				label: 'Подставки'
			},
			{
				key: '2-3',
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
				key: '2-3',
				label: 'Чехлы и корпусы'
			},
			{
				key: '2-3',
				label: 'Подставки'
			},
			{
				key: '2-3',
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
				key: '2-3',
				label: 'Чехлы и корпусы'
			},
			{
				key: '2-3',
				label: 'Подставки'
			},
			{
				key: '2-3',
				label: 'Кабели и адаптеры'
			}
		]
	}
];

const CatalogMenu = () => {
	return (
		<div className={scss.catalog_menu}>
			<Dropdown menu={{ items }}>
				<button className={scss.catalog}>
					<IconGridDots />
					Каталог
				</button>
			</Dropdown>
		</div>
	);
};

export default CatalogMenu;
