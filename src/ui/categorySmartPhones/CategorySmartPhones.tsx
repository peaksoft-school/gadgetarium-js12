import { useGetProductsQuery } from '@/src/redux/api/products/Products';
import scss from './CategorySmartPhones.module.scss';
import photoIsIphone from '@/src/assets/image 53 (1).png';
import AddBasketButton from '../customButtons/AddBasketButton';
import { PropertyDefault8 } from '@/src/assets/icons';

const CategorySmartPhones = () => {
	const { data: product = [], isLoading } = useGetProductsQuery();
	return (
		<div className={scss.ContainerCategorySmartphones}>
			<>
				{isLoading ? (
					<h2>IsLoading...</h2>
				) : (
					product.map((item) => (
						<div className={scss.ProduntDiv} key={item._id}>
							<div className={scss.contents1}>
								<div>
									<PropertyDefault8 />
								</div>
								<div className={scss.divImage}>
									<img
										className={scss.imgPhotoProduct}
										src={photoIsIphone}
										alt={item.producName}
									/>
								</div>
							</div>
							<>
								<p>{item.producName}</p>
								<h2>{item.price}</h2>
								<AddBasketButton>В корзину</AddBasketButton>
							</>
						</div>
					))
				)}
			</>
		</div>
	);
};

export default CategorySmartPhones;
