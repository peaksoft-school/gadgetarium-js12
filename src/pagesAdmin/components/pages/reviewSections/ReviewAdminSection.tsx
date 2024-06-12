import scss from './ReviewAdminSection.module.scss';
import images from '@/src/assets/image_53.png';
// import line from '@/src/assets/Line_62.png';
import {
	IconChevronDown,
	IconTrash,
	IconUserCircle
} from '@tabler/icons-react';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Rate, Input, Button } from 'antd';
import Infographics from '@/src/ui/infographics/Infographics';
import {
	useDeleteFeedbackMutation,
	useGetReviewQuery,
	usePostReviewQueryMutation
} from '@/src/redux/api/admin/review';
import { useSearchParams } from 'react-router-dom';

const ReviewAdminSection = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [deleteFeedback] = useDeleteFeedbackMutation();
	const [indexProductsResults, setIndexProductsResults] = useState<
		null | number
	>(null);
	const [buttonFiltredStyle, setButtonFiltredStyle] =
		useState<string>('Все отзывы');
	const [feedbackType, setFeedbackType] = useState<string>('ALL');
	const [rateValue, setRateValue] = useState<number>(0);

	const handleCategotyUsersCommits = (value: string) => {
		searchParams.set('feedbackType', feedbackType);
		setSearchParams(searchParams);
		setButtonFiltredStyle(value);
		setFeedbackType(
			value === 'Все отзывы'
				? 'ALL'
				: value === 'Неотвеченные'
					? 'UNANSWERED'
					: 'ANSWERED'
		);
	};
	const handleProductOpenMenuResultFunk = (index: number) => {
		setIndexProductsResults(indexProductsResults === index ? null : index);
	};

	const handleDeleteFeedback = async (id: number) => {
		await deleteFeedback(id);
	};

	const [message, setMessage] = useState('');
	const handleInputChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setMessage(event.target.value);
	};
	const handleCancel = () => {
		setMessage('');
	};

	const changeRateFunk = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (Number(e.target.value)) {
			setRateValue(Number(e.target.value));
		}
	};
	const { TextArea } = Input;

	const [newReviewPost] = usePostReviewQueryMutation();
	const { data: reviews } = useGetReviewQuery({
		feedbackType: searchParams.toString()
	});
	// console.log(reviews);

	const handlePostReview = async (gadgetId: number) => {
		console.log(gadgetId, 'id');

		const data = {
			responseAdmin: message
		};
		const { responseAdmin } = data;
		try {
			await newReviewPost({ id: gadgetId, responseAdmin });
		} catch (error) {
			console.error(error);
			alert('error');
		}
	};
	console.log(reviews, 'array');

	return (
		<section className={scss.ReviewAdminSection}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contents_for_users}>
						<div className={scss.buttons_for_category}>
							<button
								onClick={() => handleCategotyUsersCommits('ALL')}
								className={
									buttonFiltredStyle.includes('ALL')
										? `${scss.noo_active_button} ${scss.active_button}`
										: `${scss.noo_active_button}`
								}
							>
								Все отзывы
							</button>
							<button
								onClick={() => handleCategotyUsersCommits('UNANSWERED')}
								className={
									buttonFiltredStyle.includes('UNANSWERED')
										? `${scss.noo_active_button} ${scss.active_button}`
										: `${scss.noo_active_button}`
								}
							>
								Неотвеченные <span>+6</span>
							</button>
							<button
								onClick={() => handleCategotyUsersCommits('ANSWERED')}
								className={
									buttonFiltredStyle.includes('ANSWEREDs')
										? `${scss.noo_active_button} ${scss.active_button}`
										: `${scss.noo_active_button}`
								}
							>
								Отвеченные
							</button>
						</div>
						<div className={scss.all_product_and_commits_div}>
							<div className={scss.names_product_data}>
								<div className={scss.text_div_for_category}>
									<div className={scss.category_text_1}>
										<p className={scss.id_and_photo_content_tag}>
											ID <span>Фото</span>
										</p>
										<p>Название товара</p>
										<p>Комментарий</p>
									</div>
									<div className={scss.category_text_2}>
										<p>
											Все оценки (1775)
											<IconChevronDown className={scss.icon_chevronDown} />
										</p>
										<p>Пользователь</p>
									</div>
								</div>
								<div className={scss.border_div}></div>
							</div>
							<div className={scss.container_users_commits}>
								{/* <button>SEND TO BACKEND</button> */}
								{reviews?.feedbackResponseList?.map((item, index) => (
									<div key={item.id} className={scss.users_commits_maps}>
										<div
											className={
												indexProductsResults === index
													? `${scss.content_maps} ${scss.active_content_maps}`
													: `${scss.content_maps}`
											}
										>
											<div className={scss.div_content_commits}>
												<div className={scss.info_users_div}>
													<p>{index + 1}</p>
													<img src={item.gadgetImage} alt="logo" />
													<div>
														<h3>{item.subCategoryName}</h3>
														<p>{item.nameOfGadget}</p>
														<p>{item.article}</p>
													</div>
												</div>
												<div className={scss.user_commit_and_time}>
													<p>{item.comment}</p>
													{/* {indexProductsResults === index
														? reviews.feedbackResponseList.map((el, index) => (
																<p key={index}>{el.comment}</p>
															))
														: item.comment.length >= 2 &&
															reviews.feedbackResponseList
																.slice(0, 2)
																.map((el, index) => (
																	<p key={index}>
																		{index === 0 ? el : el + '...'}
																	</p>
																))
																} */}

													<p className={scss.user_commit_for_time}>
														{item.dateAndTime}
													</p>
													{indexProductsResults === index && (
														<div className={scss.index_active}>
															<img
																src={item.gadgetImage}
																alt="products photo"
															/>
															<img
																src={item.gadgetImage}
																alt="products photo"
															/>
															<img
																src={item.gadgetImage}
																alt="products photo"
															/>
															<img
																src={item.gadgetImage}
																alt="products photo"
															/>
														</div>
													)}
												</div>
											</div>
											<div
												className={
													indexProductsResults === index
														? `${scss.content_rating_and_user_profile_and_buttons} ${scss.active_div_index}`
														: `${scss.content_rating_and_user_profile_and_buttons}`
												}
											>
												<div
													className={scss.rate_and_user_name_and_profile_div}
												>
													<Rate
														defaultValue={5}
														className={scss.rating}
														value={rateValue}
														onChange={changeRateFunk}
													/>
													<div className={scss.user_profile_and_buttons}>
														<div className={scss.user_profile}>
															<IconUserCircle
																className={scss.icon_user_circle}
															/>
															<div className={scss.div_for_user_name}>
																<h3>{item.fullNameUser}</h3>
																<p>{item.emailUser}</p>
															</div>
														</div>
														<div className={scss.buttons}>
															<IconTrash
																onClick={() => handleDeleteFeedback(item.id)}
																className={scss.icon_trash}
															/>
															<IconChevronDown
																className={scss.icon_chevron_down}
																onClick={() =>
																	handleProductOpenMenuResultFunk(index)
																}
															/>
														</div>
													</div>
												</div>
												<div>
													{indexProductsResults === index && (
														<div className={scss.form_of_commit_div}>
															<p>Ответить на комментарий</p>
															<TextArea
																id="message"
																value={message}
																onChange={handleInputChange}
																placeholder="Напишите ответ!"
																className={scss.input_for_text_area}
															/>
															<div className={scss.buttonContainer}>
																<Button
																	className={message ? scss.none : scss.button}
																>
																	{message ? scss.button_cancel : 'Ответить'}
																</Button>
																{message ? (
																	<>
																		<Button
																			className={scss.button_cancel_2}
																			onClick={handleCancel}
																		>
																			{message ? 'Отменить' : ''}
																		</Button>
																		<Button
																			onClick={() => handlePostReview(item.id)}
																			className={scss.button}
																		>
																			Сохранить
																		</Button>
																	</>
																) : null}
															</div>
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div>
						<Infographics />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReviewAdminSection;
