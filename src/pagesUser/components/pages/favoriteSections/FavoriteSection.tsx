import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import favorite from '../../../../assets/sammy_order_completed_by_a_delivery_girl_1.png';
import scss from './FavoriteSection.module.scss';
import { Link } from 'react-router-dom';

const FavoriteSection = () => {
	const { data } = useGetFavoriteQuery();
	return (
		<div className={scss.FavoriteSection}>
			<div className="container">
				<div className={scss.content}>
					<h1>Избранное</h1>
					<span className={scss.hr}></span>
					{data?.length === 0 ? (
						<>
							<img src={favorite} alt="favorite" />
							<div className={scss.text_after_img}>
								<h2>В избранном пока пусто</h2>
								<p>
									Воспользуйтесь поиском или каталогом,
									<br /> выберите нужные товары и добавьте их в избранное!
								</p>
								<Link to="/">
									<button>К покупкам</button>
								</Link>
							</div>
						</>
					) : (
						<div className={scss.cleaningText}>
							<p>x Очистить список</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FavoriteSection;
