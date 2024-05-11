import { useGetProductDetailsQuery } from '@/src/redux/api/product';
import scss from './ProductDetails.module.scss';
import { useEffect, useState } from 'react';
import { Checkbox, ConfigProvider } from 'antd';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
export const ProductDetails = () => {
	const [indexResult, setIndexResult] = useState<null | number>(null);
	const { data, isLoading } = useGetProductDetailsQuery();
	const [sliderResult, setSliderResult] = useState<boolean>(false);
	// const handleIndexNooActiveFunk = (index: number) => {
	// 	if(index === indexResult) {
	// 		setIndexResult(null)
	// 	}
	// }
	const [sliderRef] = useKeenSlider<HTMLDivElement>(
		{
			loop: false,
			slides: {
				perView: 4,
				spacing: 25
			}
			// breakpoints: {
			// 	'(min-width: 650px)': {
			// 		slides: { perView: 4, spacing: 15 },
			// 		// loop: false
			// 	},
			// 	'(min-width: 1000px)': {
			// 		slides: { perView: 3, spacing: 25 },
			// 		// loop: false
			// 	},
			// 	'(min-width: 1400px)': {
			// 		slides: { perView: 6, spacing: 25 },
			// 		// loop: false
			// 	}
			// }
		},
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 4000);
				}
				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			}
		]
	);

	useEffect(() => {
		const handleSliderResultFunk = () => {
			const width = window.innerWidth;
			if (width >= 732) {
				setSliderResult(true);
			} else {
				setSliderResult(false);
			}
		};
		handleSliderResultFunk();
		window.addEventListener('resize', handleSliderResultFunk);
		return () => {
			window.removeEventListener('resize', handleSliderResultFunk);
		};
	}, []);
	return (
		<section className={scss.ProductDetails}>
			<div className="container">
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
					) : !sliderResult ? (
						<div ref={sliderRef} className="keen-slider">
							{data?.map((el, index) => (
								<div
									key={el._id}
									onClick={() => setIndexResult(index)}
									className={
										indexResult === index
											? `keen-slider__slide ${scss.container_product} ${scss.index_active}`
											: `keen-slider__slide ${scss.container_product}`
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
							))}
						</div>
					) : (
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
			</div>
		</section>
	);
};
