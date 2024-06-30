/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom';
import scss from './Favorite.module.scss';
import favorite from '@/src/assets/sammy_order_completed_by_a_delivery_girl_1.png';
import { useGetProductsQuery } from '@/src/redux/api/personalAccount/favorite';
import { useGetFavoriteQuery } from '@/src/redux/api/favorite';
import { Rate } from 'antd';

const Favorite = () => {
	// const { data: products, isLoading } = useGetProductsQuery('');
	const { data: products, isLoading, refetch } = useGetFavoriteQuery();

	return (
		<section className={scss.favorite}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.page_content_1}>
						<p className={scss.navigation_p}>
							Личный кабинет » <h3>Избранное</h3>
						</p>

						<div className={scss.div_heading}>
							<h3>Избранное</h3>
						</div>

						<div className={scss.div_navigation}>
							<Link to="/personal-account/history-of-orders">
								<button>История заказов</button>
							</Link>
							<button className={scss.active_button}>Избранное</button>
							<Link to="/personal-account/profile">
								<button>Профиль</button>
							</Link>
						</div>
					</div>
					<div className={scss.page_content_2}>
						{products?.length === 0 ? (
							<>
								<img src={favorite} alt="favorite" />
								<div className={scss.image_text}>
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
							<div className={scss.products_card}>
								{isLoading && <h1>Loading...</h1>}
								<div className={scss.cards}>
									{products &&
										products.map((e, index) => (
											<div className={scss.card} key={index}>
												<img src={e.image} alt="Product" />
												<h3>{e.nameOfGadget}</h3>
												<div className={scss.card_rating}>
													<p>Рейтинг</p>
													<Rate defaultValue={e.rating} />
													<p>({e.rating})</p>
												</div>
												<h2>{e.price} c</h2>
											</div>
										))}
								</div>
								<div className={scss.continue_button}>
									<Link to="/">
										<button>Продолжить покупки</button>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Favorite;
