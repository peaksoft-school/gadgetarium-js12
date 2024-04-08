import { useGetBasketQuery } from '@/src/redux/api/basket/Basket';
import scss from './Basket.module.scss';
import logo from '@/src/assets/image 53.png';
import { IconSmallDelete } from '@/src/assets/icons';
import logo2 from '@/src/assets/Frame 153.png';
import logo3 from '@/src/assets/Vector (11).png';
const Basket = () => {
	const { data: basketProduct = [], isLoading } = useGetBasketQuery();
	console.log(basketProduct);

	return (
		<div className={scss.basketContainer}>
			<div className={scss.basketContents}>
				{isLoading ? (
					<h3>IsLoading...</h3>
				) : (
					basketProduct.map((item) => (
						<>
							<div className={scss.divCards} key={item._id}>
								<>
									<img src={logo} alt={item.producName} />
									<div className={scss.producDiv}>
										<div className={scss.contentsProducDiv2}>
											<h2>{item.producName}</h2>
											<p className={scss.p}>
												Рейтинг <img src={logo2} alt="logo" /> {item.Rating}
											</p>
											<p>В наличии {item.buyProduc}</p>
											<h3>Код товара: {item.productCode}</h3>
										</div>
										<div className={scss.contentsProducDiv3}>
											<div className={scss.productCounts}>
												<button>-</button>
												<span>{item.quantity}</span>
												<button>+</button>
												<p>{item.price} с</p>
											</div>
											<div className={scss.ProductResult}>
												<p>
													<img className={scss.img} src={logo3} alt="logo3" /> В
													избранное
												</p>
												<p>
													<IconSmallDelete /> Удалить
												</p>
											</div>
										</div>
									</div>
								</>
							</div>
						</>
					))
				)}
			</div>
		</div>
	);
};

export default Basket;
