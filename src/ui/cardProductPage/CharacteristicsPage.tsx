/* eslint-disable @typescript-eslint/no-unused-vars */

import scss from './CharacteristicsPage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { useGetCharacteristicsProductQuery } from '@/src/redux/api/characteristicsAPI';
export const CharacteristicsPage = () => {
	const { productId } = useParams();
	const { data, isLoading } = useGetCharacteristicsProductQuery(productId!);
	const [characteristicsProduct, setCharacteristicsProduct] =
		useState<boolean>(true);
	const [memoryAndProcessor, setMemoryAndProcessor] = useState<boolean>(false);
	const [additionalFeatures, setAdditionalFeatures] = useState<boolean>(false);
	const [Other, setOther] = useState<boolean>(false);
	const [Screen, setScreen] = useState<boolean>(false);
	const [memory, setMemory] = useState<boolean>(false);
	const [Performance, setPerformance] = useState<boolean>(false);
	const [FrontCamera, setFrontCamera] = useState<boolean>(false);
	useEffect(() => {}, []);

	return (
		<section className={scss.CharacteristicsPage}>
			{isLoading ? (
				<h1>IsLoading...</h1>
			) : (
				<div className={scss.product_contents}>
					<div
						onClick={() => setCharacteristicsProduct(!characteristicsProduct)}
						className={scss.content_characteristics}
					>
						<h3>Коммуникации</h3>
						<div
							className={
								characteristicsProduct
									? `${scss.icon} ${scss.iconActive}`
									: `${scss.icon}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{characteristicsProduct && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Время полной зарядки:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации[
											'Время полной зарядки'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Быстрая зарядка</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Съемный</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации.Съемный}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Режим ожидания</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Режим ожидания']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Объем</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Объем']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Беспроводная зарядка</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации[
											'Беспроводная зарядка'
										]}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип аккумулятора</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Тип аккумулятора']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Просмотр видео</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Просмотр видео']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Игры</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Игры']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Макс. мощность зарядки</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации[
											'Макс. мощность зарядки'
										]}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Веб-серфинг</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Реверсивная зарядка</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации[
											'Реверсивная зарядка'
										]}
								</p>{' '}
							</div>
						</div>
					)}
					<div
						onClick={() => setMemoryAndProcessor(!memoryAndProcessor)}
						className={scss.content_characteristics}
					>
						<h3>Основная камера</h3>
						<div
							className={
								memoryAndProcessor
									? `${scss.icon} ${scss.iconActive}`
									: `${scss.icon}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{memoryAndProcessor && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Разрешение:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Разрешение}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Защита дисплея</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Защита дисплея'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Макс. заявленная яркость в HDR</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Макс. заявленная яркость в HDR'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Время отклика</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Время отклика'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Поддержка HDR</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Поддержка HDR'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Соотношение экрана к корпусу</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Соотношение экрана к корпусу'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Соотношение сторон</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Соотношение сторон'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Контрастность</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Контрастность'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Адаптивная частота обновления</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Адаптивная частота обновления'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Частота обновления</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Частота обновления'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера']['Тип']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера']['Размер']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>ШИМ (PWM)</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Макс. заявленная яркость</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Макс. заявленная яркость'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Особенности</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера']['Особенности']}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setAdditionalFeatures(!additionalFeatures)}
						className={scss.content_characteristics}
					>
						<h3>Батарея</h3>
						<div
							className={
								additionalFeatures
									? `${scss.icon2} ${scss.iconActive2}`
									: `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{additionalFeatures && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Сенсоры и датчики:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Дата начала продаж</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Дата начала продаж']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Уровень излучения SAR для головы</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея[
											'Уровень излучения SAR для головы'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Уровень излучения SAR для тела</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея[
											'Уровень излучения SAR для тела'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Класс</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Класс']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Дата выхода</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Дата выхода']}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setOther(!Other)}
						className={scss.content_characteristics}
					>
						<h3>Другое</h3>
						<div
							className={
								Other ? `${scss.icon2} ${scss.iconActive2}` : `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{Other && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Сканер отпечатков пальцев:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое[
											'Сканер отпечатков пальцев'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Толщина</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое.Толщина}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Вес</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое.Вес}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Доступные цвета</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое['Доступные цвета']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Водонепроницаемость</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое.Водонепроницаемость}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Материал рамки</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое['Материал рамки']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Высота</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое.Высота}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Материал задней панели</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое['Материал задней панели']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Ширина</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое.Ширина}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setScreen(!Screen)}
						className={scss.content_characteristics}
					>
						<h3>Экран</h3>
						<div
							className={
								Screen ? `${scss.icon2} ${scss.iconActive2}` : `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{Screen && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Разрешение фото:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Разрешение фото']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Датчик глубины (TOF 3D)</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Датчик глубины (TOF 3D)']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер сенсора</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Размер сенсора']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Автофокус</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Автофокус}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Количество мегапикселей</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Количество мегапикселей']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Сенсор</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Сенсор}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Photo</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Photo}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Стабилизация</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Стабилизация}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Разрешение видео</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Разрешение видео']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер пикселя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Размер пикселя']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Video</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Video}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Апертура</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Апертура}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Фокусное расстояние</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Фокусное расстояние']}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setMemory(!memory)}
						className={scss.content_characteristics}
					>
						<h3>Память</h3>
						<div
							className={
								memory ? `${scss.icon2} ${scss.iconActive2}` : `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{memory && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>GPU-ядер:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['GPU-ядер']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Total score</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Total score']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Чипсет</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.Чипсет}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Частота GPU</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Частота GPU']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>UX</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.UX}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Stability</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.Stability}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Graphics test</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Graphics test']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Memory</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.Memory}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>CPU</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.CPU}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Производство</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.Производство}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>GPU</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.GPU}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Архитектура</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.Архитектура}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер транзистора</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Размер транзистора']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Графика</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.Графика}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>FLOPS</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память.FLOPS}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Нейронный процессор</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Нейронный процессор']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>CPU-ядер</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['CPU-ядер']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Пиковая температура корпуса</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память[
											'Пиковая температура корпуса'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Макс. частота</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Макс. частота']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Graphics score</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Graphics score']}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setPerformance(!Performance)}
						className={scss.content_characteristics}
					>
						<h3>Производительность</h3>
						<div
							className={
								Performance
									? `${scss.icon2} ${scss.iconActive2}`
									: `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{Performance && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Версия Wi-Fi</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Версия Wi-Fi'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Функции USB</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['Функции USB']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Гибридный слот</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Гибридный слот'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>GPS</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.GPS}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Количество SIM*</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Количество SIM*'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Версия USB</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['Версия USB']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Поддержка eSIM*</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Поддержка eSIM*'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>LTE Cat*</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['LTE Cat*']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>2G сети</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['2G сети']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Инфракрасный порт</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Инфракрасный порт'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Поддержка 5G</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Поддержка 5G'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Версия Bluetooth</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Версия Bluetooth'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип SIM</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['Тип SIM']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>4G сети</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['4G сети']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Функции Wi-Fi</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Функции Wi-Fi'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Функции Bluetooth</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Функции Bluetooth'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>NFC*</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['NFC*']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>3G сети</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['3G сети']}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setFrontCamera(!FrontCamera)}
						className={scss.content_characteristics}
					>
						<h3>Фронтальная камера</h3>
						<div
							className={
								FrontCamera
									? `${scss.icon2} ${scss.iconActive2}`
									: `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{FrontCamera && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>FM-Радио</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера']['FM-Радио']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Dolby Atmos</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера']['Dolby Atmos']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Динамики</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'].Динамики}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>3.5 мм аудио порт</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера']['3.5 мм аудио порт']}
								</p>
							</div>
						</div>
					)}
				</div>
			)}
		</section>
	);
};
