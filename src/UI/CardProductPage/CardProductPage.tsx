import { useParams } from 'react-router-dom';
import scss from './CardProductPage.module.scss';
import { useGetProductsItemIdQuery } from '@/src/redux/api/products/Products';
export const CardProductPage = () => {
	const { productId } = useParams();
  const {data, isLoading} = useGetProductsItemIdQuery(productId!);
	return (
		<div className={scss.containerItemId}>
			<div className="container">
				<div className={scss.content}>
          
        </div>
			</div>
		</div>
	);
};
