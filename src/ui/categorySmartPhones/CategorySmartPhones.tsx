import { useGetProductsQuery } from '@/src/redux/api/products/Products';
import scss from './CategorySmartPhones.module.scss';
import photoIsIphone from '@/src/assets/image 53 (1).png';
import AddBasketButton from '../customButtons/AddBasketButton';
import { useState } from 'react';

const CategorySmartPhones = () => {
	const { data: product = [], isLoading } = useGetProductsQuery();
	const [displayIndexCount, setDisplayIndexCount] = useState(5);
	const handleShowMore = () => {
		setDisplayIndexCount((prev) => prev + 5);
	};
	return (
		<div className={scss.ContainerCategorySmartphones}>
			<>
				{isLoading ? (
					<h2>IsLoading...</h2>
				) : (
					product.slice(0, displayIndexCount).map((item) => (
						<div className={scss.ProduntDiv} key={item._id}>
							<div className={scss.contents1}>
								<div>Не рабочая иконка</div>
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
				{product.length > displayIndexCount && (
					<button onClick={handleShowMore}>Показать ещё</button>
				)}
			</>
		</div>
	);
};

export default CategorySmartPhones;
