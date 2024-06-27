import scss from './DescriptionPage.module.scss';
import { useParams } from 'react-router-dom';
import { useGetDescriptionProductQuery } from '@/src/redux/api/description';

const DescriptionPage = () => {
	const { productId } = useParams();
	const { data, isLoading } = useGetDescriptionProductQuery(productId!);
	return (
		<section className={scss.DescriptionPage}>
			{isLoading ? (
				<h1>IsLoading...</h1>
			) : (
				<>
					<>
						<iframe allowFullScreen src={data?.videoUrl}></iframe>
						<div className={scss.product_content_image_info}>
							{/* <h2>Main Text</h2> */}
							<div className={scss.product_info_text}>
								<p>{data?.description}</p>
								<p>{data?.description}</p>
							</div>
						</div>
						<div className={scss.info_texts}>
							<p>{data?.description}</p>
							<p>{data?.description}</p>
						</div>
					</>
				</>
			)}
		</section>
	);
};

export default DescriptionPage;
