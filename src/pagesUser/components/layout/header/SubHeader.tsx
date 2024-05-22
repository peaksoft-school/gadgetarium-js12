import scss from './SubHeader.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
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
import { SearchProps } from 'antd/es/input';
import CatalogMenu from '@/src/ui/catalogMenu/CatalogMenu';
import { useGetBasketQuery } from '@/src/redux/api/basket';
import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import { useGetComparisonQuery } from '@/src/redux/api/comparison';

interface SubHeaderProps {
	isMobile: boolean;
	isScrolled: boolean;
}

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
	console.log(info?.source, value);
const SubHeader: FC<SubHeaderProps> = ({ isScrolled }) => {
	const { data: BasketData = [] } = useGetBasketQuery();
	const { data: FavoriteData = [] } = useGetFavoriteQuery();
	const { data: ComparisonData = [] } = useGetComparisonQuery();
	const antdThemeConfig = {
		algorithm: theme.darkAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			// borderRadius: 2,
			colorBgContainer: '#1a1a25'
		}
	};
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
								allowClear
								onSearch={onSearch}
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
							<span>
								{ComparisonData.length <= 99 ? ComparisonData.length : '99+'}
							</span>
							<IconScale />
						</Link>
						<Link to="/favorite" className={scss.icon}>
							<span>
								{FavoriteData.length <= 99 ? FavoriteData.length : '99+'}
							</span>
							<IconHeart />
						</Link>
						<Link to="/basket" className={scss.icon}>
							<span>{BasketData.length <= 99 ? BasketData.length : '99+'}</span>
							<IconShoppingCart />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default SubHeader;
