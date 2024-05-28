/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import scss from './CatalogMenu.module.scss';
import { IconGridDots } from '@tabler/icons-react';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'qs';
import { useGetFiltredGadgetQuery } from '@/src/redux/api/filterGadget';
interface TypesForDataArray {}
const CatalogMenu = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchForBrand = searchParams.get('brand') || '';
	const [brandText, setBrandText] = useState<string>('');
	const [idCategory, setIdCategory] = useState<number>(0);
	const searchResult = React.useRef(false);
	const navigate = useNavigate();

	const addFiltredFunk = (id: number, categoryName: string) => {
		if (window.location.search) {
			const queryParams = qs.parse(window.location.search.substring(1));
			console.log(queryParams, 'parse');

			const { brand } = queryParams;
			console.log(brand, 'brand');

			const { data } = useGetFiltredGadgetQuery({
				id: id,
				brand: [brand]
				// ...parse
			});
			searchResult.current = true;
		}
		setIdCategory(id);
		setBrandText(categoryName);
		console.log(categoryName, brandText, 'test esentur for');
	};
	const handleFiltredProductsFunk = (id: number, categoryName: string) => {
		window.scrollTo(0, 0);
		if (!searchResult.current) {
			const urlString = qs.stringify({
				brand: categoryName
			});
			setBrandText(categoryName);
			navigate(`/catalog/${id}/filtred?${urlString}`);
		}
		searchResult.current = false;
	};
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
				<p
					onClick={() => {
						handleFiltredProductsFunk(category.id, el.categoryName);
						addFiltredFunk(category.id, el.categoryName);
					}}
				>
					{el.categoryName}
				</p>
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