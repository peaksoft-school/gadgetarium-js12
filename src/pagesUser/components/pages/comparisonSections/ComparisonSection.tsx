import { Link } from 'react-router-dom';
import scss from './ComparisonSection.module.scss';
import comparison from '@/src/assets/sammy_finance_1.png';
import phone from '@/src/assets/image_53.png';
import {
	IconBrand,
	IconColor,
	IconDelete,
	IconScales,
	IconScreen,
	IconSim,
	IconStorage,
	IconSystem
} from '@/src/assets/icons';
import AddBasketButton from '@/src/ui/customButtons/AddBasketButton';
import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import ButtonArrowLeft from '@/src/ui/customButtons/ButtonArrowLeft';
import ButtonArrowRight from '@/src/ui/customButtons/ButtonArrowRight';
const data = [
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'Apple',
		screen: '53" (2340×1080) IPS',
		color: 'Black',
		os: 'iOS',
		storage: '128GB',
		ram: '8GB',
		weight: '238g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'Samsung',
		screen: '53" (2340×1080) IPS',
		color: 'Phantom Black',
		os: 'Android',
		storage: '256GB',
		ram: '12GB',
		weight: '228g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'Google',
		screen: '53" (2340×1080) IPS',
		color: 'Stormy Black',
		os: 'Android',
		storage: '128GB',
		ram: '8GB',
		weight: '207g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'OnePlus',
		screen: '53" (2340×1080) IPS',
		color: 'Morning Mist',
		os: 'OxygenOS',
		storage: '256GB',
		ram: '12GB',
		weight: '206g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'Xiaomi',
		screen: '53" (2340×1080) IPS',
		color: 'Cosmic Black',
		os: 'MIUI',
		storage: '512GB',
		ram: '16GB',
		weight: '234g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'Huawei',
		screen: '53" (2340×1080) IPS',
		color: 'Golden Black',
		os: 'HarmonyOS',
		storage: '256GB',
		ram: '8GB',
		weight: '195g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'Sony',
		screen: '53" (2340×1080) IPS',
		color: 'Frosted Black',
		os: 'Android',
		storage: '256GB',
		ram: '12GB',
		weight: '187g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'LG',
		screen: '53" (2340×1080) IPS',
		color: 'Aurora Black',
		os: 'Android',
		storage: '256GB',
		ram: '8GB',
		weight: '204g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'Nokia',
		screen: '53" (2340×1080) IPS',
		color: 'Midnight Blue',
		os: 'Android One',
		storage: '128GB',
		ram: '8GB',
		weight: '210g',
		sim: '2 (nano SIM)'
	},
	{
		img: phone,
		title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
		price: 98910,
		brand: 'Motorola',
		screen: '53" (2340×1080) IPS',
		color: 'Solar Black',
		os: 'Android',
		storage: '256GB',
		ram: '12GB',
		weight: '215g',
		sim: '2 (nano SIM)'
	}
];

const ComparisonSection = () => {
	const onChange: CheckboxProps['onChange'] = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const [brand, setBrand] = useState<boolean>(false);
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
				'(min-width: 650px)': {
					slides: { perView: 2, spacing: 15 }
				},
				'(min-width: 1000px)': {
					slides: { perView: 3, spacing: 25 }
				},
				'(min-width: 1400px)': {
					slides: { perView: 6, spacing: 25 }
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

	useEffect(() => {
		const handleChange = () => {
			const result = window.innerWidth;
			if (result >= 900) {
				setBrand(true);
			} else {
				setBrand(false);
			}
		};
		handleChange();
		window.addEventListener('resize', handleChange);
		return () => {
			window.removeEventListener('resize', handleChange);
		};
	}, []);
	const [isBasket, setIsBasket] = useState(false);

	const handleBasketActive = () => {
		setIsBasket(!isBasket);
	};

	return (
		<div className={scss.ComparisonSection}>
			<div className="container">
				<div className={scss.content}>
					<h1>Сравнение товаров</h1>
					<span className={scss.hr}></span>
					{data?.length === 0 ? (
						<>
							<img
								className={scss.favorite_empty_img}
								src={comparison}
								alt="favorite"
							/>
							<div className={scss.text_after_img}>
								<h2>Сравнивать пока нечего</h2>
								<p>
									Добавляйте сюда товары, чтобы сравнить их характеристики.{' '}
									<br /> Так выбрать станет проще!
								</p>
								<Link to="/">
									<button>К покупкам</button>
								</Link>
							</div>
						</>
					) : (
						<>
							<div className={scss.second_content}>
								<div className={scss.three_buttons}>
									<button>Смартфоны(7)</button>
									<button>Ноутбуки (3) </button>
									<button>Наушники (1)</button>
								</div>
								<div className={scss.checkboxes}>
									<Checkbox onChange={onChange}>
										<p>Показывать только различия</p>
									</Checkbox>
									<div className={scss.cleaningText}>
										<IconDelete />
										<p>Очистить список</p>
									</div>
								</div>
								<>
									<div className={scss.all_blocks}>
										<div className={scss.first_block}>
											<div className={scss.second_half_block}>
												{!brand ? (
													<>
														<div className={scss.icons}>
															<IconBrand />
															<IconScreen />
															<IconColor />
															<IconSystem />
															<IconStorage />
															<IconStorage />
															<IconScales />
															<IconSim />
														</div>
													</>
												) : (
													<>
														<p>Бренд</p>
														<p>Экран</p>
														<p>Цвет</p>
														<p>Операционная система</p>
														<p>Память</p>
														<p>Оперативная память</p>
														<p>Вес</p>
														<p>SIM-карты</p>
													</>
												)}
											</div>
										</div>
										<div ref={ref} className="keen-slider">
											{data.map((item, index) => (
												<div key={index} className="keen-slider__slide">
													<div className={scss.slider_block}>
														<div className={scss.card}>
															<button className={scss.delete_button}>
																<IconDelete />
															</button>
															<img src={item.img} alt="img" />
															<p className={scss.charackter}>{item.title}</p>
															<p className={scss.charackter_price}>
																{item.price} c
															</p>
															<AddBasketButton
																onClick={handleBasketActive}
																children={isBasket ? `В корзине` : `В корзину`}
																className={
																	isBasket
																		? `${scss.add_bas_button} ${scss.active}`
																		: `${scss.add_bas_button}`
																}
															/>
														</div>
														<div className={scss.table_div}>
															<p>{item.brand}</p>
															<p>{item.screen}</p>
															<p>{item.color}</p>
															<p>{item.os}</p>
															<p>{item.storage}</p>
															<p>{item.ram}</p>
															<p>{item.weight}</p>
															<p>{item.sim}</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</>
							</div>
						</>
					)}
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
				</div>
			</div>
		</div>
	);
};

export default ComparisonSection;
