/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import scss from './CatalogMenu.module.scss';
import { IconGridDots } from '@tabler/icons-react';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import { useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetFiltredGadgetQuery } from '@/src/redux/api/filterGadget';

const CatalogMenu = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [idCategory, setIdCategory] = useState<number>(0);
	const searchResult = useRef(false);
	const navigate = useNavigate();
	const { data: catalogData } = useGetCatalogProductsQuery();
	const [idState, setIdState] = useState<number>(0);
	const { data: subCategories = [] } = useSubCategoriesQuery(idState);

	const handleFiltredProductsFunk = (id: number, categoryName: string) => {
		setIdCategory(id);
		searchParams.append('brand', `${categoryName}`);
		// setSearchParams(searchParams);
		navigate(`/catalog/${id}/filtred?${searchParams.toString()}`);
		searchResult.current = false;
	};

	const searchResults = searchParams.get('brand') || '';
console.log(searchParams, searchResults, 'test project');

	const { data: filteredData } = useGetFiltredGadgetQuery(
		{
			id: idCategory,
			brand: [searchResults]
		}
		// { skip: !searchResult.current }
	);

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
