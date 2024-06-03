import { useGetProductsItemIdQuery } from '@/src/redux/api/product';
import scss from './DescriptionPage.module.scss';
import { useParams } from 'react-router-dom';

const DescriptionPage = () => {
	const { productId } = useParams();
	const { data, isLoading } = useGetProductsItemIdQuery(productId!);
	return (
		<section className={scss.DescriptionPage}>
			{isLoading ? (
				<h1>IsLoading...</h1>
			) : (
				<>
					<img
						src={data?.Description.intoForTelephone}
						alt={data?.nameOfGadget}
					/>
					<div className={scss.product_content_image_info}>
						<h2>{data?.Description.MainTech}</h2>
						<div className={scss.product_info_text}>
							<p>{data?.Description.intoText1}</p>
							<p>{data?.Description.intoText2}</p>
						</div>
					</div>
					<div className={scss.info_texts}>
						<p>{data?.Description.intoText3}</p>
						<p>{data?.Description.intoText4}</p>
					</div>
				</>
			)}
		</section>
	);
};

export default DescriptionPage;
