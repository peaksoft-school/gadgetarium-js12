import { useState } from 'react';
import scss from './Slider.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import { useGetSlidersQuery } from '@/src/redux/api/slider';
import { Skeleton } from 'antd';

const Slider = () => {
	const { data: sliders, isLoading } = useGetSlidersQuery();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 2,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		}
	});

	return (
		<div className={scss.slider}>
			{isLoading ? (
				<>
					<Skeleton className={scss.skeleton} />
					{/* <h2>Loading...</h2> */}
				</>
			) : (
				<>
					<div ref={sliderRef} className="keen-slider">
						{sliders?.map((item, index) => (
							<div key={index} className={item.className}>
								<div className={scss.background}>
									<div className={scss.content}>
										<div className={scss.description}>
											<h2>{item.title}</h2>
											<h1>
												{item.description}
												<span>{item.subDescription}</span>
											</h1>
										</div>
										<img
											className={scss.pink_vector}
											src={item.vector}
											alt="pinkVectorSvg"
										/>
										<img
											className={scss.iphoneImg}
											src={item.image}
											alt="iPhoneImage"
										/>
									</div>
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

export default Slider;
