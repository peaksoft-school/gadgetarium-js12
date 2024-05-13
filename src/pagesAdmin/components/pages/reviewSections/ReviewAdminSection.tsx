import scss from './ReviewAdminSection.module.scss';
import images from '@/src/assets/image_53.png';
import line from '@/src/assets/Line_62.png';
import {
	IconChevronDown,
	IconTrash,
	IconUserCircle
} from '@tabler/icons-react';
import { useState } from 'react';
import { Flex, Rate } from 'antd';

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
	}
];

const ReviewAdminSection = () => {
	const [indexProductsResults, setIndexProductsResults] = useState<
		null | boolean
	>(null);
	const [buttonFiltredStyle, setButtonFiltredStyle] =
		useState<string>('Все отзывы');
	const handleCategotyUsersCommits = (value: string) => {
		setButtonFiltredStyle(value);
	};
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
											Все оценки (1775) <IconChevronDown />
										</p>
										<p>Пользователь</p>
									</div>
								</div>
								<div className={scss.border_div}></div>
							</div>
							<div className={scss.container_users_commits}>
								{data.map((item, index) => (
									<div key={item.id} className={scss.users_commits_maps}>
										<div className={scss.content_maps}>
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
													{item.comments.map((el, index) => (
														<p key={index}>{el}</p>
													))}
													<p className={scss.user_commit_for_time}>
														{item.calendar}
													</p>
												</div>
											</div>
											<div
												className={
													scss.content_rating_and_user_profile_and_buttons
												}
											>
												<Rate defaultValue={3} />
												<div className={scss.user_profile_and_buttons}>
													<div className={scss.user_profile}>
														<img
															src={item.userProfile}
															alt="user profile photo"
														/>
														<div className={scss.div_for_user_name}>
															<h3>{item.userName}</h3>
															<p>{item.userGmail}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReviewAdminSection;
