import {
	useEditAdminCommitMutation,
} from '@/src/redux/api/product';
import scss from './ReviewsPage.module.scss';
import { useParams } from 'react-router-dom';
import { Rate, Modal, Input, Button, ConfigProvider } from 'antd';
import { useState } from 'react';
// type User  = {
// 	adminCommit: string
// }
// interface AdminCommitTypeObject {
// 	reviews: User[]
// }
const ReviewsPage = () => {
	const { productId } = useParams();
	const { data, isLoading } = useGetCardProductQuery(productId!);
	const [editAdminCommit] = useEditAdminCommitMutation();
	const [modalForEdit, setModalForEdit] = useState<boolean>(false);
	const [modal2Open, setModal2Open] = useState<boolean>(false);
	const [indexProducts, setIndexProducts] = useState<number>(0);
	const [answerForInput, setAnswerForInput] = useState<string>('');
	const changeInputValueForAnswer = (value: string | null) => {
		if (value !== null) {
			setAnswerForInput(value);
		}
	};
	const handleEditAdminCommitFunk = async (index: number) => {
		const reviewsResults = {
			reviews: {
				user: [
					{
						adminCommit: answerForInput
					}
				]
			}
		};
		await editAdminCommit({ _id: index, reviews: reviewsResults });
	};
	const { TextArea } = Input;
	const handleProductsModalFunk = (index: number) => {
		console.log(index);

		setIndexProducts(index);
		setModalForEdit(!modalForEdit);
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
							{data?.reviews.user &&
								Array.isArray(data.reviews.user) &&
								data.reviews.user.map((item, index) => (
									<div className={scss.admin_and_users_commits}>
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
												{!item.adminCommit && (
													<div className={scss.div_answer}>
														<p
															onClick={() => setModal2Open(!modal2Open)}
															className={scss.answer}
														>
															Ответить
														</p>
													</div>
												)}
											</div>
										</div>
										{item.adminCommit && (
											<>
												<div className={scss.div_admin_commit}>
													<div className={scss.content_admin_commit_div}>
														{item.adminCommit && (
															<>
																<h3>Ответ от представителя</h3>
																<p>{item.adminCommit}</p>
															</>
														)}
													</div>
												</div>
												<p
													className={scss.edit}
													onClick={() => handleProductsModalFunk(index)}
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
											<h3>4,5</h3>
											<>
												<Rate
													className={scss.rate}
													allowHalf
													defaultValue={5}
												/>{' '}
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
					>
						<div className={scss.container_modal}>
							<h3>Ответ на комментарий</h3>
							<div className={scss.input_and_buttons_div}>
								<TextArea
									className={scss.input}
									defaultValue={answerForInput}
									onChange={changeInputValueForAnswer}
									value={answerForInput}
								/>
								<div className={scss.buttons}>
									<Button
										onClick={() => setModal2Open(false)}
										className={scss.button_for_cancel}
									>
										Отменить
									</Button>
									<Button className={scss.button_for_add}>Добавить</Button>
								</div>
							</div>
						</div>
					</Modal>
					{indexProducts ||
						(modalForEdit && (
							<Modal
								centered
								open={modalForEdit}
								onOk={() => setModalForEdit(false)}
								onCancel={() => setModalForEdit(false)}
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
												onClick={() =>
													handleEditAdminCommitFunk(indexProducts + 1)
												}
											>
												СОХРАНИТЬ
											</Button>
										</div>
									</div>
								</div>
							</Modal>
						))}
				</>
			</ConfigProvider>
		</>
	);
};

export default ReviewsPage;
