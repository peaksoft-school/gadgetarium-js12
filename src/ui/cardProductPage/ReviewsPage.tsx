import { useGetProductsItemIdQuery } from '@/src/redux/api/product';
import scss from './ReviewsPage.module.scss';
import { useParams } from 'react-router-dom';
import { Rate, Button, Modal, Input } from 'antd';
import { useState } from 'react';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { IconKamore } from '@/src/assets/icons';
const { Dragger } = Upload;
const props: UploadProps = {
	name: 'file',
	multiple: true,
	action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
	onChange(info) {
		const { status } = info.file;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
	onDrop(e) {
		console.log('Dropped files', e.dataTransfer.files);
	}
};
const ReviewsPage = () => {
	const { productId } = useParams();
	const { data } = useGetProductsItemIdQuery(productId!);
	const [modal2Open, setModal2Open] = useState<boolean>(false);

	const { TextArea } = Input;
	return (
		<>
			<section className={scss.ReviewsPage}>
				<div className={scss.reviews_contents_div}>
					<div className={scss.contents_and_commits_users}>
						<h2>Отзывы</h2>
						{data?.reviews.user &&
							Array.isArray(data.reviews.user) &&
							data.reviews.user.map((item, index) => (
								<div key={index} className={scss.div_users_commits}>
									<img src={item.userProfile} alt="photo is user profile" />
									<div className={scss.commits_for_users_div}>
										<div className={scss.user_info}>
											<h2>{item.userName}</h2>
											<p>{item.Time}</p>
										</div>
										<div className={scss.grade_div}>
											<p>Оценка</p>
											<Rate allowHalf defaultValue={5} />
										</div>
										<p className={scss.commit_user}>{item.userCommit}</p>
									</div>
								</div>
							))}
					</div>
					<div className={scss.div_rating_results_content}>
						<div className={scss.rating_div_content}>
							<div className={scss.div_displey_rating_content}>
								<div className={scss.div_all_reting_contents}>
									<div className={scss.text_result_rating}>
										<h3>4,5</h3>
										<>
											<Rate className={scss.rate} allowHalf defaultValue={5} />{' '}
										</>
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
							<Button
								onClick={() => setModal2Open(!modal2Open)}
								className={scss.button_rating}
							>
								Оставить отзыв
							</Button>
						</div>
					</div>
				</div>
			</section>
			<Modal
				centered
				open={modal2Open}
				onOk={() => setModal2Open(false)}
				onCancel={() => setModal2Open(false)}
			>
				<div className={scss.content_modal}>
					<h3>Оставьте свой отзыв</h3>
					<div className={scss.modal_content_for_reviews}>
						Оценка <Rate allowHalf defaultValue={0} />
					</div>
					<div className={scss.modal_form_div}>
						<p>Ваш комментарий</p>
						<TextArea
							className={scss.commit_input}
							placeholder="Напишите комментарий"
						/>
						<Dragger className={scss.input_for_file} {...props}>
							<div className={scss.input_file_content_div}>
								<IconKamore />
								<p>
									<span>Нажмите на ссылку,</span> чтобы выбрать фотографии или
									просто перетащите их сюда
								</p>
							</div>
						</Dragger>
						<Button
							className={scss.button_modal}
							onClick={() => setModal2Open(false)}
						>
							Отправить отзыв
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ReviewsPage;
