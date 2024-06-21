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
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics.Другое[
								'Сканер отпечатков пальцев'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Сканер отпечатков пальцев:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Сканер отпечатков пальцев'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Толщина && (
								<div className={scss.product_info_text_main}>
									<p>Толщина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Толщина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Вес && (
								<div className={scss.product_info_text_main}>
									<p>Вес</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Вес}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Доступные цвета'] && (
								<div className={scss.product_info_text_main}>
									<p>Доступные цвета</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Доступные цвета']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Водонепроницаемость && (
								<div className={scss.product_info_text_main}>
									<p>Водонепроницаемость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Водонепроницаемость}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал рамки'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал рамки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Материал рамки']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Высота && (
								<div className={scss.product_info_text_main}>
									<p>Высота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Высота}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал задней панели'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал задней панели</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Материал задней панели'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Ширина && (
								<div className={scss.product_info_text_main}>
									<p>Ширина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Ширина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics.Экран['Разрешение фото'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение фото:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение фото']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Датчик глубины (TOF 3D)'] && (
								<div className={scss.product_info_text_main}>
									<p>Датчик глубины (TOF 3D)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Датчик глубины (TOF 3D)'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер сенсора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер сенсора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер сенсора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Автофокус && (
								<div className={scss.product_info_text_main}>
									<p>Автофокус</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Автофокус}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Количество мегапикселей'] && (
								<div className={scss.product_info_text_main}>
									<p>Количество мегапикселей</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Количество мегапикселей'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Сенсор && (
								<div className={scss.product_info_text_main}>
									<p>Сенсор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Сенсор}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Photo && (
								<div className={scss.product_info_text_main}>
									<p>Photo</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Photo}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Стабилизация && (
								<div className={scss.product_info_text_main}>
									<p>Стабилизация</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Стабилизация}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение видео']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер пикселя'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер пикселя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер пикселя']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Video && (
								<div className={scss.product_info_text_main}>
									<p>Video</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Video}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Апертура && (
								<div className={scss.product_info_text_main}>
									<p>Апертура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Апертура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Фокусное расстояние'] && (
								<div className={scss.product_info_text_main}>
									<p>Фокусное расстояние</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Фокусное расстояние']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое[
								'Сканер отпечатков пальцев'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Сканер отпечатков пальцев:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Сканер отпечатков пальцев'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Толщина && (
								<div className={scss.product_info_text_main}>
									<p>Толщина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Толщина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Вес && (
								<div className={scss.product_info_text_main}>
									<p>Вес</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Вес}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Доступные цвета'] && (
								<div className={scss.product_info_text_main}>
									<p>Доступные цвета</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Доступные цвета']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Водонепроницаемость && (
								<div className={scss.product_info_text_main}>
									<p>Водонепроницаемость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Водонепроницаемость}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал рамки'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал рамки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Материал рамки']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Высота && (
								<div className={scss.product_info_text_main}>
									<p>Высота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Высота}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал задней панели'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал задней панели</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Материал задней панели'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Ширина && (
								<div className={scss.product_info_text_main}>
									<p>Ширина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Ширина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics.Память['GPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>GPU-ядер:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['GPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Total score'] && (
								<div className={scss.product_info_text_main}>
									<p>Total score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Total score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Чипсет && (
								<div className={scss.product_info_text_main}>
									<p>Чипсет</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Чипсет}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Частота GPU'] && (
								<div className={scss.product_info_text_main}>
									<p>Частота GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Частота GPU']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.UX && (
								<div className={scss.product_info_text_main}>
									<p>UX</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.UX}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Stability && (
								<div className={scss.product_info_text_main}>
									<p>Stability</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Stability}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics test'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics test</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics test']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Memory && (
								<div className={scss.product_info_text_main}>
									<p>Memory</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Memory}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.CPU && (
								<div className={scss.product_info_text_main}>
									<p>CPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.CPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Производство && (
								<div className={scss.product_info_text_main}>
									<p>Производство</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Производство}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.GPU && (
								<div className={scss.product_info_text_main}>
									<p>GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.GPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Архитектура && (
								<div className={scss.product_info_text_main}>
									<p>Архитектура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Архитектура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Размер транзистора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер транзистора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Размер транзистора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Графика && (
								<div className={scss.product_info_text_main}>
									<p>Графика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Графика}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.FLOPS && (
								<div className={scss.product_info_text_main}>
									<p>FLOPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.FLOPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Нейронный процессор'] && (
								<div className={scss.product_info_text_main}>
									<p>Нейронный процессор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Нейронный процессор']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['CPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>CPU-ядер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['CPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память[
								'Пиковая температура корпуса'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Пиковая температура корпуса</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память[
												'Пиковая температура корпуса'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Макс. частота'] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. частота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Макс. частота']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics score'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение фото'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение фото:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение фото']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Датчик глубины (TOF 3D)'] && (
								<div className={scss.product_info_text_main}>
									<p>Датчик глубины (TOF 3D)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Датчик глубины (TOF 3D)'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер сенсора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер сенсора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер сенсора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Автофокус && (
								<div className={scss.product_info_text_main}>
									<p>Автофокус</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Автофокус}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Количество мегапикселей'] && (
								<div className={scss.product_info_text_main}>
									<p>Количество мегапикселей</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Количество мегапикселей'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Сенсор && (
								<div className={scss.product_info_text_main}>
									<p>Сенсор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Сенсор}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Photo && (
								<div className={scss.product_info_text_main}>
									<p>Photo</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Photo}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Стабилизация && (
								<div className={scss.product_info_text_main}>
									<p>Стабилизация</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Стабилизация}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение видео']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер пикселя'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер пикселя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер пикселя']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Video && (
								<div className={scss.product_info_text_main}>
									<p>Video</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Video}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Апертура && (
								<div className={scss.product_info_text_main}>
									<p>Апертура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Апертура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Фокусное расстояние'] && (
								<div className={scss.product_info_text_main}>
									<p>Фокусное расстояние</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Фокусное расстояние']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое[
								'Сканер отпечатков пальцев'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Сканер отпечатков пальцев:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Сканер отпечатков пальцев'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Толщина && (
								<div className={scss.product_info_text_main}>
									<p>Толщина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Толщина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Вес && (
								<div className={scss.product_info_text_main}>
									<p>Вес</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Вес}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Доступные цвета'] && (
								<div className={scss.product_info_text_main}>
									<p>Доступные цвета</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Доступные цвета']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Водонепроницаемость && (
								<div className={scss.product_info_text_main}>
									<p>Водонепроницаемость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Водонепроницаемость}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал рамки'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал рамки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Материал рамки']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Высота && (
								<div className={scss.product_info_text_main}>
									<p>Высота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Высота}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал задней панели'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал задней панели</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Материал задней панели'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Ширина && (
								<div className={scss.product_info_text_main}>
									<p>Ширина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Ширина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics.Производительность['Версия Wi-Fi'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Функции USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Функции USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Гибридный слот'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Гибридный слот</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Гибридный слот'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность.GPS && (
								<div className={scss.product_info_text_main}>
									<p>GPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность.GPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Количество SIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Количество SIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Количество SIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Поддержка eSIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка eSIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка eSIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['LTE Cat*'] && (
								<div className={scss.product_info_text_main}>
									<p>LTE Cat*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['LTE Cat*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['2G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>2G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['2G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Инфракрасный порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Инфракрасный порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Инфракрасный порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Поддержка 5G'] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка 5G</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка 5G'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Версия Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Тип SIM'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип SIM</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['Тип SIM']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['4G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>4G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['4G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Wi-Fi'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['NFC*'] && (
								<div className={scss.product_info_text_main}>
									<p>NFC*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['NFC*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['3G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>3G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['3G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['GPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>GPU-ядер:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['GPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Total score'] && (
								<div className={scss.product_info_text_main}>
									<p>Total score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Total score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Чипсет && (
								<div className={scss.product_info_text_main}>
									<p>Чипсет</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Чипсет}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Частота GPU'] && (
								<div className={scss.product_info_text_main}>
									<p>Частота GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Частота GPU']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.UX && (
								<div className={scss.product_info_text_main}>
									<p>UX</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.UX}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Stability && (
								<div className={scss.product_info_text_main}>
									<p>Stability</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Stability}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics test'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics test</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics test']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Memory && (
								<div className={scss.product_info_text_main}>
									<p>Memory</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Memory}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.CPU && (
								<div className={scss.product_info_text_main}>
									<p>CPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.CPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Производство && (
								<div className={scss.product_info_text_main}>
									<p>Производство</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Производство}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.GPU && (
								<div className={scss.product_info_text_main}>
									<p>GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.GPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Архитектура && (
								<div className={scss.product_info_text_main}>
									<p>Архитектура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Архитектура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Размер транзистора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер транзистора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Размер транзистора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Графика && (
								<div className={scss.product_info_text_main}>
									<p>Графика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Графика}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.FLOPS && (
								<div className={scss.product_info_text_main}>
									<p>FLOPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.FLOPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Нейронный процессор'] && (
								<div className={scss.product_info_text_main}>
									<p>Нейронный процессор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Нейронный процессор']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['CPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>CPU-ядер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['CPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память[
								'Пиковая температура корпуса'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Пиковая температура корпуса</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память[
												'Пиковая температура корпуса'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Макс. частота'] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. частота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Макс. частота']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics score'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение фото'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение фото:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение фото']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Датчик глубины (TOF 3D)'] && (
								<div className={scss.product_info_text_main}>
									<p>Датчик глубины (TOF 3D)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Датчик глубины (TOF 3D)'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер сенсора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер сенсора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер сенсора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Автофокус && (
								<div className={scss.product_info_text_main}>
									<p>Автофокус</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Автофокус}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Количество мегапикселей'] && (
								<div className={scss.product_info_text_main}>
									<p>Количество мегапикселей</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Количество мегапикселей'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Сенсор && (
								<div className={scss.product_info_text_main}>
									<p>Сенсор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Сенсор}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Photo && (
								<div className={scss.product_info_text_main}>
									<p>Photo</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Photo}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Стабилизация && (
								<div className={scss.product_info_text_main}>
									<p>Стабилизация</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Стабилизация}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение видео']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер пикселя'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер пикселя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер пикселя']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Video && (
								<div className={scss.product_info_text_main}>
									<p>Video</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Video}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Апертура && (
								<div className={scss.product_info_text_main}>
									<p>Апертура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Апертура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Фокусное расстояние'] && (
								<div className={scss.product_info_text_main}>
									<p>Фокусное расстояние</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Фокусное расстояние']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое[
								'Сканер отпечатков пальцев'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Сканер отпечатков пальцев:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Сканер отпечатков пальцев'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Толщина && (
								<div className={scss.product_info_text_main}>
									<p>Толщина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Толщина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Вес && (
								<div className={scss.product_info_text_main}>
									<p>Вес</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Вес}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Доступные цвета'] && (
								<div className={scss.product_info_text_main}>
									<p>Доступные цвета</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Доступные цвета']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Водонепроницаемость && (
								<div className={scss.product_info_text_main}>
									<p>Водонепроницаемость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Водонепроницаемость}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал рамки'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал рамки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Материал рамки']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Высота && (
								<div className={scss.product_info_text_main}>
									<p>Высота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Высота}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал задней панели'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал задней панели</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Материал задней панели'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Ширина && (
								<div className={scss.product_info_text_main}>
									<p>Ширина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Ширина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics['Фронтальная камера']['FM-Радио'] && (
								<div className={scss.product_info_text_main}>
									<p>FM-Радио</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'FM-Радио'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'][
								'Dolby Atmos'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Dolby Atmos</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'Dolby Atmos'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'].Динамики && (
								<div className={scss.product_info_text_main}>
									<p>Динамики</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'].Динамики}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'][
								'3.5 мм аудио порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>3.5 мм аудио порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'3.5 мм аудио порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия Wi-Fi'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Функции USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Функции USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Гибридный слот'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Гибридный слот</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Гибридный слот'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность.GPS && (
								<div className={scss.product_info_text_main}>
									<p>GPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность.GPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Количество SIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Количество SIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Количество SIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Поддержка eSIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка eSIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка eSIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['LTE Cat*'] && (
								<div className={scss.product_info_text_main}>
									<p>LTE Cat*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['LTE Cat*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['2G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>2G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['2G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Инфракрасный порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Инфракрасный порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Инфракрасный порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Поддержка 5G'] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка 5G</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка 5G'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Версия Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Тип SIM'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип SIM</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['Тип SIM']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['4G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>4G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['4G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Wi-Fi'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['NFC*'] && (
								<div className={scss.product_info_text_main}>
									<p>NFC*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['NFC*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['3G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>3G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['3G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['GPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>GPU-ядер:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['GPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Total score'] && (
								<div className={scss.product_info_text_main}>
									<p>Total score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Total score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Чипсет && (
								<div className={scss.product_info_text_main}>
									<p>Чипсет</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Чипсет}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Частота GPU'] && (
								<div className={scss.product_info_text_main}>
									<p>Частота GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Частота GPU']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.UX && (
								<div className={scss.product_info_text_main}>
									<p>UX</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.UX}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Stability && (
								<div className={scss.product_info_text_main}>
									<p>Stability</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Stability}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics test'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics test</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics test']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Memory && (
								<div className={scss.product_info_text_main}>
									<p>Memory</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Memory}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.CPU && (
								<div className={scss.product_info_text_main}>
									<p>CPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.CPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Производство && (
								<div className={scss.product_info_text_main}>
									<p>Производство</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Производство}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.GPU && (
								<div className={scss.product_info_text_main}>
									<p>GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.GPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Архитектура && (
								<div className={scss.product_info_text_main}>
									<p>Архитектура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Архитектура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Размер транзистора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер транзистора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Размер транзистора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Графика && (
								<div className={scss.product_info_text_main}>
									<p>Графика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Графика}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.FLOPS && (
								<div className={scss.product_info_text_main}>
									<p>FLOPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.FLOPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Нейронный процессор'] && (
								<div className={scss.product_info_text_main}>
									<p>Нейронный процессор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Нейронный процессор']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['CPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>CPU-ядер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['CPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память[
								'Пиковая температура корпуса'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Пиковая температура корпуса</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память[
												'Пиковая температура корпуса'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Макс. частота'] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. частота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Макс. частота']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics score'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение фото'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение фото:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение фото']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Датчик глубины (TOF 3D)'] && (
								<div className={scss.product_info_text_main}>
									<p>Датчик глубины (TOF 3D)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Датчик глубины (TOF 3D)'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер сенсора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер сенсора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер сенсора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Автофокус && (
								<div className={scss.product_info_text_main}>
									<p>Автофокус</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Автофокус}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Количество мегапикселей'] && (
								<div className={scss.product_info_text_main}>
									<p>Количество мегапикселей</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Количество мегапикселей'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Сенсор && (
								<div className={scss.product_info_text_main}>
									<p>Сенсор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Сенсор}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Photo && (
								<div className={scss.product_info_text_main}>
									<p>Photo</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Photo}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Стабилизация && (
								<div className={scss.product_info_text_main}>
									<p>Стабилизация</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Стабилизация}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение видео']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер пикселя'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер пикселя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер пикселя']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Video && (
								<div className={scss.product_info_text_main}>
									<p>Video</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Video}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Апертура && (
								<div className={scss.product_info_text_main}>
									<p>Апертура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Апертура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Фокусное расстояние'] && (
								<div className={scss.product_info_text_main}>
									<p>Фокусное расстояние</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Фокусное расстояние']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое[
								'Сканер отпечатков пальцев'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Сканер отпечатков пальцев:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Сканер отпечатков пальцев'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Толщина && (
								<div className={scss.product_info_text_main}>
									<p>Толщина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Толщина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Вес && (
								<div className={scss.product_info_text_main}>
									<p>Вес</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Вес}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Доступные цвета'] && (
								<div className={scss.product_info_text_main}>
									<p>Доступные цвета</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Доступные цвета']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Водонепроницаемость && (
								<div className={scss.product_info_text_main}>
									<p>Водонепроницаемость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Водонепроницаемость}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал рамки'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал рамки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Материал рамки']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Высота && (
								<div className={scss.product_info_text_main}>
									<p>Высота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Высота}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал задней панели'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал задней панели</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Материал задней панели'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Ширина && (
								<div className={scss.product_info_text_main}>
									<p>Ширина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Ширина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics['Дизайн и корпус'][
								'Операционная система'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Операционная система:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Дизайн и корпус'] &&
											data?.mainCharacteristics['Дизайн и корпус'][
												'Операционная система'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Дизайн и корпус'][
								'Размер системы из коробки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Размер системы из коробки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Дизайн и корпус'] &&
											data?.mainCharacteristics['Дизайн и корпус'][
												'Размер системы из коробки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера']['FM-Радио'] && (
								<div className={scss.product_info_text_main}>
									<p>FM-Радио</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'FM-Радио'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'][
								'Dolby Atmos'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Dolby Atmos</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'Dolby Atmos'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'].Динамики && (
								<div className={scss.product_info_text_main}>
									<p>Динамики</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'].Динамики}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'][
								'3.5 мм аудио порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>3.5 мм аудио порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'3.5 мм аудио порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия Wi-Fi'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Функции USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Функции USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Гибридный слот'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Гибридный слот</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Гибридный слот'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность.GPS && (
								<div className={scss.product_info_text_main}>
									<p>GPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность.GPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Количество SIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Количество SIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Количество SIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Поддержка eSIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка eSIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка eSIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['LTE Cat*'] && (
								<div className={scss.product_info_text_main}>
									<p>LTE Cat*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['LTE Cat*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['2G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>2G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['2G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Инфракрасный порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Инфракрасный порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Инфракрасный порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Поддержка 5G'] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка 5G</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка 5G'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Версия Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Тип SIM'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип SIM</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['Тип SIM']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['4G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>4G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['4G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Wi-Fi'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['NFC*'] && (
								<div className={scss.product_info_text_main}>
									<p>NFC*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['NFC*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['3G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>3G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['3G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['GPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>GPU-ядер:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['GPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Total score'] && (
								<div className={scss.product_info_text_main}>
									<p>Total score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Total score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Чипсет && (
								<div className={scss.product_info_text_main}>
									<p>Чипсет</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Чипсет}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Частота GPU'] && (
								<div className={scss.product_info_text_main}>
									<p>Частота GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Частота GPU']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.UX && (
								<div className={scss.product_info_text_main}>
									<p>UX</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.UX}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Stability && (
								<div className={scss.product_info_text_main}>
									<p>Stability</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Stability}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics test'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics test</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics test']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Memory && (
								<div className={scss.product_info_text_main}>
									<p>Memory</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Memory}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.CPU && (
								<div className={scss.product_info_text_main}>
									<p>CPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.CPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Производство && (
								<div className={scss.product_info_text_main}>
									<p>Производство</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Производство}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.GPU && (
								<div className={scss.product_info_text_main}>
									<p>GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.GPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Архитектура && (
								<div className={scss.product_info_text_main}>
									<p>Архитектура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Архитектура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Размер транзистора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер транзистора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Размер транзистора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Графика && (
								<div className={scss.product_info_text_main}>
									<p>Графика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Графика}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.FLOPS && (
								<div className={scss.product_info_text_main}>
									<p>FLOPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.FLOPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Нейронный процессор'] && (
								<div className={scss.product_info_text_main}>
									<p>Нейронный процессор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Нейронный процессор']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['CPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>CPU-ядер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['CPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память[
								'Пиковая температура корпуса'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Пиковая температура корпуса</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память[
												'Пиковая температура корпуса'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Макс. частота'] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. частота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Макс. частота']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics score'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение фото'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение фото:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение фото']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Датчик глубины (TOF 3D)'] && (
								<div className={scss.product_info_text_main}>
									<p>Датчик глубины (TOF 3D)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Датчик глубины (TOF 3D)'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер сенсора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер сенсора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер сенсора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Автофокус && (
								<div className={scss.product_info_text_main}>
									<p>Автофокус</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Автофокус}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Количество мегапикселей'] && (
								<div className={scss.product_info_text_main}>
									<p>Количество мегапикселей</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Количество мегапикселей'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Сенсор && (
								<div className={scss.product_info_text_main}>
									<p>Сенсор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Сенсор}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Photo && (
								<div className={scss.product_info_text_main}>
									<p>Photo</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Photo}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Стабилизация && (
								<div className={scss.product_info_text_main}>
									<p>Стабилизация</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Стабилизация}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение видео']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер пикселя'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер пикселя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер пикселя']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Video && (
								<div className={scss.product_info_text_main}>
									<p>Video</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Video}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Апертура && (
								<div className={scss.product_info_text_main}>
									<p>Апертура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Апертура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Фокусное расстояние'] && (
								<div className={scss.product_info_text_main}>
									<p>Фокусное расстояние</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Фокусное расстояние']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое[
								'Сканер отпечатков пальцев'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Сканер отпечатков пальцев:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Сканер отпечатков пальцев'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Толщина && (
								<div className={scss.product_info_text_main}>
									<p>Толщина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Толщина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Вес && (
								<div className={scss.product_info_text_main}>
									<p>Вес</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Вес}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Доступные цвета'] && (
								<div className={scss.product_info_text_main}>
									<p>Доступные цвета</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Доступные цвета']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Водонепроницаемость && (
								<div className={scss.product_info_text_main}>
									<p>Водонепроницаемость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Водонепроницаемость}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал рамки'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал рамки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Материал рамки']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Высота && (
								<div className={scss.product_info_text_main}>
									<p>Высота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Высота}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал задней панели'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал задней панели</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Материал задней панели'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Ширина && (
								<div className={scss.product_info_text_main}>
									<p>Ширина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Ширина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics['Программное обеспечение'][
								'Тип памяти'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Тип памяти:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Тип памяти'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Карта памяти'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Карта памяти</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Карта памяти'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Частота памяти'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота памяти</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Частота памяти'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Тип накопителя'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Тип накопителя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Тип накопителя'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Объем ОЗУ'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Объем ОЗУ</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Объем ОЗУ'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Количество каналов'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Количество каналов</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Количество каналов'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Объем накопителя'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Объем накопителя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Объем накопителя'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Дизайн и корпус'][
								'Операционная система'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Операционная система:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Дизайн и корпус'] &&
											data?.mainCharacteristics['Дизайн и корпус'][
												'Операционная система'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Дизайн и корпус'][
								'Размер системы из коробки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Размер системы из коробки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Дизайн и корпус'] &&
											data?.mainCharacteristics['Дизайн и корпус'][
												'Размер системы из коробки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера']['FM-Радио'] && (
								<div className={scss.product_info_text_main}>
									<p>FM-Радио</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'FM-Радио'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'][
								'Dolby Atmos'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Dolby Atmos</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'Dolby Atmos'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'].Динамики && (
								<div className={scss.product_info_text_main}>
									<p>Динамики</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'].Динамики}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'][
								'3.5 мм аудио порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>3.5 мм аудио порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'3.5 мм аудио порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия Wi-Fi'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Функции USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Функции USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Гибридный слот'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Гибридный слот</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Гибридный слот'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность.GPS && (
								<div className={scss.product_info_text_main}>
									<p>GPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность.GPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Количество SIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Количество SIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Количество SIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Поддержка eSIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка eSIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка eSIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['LTE Cat*'] && (
								<div className={scss.product_info_text_main}>
									<p>LTE Cat*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['LTE Cat*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['2G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>2G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['2G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Инфракрасный порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Инфракрасный порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Инфракрасный порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Поддержка 5G'] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка 5G</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка 5G'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Версия Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Тип SIM'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип SIM</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['Тип SIM']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['4G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>4G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['4G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Wi-Fi'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['NFC*'] && (
								<div className={scss.product_info_text_main}>
									<p>NFC*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['NFC*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['3G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>3G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['3G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['GPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>GPU-ядер:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['GPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Total score'] && (
								<div className={scss.product_info_text_main}>
									<p>Total score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Total score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Чипсет && (
								<div className={scss.product_info_text_main}>
									<p>Чипсет</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Чипсет}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Частота GPU'] && (
								<div className={scss.product_info_text_main}>
									<p>Частота GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Частота GPU']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.UX && (
								<div className={scss.product_info_text_main}>
									<p>UX</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.UX}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Stability && (
								<div className={scss.product_info_text_main}>
									<p>Stability</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Stability}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics test'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics test</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics test']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Memory && (
								<div className={scss.product_info_text_main}>
									<p>Memory</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Memory}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.CPU && (
								<div className={scss.product_info_text_main}>
									<p>CPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.CPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Производство && (
								<div className={scss.product_info_text_main}>
									<p>Производство</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Производство}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.GPU && (
								<div className={scss.product_info_text_main}>
									<p>GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.GPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Архитектура && (
								<div className={scss.product_info_text_main}>
									<p>Архитектура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Архитектура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Размер транзистора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер транзистора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Размер транзистора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Графика && (
								<div className={scss.product_info_text_main}>
									<p>Графика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Графика}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.FLOPS && (
								<div className={scss.product_info_text_main}>
									<p>FLOPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.FLOPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Нейронный процессор'] && (
								<div className={scss.product_info_text_main}>
									<p>Нейронный процессор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Нейронный процессор']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['CPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>CPU-ядер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['CPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память[
								'Пиковая температура корпуса'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Пиковая температура корпуса</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память[
												'Пиковая температура корпуса'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Макс. частота'] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. частота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Макс. частота']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics score'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение фото'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение фото:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение фото']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Датчик глубины (TOF 3D)'] && (
								<div className={scss.product_info_text_main}>
									<p>Датчик глубины (TOF 3D)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Датчик глубины (TOF 3D)'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер сенсора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер сенсора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер сенсора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Автофокус && (
								<div className={scss.product_info_text_main}>
									<p>Автофокус</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Автофокус}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Количество мегапикселей'] && (
								<div className={scss.product_info_text_main}>
									<p>Количество мегапикселей</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Количество мегапикселей'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Сенсор && (
								<div className={scss.product_info_text_main}>
									<p>Сенсор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Сенсор}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Photo && (
								<div className={scss.product_info_text_main}>
									<p>Photo</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Photo}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Стабилизация && (
								<div className={scss.product_info_text_main}>
									<p>Стабилизация</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Стабилизация}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение видео']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер пикселя'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер пикселя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер пикселя']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Video && (
								<div className={scss.product_info_text_main}>
									<p>Video</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Video}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Апертура && (
								<div className={scss.product_info_text_main}>
									<p>Апертура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Апертура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Фокусное расстояние'] && (
								<div className={scss.product_info_text_main}>
									<p>Фокусное расстояние</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Фокусное расстояние']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое[
								'Сканер отпечатков пальцев'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Сканер отпечатков пальцев:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Сканер отпечатков пальцев'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Толщина && (
								<div className={scss.product_info_text_main}>
									<p>Толщина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Толщина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Вес && (
								<div className={scss.product_info_text_main}>
									<p>Вес</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Вес}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Доступные цвета'] && (
								<div className={scss.product_info_text_main}>
									<p>Доступные цвета</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Доступные цвета']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Водонепроницаемость && (
								<div className={scss.product_info_text_main}>
									<p>Водонепроницаемость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Водонепроницаемость}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал рамки'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал рамки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Материал рамки']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Высота && (
								<div className={scss.product_info_text_main}>
									<p>Высота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Высота}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал задней панели'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал задней панели</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Материал задней панели'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Ширина && (
								<div className={scss.product_info_text_main}>
									<p>Ширина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Ширина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
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
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Разрешение фото'] && (
									<div className={scss.product_info_text_main}>
										<p>Разрешение фото:</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Разрешение фото']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Запись 8K видео'] && (
									<div className={scss.product_info_text_main}>
										<p>Запись 8K видео</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Запись 8K видео']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук[
									'Угол широкоугольного объектива'
								] && (
									<div className={scss.product_info_text_main}>
										<p>Угол широкоугольного объектива</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук[
													'Угол широкоугольного объектива'
												]}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Количество объективов'] && (
									<div className={scss.product_info_text_main}>
										<p>Количество объективов</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Количество объективов']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Автофокус && (
									<div className={scss.product_info_text_main}>
										<p>Автофокус</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Автофокус}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Размер сенсора'] && (
									<div className={scss.product_info_text_main}>
										<p>Размер сенсора</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Размер сенсора']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Сенсор && (
									<div className={scss.product_info_text_main}>
										<p>Сенсор</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Сенсор}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Вспышка && (
									<div className={scss.product_info_text_main}>
										<p>Вспышка</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Вспышка}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Preview && (
									<div className={scss.product_info_text_main}>
										<p>Preview</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Preview}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Примеры && (
									<div className={scss.product_info_text_main}>
										<p>Примеры</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Примеры}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Стабилизация && (
									<div className={scss.product_info_text_main}>
										<p>Стабилизация</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Стабилизация}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Матрица && (
									<div className={scss.product_info_text_main}>
										<p>Матрица</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Матрица}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Замедленная съемка'] && (
									<div className={scss.product_info_text_main}>
										<p>Замедленная съемка</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Замедленная съемка']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Размер пикселя'] && (
									<div className={scss.product_info_text_main}>
										<p>Размер пикселя</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Размер пикселя']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Запись 4K видео'] && (
									<div className={scss.product_info_text_main}>
										<p>Запись 4K видео</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Запись 4K видео']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Bokeh && (
									<div className={scss.product_info_text_main}>
										<p>Bokeh</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Bokeh}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Апертура && (
									<div className={scss.product_info_text_main}>
										<p>Апертура</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Апертура}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Zoom && (
									<div className={scss.product_info_text_main}>
										<p>Zoom</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Zoom}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Запись 1080p видео'] && (
									<div className={scss.product_info_text_main}>
										<p>Запись 1080p видео</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Запись 1080p видео']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук['Фокусное расстояние'] && (
									<div className={scss.product_info_text_main}>
										<p>Фокусное расстояние</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук['Фокусное расстояние']}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Особенности && (
									<div className={scss.product_info_text_main}>
										<p>Особенности</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Особенности}
										</p>
									</div>
								)}
							{data?.mainCharacteristics.Звук &&
								data?.mainCharacteristics.Звук.Зум && (
									<div className={scss.product_info_text_main}>
										<p>Зум</p>
										<p className={scss.text_product}>
											{data?.mainCharacteristics.Звук &&
												data?.mainCharacteristics.Звук.Зум}
										</p>
									</div>
								)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Тип памяти'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Тип памяти:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Тип памяти'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Карта памяти'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Карта памяти</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Карта памяти'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Частота памяти'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота памяти</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Частота памяти'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Тип накопителя'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Тип накопителя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Тип накопителя'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Объем ОЗУ'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Объем ОЗУ</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Объем ОЗУ'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Количество каналов'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Количество каналов</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Количество каналов'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Программное обеспечение'][
								'Объем накопителя'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Объем накопителя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Программное обеспечение'] &&
											data?.mainCharacteristics['Программное обеспечение'][
												'Объем накопителя'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Дизайн и корпус'][
								'Операционная система'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Операционная система:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Дизайн и корпус'] &&
											data?.mainCharacteristics['Дизайн и корпус'][
												'Операционная система'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Дизайн и корпус'][
								'Размер системы из коробки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Размер системы из коробки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Дизайн и корпус'] &&
											data?.mainCharacteristics['Дизайн и корпус'][
												'Размер системы из коробки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера']['FM-Радио'] && (
								<div className={scss.product_info_text_main}>
									<p>FM-Радио</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'FM-Радио'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'][
								'Dolby Atmos'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Dolby Atmos</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'Dolby Atmos'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'].Динамики && (
								<div className={scss.product_info_text_main}>
									<p>Динамики</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'].Динамики}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Фронтальная камера'][
								'3.5 мм аудио порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>3.5 мм аудио порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Фронтальная камера'] &&
											data?.mainCharacteristics['Фронтальная камера'][
												'3.5 мм аудио порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия Wi-Fi'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Функции USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Функции USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Гибридный слот'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Гибридный слот</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Гибридный слот'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность.GPS && (
								<div className={scss.product_info_text_main}>
									<p>GPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность.GPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Количество SIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Количество SIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Количество SIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Версия USB'] && (
								<div className={scss.product_info_text_main}>
									<p>Версия USB</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия USB'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Поддержка eSIM*'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка eSIM*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка eSIM*'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['LTE Cat*'] && (
								<div className={scss.product_info_text_main}>
									<p>LTE Cat*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['LTE Cat*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['2G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>2G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['2G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Инфракрасный порт'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Инфракрасный порт</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Инфракрасный порт'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Поддержка 5G'] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка 5G</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Поддержка 5G'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Версия Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Версия Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Версия Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['Тип SIM'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип SIM</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['Тип SIM']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['4G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>4G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['4G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Wi-Fi'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Wi-Fi</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Wi-Fi'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность[
								'Функции Bluetooth'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Функции Bluetooth</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность[
												'Функции Bluetooth'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['NFC*'] && (
								<div className={scss.product_info_text_main}>
									<p>NFC*</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['NFC*']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Производительность['3G сети'] && (
								<div className={scss.product_info_text_main}>
									<p>3G сети</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Производительность &&
											data?.mainCharacteristics.Производительность['3G сети']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['GPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>GPU-ядер:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['GPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Total score'] && (
								<div className={scss.product_info_text_main}>
									<p>Total score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Total score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Чипсет && (
								<div className={scss.product_info_text_main}>
									<p>Чипсет</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Чипсет}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Частота GPU'] && (
								<div className={scss.product_info_text_main}>
									<p>Частота GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Частота GPU']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.UX && (
								<div className={scss.product_info_text_main}>
									<p>UX</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.UX}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Stability && (
								<div className={scss.product_info_text_main}>
									<p>Stability</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Stability}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics test'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics test</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics test']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Memory && (
								<div className={scss.product_info_text_main}>
									<p>Memory</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Memory}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.CPU && (
								<div className={scss.product_info_text_main}>
									<p>CPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.CPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Производство && (
								<div className={scss.product_info_text_main}>
									<p>Производство</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Производство}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.GPU && (
								<div className={scss.product_info_text_main}>
									<p>GPU</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.GPU}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Архитектура && (
								<div className={scss.product_info_text_main}>
									<p>Архитектура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Архитектура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Размер транзистора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер транзистора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Размер транзистора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.Графика && (
								<div className={scss.product_info_text_main}>
									<p>Графика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.Графика}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память.FLOPS && (
								<div className={scss.product_info_text_main}>
									<p>FLOPS</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память.FLOPS}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Нейронный процессор'] && (
								<div className={scss.product_info_text_main}>
									<p>Нейронный процессор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Нейронный процессор']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['CPU-ядер'] && (
								<div className={scss.product_info_text_main}>
									<p>CPU-ядер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['CPU-ядер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память[
								'Пиковая температура корпуса'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Пиковая температура корпуса</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память[
												'Пиковая температура корпуса'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Макс. частота'] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. частота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Макс. частота']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Память['Graphics score'] && (
								<div className={scss.product_info_text_main}>
									<p>Graphics score</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Память &&
											data?.mainCharacteristics.Память['Graphics score']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение фото'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение фото:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение фото']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Датчик глубины (TOF 3D)'] && (
								<div className={scss.product_info_text_main}>
									<p>Датчик глубины (TOF 3D)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Датчик глубины (TOF 3D)'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер сенсора'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер сенсора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер сенсора']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Автофокус && (
								<div className={scss.product_info_text_main}>
									<p>Автофокус</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Автофокус}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Количество мегапикселей'] && (
								<div className={scss.product_info_text_main}>
									<p>Количество мегапикселей</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран[
												'Количество мегапикселей'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Сенсор && (
								<div className={scss.product_info_text_main}>
									<p>Сенсор</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Сенсор}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Photo && (
								<div className={scss.product_info_text_main}>
									<p>Photo</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Photo}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Стабилизация && (
								<div className={scss.product_info_text_main}>
									<p>Стабилизация</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Стабилизация}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Разрешение видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Разрешение видео']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Размер пикселя'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер пикселя</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Размер пикселя']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Video && (
								<div className={scss.product_info_text_main}>
									<p>Video</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Video}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран.Апертура && (
								<div className={scss.product_info_text_main}>
									<p>Апертура</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран.Апертура}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Экран['Фокусное расстояние'] && (
								<div className={scss.product_info_text_main}>
									<p>Фокусное расстояние</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Экран &&
											data?.mainCharacteristics.Экран['Фокусное расстояние']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое[
								'Сканер отпечатков пальцев'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Сканер отпечатков пальцев:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Сканер отпечатков пальцев'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Толщина && (
								<div className={scss.product_info_text_main}>
									<p>Толщина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Толщина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Вес && (
								<div className={scss.product_info_text_main}>
									<p>Вес</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Вес}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Доступные цвета'] && (
								<div className={scss.product_info_text_main}>
									<p>Доступные цвета</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Доступные цвета']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Водонепроницаемость && (
								<div className={scss.product_info_text_main}>
									<p>Водонепроницаемость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Водонепроницаемость}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал рамки'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал рамки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое['Материал рамки']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Высота && (
								<div className={scss.product_info_text_main}>
									<p>Высота</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Высота}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое['Материал задней панели'] && (
								<div className={scss.product_info_text_main}>
									<p>Материал задней панели</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое[
												'Материал задней панели'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Другое.Ширина && (
								<div className={scss.product_info_text_main}>
									<p>Ширина</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Другое &&
											data?.mainCharacteristics.Другое.Ширина}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Сенсоры и датчики'] && (
								<div className={scss.product_info_text_main}>
									<p>Сенсоры и датчики:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Сенсоры и датчики']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата начала продаж'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата начала продаж</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата начала продаж']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для головы'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для головы</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для головы'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея[
								'Уровень излучения SAR для тела'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Уровень излучения SAR для тела</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея[
												'Уровень излучения SAR для тела'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Класс'] && (
								<div className={scss.product_info_text_main}>
									<p>Класс</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Класс']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Батарея['Дата выхода'] && (
								<div className={scss.product_info_text_main}>
									<p>Дата выхода</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Батарея &&
											data?.mainCharacteristics.Батарея['Дата выхода']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Время полной зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время полной зарядки:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Время полной зарядки'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Быстрая зарядка'] && (
								<div className={scss.product_info_text_main}>
									<p>Быстрая зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Быстрая зарядка']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации.Съемный && (
								<div className={scss.product_info_text_main}>
									<p>Съемный</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации.Съемный}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Режим ожидания'] && (
								<div className={scss.product_info_text_main}>
									<p>Режим ожидания</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Режим ожидания']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Объем'] && (
								<div className={scss.product_info_text_main}>
									<p>Объем</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Объем']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Беспроводная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Беспроводная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Беспроводная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Тип аккумулятора'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип аккумулятора</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Тип аккумулятора'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Просмотр видео'] && (
								<div className={scss.product_info_text_main}>
									<p>Просмотр видео</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Просмотр видео']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Игры'] && (
								<div className={scss.product_info_text_main}>
									<p>Игры</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Игры']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Макс. мощность зарядки'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. мощность зарядки</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Макс. мощность зарядки'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации['Веб-серфинг'] && (
								<div className={scss.product_info_text_main}>
									<p>Веб-серфинг</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации['Веб-серфинг']}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics.Коммуникации[
								'Реверсивная зарядка'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Реверсивная зарядка</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics.Коммуникации &&
											data?.mainCharacteristics.Коммуникации[
												'Реверсивная зарядка'
											]}
									</p>{' '}
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'].Разрешение && (
								<div className={scss.product_info_text_main}>
									<p>Разрешение:</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'].Разрешение}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Защита дисплея'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Защита дисплея</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Защита дисплея'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость в HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость в HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость в HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Время отклика'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Время отклика</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Время отклика'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Поддержка HDR'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Поддержка HDR</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Поддержка HDR'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение экрана к корпусу'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение экрана к корпусу</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение экрана к корпусу'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Соотношение сторон'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Соотношение сторон</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Соотношение сторон'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Контрастность'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Контрастность</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Контрастность'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Адаптивная частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Адаптивная частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Адаптивная частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Частота обновления'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Частота обновления</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Частота обновления'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Тип'] && (
								<div className={scss.product_info_text_main}>
									<p>Тип</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Тип']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Размер'] && (
								<div className={scss.product_info_text_main}>
									<p>Размер</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['Размер']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['ШИМ (PWM)'] && (
								<div className={scss.product_info_text_main}>
									<p>ШИМ (PWM)</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера']['ШИМ (PWM)']}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера'][
								'Макс. заявленная яркость'
							] && (
								<div className={scss.product_info_text_main}>
									<p>Макс. заявленная яркость</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Макс. заявленная яркость'
											]}
									</p>
								</div>
							)}
							{data?.mainCharacteristics['Основная камера']['Особенности'] && (
								<div className={scss.product_info_text_main}>
									<p>Особенности</p>
									<p className={scss.text_product}>
										{data?.mainCharacteristics['Основная камера'] &&
											data?.mainCharacteristics['Основная камера'][
												'Особенности'
											]}
									</p>
								</div>
							)}
						</div>
					)}
				</div>
			)}
		</section>
	);
};
