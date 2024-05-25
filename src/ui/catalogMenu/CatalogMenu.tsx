/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react-hooks/rules-of-hooks */
// import {
// 	useGetCatalogProductsQuery,
// 	useSubCategoriesQuery
// } from '@/src/redux/api/catalogProducts';
// import scss from './CatalogMenu.module.scss';
// import { IconGridDots } from '@tabler/icons-react';
// import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
// import { useState } from 'react';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import { useGetFiltredGadgetQuery } from '@/src/redux/api/filterGadget';

// const CatalogMenu = () => {
// 	const [searchParams, setSearchParams] = useSearchParams();
// 	const searchForBrand = searchParams.get('brand') || '';
// 	const navigate = useNavigate();

// 	const { data } = useGetCatalogProductsQuery();
// 	const [idState, setIdState] = useState<number>(0);
// 	const handleAddSubCategories = (id: number) => {
// 		setIdState(id);
// 	};

// 	const handleFiltredAddProducts = async (id: number, brand: string) => {
// 		console.log(brand, 'brand');
// 		searchForBrand = brand
// 		try {
// 			const { data: FiltredData = [] } = useGetFiltredGadgetQuery(id, brand: searchForBrand);

// 			navigate('');
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	const { data: SubCategories = [] } = useSubCategoriesQuery(idState!);

// 	if (!data) {
// 		return (
// 			<>
// 				<button className={scss.button_for_loading}>
// 					<IconGridDots />
// 					Каталог
// 				</button>
// 			</>
// 		);
// 	}

// 	const items: MenuProps['items'] = data.map((category) => ({
// 		key: category.id,
// 		label: (
// 			<Link
// 				to={`/catalog/phones`}
// 				onMouseEnter={() => handleAddSubCategories(category.id)}
// 			>
// 				{category.categoryName}
// 			</Link>
// 		),
// 		children: SubCategories.map((el) => ({
// 			key: el.id,
// 			label: (
// 				<p
// 					onClick={() => handleFiltredAddProducts(category.id, el.categoryName)}
// 				>
// 					{el.categoryName}
// 				</p>
// 			)
// 		}))
// 	}));

// 	const antdThemeConfig = {
// 		algorithm: theme.defaultAlgorithm,
// 		token: {
// 			colorBgElevated: 'white',
// 			colorText: 'black',
// 			colorPrimaryBorderHover: 'red',
// 			controlItemBgActiveHover: '#bae0ff'
// 		}
// 	};

// 	return (
// 		<div className={scss.catalog_menu}>
// 			<ConfigProvider theme={antdThemeConfig}>
// 				<Dropdown
// 					menu={{ items }}
// 					overlayStyle={{
// 						width: '250px',
// 						borderRadius: '10px'
// 					}}
// 					placement="bottomLeft"
// 					arrow={{ pointAtCenter: true }}
// 				>
// 					<button className={scss.catalog}>
// 						<IconGridDots />
// 						Каталог
// 					</button>
// 				</Dropdown>
// 			</ConfigProvider>
// 		</div>
// 	);
// };

// export default CatalogMenu;

import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import scss from './CatalogMenu.module.scss';
import { IconGridDots } from '@tabler/icons-react';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const CatalogMenu = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchForBrand = searchParams.get('brand') || '';
	const navigate = useNavigate();

	const { data: catalogData } = useGetCatalogProductsQuery();
	const [idState, setIdState] = useState<number>(0);

	const { data: subCategories = [] } = useSubCategoriesQuery(idState);

	console.log(searchForBrand);

	if (!catalogData) {
		return (
			<button className={scss.button_for_loading}>
				<IconGridDots />
				Каталог
			</button>
		);
	}

	const items: MenuProps['items'] = catalogData.map((category) => ({
		key: category.id,
		label: (
			<p onMouseEnter={() => setIdState(category.id)}>
				{category.categoryName}
			</p>
		),
		children: subCategories.map((el) => ({
			key: el.id,
			label: (
				<Link
					to={`/catalog/${category.id}/phones/brand/${el.categoryName}`}
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
