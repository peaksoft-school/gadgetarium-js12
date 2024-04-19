import scss from './SubHeader.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
	IconBasketProducts,
	IconCatalog,
	IconFacebook,
	IconGadgetarium,
	IconHeart,
	IconInstagram,
	IconWeight,
	IconWhatsapp
} from '@/src/assets/icons';
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
									<IconGadgetarium className={scss.icon_gadgetarium_fixed} />
								</Link>
							</>
						)}
						<button className={scss.catalog}>
							<IconCatalog />
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
									<IconFacebook />
								</a>
								<a
									className={scss.icon_instagram}
									target="_blank"
									href="https://www.instagram.com/taa1ai.bekovna?igsh=MTh5a3VrZjgza2hxNA=="
								>
									<IconInstagram />
								</a>
								<a
									className={scss.icon_whatsapp}
									target="_blank"
									href="https://wa.me/qr/TU2DHKCN5KLKC1"
								>
									<IconWhatsapp />
								</a>
							</>
						)}
					</div>
					<div className={scss.icon_basket_heart}>
						<div className={scss.icon_weight}>
							<span className={scss.icon_zero}>0</span>
							<IconWeight className={scss.weight} />
						</div>
						<div className={scss.icon_heart}>
							<span>0</span>
							<IconHeart className={scss.heart} />
						</div>
						<div className={scss.icon_basket}>
							<span>0</span>
							<IconBasketProducts className={scss.basket} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default SubHeader;
