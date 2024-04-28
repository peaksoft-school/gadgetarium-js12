import scss from './SubHeader.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconGadgetarium } from '@/src/assets/icons';
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconGridDots,
	IconHeart,
	IconScale,
	IconShoppingCart
} from '@tabler/icons-react';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';

interface SubHeaderProps {
	isMobile: boolean;
	isScrolled: boolean;
}

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
	console.log(info?.source, value);
const SubHeader: FC<SubHeaderProps> = ({ isScrolled }) => {
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
						<button className={scss.catalog}>
							<IconGridDots />
							Каталог
						</button>
						<span className={scss.hr_line}></span>
						<Input.Search
							className={scss.search}
							size="large"
							placeholder="Поиск по каталогу магазина"
							allowClear
							onSearch={onSearch}
						/>
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
			</div>
		</header>
	);
};

export default SubHeader;
