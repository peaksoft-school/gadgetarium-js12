import { useParams } from 'react-router-dom';
import scss from './CardProductPage.module.scss';
import { useGetProductsItemIdQuery } from '@/src/redux/api/products/Products';
import { useState } from 'react';
export const CardProductPage = () => {
	const { productId } = useParams();
	const [description, setDescription] = useState<boolean>(false)
	const [characteristics, setCharacteristics] = useState<boolean>(false)
	const [reviews, setReviews] = useState<boolean>(false)
	const [shippingAndPayment, setShippingAndPayment] = useState<boolean>(false)
	const [active, setActive] = useState<boolean>(false)
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
