import scss from './ProductDetails.module.scss';
import { useState } from 'react';
import { Checkbox, ConfigProvider, Tooltip } from 'antd';
import { useGetGoodsDetailsGadgetQuery } from '@/src/redux/api/goods';
import { useParams } from 'react-router-dom';
export const ProductDetails = () => {
	const {productId} = useParams();
	
	const [indexResult, setIndexResult] = useState<null | number>(null);
	const { data, isLoading } = useGetGoodsDetailsGadgetQuery(productId!);

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
				) : (
					data?.map((el, index) => (
						<div
							onClick={() => setIndexResult(index)}
							key={el.subGadgetId}
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
									<p>{el.subGadgetId}</p>
								)}
								<img src={el.image} alt={el.nameOfGadget} />
								<p className={scss.product_name}>
									{el.nameOfGadget.length > 28 ? (
										<>
											{el.nameOfGadget.slice(0, 22)}
											<Tooltip title={el.nameOfGadget} color="#c11bab">
												<span style={{ cursor: 'pointer' }}>...</span>
											</Tooltip>
										</>
									) : (
										el.nameOfGadget
									)}
								</p>
								<p>{el.colour ? el.colour : 'none'}</p>
								<p>{el.countSim}</p>
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
