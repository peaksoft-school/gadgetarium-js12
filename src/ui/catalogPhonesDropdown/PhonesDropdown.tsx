import { IconChevronDown } from '@tabler/icons-react';
import scss from './PhonesDropdown.module.scss';
import type { MenuProps } from 'antd';
import { ConfigProvider, Dropdown, Space, theme } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetFiltredGadgetQuery } from '@/src/redux/api/filterGadget';

const PhonesDropdown = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// const navigate  = useNavigate();
	const handleSortsFunkFiltred = (categoryText: string) => {
		searchParams.append('sort', categoryText);
		setSearchParams(searchParams);
	};
	const handleDiscountFilterFunk = (discount: string) => {
		searchParams.append('discount', discount);
		setSearchParams(searchParams);
	};
	const { data } = useGetFiltredGadgetQuery({
		sort: searchParams.toString()
	});

	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<p onClick={() => handleSortsFunkFiltred('NEW_PRODUCTS')}>Новинки</p>
			)
		},
		{
			key: '3',
			label: (
				<p onClick={() => handleSortsFunkFiltred('RECOMMENDED')}>
					Рекомендуемые
				</p>
			)
		},
		{
			key: '2',
			label: 'По акции',
			children: [
				{
					key: '2-1',
					label: (
						<p onClick={() => handleDiscountFilterFunk('ALL_DISCOUNTS')}>
							Все акции
						</p>
					)
				},
				{
					key: '2-2',
					label: (
						<p onClick={() => handleDiscountFilterFunk('ALL_DISCOUNTS')}>
							До 50%
						</p>
					)
				},
				{
					key: '2-3',
					label: (
						<p onClick={() => handleDiscountFilterFunk('OVER_50')}>Свыше 50%</p>
					)
				}
			]
		},
		{
			key: '4',
			label: (
				<p onClick={() => handleSortsFunkFiltred('PROMOTION')}>Повышение</p>
			)
		},
		{
			key: '5',
			label: (
				<p onClick={() => handleSortsFunkFiltred('LOW_TO_HIGH')}>Снизу вверx</p>
			)
		},
		{
			key: '6',
			label: (
				<p onClick={() => handleSortsFunkFiltred('HIGH_TO_LOW')}>HIGH_TO_LOW</p>
			)
		}
	];
	// const cards: MenuProps['itemType'] = [
	// 	{
	// 		key: '1',
	// 		label: (
	// 			<p onClick={() => handleDiscountFilterFunk('ALL_DISCOUNTS')}>
	// 				Все акции
	// 			</p>
	// 		)
	// 	},
	// 	{
	// 		key: '2',
	// label: (
	// 	<p onClick={() => handleDiscountFilterFunk('ALL_DISCOUNTS')}>До 50%</p>
	// )
	// 	},
	// 	{
	// 		key: '3',
	// label: (
	// 	<p onClick={() => handleDiscountFilterFunk('OVER_50')}>Свыше 50%</p>
	// )
	// 	},
	// ];
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
		<ConfigProvider theme={antdThemeConfig}>
			<Dropdown menu={{ items }}>
				<a onClick={(e) => e.preventDefault()}>
					<Space>
						<div className={scss.sort_div}>
							<div className={scss.sortirovat}>
								<p>Сортировать</p>
								<IconChevronDown />
							</div>
						</div>
					</Space>
				</a>
			</Dropdown>
		</ConfigProvider>
	);
};

export default PhonesDropdown;
