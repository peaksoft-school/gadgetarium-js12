/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductsQuery } from '@/src/redux/api/products/Products';
import scss from './ProductsStore.module.scss';
import photoIsIphone from '@/src/assets/image 53 (1).png';
import logo from '@/src/assets/Group 1534.png';
import icon from '@/src/assets/Vector (11).png';
import { ScalesGrey } from '@/src/assets/icons';
import logo2 from '@/src/assets/Frame 153.png';
import AddBasketButton from '../customButtons/AddBasketButton';
import './styles.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import React, { useEffect, useState } from 'react';
export const ProductsStore = () => {
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		}
	});
	const { data: productData = [], isLoading } = useGetProductsQuery();
	const [sliderResult, setSliderResult] = useState<string | boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth > 909) {
				setSliderResult(true);
			} else {
				setSliderResult(false);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={scss.ContainerStore}>
			<>
				{isLoading ? (
					<h2>IsLoading...</h2>
				) : (
					<>
						{sliderResult === false ? (
							<>
								<div className="navigation-wrapper">
									<>
										<>
											<div ref={sliderRef} className="keen-slider">
												<>
													{productData.map((item) => (
														<div
															className="keen-slider__slide number-slide1"
															key={item._id}
														>
															<div className={scss.divProductMap2}>
																<img
																	className={scss.imgProduct}
																	src={photoIsIphone}
																	alt={item.producName}
																/>
																<div className={scss.divIcons22}>
																	<div className={scss.divMobile1}>
																		<img src={logo} alt={item.newProduct} />
																		<div className={scss.divIcons2}>
																			<ScalesGrey />
																			<img
																				className={scss.imgIcon}
																				src={icon}
																				alt="icon"
																			/>
																		</div>
																	</div>
																	<div className={scss.divMobile2}>
																		<p className={scss.tagColorGreen2}>
																			В наличии {item.buyProduc}
																		</p>
																		<h3>{item.producName}</h3>
																		<p>
																			Рейтинг <img src={logo2} alt="logo" />{' '}
																			{item.Rating}
																		</p>
																	</div>
																	<div className={scss.divMobile3}>
																		<div className={scss.product}>
																			<h2>{item.price} с</h2>
																			<p>{item.previousPrice}</p>
																		</div>
																		<AddBasketButton>В корзину</AddBasketButton>
																	</div>
																</div>
															</div>
														</div>
													))}
												</>
											</div>
											{loaded && instanceRef.current && (
												<>
													<Arrow
														left
														onClick={(e: any) =>
															e.stopPropagation() || instanceRef.current?.prev()
														}
														disabled={currentSlide === 0}
													/>

													<Arrow
														onClick={(e: any) =>
															e.stopPropagation() || instanceRef.current?.next()
														}
														disabled={
															currentSlide ===
															instanceRef.current.track.details.slides.length -
																1
														}
													/>
												</>
											)}
										</>
									</>
								</div>
								{loaded && instanceRef.current && (
									<div className="dots">
										{[
											...Array(
												instanceRef.current.track.details.slides.length
											).keys()
										].map((idx) => {
											return (
												<button
													key={idx}
													onClick={() => {
														instanceRef.current?.moveToIdx(idx);
													}}
													className={
														'dot' + (currentSlide === idx ? ' active' : '')
													}
												></button>
											);
										})}
									</div>
								)}
							</>
						) : (
							productData.map((item) => (
								<div className={scss.divProductMap} key={item._id}>
									<div className={scss.divIcons}>
										<img src={logo} alt={item.newProduct} />
										<div className={scss.divIcons2}>
											<ScalesGrey />
											<img className={scss.imgIcon} src={icon} alt="icon" />
										</div>
									</div>
									<div className={scss.divImg}>
										<img
											className={scss.imgProduct}
											src={photoIsIphone}
											alt={item.producName}
										/>
									</div>
									<div className={scss.divProductContents}>
										<p className={scss.tagColorGreen}>
											В наличии {item.buyProduc}
										</p>
										<h3>{item.producName}</h3>
										<p>
											Рейтинг <img src={logo2} alt="logo" /> {item.Rating}
										</p>
										<div className={scss.divButtonsAndPrice}>
											<div className={scss.productPrice}>
												<h2>{item.price} с</h2>
												<p>{item.previousPrice}</p>
											</div>
											<AddBasketButton>В корзину</AddBasketButton>
										</div>
									</div>
								</div>
							))
						)}
					</>
				)}
			</>
		</div>
	);
};

function Arrow(props: {
	disabled: boolean;
	left?: boolean;
	onClick: (e: any) => void;
}) {
	const disabled = props.disabled ? ' arrow--disabled' : '';
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? 'arrow--left' : 'arrow--right'
			} ${disabled}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	);
}
