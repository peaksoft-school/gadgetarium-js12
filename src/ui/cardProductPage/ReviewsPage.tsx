/* eslint-disable @typescript-eslint/no-explicit-any */
import scss from './ReviewsPage.module.scss';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Rate, Button, Modal, Input, ConfigProvider } from 'antd';
import React, { useRef, useState } from 'react';
import {
	useApiFeedbackStatisticsQuery,
	useDeleteByIdUserCommitMutation,
	useEditUserCommitMutation,
	useGetReviewsQuery,
	usePostUsersCommitsMutation
} from '@/src/redux/api/reviews';
import { usePostUploadMutation } from '@/src/redux/api/pdf';
import {
	IconCameraPlus,
	IconPencilMinus,
	IconTrash
} from '@tabler/icons-react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Notify } from '@/src/utils/helpers/Notify';
const ReviewsPage = () => {
	const fileUrl = useRef<HTMLInputElement>(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const [editCommitUserApi] = useEditUserCommitMutation();
	const [deleteByIdCommitForUsers] = useDeleteByIdUserCommitMutation();
	const [deleteId, setDeleteId] = useState<number>(0);
	const [modalForEdit, setModalForEdit] = useState<boolean>(false);
	const navigate = useNavigate();
	const [editInputValueCommit, setEditInputValueCommit] = useState<string>('');
	const [postUpload] = usePostUploadMutation();
	const { productId } = useParams();
	const [postUserCommitApi] = usePostUsersCommitsMutation();
	const [editRateValue, setEditRateValue] = useState<number>(0);
	const [modal2Open, setModal2Open] = useState<boolean>(false);
	const [filesUrls, setFilesUrls] = useState<string[]>([]);
	const [textCommitInput, setTextCommitInput] = useState<string>('');
	const [rateEdit, setRateEdit] = useState<number>(0);
	const [indexProducts, setIndexProducts] = useState<number>(0);
	const [rateValue, setRateValue] = useState<number>(0);
	const [deleteModal, setDeleteModal] = useState<boolean>(false);
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
		if (fileInputValue && fileInputValue[0]) {
			const file = fileInputValue[0];
			const formData = new FormData();
			formData.append('files', file);
			const newFileUrls: string[] = [];
			try {
				const response: any = await postUpload(formData).unwrap();
				newFileUrls.push(response.data[0]);
				setFilesUrls(newFileUrls);
			} catch (error) {
				console.error('Upload error:', error);
			}
		}
	};

	const handleEditUserCommitFunk = async (feedId: number) => {
		const DATA = {
			grade: editRateValue,
			comment: editInputValueCommit,
			images: filesUrls
		};
		const { comment, grade, images } = DATA;
		try {
			if (
				editRateValue === 0 &&
				editInputValueCommit === '' &&
				filesUrls === ['']
			)
				return alert('input if value not found');
			await editCommitUserApi({
				feedId,
				comment,
				grade,
				images
			});
			setEditInputValueCommit('');
			setFilesUrls([]);
			setEditRateValue(0);
			setModalForEdit(false);
		} catch (error) {
			console.error('Edit error:', error);
		}
	};

	const changeInputValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = event.target.value;
		if (value) {
			setTextCommitInput(value);
		}
	};
	const handlePostCommitFunk = async () => {
		const DATA = {
			grade: rateValue,
			comment: textCommitInput,
			images: filesUrls
		};
		const { comment, grade, images } = DATA;
		try {
			if (rateValue === 0 || ('' && textCommitInput === '' && filesUrls === []))
				return Notify('Ошибка', 'Заполните все поля', '');
			Notify('success', 'Успешно Комментарий отправлен', '');
			await postUserCommitApi({
				gadgetId: Number(productId && productId),
				comment,
				grade,
				images
			});
			setRateValue(0);
			setTextCommitInput('');
			setFilesUrls([]);
		} catch (error) {
			console.error(error, 'error service');
			Notify('Ошибка', 'Не удалось отправить комментарий', '');
		}
	};

	const handleDeleteByIdUserCommit = async (feedId: number) => {
		console.log(feedId, 'id for delete result');
		try {
			await deleteByIdCommitForUsers(feedId);
		} catch (error) {
			console.error(error);
		}
		setDeleteModal(false);
	};

	const handlePaginationFunk = (size: number) => {
		const sizeResult = 3 + size;
		searchParams.set('page', '1');
		searchParams.set('size', String(sizeResult));
		setSearchParams(searchParams);
		navigate(
			`/api/gadget/by-id/${productId}?${window.location.search.substring(1)}`
		);
	};

	const handlePaginationFunkCancel = () => {
		searchParams.set('size', '3');
		setSearchParams(searchParams);
		navigate(
			`/api/gadget/by-id/${productId}?${window.location.search.substring(1)}`
		);
	};

	const changeEditInputValueForCommit = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const value = event.target.value;
		if (value) {
			setEditInputValueCommit(value);
		}
	};

	const { data, isLoading } = useGetReviewsQuery({
		id: productId!,
		page: searchParams.toString(),
		size: searchParams.toString()
	});

	console.log(indexProducts, 'index test');
	const handleOpenModal = (index: number, id: number) => {
		setIndexProducts(index);
		setModalForEdit(true);
		setEditRateValue(data![index].rating);
		setEditInputValueCommit(data![index].description);
		setDeleteId(id);
	};

	const changeEditRateValueFunk = (valueRate: number) => {
		if (valueRate) {
			setEditRateValue(valueRate);
		}
	};

	const handleOpenModalForDelete = (id: number) => {
		setDeleteModal(true);
		setDeleteId(id);
	};

	console.log(data, 'test array');

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
							{data?.map((e, index) => (
								<div key={e.id} className={scss.div_users_commits}>
									<img src={e.image} alt={e.fullName} />
									<div className={scss.commits_for_users_div}>
										<div className={scss.user_info}>
											<h2>{e.fullName}</h2>
											<p>{e.dateTime}</p>
										</div>
										<div className={scss.grade_div}>
											<Rate allowHalf defaultValue={e.rating} />
										</div>
										<p className={scss.commit_user}>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Excepturi totam ab beatae ad eum ratione quod assumenda,
											temporibus quos? Repudiandae inventore quia asperiores
											excepturi nemo, voluptates dolorem porro ducimus
											voluptatibus! Nostrum ipsum quod deleniti ex.
										</p>
										<div className={scss.icons_div}>
											<IconPencilMinus
												color="rgb(145, 150, 158)"
												width={'17px'}
												height={'17px'}
												cursor={'pointer'}
												onClick={() => {
													handleOpenModal(index, e.id);
												}}
											/>
											<IconTrash
												color="rgb(145, 150, 158)"
												width={'17px'}
												height={'17px'}
												cursor={'pointer'}
												onClick={() => handleOpenModalForDelete(e.id)}
											/>
										</div>
									</div>
								</div>
							))}
							{data!.length >= 3 && (
								<div className={scss.button_div_for_pagination}>
									{FeedbackStatistics?.quantityFeedbacks.toString() <
									searchParams.get('size') ? (
										<Button
											onClick={handlePaginationFunkCancel}
											className={scss.button_for_pagination}
										>
											Скрыть
										</Button>
									) : (
										<Button
											onClick={() => handlePaginationFunk(3)}
											className={scss.button_for_pagination}
										>
											Показать ещё
										</Button>
									)}
								</div>
							)}
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
				<ToastContainer />
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
					footer={false}
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
							<div onClick={handleOpenFileFunk} className={scss.input_for_file}>
								<input
									type="file"
									style={{ display: 'none' }}
									ref={fileUrl}
									onChange={handleChangeFileFunk}
									multiple
								/>
								<div className={scss.input_file_content_div}>
									<IconCameraPlus
										width={'30px'}
										height={'31px'}
										color="rgb(41, 41, 41)"
									/>
									<p>
										<span>Нажмите на ссылку, </span>чтобы выбрать фотографии или
										просто перетащите их сюда
									</p>
								</div>
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
				<Modal
					centered
					open={modalForEdit}
					onOk={() => setModalForEdit(false)}
					onCancel={() => setModalForEdit(false)}
					afterClose={() => {
						setRateValue(0);
						setEditInputValueCommit('');
					}}
					footer={false}
				>
					<div className={scss.content_modal}>
						<h3>Редактировать комментарий</h3>
						<div className={scss.modal_content_for_reviews}>
							Оценка{' '}
							<Rate
								allowHalf
								defaultValue={editRateValue}
								onChange={changeEditRateValueFunk}
								value={editRateValue}
							/>
						</div>
						<div className={scss.modal_form_div}>
							<p>Ваш комментарий</p>
							<TextArea
								placeholder="Напишите комментарий"
								onChange={changeEditInputValueForCommit}
								className={scss.commit_input}
								defaultValue={editInputValueCommit}
								value={editInputValueCommit}
							/>
							<div onClick={handleOpenFileFunk} className={scss.input_for_file}>
								<input
									type="file"
									style={{ display: 'none' }}
									ref={fileUrl}
									onChange={handleChangeFileFunk}
									multiple
								/>
								<div className={scss.input_file_content_div}>
									<IconCameraPlus
										width={'30px'}
										height={'31px'}
										color="rgb(41, 41, 41)"
									/>
									<p>
										<span>Нажмите на ссылку, </span>чтобы выбрать фотографии или
										просто перетащите их сюда
									</p>
								</div>
							</div>
							<div className={scss.edit_and_delete_div}>
								<Button
									className={scss.button_for_edit_and_delete}
									onClick={() => {
										setModalForEdit(false);
										handleEditUserCommitFunk(deleteId);
									}}
								>
									Редактировать
								</Button>
								<Button
									className={scss.button_for_edit_and_delete}
									onClick={() => setModalForEdit(false)}
								>
									отмена
								</Button>
							</div>
						</div>
					</div>
				</Modal>
				<Modal
					centered
					open={deleteModal}
					onOk={() => setDeleteModal(false)}
					onCancel={() => setDeleteModal(false)}
					footer={false}
				>
					<div className={scss.content_modal}>
						<h3 className={scss.delete_text}>
							вы уверены что хотите удалить этот комментарий
						</h3>
						<div className={scss.delete_buttons_div}>
							<Button
								className={scss.delete_and_cancel_buttons}
								onClick={() => handleDeleteByIdUserCommit(deleteId)}
							>
								Удалить
							</Button>
							<Button
								className={scss.delete_and_cancel_buttons}
								onClick={() => setDeleteModal(false)}
							>
								Отмена
							</Button>
						</div>
					</div>
				</Modal>
			</ConfigProvider>
		</>
	);
};

export default ReviewsPage;
