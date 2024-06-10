import { useKeenSlider } from 'keen-slider/react';
import scss from './AboutSection.module.scss';
import { useState } from 'react';
import ButtonArrowLeft from '@/src/ui/customButtons/ButtonArrowLeft';
import ButtonArrowRight from '@/src/ui/customButtons/ButtonArrowRight';
// import img from '@/src/assets/Rectangle 216.png';
import map from '@/src/assets/Group 1567.png';
import { useNavigate } from 'react-router-dom';

const data = [
	{
		id: 1,
		img: 'https://i.pinimg.com/564x/8d/e6/0c/8de60c21935df191d35ef1207221db0e.jpg'
	},
	{
		id: 2,
		img: 'https://i.pinimg.com/564x/33/e6/64/33e6640340bcd0d21acfd49391b386b9.jpg',
	},
	{
		id: 3,
		img: 'https://i.pinimg.com/564x/45/10/84/451084abcc7269e1d8cdb7202ded760b.jpg'
	},
	{
		id: 4,
		img: 'https://i.pinimg.com/564x/2b/c8/11/2bc81160a9f4f23d096271d3ba6d9dc2.jpg'
	},
	{
		id: 5,
		img: 'https://i.pinimg.com/564x/76/97/87/769787bfa2331f253f20eec32d3e95fe.jpg'
	},
	{
		id: 6,
		img: 'https://i.pinimg.com/564x/19/e4/22/19e42296f276680ee32bf9d5286ee727.jpg'
	},
	{
		id: 7,
		img: 'https://i.pinimg.com/564x/e3/1d/65/e31d65f1dc2808ef56eb176fc6316380.jpg'
	},
	{
		id: 8,
		img: 'https://i.pinimg.com/564x/35/eb/fe/35ebfe3591a869e0884388e884efcd66.jpg'
	}
];

const AboutSection = () => {
	const [loaded, setLoaded] = useState<boolean>(false);
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
											&#8226; <b>Широкий ассортимент продукции:</b> У нас вы
											найдете телефоны, ноутбуки, умные часы и многое другое от
											ведущих мировых брендов.
										</li>
										<li>
											&#8226; <b>Качественное обслуживание:</b> Мы обеспечиваем
											полный послепродажный сервис, включая информационную и
											техническую поддержку.
										</li>
										<li>
											&#8226; <b>Склад запчастей:</b> Для обеспечения
											качественного сервиса и бесперебойной работы оборудования
											у нас всегда есть в наличии необходимые запчасти.
										</li>
										<li>
											&#8226; <b>Партнерские отношения:</b> Мы строго соблюдаем
											все обязательства перед нашими партнерами и предлагаем
											отличные цены и эксклюзивные условия для постоянных
											клиентов.
										</li>
										<li>
											&#8226; <b>Команда экспертов: </b>Наши сотрудники знают
											свое дело и ориентируются во всех нюансах работы с
											техническим оборудованием, всегда готовы помочь вам
											сделать правильный выбор.
										</li>
										<li>
											&#8226; <b>Быстрая доставка:</b> Мы обеспечиваем
											оперативную доставку по всей стране, чтобы вы могли как
											можно скорее наслаждаться покупкой.
										</li>
										<li>
											&#8226; <b>Гарантия качества:</b> Вся продукция проходит
											строгий контроль качества, чтобы вы могли быть уверены в
											надежности и долговечности приобретенного оборудования.
										</li>
										<li>
											&#8226; <b>Постоянные обновления ассортимента:</b> Мы
											регулярно обновляем наш каталог, добавляя новинки и следя
											за последними тенденциями в мире технологий.
										</li>
										{/* <h3>
											Добро пожаловать в Gadgetarium – ваш лучший выбор для
											покупки современных гаджетов и техники!
										</h3> */}
									</ol>
								</div>

								<div className={scss.success}>
									<h1>В чем причина нашего успеха?</h1>
									<p>
										Профессиональная команда: Мы собрали слаженную команду
										экспертов, увлеченных своей работой. Наши сотрудники не
										только отлично разбираются в современных технологиях, но и
										готовы всегда помочь нашим клиентам, предложив оптимальные
										решения и квалифицированные консультации. <br />
										Широкий ассортимент: Мы предлагаем огромный выбор
										качественной продукции ведущих мировых брендов, включая
										телефоны, ноутбуки, умные часы и многое другое. Это
										позволяет нашим клиентам находить все необходимые гаджеты в
										одном месте. <br />
										Качественное обслуживание: Мы обеспечиваем полный
										послепродажный сервис, включая информационную и техническую
										поддержку. Наличие склада запчастей позволяет нам быстро
										решать любые возникшие проблемы и поддерживать бесперебойную
										работу оборудования. <br />
										Партнерские отношения: Мы строго соблюдаем все обязательства
										перед нашими партнерами и предлагаем отличные цены и
										эксклюзивные условия для постоянных клиентов. Это создает
										доверительные и долгосрочные отношения. <br />
										Гарантия качества: Вся наша продукция проходит строгий
										контроль качества, что обеспечивает надежность и
										долговечность приобретенных товаров. <br />
										Индивидуальный подход: Мы ценим каждого клиента и готовы
										предложить персонализированные условия и предложения,
										учитывая индивидуальные потребности и пожелания. <br />
										Постоянные обновления ассортимента: Мы следим за последними
										тенденциями в мире технологий и регулярно обновляем наш
										каталог новинками, чтобы наши клиенты всегда могли получить
										доступ к самым современным и инновационным продуктам. <br />
										Быстрая доставка: Мы обеспечиваем оперативную доставку по
										всей стране, чтобы наши клиенты могли как можно скорее
										наслаждаться покупкой.
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
	);
};

export default AboutSection;
