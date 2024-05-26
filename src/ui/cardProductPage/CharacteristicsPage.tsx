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
						<h3>Основные xарактеристики</h3>
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
								<p>Тип дорожки:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp1 &&
										data?.mainCharacteristics.additionalProp1.additionalProp1}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Мощность двигателя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp1 &&
										data?.mainCharacteristics.additionalProp1.additionalProp2}
								</p>{' '}
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип двигателя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp1 &&
										data?.mainCharacteristics.additionalProp1.additionalProp3}
								</p>{' '}
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
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{memoryAndProcessor && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Тип дорожки:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp2 &&
										data?.mainCharacteristics.additionalProp2.additionalProp1}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Мощность двигателя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp2 &&
										data?.mainCharacteristics.additionalProp2.additionalProp2}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Мощность двигателя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp2 &&
										data?.mainCharacteristics.additionalProp2.additionalProp3}
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
							<IconArrowRight style={{ color: ' rgb(203, 17, 171)' }} />
						</div>
					</div>
					{additionalFeatures && (
						<div className={scss.render_info_product}>
							<div className={scss.product_info_text_main}>
								<p>Тип дорожки:</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp3 &&
										data?.mainCharacteristics.additionalProp3.additionalProp1}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Мощность двигателя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp3 &&
										data?.mainCharacteristics.additionalProp3.additionalProp2}
								</p>
							</div>
							<div className={scss.product_info_text_main}>
								<p>Тип двигателя</p>
								<p className={scss.text_product}>
									{data?.mainCharacteristics.additionalProp3 &&
										data?.mainCharacteristics.additionalProp3.additionalProp3}
								</p>
							</div>
						</div>
					)}
				</div>
			)}
		</section>
	);
};
