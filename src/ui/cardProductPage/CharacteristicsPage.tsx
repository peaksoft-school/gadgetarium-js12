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
	const [DesignAndBody, setDesignAndBody] = useState<boolean>(false);
	const [Software, setSoftware] = useState<boolean>(false);
	const [Sound, setSound] = useState<boolean>(false);
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
								<p>2G сети:</p>

								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['2G сети']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>3G сети</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['3G сети']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>4G сети</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['4G сети']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>DisplayPort</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации.DisplayPort}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>GPS</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации.GPS}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>LTE Cat*</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['LTE Cat*']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>NFC*</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['NFC*']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Версия Bluetooth</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Версия Bluetooth']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Версия USB</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Версия USB']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Версия Wi-Fi</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Версия Wi-Fi']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Гибридный слот</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Гибридный слот']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Инфракрасный порт</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Инфракрасный порт']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Поддержка 5G</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Поддержка 5G']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Поддержка eSIM*</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Поддержка eSIM*']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип SIM</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Тип SIM']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип USB</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Тип USB']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Функции Bluetooth</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Функции Bluetooth']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Функции USB</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Функции USB']}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Функции Wi-Fi</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Коммуникации &&
										data?.mainCharacteristics.Коммуникации['Функции Wi-Fi']}
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
								<p>Bokeh:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Bokeh}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Preview</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Preview}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Zoom</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Zoom}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Автофокус</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Автофокус}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Апертура</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Апертура}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Вспышка</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Вспышка}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Запись 4K видео</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Запись 4K видео'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Запись 8K видео</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Запись 8K видео'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Запись 1080p видео</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Запись 1080p видео'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Зум</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Зум}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Количество объективов</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Количество объективов'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Матрица</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Матрица}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Особенности</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Особенности}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Примеры</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Примеры}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер пикселя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Размер пикселя'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер сенсора</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Размер сенсора'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Разрешение фото</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Разрешение фото'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Сенсор</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Сенсор}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Стабилизация</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'].Стабилизация}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Угол широкоугольного объектива</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Угол широкоугольного объектива'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Фокусное расстояние</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Основная камера'] &&
										data?.mainCharacteristics['Основная камера'][
											'Фокусное расстояние'
										]}
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
								<p>Беспроводная зарядка:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Беспроводная зарядка']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Быстрая зарядка</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Быстрая зарядка']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Веб-серфинг</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Веб-серфинг']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Время полной зарядки</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Время полной зарядки']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Игры</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея.Игры}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Макс. мощность зарядки</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Макс. мощность зарядки']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Объем</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея.Объем}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Просмотр видео</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Просмотр видео']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Реверсивная зарядка</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Реверсивная зарядка']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Режим ожидания</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Режим ожидания']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Съемный</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея.Съемный}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип аккумулятора</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Батарея &&
										data?.mainCharacteristics.Батарея['Тип аккумулятора']}
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
								<p>Дата выхода:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое['Дата выхода']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Дата начала продаж</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое['Дата начала продаж']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Зарядное устройство из коробки</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое[
											'Зарядное устройство из коробки'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Класс</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое.Класс}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Сенсоры и датчики</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое['Сенсоры и датчики']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Уровень излучения SAR для головы</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое[
											'Уровень излучения SAR для головы'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Уровень излучения SAR для тела</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Другое &&
										data?.mainCharacteristics.Другое[
											'Уровень излучения SAR для тела'
										]}
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
								<p>Адаптивная частота обновления:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран[
											'Адаптивная частота обновления'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Время отклика</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Время отклика']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Защита дисплея</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Защита дисплея']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Контрастность</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Контрастность}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Макс. заявленная яркость</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Макс. заявленная яркость']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Макс. заявленная яркость в HDR</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран[
											'Макс. заявленная яркость в HDR'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Особенности</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Особенности}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Плотность пикселей</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Плотность пикселей']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Поддержка HDR:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Поддержка HDR']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Размер}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Разрешение</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Разрешение}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Соотношение сторон</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Соотношение сторон']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Соотношение экрана к корпусу</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран[
											'Соотношение экрана к корпусу'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран.Тип}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Цветовой охват sRGB</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['Цветовой охват sRGB']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>ШИМ (PWM):</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Экран &&
										data?.mainCharacteristics.Экран['ШИМ (PWM)']}
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
								<p>Карта памяти:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Карта памяти']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Количество каналов</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Количество каналов']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Объем ОЗУ</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Объем ОЗУ']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Объем накопителя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Объем накопителя']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип накопителя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Тип накопителя']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип памяти</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Тип памяти']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Частота памяти</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Память &&
										data?.mainCharacteristics.Память['Частота памяти']}
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
								<p>CPU:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.CPU}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>CPU-ядер</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['CPU-ядер']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>FLOPS</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.FLOPS}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>GPU</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.GPU}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>GPU-ядер</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['GPU-ядер']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Graphics score</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Graphics score'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Graphics test</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Graphics test'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Memory</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.Memory}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Stability</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.Stability}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Total score</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['Total score']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>UX</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.UX}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Архитектура</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.Архитектура}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Графика</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.Графика}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Макс. частота</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Макс. частота'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Нейронный процессор</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Нейронный процессор'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Пиковая температура корпуса</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Пиковая температура корпуса'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Производство</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.Производство}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер транзистора</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность[
											'Размер транзистора'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Частота GPU</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность['Частота GPU']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Чипсет</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Производительность &&
										data?.mainCharacteristics.Производительность.Чипсет}
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
								<p>Автофокус</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'].Автофокус}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Апертура</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'].Апертура}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Датчик глубины (TOF 3D)</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'][
											'Датчик глубины (TOF 3D)'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Количество мегапикселей</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'][
											'Количество мегапикселей'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер пикселя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'][
											'Размер пикселя'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер сенсора</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'][
											'Размер сенсора'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Разрешение видео</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'][
											'Разрешение видео'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Разрешение фото</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'][
											'Разрешение фото'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Сенсор</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'].Сенсор}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Фокусное расстояние</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Фронтальная камера'] &&
										data?.mainCharacteristics['Фронтальная камера'][
											'Фокусное расстояние'
										]}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setDesignAndBody(!DesignAndBody)}
						className={scss.content_characteristics}
					>
						<h3>Дизайн и корпус</h3>
						<div
							className={
								DesignAndBody
									? `${scss.icon2} ${scss.iconActive2}`
									: `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{DesignAndBody && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Вес:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус'].Вес}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Водонепроницаемость</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус']
											.Водонепроницаемость}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Высота</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус'].Высота}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Доступные цвета</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус'][
											'Доступные цвета'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Материал задней панели</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус'][
											'Материал задней панели'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Материал рамки</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус'][
											'Материал рамки'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Сканер отпечатков пальцев</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус'][
											'Сканер отпечатков пальцев'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Толщина</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус'].Толщина}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Ширина</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Дизайн и корпус'] &&
										data?.mainCharacteristics['Дизайн и корпус'].Ширина}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setSoftware(!Software)}
						className={scss.content_characteristics}
					>
						<h3>Программное обеспечение</h3>
						<div
							className={
								Software ? `${scss.icon2} ${scss.iconActive2}` : `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{Software && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Операционная система:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Программное обеспечение'] &&
										data?.mainCharacteristics['Программное обеспечение'][
											'Операционная система'
										]}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Размер системы из коробки</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics['Программное обеспечение'] &&
										data?.mainCharacteristics['Программное обеспечение'][
											'Размер системы из коробки'
										]}
								</p>
							</div>
						</div>
					)}
					<div
						onClick={() => setSound(!Sound)}
						className={scss.content_characteristics}
					>
						<h3>Звук</h3>
						<div
							className={
								Sound ? `${scss.icon2} ${scss.iconActive2}` : `${scss.icon2}`
							}
						>
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{Sound && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>3.5 мм аудио порт:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Звук &&
										data?.mainCharacteristics.Звук['3.5 мм аудио порт']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Dolby Atmos</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Звук &&
										data?.mainCharacteristics.Звук['Dolby Atmos']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>FM-Радио</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Звук &&
										data?.mainCharacteristics.Звук['FM-Радио']}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Динамики</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.Звук &&
										data?.mainCharacteristics.Звук.Динамики}
								</p>
							</div>
						</div>
					)}
				</div>
			)}
		</section>
	);
};
