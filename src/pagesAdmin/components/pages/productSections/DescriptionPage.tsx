import scss from './DescriptionPage.module.scss';
import { useParams } from 'react-router-dom';
import { useGetDescriptionGoodGadgetQuery } from '@/src/redux/api/goods';
const DescriptionPage = () => {
	const { productId } = useParams();
	const { data, isLoading } = useGetDescriptionGoodGadgetQuery(productId)
	
	return (
		<section className={scss.DescriptionPage}>
			{isLoading ? (
				<h1>IsLoading...</h1>
			) : (
				<>
					<img
					  alt={data?.videoUrl}
						src={data?.videoUrl}
					/>
					<div className={scss.product_content_image_info}>
						{/* <h2>{data?.Description.MainTech}</h2> */}
						<div className={scss.product_info_text}>
							<p>{data?.description}</p>
						</div>
					</div>
					{/* <div className={scss.info_texts}>
						<p>{data?.Description.intoText3}</p>
						<p>{data?.Description.intoText4}</p>
					</div> */}
				</>
			)}
		</section>
	);
};

export default DescriptionPage;
