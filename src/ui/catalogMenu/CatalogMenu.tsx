import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import scss from './CatalogMenu.module.scss';
import { IconGridDots } from '@tabler/icons-react';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import { useState } from 'react';
// import { useGetFiltredGadgetQuery } from '@/src/redux/api/filterGadget';
import { Link } from 'react-router-dom';

const CatalogMenu = () => {
	const { data } = useGetCatalogProductsQuery();
	const [idState, setIdState] = useState<number>(0);
	const [filtredAddProductsState, setFiltredAddProductsState] = useState<
		string[] | string
	>(['']);
	const [filtredProductsIds, setFiltredProductsIds] = useState<number>(0);

	const handleAddSubCategories = (id: number) => {
		setIdState(id);
	};

	const handleFiltredAddProducts = (id: number, brand: string) => {
		console.log(id, 'id');

		setFiltredAddProductsState(brand);
		setFiltredProductsIds(id);
	};
	// const { data: FiltredGatged = [] } = useGetFiltredGadgetQuery(
	// 	filtredProductsIds,
	// 	filtredAddProductsState
	// );

	const { data: SubCategories = [] } = useSubCategoriesQuery(idState!);
	console.log(SubCategories);

	if (!data) {
		return (
			<>
				<button className={scss.button_for_loading}>
					<IconGridDots />
					Каталог
				</button>
			</>
		);
	}

	const items: MenuProps['items'] = data.map((category) => ({
		key: category.id,
		label: (
			<p onMouseEnter={() => handleAddSubCategories(category.id)}>
				{category.categoryName}
			</p>
		),
		children: SubCategories.map((el) => ({
			key: el.id,
			label: (
				<Link
					to={''}
					onClick={() => handleFiltredAddProducts(category.id, el.categoryName)}
				>
					{el.categoryName}
				</Link>
			)
		}))
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
