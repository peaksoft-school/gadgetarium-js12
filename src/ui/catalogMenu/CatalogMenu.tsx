/* eslint-disable react-hooks/rules-of-hooks */
import {
	useGetCatalogProductsQuery,
	useSubCategoriesQuery
} from '@/src/redux/api/catalogProducts';
import scss from './CatalogMenu.module.scss';
import { IconGridDots } from '@tabler/icons-react';
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd';
import { useContext, useState } from 'react';
import { useGetFiltredGadgetMutation } from '@/src/redux/api/filterGadget';
import { Link, useNavigate } from 'react-router-dom';
import { ContextForFiltredProducts } from '@/src/context/FiltredProductsForApi';
import { Data } from '@/src/redux/api/dataApi';

const CatalogMenu = () => {
	const { responseData, setResponseData } = useContext(
		ContextForFiltredProducts
	);
	// console.log(responseData.responses, 'test');

	const navigate = useNavigate();
	const { data } = useGetCatalogProductsQuery();
	const [idState, setIdState] = useState<number>(0);
	const [addFiltredProducts] = useGetFiltredGadgetMutation();
	const handleAddSubCategories = (id: number) => {
		setIdState(id);
	};

	const handleFiltredAddProducts = async (id: number, brand: string) => {
		// navigate('');
		const response = await addFiltredProducts({ id, brand });
		// setResponseData(response.data);
		const result = response.data = Data;
		console.log(Data ,'Hello');
	};
	console.log(responseData, 'kjfhdukjfdhsufd');

	const { data: SubCategories = [] } = useSubCategoriesQuery(idState!);

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
			<Link
				to={`/catalog/phones`}
				onMouseEnter={() => handleAddSubCategories(category.id)}
			>
				{category.categoryName}
			</Link>
		),
		children: SubCategories.map((el) => ({
			key: el.id,
			label: (
				<p
					onClick={() => handleFiltredAddProducts(category.id, el.categoryName)}
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
