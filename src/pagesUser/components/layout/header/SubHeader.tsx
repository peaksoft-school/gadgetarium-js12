import scss from './SubHeader.module.scss';
import { FC, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { IconGadgetarium } from '@/src/assets/icons';
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconHeart,
	IconScale,
	IconShoppingCart
} from '@tabler/icons-react';
import { ConfigProvider, Input, theme } from 'antd';
import CatalogMenu from '@/src/ui/catalogMenu/CatalogMenu';
import { useGetGlobalSearchQuery } from '@/src/redux/api/globalSearch';

interface SubHeaderProps {
	isMobile: boolean;
	isScrolled: boolean;
}

// const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
// 	console.log(info?.source, value);

const SubHeader: FC<SubHeaderProps> = ({ isScrolled }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [inputValue, setInputValue] = useState<string>('');
	const navigate = useNavigate();

	const handleValueSearch = () => {
		setInputValue('');
	};
	const { data: search = [] } = useGetGlobalSearchQuery({
		request: window.location.search.substring(1)
	});
	const changeSearchFunk = (value: string) => {
		searchParams.set('request', value);
		setSearchParams(searchParams);
		navigate(`/?${window.location.search.substring(1)}`);
		if (value === '') {
			searchParams.delete('request');
			setSearchParams(searchParams);
		}
	};
	const antdThemeConfig = {
		algorithm: theme.darkAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			// borderRadius: 2,
			colorBgContainer: '#1a1a25'
		}
	};
	console.log(search);

	return (
		<header
			className={
				isScrolled ? `${scss.Header} ${scss.active}` : `${scss.Header}`
			}
		>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.button_catalog_search}>
						{isScrolled && (
							<>
								<Link className={scss.logo} to="/">
									<IconGadgetarium />
								</Link>
							</>
						)}
						<CatalogMenu />
						<span className={scss.hr_line}></span>
						<ConfigProvider theme={antdThemeConfig}>
							<Input.Search
								className={scss.search}
								size="large"
								placeholder="Поиск по каталогу магазина"
								onChange={(e) => {
									changeSearchFunk(e.target.value);
									setInputValue(e.target.value);
								}}
								allowClear
								// onSearch={onSearch}
							/>
						</ConfigProvider>
					</div>
					<div className={scss.icon_networks}>
						{!isScrolled && (
							<>
								<a
									className={scss.icon_facebook}
									target="_blank"
									href="	https://www.facebook.com/?locale=ru_RU"
								>
									<IconBrandFacebook />
								</a>
								<a
									className={scss.icon_instagram}
									target="_blank"
									href="https://www.instagram.com/taa1ai.bekovna?igsh=MTh5a3VrZjgza2hxNA=="
								>
									<IconBrandInstagram />
								</a>
								<a
									className={scss.icon_whatsapp}
									target="_blank"
									href="https://wa.me/qr/TU2DHKCN5KLKC1"
								>
									<IconBrandWhatsapp />
								</a>
							</>
						)}
					</div>
					<div className={scss.icon_basket_heart}>
						<Link to="/comparison" className={scss.icon}>
							<span>0</span>
							<IconScale />
						</Link>
						<Link to="/favorite" className={scss.icon}>
							<span>0</span>
							<IconHeart />
						</Link>
						<Link to="/basket" className={scss.icon}>
							<span>0</span>
							<IconShoppingCart />
						</Link>
					</div>
				</div>
				<div className={scss.searchMap}>
					{search.map((item) => (
						<div>
							<p>{item.brandNameOfGadget}</p>
						</div>
					))}
				</div>
			</div>
		</header>
	);
};

export default SubHeader;
