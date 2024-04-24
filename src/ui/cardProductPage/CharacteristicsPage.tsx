/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetProductsItemIdQuery } from '@/src/redux/api/product';
import scss from './CharacteristicsPage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CharacteristicsPage = () => {
	const { productId } = useParams();
	const { data } = useGetProductsItemIdQuery(productId!);
	const [characteristicsProduct, setCharacteristicsProduct] =
		useState<boolean>(true);
	const [memoryAndProcessor, setMemoryAndProcessor] = useState<boolean>(false);
	const [additionalFeatures, setAdditionalFeatures] = useState<boolean>(false);

	useEffect(() => {}, []);

	return (
		<section className={scss.CharacteristicsPage}>
			<div className={scss.product_contents}>
				<div
					onClick={() => setCharacteristicsProduct(!characteristicsProduct)}
					className={scss.content_characteristics}
				>
					<h3>Основные xарактеристики</h3>
					<div
						className={
							characteristicsProduct
								? `${scss.icon} ${scss.iconActive}`
								: `${scss.icon}`
						}
					>
						
					</div>
				</div>
				{characteristicsProduct && (
					<div className={scss.render_info_product}>
						<div className={scss.product_info_text_main}>
							<p>Тип дорожки:</p>
							<p className={scss.text_product}>
								{data?.Characteristics.TrackType}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Мощность двигателя</p>
							<p className={scss.text_product}>
								{data?.Characteristics.enginePower}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Тип двигателя</p>
							<p className={scss.text_product}>
								{data?.Characteristics.enginesType}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Регулировка скорости</p>
							<p className={scss.text_product}>
								{data?.Characteristics.speedAdjustment}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Беговое полотно</p>
							<p className={scss.text_product}>
								{data?.Characteristics.runningBelt}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Наклон бегового полотна</p>
							<p className={scss.text_product}>
								{data?.Characteristics.runningBeltIncline}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Размер бегового полотна (ДхШ)</p>
							<p className={scss.text_product}>
								{data?.Characteristics.runningBeltSize}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Диаметр задних валов</p>
							<p className={scss.text_product}>
								{data?.Characteristics.rearShaftDiameter}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Программы тренировки</p>
							<p className={scss.text_product}>
								{data?.Characteristics.trainingPrograms}
							</p>
						</div>
					</div>
				)}
				<div
					onClick={() => setMemoryAndProcessor(!memoryAndProcessor)}
					className={scss.content_characteristics}
				>
					<h3>Память и процессор</h3>
					<div
						className={
							memoryAndProcessor
								? `${scss.icon} ${scss.iconActive}`
								: `${scss.icon}`
						}
					>
						<p>icon</p>
					</div>
				</div>
				{memoryAndProcessor && (
					<div className={scss.render_info_product}>
						<div className={scss.product_info_text_main}>
							<p>Тип дорожки:</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.TrackType}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Мощность двигателя</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.enginePower}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Тип двигателя</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.enginesType}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Регулировка скорости</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.speedAdjustment}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Беговое полотно</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.runningBelt}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Наклон бегового полотна</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.runningBeltIncline}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Размер бегового полотна (ДхШ)</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.runningBeltSize}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Диаметр задних валов</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.rearShaftDiameter}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Программы тренировки</p>
							<p className={scss.text_product}>
								{data?.MemoryAndProcessor.trainingPrograms}
							</p>
						</div>
					</div>
				)}
				<div
					onClick={() => setAdditionalFeatures(!additionalFeatures)}
					className={scss.content_characteristics}
				>
					<h3>Память и процессор</h3>
					<div
						className={
							additionalFeatures
								? `${scss.icon2} ${scss.iconActive2}`
								: `${scss.icon2}`
						}
					>
						<p>Icon</p>
					</div>
				</div>
				{additionalFeatures && (
					<div className={scss.render_info_product}>
						<div className={scss.product_info_text_main}>
							<p>Тип дорожки:</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.TrackType}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Мощность двигателя</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.enginePower}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Тип двигателя</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.enginesType}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Регулировка скорости</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.speedAdjustment}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Беговое полотно</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.runningBelt}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Наклон бегового полотна</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.runningBeltIncline}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Размер бегового полотна (ДхШ)</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.runningBeltSize}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Диаметр задних валов</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.rearShaftDiameter}
							</p>
						</div>
						<div className={scss.product_info_text_main}>
							<p>Программы тренировки</p>
							<p className={scss.text_product}>
								{data?.AdditionalFeatures.trainingPrograms}
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};
