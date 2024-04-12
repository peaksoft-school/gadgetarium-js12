import {
	IconBigCar,
	IconCreditCard,
	IconHands,
	IconTodoList,
	IconTools
} from '@/src/assets/icons';
import scss from './AboutService.module.scss';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
// import './styles.css';

const animation = { duration: 10000, easing: (t: any) => t };

const AboutService = () => {
	const [openSlider, setOpenSlider] = useState<boolean>(false);
	const [sliderRef] = useKeenSlider({
		loop: true,
		renderMode: 'performance',
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
	});
	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth > 1276) {
				setOpenSlider(true);
			} else {
				setOpenSlider(false);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<section className={scss.AboutService}>
			<div className="container">
				<div className={scss.content}>
					{openSlider === false ? (
						<div ref={sliderRef} className="keen-slider">
							<div className="keen-slider__slide number-slide1">
								{' '}
								<div className={scss.first_square}>
									<div className={scss.icon_todollist_and_text}>
										<IconTodoList />
										<p>Официальный дистрибьютер</p>
									</div>
								</div>
							</div>
							<div className="keen-slider__slide number-slide2">
								{' '}
								<div className={scss.second_square}>
									<div className={scss.icon_tools_and_text}>
										<IconTools />
										<p>Гарантийное обслуживание</p>
									</div>
								</div>
							</div>
							<div className="keen-slider__slide number-slide3">
								{' '}
								<div className={scss.third_square}>
									<div className={scss.icon_creditcard_and_text}>
										<IconCreditCard />
										<p>Оплата любым удобным способом</p>
									</div>
								</div>
							</div>
							<div className="keen-slider__slide number-slide4">
								{' '}
								<div className={scss.fourth_square}>
									<div className={scss.icon_hands_and_text}>
										<IconHands />
										<p>Оптовые продажи</p>
									</div>
								</div>
							</div>
							<div className="keen-slider__slide number-slide5">
								{' '}
								<div className={scss.fifth_square}>
									<div className={scss.icon_bigcar_and_text}>
										<IconBigCar />
										<p>Доставка в любой регион Кыргызстана</p>
									</div>
								</div>
							</div>
						</div>
					) : (
						<>
							<>
								{' '}
								<div className={scss.first_square}>
									<div className={scss.icon_todollist_and_text}>
										<IconTodoList />
										<p>Официальный дистрибьютер</p>
									</div>
								</div>
							</>
							<>
								{' '}
								<div className={scss.second_square}>
									<div className={scss.icon_tools_and_text}>
										<IconTools />
										<p>Гарантийное обслуживание</p>
									</div>
								</div>
							</>
							<>
								{' '}
								<div className={scss.third_square}>
									<div className={scss.icon_creditcard_and_text}>
										<IconCreditCard />
										<p>Оплата любым удобным способом</p>
									</div>
								</div>
							</>
							<>
								{' '}
								<div className={scss.fourth_square}>
									<div className={scss.icon_hands_and_text}>
										<IconHands />
										<p>Оптовые продажи</p>
									</div>
								</div>
							</>
							<>
								{' '}
								<div className={scss.fifth_square}>
									<div className={scss.icon_bigcar_and_text}>
										<IconBigCar />
										<p>Доставка в любой регион Кыргызстана</p>
									</div>
								</div>
							</>
						</>
					)}
				</div>
			</div>
		</section>
	);
};
export default AboutService;
