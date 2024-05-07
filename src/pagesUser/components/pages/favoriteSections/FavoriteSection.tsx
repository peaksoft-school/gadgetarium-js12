/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import favorite from '../../../../assets/sammy_order_completed_by_a_delivery_girl_1.png';
import scss from './FavoriteSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IconPlaystationX } from '@tabler/icons-react';

interface ProductsTypes {
	id: number;
	sale?: string;
	phone: string;
	stock: string;
	productName: string;
	price: number;
	oldPrice?: number;
}
const card: ProductsTypes[] = [
	{
		id: 1,
		sale: '-10%',
		phone:
			'https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium.webp',
		stock: 'В наличии',
		productName: 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RU...',
		price: 98910,
		oldPrice: 109900
	},
	{
		id: 2,
		sale: '-10%',
		phone:
			'https://www.istore.kg/media/products/iphone-15-finish-select-202309-6-7inch-blue_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp',
		stock: 'В наличии',
		productName: 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RU...',
		price: 98910,
		oldPrice: 109900
	},
	{
		id: 3,
		phone:
			'https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_3zWelJF.webp',
		stock: 'В наличии',
		productName: 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RU...',
		price: 98910
	},
	{
		id: 4,
		phone:
			'https://www.istore.kg/media/products/iphone-14-finish-select-202209-6-7inch-starlight_pTsrxXM.webp',
		stock: 'В наличии',
		productName: 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RU...',
		price: 98910
	}
];

const FavoriteSection = () => {
	const navigate = useNavigate();
	const { data } = useGetFavoriteQuery();

	return (
		<div className={scss.FavoriteSection}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content_products_page}>
						<p
							className={scss.text_home_user_page}
							onClick={() => navigate('/')}
						>
							Главная »
						</p>
						<p>Избранное</p>
					</div>
					<div className={scss.div_for_text_and_border}>
						<h2>Избранное</h2>
						<div className={scss.border}></div>
					</div>
					{data?.length === 0 ? (
						<>
							<div className={scss.photo_div}>
								<img src={favorite} alt="favorite" />
							</div>
							<div className={scss.text_after_img}>
								<h3>В избранном пока пусто</h3>
								<div className={scss.texts_div}>
									<p>Воспользуйтесь поиском или каталогом,</p>
									<p> выберите нужные товары и добавьте их в избранное!</p>
								</div>
								<Link to="/">
									<button>К покупкам</button>
								</Link>
							</div>
						</>
					) : (
						<div className={scss.container_products_favorite}>
							<div className={scss.icon_and_text_div}>
								<IconPlaystationX /> <p>Очистить список товаров</p>
							</div>
							<div className={scss.container_products}>
								{card.map((item) => (
									<div key={item.id} className={scss.container_product}>
										<div className={scss.content_product}>
											<div className={scss.product_basket_and_favorite_buttons_and_photo}>
												<div className={scss.div_sale_product}>
													{item.sale}
												</div>
												<div>

												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FavoriteSection;
