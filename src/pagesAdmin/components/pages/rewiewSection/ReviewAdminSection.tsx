import scss from './ReviewAdminSection.module.scss';
import {
	IconChevronDown,
	IconTrash,
	IconUserCircle
} from '@tabler/icons-react';
import React, { useState } from 'react';
import { Rate, Input, Button, Dropdown, MenuProps } from 'antd';
import Infographics from '@/src/ui/infographics/Infographics';

import { useNavigate, useSearchParams } from 'react-router-dom';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import {
	useDeleteFeedbackMutation,
	useGetReviewQuery,
	usePatchReviewQueryMutation,
	usePostReviewQueryMutation
} from '@/src/redux/api/review';

const ReviewAdminSection = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [editFeedback] = usePatchReviewQueryMutation();
	const [modalName, setModalName] = useState('');
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [deleteFeedback] = useDeleteFeedbackMutation();
	const [indexProductsResults, setIndexProductsResults] = useState<
		null | number
	>(null);
	const buttonStyleRef = React.useRef(false);
	const [message, setMessage] = useState<MessageType>({});
	const [editResponse, setEditResponse] = useState('');
	const [isEdit, setIsEdit] = useState(null);

	const handleCategotyUsersCommits = (value: string) => {
		searchParams.set('feedbackType', value);
		setSearchParams(searchParams);
		navigate(`/admin/review?${searchParams.toString()}`);
	};

	const handleProductOpenMenuResultFunk = (index: null | number) => {
		setIndexProductsResults(indexProductsResults === index ? null : index);
	};

	const cancelButton = () => {
		setIsEdit(null);
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const edit = (item: any) => {
		console.log(item);

		setEditResponse(item.responseAdmin);
		setIsEdit(item.id);
	};

	const saveEdit = (id: number) => {
		const responseAdminObject = {
			responseAdmin: editResponse
		};
		const { responseAdmin } = responseAdminObject;
		console.log(responseAdmin, 'value');

		editFeedback({ id, responseAdmin });
		setIsEdit(null);
		setEditResponse('');
	};

	const handleDeleteFeedback = async (id: number) => {
		await deleteFeedback(id);
		console.log(id);
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
		gadgetId: number
	) => {
		setMessage({ ...message, [gadgetId]: event.target.value });
		console.log(message);
	};

	const handleCancel = () => {
		setMessage('');
	};

	const items: MenuProps['items'] = [
		{
			key: '1',
			label: <Rate />
		},
		{
			key: '2',
			label: <Rate />
		},
		{
			key: '3',
			label: <Rate />
		},
		{
			key: '4',
			label: <Rate />
		},
		{
			key: '5',
			label: <Rate />
		}
	];

	const { TextArea } = Input;

	const [newReviewPost] = usePostReviewQueryMutation();

	const handlePostReview = async (gadgetId: number) => {
		const responseAdmin = message[gadgetId];
		console.log('Отправка данных:', { id: gadgetId, responseAdmin });
		try {
			await newReviewPost({ id: gadgetId, responseAdmin });
			setIndexProductsResults(null);
		} catch (error) {
			console.error(error);
			alert('error');
		}
	};
	const { data: reviews } = useGetReviewQuery({
		feedbackType: searchParams.toString()
			? searchParams.toString()
			: `feedbackType=ALL`
	});

	const handleOpenModal = (id: number) => {
		// Your existing logic
		setModalIsOpen(true);
		setModalName(id.toString());
	};

	React.useEffect(() => {
		if (window.location.search) {
			buttonStyleRef.current = true;
		} else {
			buttonStyleRef.current = false;
		}
	}, [searchParams]);
	console.log(reviews?.feedbackResponseList, 'array');

	return (
		<section className={scss.ReviewAdminSection}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contents_for_users}>
						<div className={scss.buttons_for_category}>
							<button
								onClick={() => handleCategotyUsersCommits('ALL')}
								className={
									searchParams.getAll('feedbackType').includes('ALL') ||
									buttonStyleRef.current === false
										? `${scss.noo_active_button} ${scss.active_button}`
										: `${scss.noo_active_button}`
								}
							>
								Все отзывы
							</button>
							<button
								onClick={() => handleCategotyUsersCommits('UNANSWERED')}
								className={
									searchParams.getAll('feedbackType').includes('UNANSWERED')
										? `${scss.noo_active_button} ${scss.active_button}`
										: `${scss.noo_active_button}`
								}
							>
								Неотвеченные <span>{reviews?.unanswered}</span>
							</button>
							<button
								onClick={() => handleCategotyUsersCommits('ANSWERED')}
								className={
									searchParams.getAll('feedbackType').includes('ANSWERED')
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
										<Dropdown menu={{ items }} placement="bottomRight">
											<p className={scss.yourParagraphClass}>
												Все оценки (1775)
												<IconChevronDown className={scss.iconChevronDown} />
											</p>
										</Dropdown>
										<p>Пользователь</p>
									</div>
								</div>
								<div className={scss.border_div}></div>
							</div>
							<div className={scss.container_users_commits}>
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
													<p
														className={
															item.responseAdmin === null
																? `${scss.noo_active} ${scss.active}`
																: `${scss.noo_active}`
														}
													>
														{item.comment}
													</p>
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
														value={item.rating}
														disabled
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
																className={scss.icon_trash}
																onClick={(event) => {
																	event.stopPropagation();
																	event.preventDefault();
																	handleOpenModal(item.id);
																}}
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

															{isEdit === item.id ? (
																<>
																	<TextArea
																		value={editResponse}
																		onChange={(e) =>
																			setEditResponse(e.target.value)
																		}
																	/>
																	<div className={scss.two_button}>
																		<Button
																			className={scss.button_save}
																			onClick={() => saveEdit(item.id)}
																		>
																			Save
																		</Button>
																		<Button
																			className={scss.button_save}
																			onClick={cancelButton}
																		>
																			Cancel
																		</Button>
																	</div>
																</>
															) : (
																<>
																	<TextArea
																		id="message"
																		value={
																			searchParams
																				.get('feedbackType')
																				?.includes('UNANSWERED')
																				? message[item.id]
																				: item.responseAdmin?.toString()
																		}
																		onChange={(event) =>
																			handleInputChange(event, item.id)
																		}
																		placeholder="Напишите ответ!"
																		className={scss.input_for_text_area}
																	/>
																</>
															)}
															<div className={scss.buttonContainer}>
																{searchParams
																	.getAll('feedbackType')
																	.includes('UNANSWERED') ? (
																	<>
																		{!message ? (
																			<Button
																				className={
																					message ? scss.none : scss.button
																				}
																			>
																				Ответить
																			</Button>
																		) : (
																			<Button
																				className={
																					message ? scss.none : scss.button
																				}
																			>
																				Редактировать
																			</Button>
																		)}

																		{message ? (
																			<>
																				<Button
																					className={scss.button_cancel_2}
																					onClick={handleCancel}
																				>
																					{message ? 'Отменить' : ''}
																				</Button>
																				<Button
																					onClick={() =>
																						handlePostReview(item.id)
																					}
																					className={scss.button}
																				>
																					Сохранить
																				</Button>
																			</>
																		) : null}
																	</>
																) : (
																	<>
																		<Button
																			onClick={() => edit(item)}
																			className={
																				isEdit
																					? scss.button_cancel
																					: scss.button
																			}
																		>
																			{item.responseAdmin !== null
																				? 'Редактировать'
																				: 'Ответить'}
																		</Button>
																	</>
																)}
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
					<CustomModal
						isModalOpen={modalIsOpen}
						setIsModalOpen={setModalIsOpen}
					>
						<div className={scss.modal}>
							<h2>
								Вы уверены, что хотите удалить товар
								<span> {modalName}</span>?
							</h2>

							<div className={scss.modal_buttons}>
								<CancelButtonCustom onClick={() => setModalIsOpen(false)}>
									Отменить
								</CancelButtonCustom>
								<CustomButtonAdd
									onClick={() => {
										handleDeleteFeedback(Number(modalName));
										setModalIsOpen(false);
									}}
								>
									Удалить
								</CustomButtonAdd>
							</div>
						</div>
					</CustomModal>
				</div>
			</div>
		</section>
	);
};

export default ReviewAdminSection;
