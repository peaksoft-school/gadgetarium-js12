import { useGetProductsItemIdQuery } from '@/src/redux/api/product';
import scss from './ReviewsPage.module.scss';
import { useParams } from 'react-router-dom';
import { Rate, Button } from 'antd';
// <Rate allowHalf defaultValue={2.5} />
const ReviewsPage = () => {
	const { productId } = useParams();
	const { data } = useGetProductsItemIdQuery(productId!);
	return (
		<section className={scss.ReviewsPage}>
			<div className={scss.reviews_contents_div}>
				<h2>Отзывы</h2>
				<div className={scss.div_rating_results_content}>
					<div className={scss.rating_div_content}>
						<div className={scss.div_displey_rating_content}>
							<div className={scss.div_all_reting_contents}>
								<div className={scss.text_result_rating}>
									<h3>4,5</h3>
									<Rate style={{width: '140px', height: '31px'}} allowHalf defaultValue={5} />
								</div>
								<p>789 отзывов</p>
							</div>
							<div className={scss.div_all_contents_results_rating}>
								<div className={scss.userReviews}>
									<Rate allowHalf defaultValue={5} />
									<p>23 отзывов</p>
								</div>
								<div className={scss.userReviews}>
									<Rate allowHalf defaultValue={5} />
									<p>5 отзывов</p>
								</div>
								<div className={scss.userReviews}>
									<Rate allowHalf defaultValue={5} />
									<p>17 отзывов</p>
								</div>
								<div className={scss.userReviews}>
									<Rate allowHalf defaultValue={5} />
									<p>4 отзывов</p>
								</div>
								<div className={scss.userReviews}>
									<Rate allowHalf defaultValue={5} />
									<p>2 отзывов</p>
								</div>
							</div>
						</div>
						<Button className={scss.button_rating}>
							Оставить отзыв
						</Button>
					</div>
				</div>
			</div>
			<div className={scss.div_users_commits}>
				<img src={data?.reviews.user.userProfile} alt="photo is user profile" />
				<div className={scss.commits_for_users_div}>
					<div className={scss.user_info}>
						<h2>{data?.reviews.user.userName}</h2>
						<p>{data?.reviews.user.Time}</p>
					</div>
					<div className={scss.grade_div}>
						<p>Оценка</p>
						<Rate allowHalf defaultValue={5} />
					</div>
					<p className={scss.commit_user}>{data?.reviews.user.userCommit}</p>
				</div>
			</div>
		</section>
	);
};

export default ReviewsPage;
