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
										data?.mainCharacteristics.Другое['Сканер отпечатков пальцев']}
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
				</div>
			)}
		</section>
	);
};
