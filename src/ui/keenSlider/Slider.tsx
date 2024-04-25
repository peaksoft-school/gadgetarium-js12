import scss from './Slider.module.scss';
import { useState } from 'react';
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
				</>
			) : (
				<>
					<div ref={sliderRef} className="keen-slider">
						<div className={scss.background}>
							{sliders?.map((item, index) => (
								<div key={index}>
									<div className={scss.background}>
										<div className={scss.content}>
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
