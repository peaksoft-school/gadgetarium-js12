import { useGetProductsQuery } from '@/src/redux/api/products/Products';
import scss from './ProductsStore.module.scss';
import photoIsIphone from '@/src/assets/image 53 (1).png';
import logo from '@/src/assets/Group 1534.png';
import icon from '@/src/assets/Vector (11).png';
import { ScalesGrey } from '@/src/assets/icons';
import logo2 from '@/src/assets/Frame 153.png';
import AddBasketButton from '../customButtons/AddBasketButton';
export const ProductsStore = () => {
	const { data: productData = [], isLoading } = useGetProductsQuery();
	return (
		<div className={scss.ContainerStore}>
			<>
				{isLoading ? (
					<h2>IsLoading...</h2>
				) : (
					<>
						{productData.map((item) => (
							<div className={scss.divProductMap} key={item._id}>
								<div className={scss.divIcons}>
									<img src={logo} alt={item.newProduct} />
									<div className={scss.divIcons2}>
										<ScalesGrey />
										<img className={scss.imgIcon} src={icon} alt="icon" />
									</div>
								</div>
								<div className={scss.divImg}>
									<img
										className={scss.imgProduct}
										src={photoIsIphone}
										alt={item.producName}
									/>
								</div>
								<div className={scss.divProductContents}>
									<p className={scss.tagColorGreen}>
										В наличии {item.buyProduc}
									</p>
									<h3>{item.producName}</h3>
									<p>
										Рейтинг <img src={logo2} alt="logo" /> {item.Rating}
									</p>
									<div className={scss.divButtonsAndPrice}>
										<div className={scss.productPrice}>
											<h2>{item.price} с</h2>
											<p>{item.previousPrice}</p>
										</div>
										<AddBasketButton>В корзину</AddBasketButton>
									</div>
								</div>
							</div>
						))}
					</>
				)}
			</>
		</div>
	);
};
