import { Link, useNavigate } from 'react-router-dom';
import scss from './ProductPartTwo.module.scss';
import {
	useGetNewProductsQuery,
	usePatchNewProductsQueryMutation
} from '@/src/redux/api/productAddingPartTwo';
import React, { useState } from 'react';

const ProductPartTwo = () => {
	const { data: products, isLoading } = useGetNewProductsQuery(0);
	const [patchProduct] = usePatchNewProductsQueryMutation();
	const navigate = useNavigate();
	const [price, setPrice] = useState('');

	const handlePatchNewPrice = async () => {
		if (price === '') {
			console.log('Please enter a valid price');
		} else {
			if (products && products.length > 0) {
				try {
					const promises = products.map((product) =>
						patchProduct({ productId: product._id, productPrice: price })
					);
					await Promise.all(promises);
					console.log('Prices updated successfully!');
					setPrice('');
				} catch (error) {
					console.error('Error updating prices:', error);
				}
			}
		}
	};

	return (
		<section className={scss.product}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.page_content_1}>
						<p className={scss.navigation_p}>
							<Link to={'/admin'}>
								<p>Товары »</p>
							</Link>{' '}
							<h3>Установка цены и количества товара</h3>
						</p>
						<div className={scss.border_div}>
							<h3>Установка цены и количества товара</h3>
							<div></div>
						</div>
					</div>

					<div className={scss.page_content_2}>
						<div className={scss.nav_div}>
							<div
								className={scss.nav_one}
								onClick={() => navigate('/admin/product-adding/part-1')}
							>
								<h3>1</h3>
								<p>Добавление товара</p>
							</div>
							<div className={scss.line}></div>
							<div className={scss.nav_two}>
								<h3>2</h3>
								<p>Установка цены и количества товара</p>
							</div>
							<div className={scss.line}></div>
							<div className={scss.nav_three}>
								<h3>3</h3>
								<p>Описание и обзор</p>
							</div>
						</div>

						<div className={scss.price_div}>
							<p>Общая цена</p>

							<div className={scss.buttons_div}>
								<input
									type="number"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
										if (e.key === 'Enter') {
											handlePatchNewPrice();
										}
									}}
								/>
								<button onClick={handlePatchNewPrice}>Установить цену</button>
							</div>
						</div>

						<div className={scss.full_table_div}>
							<div className={scss.table_div}>
								<div className={scss.col_one}>
									<p >Бренд</p>
									<p >Цвет</p>
									<p>Объем памяти</p>
									<p >Оперативная память</p>
									<p >Кол-во SIM-карт</p>
									<p>Дата выпуска</p>
								</div>
								<div className={scss.col_two}>
									<p>Кол-во товара</p>
									<p>Цена</p>
								</div>
							</div>

							<div className={scss.products_list_div}>
								{isLoading ? (
									<h3>Loading...</h3>
								) : (
									<>
										{products?.map((e, index) => (
											<div key={index} className={scss.products_list}>
												<div className={scss.col_one}>
													<p className={scss.brand_e}>{e.brand}</p>
													<p className={scss.colour_e}>{e.colour}</p>
													<p className={scss.gb_e}>{e.gb}</p>
													<p className={scss.ram_e}>{e.ram}</p>
													<p className={scss.sim_e}>{e.simCard}</p>
													<p className={scss.date_e}>{e.date}</p>
												</div>
												<div className={scss.col_two}>
													<p className={scss.product_e}>{e.productQuantity}</p>
													<p className={scss.price_e}>{e.productPrice}c</p>
												</div>
											</div>
										))}
									</>
								)}
							</div>

							<div className={scss.button}>
								<Link to={'/admin/product-adding/part-3'}>
									<button>Далее</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPartTwo;
