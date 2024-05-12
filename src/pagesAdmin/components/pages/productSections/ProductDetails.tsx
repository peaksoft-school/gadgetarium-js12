import { useGetProductDetailsQuery } from '@/src/redux/api/product';
import scss from './ProductDetails.module.scss';
import { useState } from 'react';
import { Checkbox, ConfigProvider } from 'antd';
export const ProductDetails = () => {
	const [indexResult, setIndexResult] = useState<null | number>(null);
	const { data, isLoading } = useGetProductDetailsQuery();
	return (
		<section className={scss.ProductDetails}>
				<div className={scss.content}>
					<p>ID</p>
					<p>Фото</p>
					<p>Наименование товара</p>
					<p>Цвет</p>
					<p>Кол-во SIM-карт</p>
					<p>ОЗУ</p>
					<p>ПЗУ</p>
					<p>Количество</p>
					<p>Цена</p>
				</div>
				<div className={scss.products}>
					{isLoading ? (
						<h1>IsLoading...</h1>
					) :  (
						data?.map((el, index) => (
							<div
								onClick={() => setIndexResult(index)}
								key={el._id}
								className={
									indexResult === index
										? `${scss.container_product} ${scss.index_active}`
										: `${scss.container_product}`
								}
							>
								<div className={scss.content_product}>
									{indexResult === index ? (
										<ConfigProvider
											theme={{
												components: {
													Checkbox: {
														colorPrimary: '#C11BAB',
														colorBgContainer: 'white',
														algorithm: true
													}
												}
											}}
										>
											<Checkbox />
										</ConfigProvider>
									) : (
										<p>{index + 1}</p>
									)}
									<img src={el.image} alt={el.productName} />
									<p className={scss.product_name}>{el.productName}</p>
									<p>{el.colors}</p>
									<p>{el.SIMCards}</p>
									<p>{el.ram}</p>
									<p>{el.memory}</p>
									<p>{el.quantity}</p>
									<p className={scss.products_prices}>{el.price}</p>
								</div>
							</div>
						))
					)}
				</div>
		</section>
	);
};
