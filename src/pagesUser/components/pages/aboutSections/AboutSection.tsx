import { useKeenSlider } from 'keen-slider/react';
import scss from './AboutSection.module.scss';
import { useState } from 'react';
import ButtonArrowLeft from '@/src/ui/customButtons/ButtonArrowLeft';
import ButtonArrowRight from '@/src/ui/customButtons/ButtonArrowRight';
import img from '@/src/assets/Rectangle 216.png';
import map from '@/src/assets/Group 1567.png';
import { useNavigate } from 'react-router-dom';

const data = [
	{
		id: 1,
		img
	},
	{
		id: 2,
		img
	},
	{
		id: 3,
		img
	},
	{
		id: 4,
		img
	},
	{
		id: 5,
		img
	},
	{
		id: 6,
		img
	},
	{
		id: 7,
		img
	},
	{
		id: 8,
		img
	}
];

const AboutSection = () => {
	const [loaded, setLoaded] = useState<any>(false);
	const [isLoading] = useState(false);
	const navigate = useNavigate();
	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			//!slider
			loop: false,
			mode: 'free-snap',
			slides: {
				perView: 3,
				spacing: 6
			},
			breakpoints: {
				'(max-width: 1400px)': {
					slides: { perView: 3, spacing: 25 }
				},
				'(max-width: 1100px)': {
					slides: { perView: 2, spacing: 10 }
				},
				'(max-width: 1000px)': {
					slides: { perView: 2, spacing: 10 }
				},
				'(max-width: 900px)': {
					slides: { perView: 2, spacing: 10 }
				},
				'(max-width: 600px)': {
					slides: { perView: 1, spacing: 50 }
				}
			},

			//!navigation + buttons
			initial: 1,
			created() {
				setLoaded(true);
			}
		},

		//!auto play
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
					}, 5000);
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
		<div className={scss.AboutSection}>
			<div className="container">
				<div className={scss.content}>
					<p className={scss.p} onClick={() => navigate('/')}>
						Главная » <span>O магазине</span>
					</p>{' '}
					<h1>О магазине</h1>
					<span className={scss.hr}></span>
					{isLoading ? (
						<h1>Loading...</h1>
					) : (
						<>
							<div className={scss.all_divs}>
								<div ref={ref} className="keen-slider">
									{data.map((item, index) => (
										<div key={index} className="keen-slider__slide">
											<img src={item.img} alt="img" />
										</div>
									))}
								</div>
							</div>
							{loaded && instanceRef.current && (
								<>
									<span
										className={`${scss.arrow} ${scss.left} `}
										onClick={(e: any) =>
											e.stopPropagation() || instanceRef.current?.prev()
										}
									>
										<ButtonArrowLeft />
									</span>

									<span
										className={`${scss.arrow} ${scss.right}`}
										onClick={(e: any) =>
											e.stopPropagation() || instanceRef.current?.next()
										}
									>
										<ButtonArrowRight />
									</span>
								</>
							)}
							<div className={scss.texts}>
								<h1>Магазин Gadgetarium </h1>
								<div className={scss.small_texts}>
									<ol>
										<li>
											&#8226; слаженная команда людей, любящих спорт и здоровый
											образ жизни знающих свое дело и ориентирующихся во всех
											нюансах фитнес оборудования;
										</li>
										<li>
											&#8226; широкая номенклатура качественной продукции
											ведущих мировых брендов с огромным выбором товаров в
											наличии;
										</li>
										<li>
											&#8226; склад запчастей для обеспечения качественного
											сервиса и бесперебойной работы оборудования;
										</li>
										<li>
											&#8226; полный послепродажный сервис с информационной и
											технической поддержкой;
										</li>
										<li>
											&#8226; строгое соблюдение всех обязательств перед
											партнерами;
										</li>
										<li>
											&#8226; отличные цены и эксклюзивные условия для
											постоянных партнеров.
										</li>
									</ol>
								</div>

								<div className={scss.success}>
									<h1>В чем причина нашего успеха?</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Blanditiis esse eius commodi? Eum tempore culpa harum ea
										suscipit, nihil iusto dolorum officiis sunt beatae
										perspiciatis laudantium error fugit reprehenderit eligendi
										magnam ad blanditiis consequuntur quia distinctio quos.
										Totam deleniti quis nesciunt perspiciatis nostrum earum
										accusantium reprehenderit? Officiis ea quibusdam a deleniti
										maxime magni facilis quo alias nihil saepe. Iure id
										similique fuga, magnam optio aliquid quia nostrum maxime
										ullam unde.
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Blanditiis esse eius commodi? Eum tempore culpa harum ea
										suscipit, nihil iusto dolorum officiis sunt beatae
										perspiciatis laudantium error fugit reprehenderit eligendi
										magnam ad blanditiis consequuntur quia distinctio quos.
										Totam deleniti quis nesciunt perspiciatis nostrum earum
										accusantium reprehenderit? Officiis ea quibusdam a deleniti
										maxime magni facilis quo alias nihil saepe. Iure id
										similique fuga, magnam optio aliquid quia nostrum maxime
										ullam unde.
									</p>
								</div>
								<div className={scss.we_today}>
									<div className={scss.maps_texts}>
										<h1>Мы сегодня – это:</h1>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Amet amet est orci volutpat placerat maecenas egestas
											augue ac. Tortor, sed magnis interdum massa. Id phasellus
											lectus dui nisl. Adipiscing etiam vitae in semper sed eget
											nec aliquet aliquam.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Amet amet est orci volutpat placerat maecenas egestas
											augue ac. Tortor, sed magnis interdum massa. Id phasellus
											lectus dui nisl. Adipiscing etiam vitae in semper sed eget
											nec aliquet aliquam.
										</p>
									</div>

									<img src={map} alt="map" />
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default AboutSection;
