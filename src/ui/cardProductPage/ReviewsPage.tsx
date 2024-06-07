/* eslint-disable @typescript-eslint/no-explicit-any */
import scss from './ReviewsPage.module.scss';
import { useParams } from 'react-router-dom';
import { Rate, Button, Modal, Input, ConfigProvider } from 'antd';
import React, { useRef, useState } from 'react';
import { Upload } from 'antd';
import { IconKamore } from '@/src/assets/icons';
import {
	useApiFeedbackStatisticsQuery,
	useGetReviewsQuery,
	usePostUsersCommitsMutation
} from '@/src/redux/api/reviews';
import { usePostUploadMutation } from '@/src/redux/api/pdf';

const { Dragger } = Upload;
const ReviewsPage = () => {
	const fileUrl = useRef<HTMLInputElement>(null);
	const [postUpload] = usePostUploadMutation();
	const { productId } = useParams();
	const { data, isLoading } = useGetReviewsQuery(productId!);
	const [postUserCommitApi] = usePostUsersCommitsMutation();
	const [modal2Open, setModal2Open] = useState<boolean>(false);
	const [filesUrls, setFilesUrls] = useState<[]>([]);
	const [inputFile, setInputFile] = useState<File | string>('');
	const [textCommitInput, setTextCommitInput] = useState<string>('');
	const [rateValue, setRateValue] = useState<number>(0);
	const { data: FeedbackStatistics } = useApiFeedbackStatisticsQuery({
		id: Number(productId)
	});

	const handleOpenFileFunk = () => {
		if (fileUrl.current) {
			fileUrl.current.click();
		}
	};
	const handleChangeFileFunk = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const fileInputValue = event.target.files;
		if (fileInputValue && fileInputValue.length > 0) {
			const file = fileInputValue[0];
			setInputFile(file);

			try {
				await postUpload({
					files: ['139325-disk_zhokej-dizajn-nebo-muha-purpur-3840x2160.jpg']
				});
			} catch (error) {
				console.error(error);
			}
		}
	};

	const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		if (value) {
			setTextCommitInput(value);
		}
	};
	console.log(rateValue, 'rate');

	const handlePostCommitFunk = async () => {
		const DATA = {
			grade: rateValue,
			comment: textCommitInput,
			images: [
				'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
			]
		};
		const { comment, grade, images } = DATA;
		await postUserCommitApi({
			gadgetId: Number(productId && productId),
			comment,
			grade,
			images
		});
	};

	console.log(inputFile, 'inputFile');

	const { TextArea } = Input;
	return (
		<>
			<section className={scss.ReviewsPage}>
				{isLoading ? (
					<h1>IsLoading...</h1>
				) : (
					<div className={scss.reviews_contents_div}>
						<div className={scss.contents_and_commits_users}>
							<h2>Отзывы</h2>
							{/* {data?.reviews.user &&
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
								))} */}
							{data?.map((e) => (
								<div key={e.id} className={scss.div_users_commits}>
									<img src={e.image} alt={e.fullName} />
									<div className={scss.commits_for_users_div}>
										<div className={scss.user_info}>
											<h2>{e.fullName}</h2>
											<p>{e.dateTime}</p>
										</div>
										{/* <p>{e.description}</p> */}
										<div className={scss.grade_div}>
											{/* <p>{e.description}</p> */}

											<Rate allowHalf defaultValue={e.rating} />
										</div>
										<p className={scss.commit_user}>{e.description}</p>
									</div>
								</div>
							))}
						</div>
						<div className={scss.div_rating_results_content}>
							<div className={scss.rating_div_content}>
								<div className={scss.div_displey_rating_content}>
									<div className={scss.div_all_reting_contents}>
										<div className={scss.text_result_rating}>
											<h3>{FeedbackStatistics?.overallRating}</h3>
											<>
												<Rate
													className={scss.rate}
													allowHalf
													defaultValue={FeedbackStatistics?.overallRating}
												/>{' '}
											</>
										</div>
										<p>{FeedbackStatistics?.quantityFeedbacks} отзывов</p>
									</div>
									<div className={scss.div_all_contents_results_rating}>
										<div className={scss.userReviews}>
											<Rate
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[1]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[1]} отзывов</p>
										</div>
										<div className={scss.userReviews}>
											<Rate
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[2]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[2]} отзывов</p>
										</div>
										<div className={scss.userReviews}>
											<Rate
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[3]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[3]} отзывов</p>
										</div>
										<div className={scss.userReviews}>
											<Rate
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[4]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[4]} отзывов</p>
										</div>
										<div className={scss.userReviews}>
											<Rate
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[5]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[5]} отзывов</p>
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
				)}
			</section>
			<ConfigProvider
				theme={{
					components: {
						Modal: {
							colorBgElevated: 'white',
							algorithm: true
						}
					}
				}}
			>
				<Modal
					centered
					open={modal2Open}
					onOk={() => setModal2Open(false)}
					onCancel={() => setModal2Open(false)}
				>
					<div className={scss.content_modal}>
						<h3>Оставьте свой отзыв</h3>
						<div className={scss.modal_content_for_reviews}>
							Оценка{' '}
							<Rate
								allowHalf
								defaultValue={0}
								onChange={(e) => setRateValue(e)}
								value={rateValue}
							/>
						</div>
						<div className={scss.modal_form_div}>
							<p>Ваш комментарий</p>
							<TextArea
								className={scss.commit_input}
								placeholder="Напишите комментарий"
								onChange={changeInputValue}
								value={textCommitInput}
							/>
							{/* <Dragger className={scss.input_for_file} {...props}>
								<div className={scss.input_file_content_div}>
									<IconKamore />
									<p>
										<span>Нажмите на ссылку,</span> чтобы выбрать фотографии или
										просто перетащите их сюда
									</p>
								</div>
							</Dragger> */}
							<div onClick={handleOpenFileFunk} className={scss.input_for_file}>
								<input
									type="file"
									style={{ display: 'none' }}
									ref={fileUrl}
									onChange={handleChangeFileFunk}
									// value={inputFile}
									multiple
								/>
							</div>
							<Button
								className={scss.button_modal}
								onClick={() => {
									setModal2Open(false);
									handlePostCommitFunk();
								}}
							>
								Отправить отзыв
							</Button>
						</div>
					</div>
				</Modal>
			</ConfigProvider>
		</>
	);
};

export default ReviewsPage;
