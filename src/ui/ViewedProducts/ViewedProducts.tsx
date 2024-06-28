/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import scss from './ViewedProducts.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import ButtonArrowLeft from '../customButtons/ButtonArrowLeft';
import ButtonArrowRight from '../customButtons/ButtonArrowRight';
import { useGetViewedProductsQuery } from '@/src/redux/api/viewedProducts';
import { Rate } from 'antd';

export const ViewedProducts = () => {
	const { data, isLoading } = useGetViewedProductsQuery();
	const [loaded, setLoaded] = useState<any>(false);
	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			// ! slider
			loop: false,
			mode: 'free-snap',
			slides: {
				perView: 1,
				spacing: 10
			},
			breakpoints: {
				'(min-width: 750px)': {
					slides: { perView: 2, spacing: 25 }
				},
				'(min-width: 800px)': {
					slides: { perView: 3, spacing: 7 }
				},
				'(min-width: 1000px)': {
					slides: { perView: 4, spacing: 7 }
				},
				'(min-width: 1400px)': {
					slides: { perView: 6, spacing: 2 }
				}
			},

			// ! navigation + buttons
			initial: 0,
			created() {
				setLoaded(true);
			}
		},
		// ! auto play
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
					}, 1111800);
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
	return (
		<section className={scss.ViewedProducts}>
			<div className="container">
				<div className={scss.content}>
					{localStorage.getItem('isAuth') === 'true' && (
						<>
							{' '}
							<h2>Просмотренные товары</h2>
							{isLoading ? (
								<h1>IsLOading...</h1>
							) : (
								<>
									<div className={scss.data_list}>
										<div
											className={`keen-slider ${scss.content_div_data_list}`}
											ref={ref}
										>
											{data?.map((el) => (
												<>
													<div
														key={el.id}
														className={`keen-slider__slide ${scss.data_maps_content}`}
													>
														<div
															className={scss.content_product_text_and_image}
														>
															<img src={el.image} alt={el.nameOfGadget} />
															<div
																className={
																	scss.product_price_and_product_name_text
																}
															>
																<h3>{el.nameOfGadget}</h3>
																<div>
																	<p>
																		Рейтинг{' '}
																		<Rate defaultValue={el.rating} disabled />(
																		{el.rating})
																	</p>
																	<h2>{el.price} c</h2>
																</div>
															</div>
														</div>
													</div>
												</>
											))}
										</div>
										{loaded && instanceRef.current && (
											<>
												<div className={scss.buttons_slider}>
													<span
														className={`${scss.left} `}
														onClick={(e: any) =>
															e.stopPropagation() || instanceRef.current?.prev()
														}
													>
														<ButtonArrowLeft />
													</span>
													<span
														className={`${scss.right}`}
														onClick={(e: any) =>
															e.stopPropagation() || instanceRef.current?.next()
														}
													>
														<ButtonArrowRight />
													</span>{' '}
												</div>
											</>
										)}
									</div>
								</>
							)}
						</>
					)}
				</div>
			</div>
		</section>
	);
};
