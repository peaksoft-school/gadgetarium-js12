/* eslint-disable @typescript-eslint/no-unused-vars */
import scss from './ReviewsPage.module.scss';
import { useParams, useSearchParams } from 'react-router-dom';
import { Rate, Modal, Input, Button, ConfigProvider } from 'antd';
import React, { useState } from 'react';
import { useGetReviewGadgetGoodQuery } from '@/src/redux/api/goods';
import {
	useApiFeedbackStatisticsQuery,
	useGetReviewsQuery,
	usePatchReviewQueryMutation,
	usePostReviewQueryMutation
} from '@/src/redux/api/review';
// type User  = {
// 	adminCommit: string
// }
// interface AdminCommitTypeObject {
// 	reviews: User[]
// }
const ReviewsPage = () => {
	const [postReplyApi] = usePostReviewQueryMutation();
	const [editAdminCommitApi] = usePatchReviewQueryMutation();
	const [searchParams, _] = useSearchParams();
	const { productId } = useParams();
	const { data, isLoading, refetch } = useGetReviewsQuery({
		id: productId!,
		page: searchParams.toString(),
		size: searchParams.toString()
	});
	const [modalForEdit, setModalForEdit] = useState<boolean>(false);
	const [modal2Open, setModal2Open] = useState<boolean>(false);
	const [idProduct, setIdProduct] = useState<number>(0);
	const [answerForInput, setAnswerForInput] = useState<string>('');
	const [replyInputValue, setReplyInputValue] = useState<string>('');
	const { data: FeedbackStatistics } = useApiFeedbackStatisticsQuery({
		id: Number(productId)
	});

	const changeInputValueForReply = (
		value: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setReplyInputValue(value.target.value);
	};
	const handleEditAdminCommitFunk = async () => {
		const editAdminCommitData = {
			responseAdmin: answerForInput
		};
		try {
			await editAdminCommitApi({
				id: idProduct,
				responseAdmin: editAdminCommitData.responseAdmin
			});
			setModalForEdit(false);
			refetch();
		} catch (error) {
			console.error(error);
			setModalForEdit(true);
		}
	};
	const handleReplyFunk = async () => {
		const DATA = {
			responseAdmin: replyInputValue
		};
		try {
			await postReplyApi({
				id: idProduct,
				responseAdmin: DATA.responseAdmin
			});
			setModal2Open(false);
			refetch();
		} catch (error) {
			console.error(error);
			setModal2Open(true);
		}
	};
	const handleOpenReplyFunk = async (id: number) => {
		setModal2Open(true);
		setIdProduct(id);
	};
	const { TextArea } = Input;
	const handleProductsModalFunk = (index: number, id: number) => {
		setIdProduct(id);
		setAnswerForInput(data![index].responseAdmin!);
		setModalForEdit(true);
	};

	return (
		<>
			<section className={scss.ReviewsPage}>
				{isLoading ? (
					<h1>IsLoading...</h1>
				) : (
					<div className={scss.reviews_contents_div}>
						<div className={scss.contents_and_commits_users}>
							<h2>Отзывы</h2>
							{data &&
								Array.isArray(data) &&
								data?.map((item, index) => (
									<div className={scss.admin_and_users_commits}>
										<div key={index} className={scss.div_users_commits}>
											<img src={item?.image} alt="photo is user profile" />
											<div className={scss.commits_for_users_div}>
												<div className={scss.user_info}>
													<h2>{item?.fullName}</h2>
													<p>{item?.dateTime}</p>
												</div>
												<div className={scss.grade_div}>
													<p>Оценка</p>
													<Rate
														disabled
														allowHalf
														defaultValue={item?.rating}
													/>
												</div>
												<p className={scss.commit_user}>{item?.description}</p>
												{!item?.responseAdmin && (
													<div className={scss.div_answer}>
														<p
															// onClick={() => setModal2Open(!modal2Open)}
															onClick={() => handleOpenReplyFunk(item.id)}
															className={scss.answer}
														>
															Ответить
														</p>
													</div>
												)}
											</div>
										</div>
										{item?.responseAdmin && (
											<>
												<div className={scss.div_admin_commit}>
													<div className={scss.content_admin_commit_div}>
														{item?.responseAdmin && (
															<>
																<h3>Ответ от представителя</h3>
																<p>{item?.responseAdmin}</p>
															</>
														)}
													</div>
												</div>
												<p
													className={scss.edit}
													onClick={() =>
														handleProductsModalFunk(index, item.id)
													}
												>
													Редактировать
												</p>
											</>
										)}
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
													disabled
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
												disabled
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[1]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[1]} отзывов</p>
										</div>
										<div className={scss.userReviews}>
											<Rate
												disabled
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[2]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[2]} отзывов</p>
										</div>
										<div className={scss.userReviews}>
											<Rate
												disabled
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[3]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[3]} отзывов</p>
										</div>
										<div className={scss.userReviews}>
											<Rate
												disabled
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[4]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[4]} отзывов</p>
										</div>
										<div className={scss.userReviews}>
											<Rate
												disabled
												allowHalf
												defaultValue={FeedbackStatistics?.ratingCounts[5]}
											/>
											<p>{FeedbackStatistics?.ratingCounts[5]} отзывов</p>
										</div>
									</div>
								</div>
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
				<>
					<Modal
						centered
						open={modal2Open}
						onOk={() => setModal2Open(false)}
						onCancel={() => setModal2Open(false)}
						footer={false}
					>
						<div className={scss.container_modal}>
							<h3>Ответ на комментарий</h3>
							<div className={scss.input_and_buttons_div}>
								<TextArea
									className={scss.input}
									defaultValue={answerForInput}
									onChange={changeInputValueForReply}
									value={replyInputValue}
								/>
								<div className={scss.buttons}>
									<Button
										onClick={() => setModal2Open(false)}
										className={scss.button_for_cancel}
									>
										Отменить
									</Button>
									<Button
										onClick={handleReplyFunk}
										className={scss.button_for_add}
									>
										Добавить
									</Button>
								</div>
							</div>
						</div>
					</Modal>

					{modalForEdit && (
						<Modal
							centered
							open={modalForEdit}
							onOk={() => setModalForEdit(false)}
							onCancel={() => setModalForEdit(false)}
							footer={false}
						>
							<div className={scss.container_modal}>
								<h3>Редактировать комментарий</h3>
								<div className={scss.input_and_buttons_div}>
									<TextArea
										className={scss.input}
										defaultValue={answerForInput}
										onChange={(e) => setAnswerForInput(e.target.value)}
										value={answerForInput}
									/>
									<div className={scss.buttons}>
										<Button
											onClick={() => setModalForEdit(false)}
											className={scss.button_for_cancel}
										>
											Отменить
										</Button>
										<Button
											className={scss.button_for_add}
											onClick={handleEditAdminCommitFunk}
										>
											СОХРАНИТЬ
										</Button>
									</div>
								</div>
							</div>
						</Modal>
					)}
				</>
			</ConfigProvider>
		</>
	);
};

export default ReviewsPage;
