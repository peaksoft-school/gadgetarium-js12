import scss from './ReviewAdminSection.module.scss';
import images from '@/src/assets/image_53.png';

const data = [
	{
		id: 1,
		images,
		brand: 'Asus',
		model: 'Модель',
		articul: 'Арт.1212121212',
		comments:
			'Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!Эрсултан,красавчик!',
		calendar: '26.06.22-14:15'
	}
];

const ReviewAdminSection = () => {
	return (
		<div className={scss.ReviewSection}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.first_three_buttons}>
						<button>Все отзывы</button>
						<button>
							Неотвеченные <span style={{ color: '#2fc509' }}>+6</span>
						</button>
						<button>Отвеченные</button>
					</div>
					<div className={scss.id_photo_name_product}>
						<div className={scss.first_id_photo_comments}>
							<p>ID</p>
							<p>Фото</p>
							<p>Название товара</p>
							<p>Комментарий</p>
						</div>
						<div className={scss.second_select_users}>
							<p>Все оценки (1775)</p>
							<p>Пользователь</p>
						</div>
					</div>
					<span className={scss.hr}></span>

					{data.map((item, index) => (
						<div key={index}>
							<p>{item.id}</p>
							<img src={images} alt="images" />
							<p>{item.brand}</p>
							<p>{item.model}</p>
							<p>{item.articul}</p>
							<p>{item.comments}</p>
							<p>{item.calendar}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ReviewAdminSection;
