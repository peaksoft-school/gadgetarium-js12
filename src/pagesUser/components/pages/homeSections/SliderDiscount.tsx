import scss from './SliderDiscount.module.scss';
import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { useGetSlidersQuery } from '@/src/redux/api/slider';
import { Skeleton } from 'antd';

const SliderDiscount = () => {
	const { data: sliders = [], isLoading } = useGetSlidersQuery();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider({
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		}
	});

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
				}, 2000);
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
	];
	// useEffect(() => {
	// 	if (instanceRef.current) {
	// 		setTimeout(() => {
	// 			instanceRef.current.next();
	// 		}, 2000);

	// 		// return () => clearInterval(interval);
	// 	}
	// }, [instanceRef]);

	return (
		<div className={scss.slider}>
			{isLoading ? (
				<>
					<Skeleton.Button style={{ width: 1724, height: 550 }} />
				</>
			) : (
				<>
					<div ref={sliderRef} className="keen-slider">
						{sliders?.map((item) => (
							<div key={item.id} className="keen-slider__slide">
								<div className={scss.image_slider}>
									<img src={item.images} alt="Banner" />
								</div>
							</div>
						))}
					</div>
				</>
			)}

			{loaded &&
				instanceRef.current &&
				instanceRef.current.track.details &&
				instanceRef.current.track.details.slides && (
					<div className={scss.dots}>
						{Array.from(
							Array(instanceRef.current.track.details.slides.length).keys()
						).map((idx) => {
							return (
								<button
									key={idx}
									onClick={() => {
										instanceRef.current?.moveToIdx(idx);
									}}
									className={currentSlide === idx ? scss.dot : scss.active}
								></button>
							);
						})}
					</div>
				)}
		</div>
	);
};

export default SliderDiscount;
