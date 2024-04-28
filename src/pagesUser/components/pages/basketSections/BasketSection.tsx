import { useGetBasketQuery } from '@/src/redux/api/basket';
import png from '../../../../assets/sammy_shopping_1_1.png';
import scss from './BasketSection.module.scss';
import { Link } from 'react-router-dom';
const BasketSection = () => {
	const { data } = useGetBasketQuery();
	return (
		<div className={scss.BasketSection}>
			<div className="container">
				<div className={scss.content}>
					<h1>Товары в корзине</h1>
					<span className={scss.hr}></span>
					{data?.length !== 0 ? (
						<>
							<img src={png} alt="png" />
							<div className={scss.text_after_img}>
								<h2>Ваша корзина пуста</h2>
								<p>Но вы всегда можете ее наполнить </p>
								<Link to="/">
									<button>К покупкам</button>
								</Link>
							</div>
						</>
					) : (
						<h1>Hello</h1>
					)}
				</div>
			</div>
		</div>
	);
};

export default BasketSection;
