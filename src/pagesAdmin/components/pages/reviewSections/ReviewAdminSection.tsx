import scss from './ReviewAdminSection.module.scss';
import images from '@/src/assets/image_53.png';
import line from '@/src/assets/Line_62.png';
import {
	IconChevronDown,
	IconTrash,
	IconUserCircle
} from '@tabler/icons-react';
import { SetStateAction, useState } from 'react';
import { Rate, Input, Button } from 'antd';
import Infographics from '@/src/ui/infographics/Infographics';
import { useGetReviewQuery, usePostReviewQueryMutation } from '@/src/redux/api/admin/review';

const data = [
	{
		id: 1,
		images,
		brand: 'Asus',
		model: 'Модель',
		articul: 'Арт.1212121212',
		comments: [
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик!'
		],
		calendar: '26.06.22-14:15',
		line,
		userProfile:
			'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png',
		userName: 'Адыл Бакытов',
		userGmail: 'Adyl@mail.com'
	},
	{
		id: 2,
		images,
		brand: 'Asus',
		model: 'Модель',
		articul: 'Арт.1212121212',
		comments: [
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик!'
		],
		calendar: '26.06.22-14:15',
		line,
		userProfile:
			'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png',
		userName: 'Адыл Бакытов',
		userGmail: 'Adyl@mail.com'
	},
	{
		id: 3,
		images,
		brand: 'Asus',
		model: 'Модель',
		articul: 'Арт.1212121212',
		comments: [
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
			'Эрсултан,красавчик! Эрсултан,красавчик!'
		],
		calendar: '26.06.22-14:15',
		line,
		userProfile:
			'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png',
		userName: 'Адыл Бакытов',
		userGmail: 'Adyl@mail.com'
	},
	{
		id: 4,
		images,
		brand: 'Asus',
		model: 'Модель',
		articul: 'Арт.1212121212',
		comments: [
			'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',

		],
		calendar: '26.06.22-14:15',
		line,
		userProfile:
			'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png',
		userName: 'Адыл Бакытов',
		userGmail: 'Adyl@mail.com'
	}
];

const ReviewAdminSection = () => {
	const [indexProductsResults, setIndexProductsResults] = useState<
		null | number
	>(null);
	const [buttonFiltredStyle, setButtonFiltredStyle] =
		useState<string>('Все отзывы');
	const handleCategotyUsersCommits = (value: string) => {
		setButtonFiltredStyle(value);
	};
	const handleProductOpenMenuResultFunk = (index: number) => {
		setIndexProductsResults(indexProductsResults === index ? null : index);
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

	const { TextArea } = Input;

	const [newReviewPost] = usePostReviewQueryMutation()
	const {data: reviews} = useGetReviewQuery("")

	const handlePostReview = async () => {
		const newReview = {
			totalRatings: 0,
			unanswered: 0,
			ratingCounts: {
				additionalProp1: 0,
				additionalProp2: 0,
				additionalProp3: 0
			},
			feedbackResponseList: [
				{
					id: 0,
					gadgetImage: images,
					subCategoryName: "Модель",
					nameOfGadget: "Asus",
					article: 1212121212,
					comment: [
						'Эрсултан,красавчик! Эрсултан,красавчик! Эрсултан,красавчик!',
						""
					],
					feedbackImages: [
						images,
						images,
						images,
						images
					],
					dateAndTime: "26.06.22-14:15",
					rating: 0,
					fullNameUser: "Адыл Бакытов",
					emailUser: "Adyl@mail.com",
					responseAdmin: ""
				}
			]
		}

		const res = await newReviewPost(newReview)
		console.log(res);
	}
	return (
		<section className={scss.ReviewAdminSection}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contents_for_users}>
						<div className={scss.buttons_for_category}>
							<button
								onClick={() => handleCategotyUsersCommits('Все отзывы')}
								className={
									buttonFiltredStyle.includes('Все отзывы')
										? `${scss.noo_active_button} ${scss.active_button}`
										: `${scss.noo_active_button}`
								}
							>
								Все отзывы
							</button>
							<button
								onClick={() => handleCategotyUsersCommits('Неотвеченные')}
								className={
									buttonFiltredStyle.includes('Неотвеченные')
										? `${scss.noo_active_button} ${scss.active_button}`
										: `${scss.noo_active_button}`
								}
							>
								Неотвеченные <span>+6</span>
							</button>
							<button
								onClick={() => handleCategotyUsersCommits('Отвеченные')}
								className={
									buttonFiltredStyle.includes('Отвеченные')
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
								<button onClick={handlePostReview}>SEND TO BACKEND</button>
								{reviews?.map((item, index) => (
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
													<img src={item.images} alt="logo" />
													<div>
														<h3>{item.brand}</h3>
														<p>{item.model}</p>
														<p>{item.articul}</p>
													</div>
												</div>
												<div className={scss.user_commit_and_time}>
													{indexProductsResults === index
														? item.comments.map((el, index) => (
															<p key={index}>{el}</p>
														))
														: item.comments.length >= 2 &&
														item.comments
															.slice(0, 2)
															.map((el, index) => (
																<p key={index}>
																	{index === 0 ? el : el + '...'}
																</p>
															))}

													<p className={scss.user_commit_for_time}>
														{item.calendar}
													</p>
													{indexProductsResults === index && (
														<div className={scss.index_active}>
															<img src={item.images} alt="products photo" />
															<img src={item.images} alt="products photo" />
															<img src={item.images} alt="products photo" />
															<img src={item.images} alt="products photo" />
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
													<Rate defaultValue={5} className={scss.rating} />
													<div className={scss.user_profile_and_buttons}>
														<div className={scss.user_profile}>
															<IconUserCircle
																className={scss.icon_user_circle}
															/>
															<div className={scss.div_for_user_name}>
																<h3>{item.userName}</h3>
																<p>{item.userGmail}</p>
															</div>
														</div>
														<div className={scss.buttons}>
															<IconTrash className={scss.icon_trash} />
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
																		<Button className={scss.button}>
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
