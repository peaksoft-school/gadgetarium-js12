/* eslint-disable @typescript-eslint/no-explicit-any */
import { useKeenSlider } from 'keen-slider/react';
import scss from './AboutSection.module.scss';
import React, { useState } from 'react';
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
		img: 'https://i.pinimg.com/564x/33/e6/64/33e6640340bcd0d21acfd49391b386b9.jpg'
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
						Главная » <h3>O магазине</h3>
					</p>
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
										onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
											e.stopPropagation();
											instanceRef.current?.prev();
										}}
									>
										<ButtonArrowLeft />
									</span>

									<span
										className={`${scss.arrow} ${scss.right}`}
										onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
											e.stopPropagation();
											instanceRef.current?.next();
										}}
									>
										<ButtonArrowRight />
									</span>
								</>
							)}
							<div className={scss.texts}>
								<h1>Магазин Gadgetarium </h1>
								<div className={scss.small_texts}>
									<ul>
										<li>
											&#8226; <strong>Широкий ассортимент продукции:</strong> У
											нас вы найдете телефоны, ноутбуки, умные часы и многое
											другое от ведущих мировых брендов.
										</li>
										<li>
											&#8226; <strong>Качественное обслуживание:</strong> Мы
											обеспечиваем полный послепродажный сервис, включая
											информационную и техническую поддержку.
										</li>
										<li>
											&#8226; <strong>Склад запчастей:</strong> Для обеспечения
											качественного сервиса и бесперебойной работы оборудования
											у нас всегда есть в наличии необходимые запчасти.
										</li>
										<li>
											&#8226; <strong>Партнерские отношения:</strong> Мы строго
											соблюдаем все обязательства перед нашими партнерами и
											предлагаем отличные цены и эксклюзивные условия для
											постоянных клиентов.
										</li>
										<li>
											&#8226; <strong>Команда экспертов: </strong>Наши
											сотрудники знают свое дело и ориентируются во всех нюансах
											работы с техническим оборудованием, всегда готовы помочь
											вам сделать правильный выбор.
										</li>
										<li>
											&#8226; <strong>Быстрая доставка:</strong> Мы обеспечиваем
											оперативную доставку по всей стране, чтобы вы могли как
											можно скорее наслаждаться покупкой.
										</li>
										<li>
											&#8226; <strong>Гарантия качества:</strong> Вся продукция
											проходит строгий контроль качества, чтобы вы могли быть
											уверены в надежности и долговечности приобретенного
											оборудования.
										</li>
										<li>
											&#8226;{' '}
											<strong>Постоянные обновления ассортимента:</strong> Мы
											регулярно обновляем наш каталог, добавляя новинки и следя
											за последними тенденциями в мире технологий.
										</li>
									</ul>
								</div>

								<div className={scss.success}>
									<h1>В чем причина нашего успеха?</h1>
									<li>
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
										Партнерские отношения: Мы понимаем, что успех Gadgetarium
										обусловлен не только вышеописанными преимуществами, но и
										нашим постоянным стремлением развиваться и улучшать наши
										услуги. Мы сегодня это поддерживаем активное взаимодействие
										с нашими партнерами, обмениваясь опытом и совершенствуя наш
										ассортимент. Это позволяет нам предлагать клиентам не только
										проверенные временем продукты, но и самые последние
										инновации в мире технологий. Наша цель — быть не просто
										магазином гаджетов, а вашим надежным партнером в выборе и
										поддержке современных технологий.
									</li>
								</div>
								<div className={scss.we_today}>
									<div className={scss.we_are_today}>
										<h1>Мы сегодня это:</h1>
										<li>
											Мы сегодня это не просто магазин гаджетов, а ключевой
											игрок на рынке технологий, который стремится предложить
											своим клиентам не только продукцию высокого качества, но и
											полноценный сервисный опыт. Наша команда — это сплоченная
											группа профессионалов, которые горят желанием делиться
											своими знаниями и помогать клиентам сделать правильный
											выбор. Мы постоянно расширяем наш ассортимент, чтобы быть
											на передовых позициях технологических инноваций и
											предложений. Наши партнерские отношения строятся на
											взаимном уважении и взаимовыгодных условиях, что позволяет
											нам предлагать конкурентные цены и эксклюзивные
											предложения для наших клиентов.
										</li>
										<br />
										<li>
											Мы также ценим долгосрочные отношения с нашими клиентами и
											стремимся быть их надежным партнером на каждом этапе их
											технологического путешествия. Благодаря нашему опыту и
											отзывчивости мы создаем удобную и приятную атмосферу для
											покупок, где каждый может найти идеальное решение для
											своих потребностей в мире современных технологий.
											Gadgetarium — это не просто магазин, это ваш надежный
											компаньон в мире инноваций и высоких технологий.
										</li>
									</div>
									<img src={map} alt="Map" />
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
