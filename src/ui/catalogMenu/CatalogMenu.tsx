import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import scss from './CatalogMenu.module.scss';
import { IconGridDots } from '@tabler/icons-react';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import { Link } from 'react-router-dom';

const CatalogMenu = () => {
	const { data } = useGetCatalogProductsQuery();
	const { data: SubCategories = [] } = useSubCategoriesQuery(0);

	function handle(id: number) {
		console.log(id);
		
		// SubCategories.push(id);
		// console.log(SubCategories);
	}

	if (!data) {
		// Пока данные загружаются, можно вернуть загрузочный компонент или null
		return <div>Loading...</div>;
	}

	const items: MenuProps['items'] = data.map((category) => ({
		key: category.id,
		label: (
			<p onMouseEnter={() => handle(category.id)}>{category.categoryName}</p>
		),
		children: [
			{
				key: `${category.id}-1`,
				label: 'Apple'
			},
			{
				key: `${category.id}-2`,
				label: 'Samsung'
			},
			{
				key: `${category.id}-3`,
				label: 'Redmi'
			}
		]
	}));

	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm,
		token: {
			colorBgElevated: 'white',
			colorText: 'black',
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

