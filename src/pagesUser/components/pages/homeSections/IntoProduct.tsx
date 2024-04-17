import { useState } from 'react';
import scss from './IntoProduct.module.scss';
import {
	IconArrowLeft,
	IconBankCard,
	// IconCard,
	IconCard2,
	IconKamazCar,
	IconMenu
} from '@/src/assets/icons';
import { useGetProductsItemIdQuery } from '@/src/redux/api/products/Products';
import { useParams } from 'react-router-dom';
import { Button, Rating } from '@mantine/core';
const IntoProduct = () => {
	const { productId } = useParams();
	const { data, isLoading } = useGetProductsItemIdQuery(productId!);
	const [description, setDescription] = useState<boolean>(true);
	const [characteristics, setCharacteristics] = useState<boolean>(false);
	const [reviews, setReviews] = useState<boolean>(false);
	const [shippingAndPayment, setShippingAndPayment] = useState<boolean>(false);
	const [mainCharacteristics, setMainCharacteristics] =
		useState<boolean>(false);
	const [memoryAndProcessor, setMemoryAndProcessor] = useState<boolean>(false);
	const [additionalFeatures, setAdditionalFeatures] = useState<boolean>(false);
	// const [active, setActive] = useState<boolean>(false);
	console.log(data?.Description.intoForTelephone);

	return (
		<div className={scss.containerInfoProducts}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.divProductButtons}>
						<nav className={scss.navbar}>
							<ul
								className={
									description
										? `${scss.ulResultStule} ${scss.active}`
										: `${scss.ulResultStule}`
								}
							>
								<li
									onClick={() => {
										setDescription(true);
										setReviews(false);
										setCharacteristics(false);
										setShippingAndPayment(false);
									}}
									className={
										description ? `${scss.li} ${scss.activeLi}` : `${scss.li}`
									}
								>
									Описание
								</li>
							</ul>
							<ul
								className={
									characteristics
										? `${scss.ulResultStule} ${scss.active}`
										: `${scss.ulResultStule}`
								}
							>
								<li
									onClick={() => {
										setDescription(false);
										setReviews(false);
										setCharacteristics(true);
										setShippingAndPayment(false);
									}}
									className={
										characteristics
											? `${scss.li} ${scss.activeLi}`
											: `${scss.li}`
									}
								>
									Характеристики
								</li>
							</ul>
							<ul
								className={
									reviews
										? `${scss.ulResultStule} ${scss.active}`
										: `${scss.ulResultStule}`
								}
							>
								<li
									onClick={() => {
										setDescription(false);
										setReviews(true);
										setCharacteristics(false);
										setShippingAndPayment(false);
									}}
									className={
										reviews ? `${scss.li} ${scss.activeLi}` : `${scss.li}`
									}
								>
									Отзывы
								</li>
							</ul>
							<ul
								className={
									shippingAndPayment
										? `${scss.ulResultStule} ${scss.active}`
										: `${scss.ulResultStule}`
								}
							>
								<li
									onClick={() => {
										setDescription(false);
										setReviews(false);
										setCharacteristics(false);
										setShippingAndPayment(true);
									}}
									className={
										shippingAndPayment
											? `${scss.li} ${scss.activeLi}`
											: `${scss.li}`
									}
								>
									Доставка и оплата
								</li>
							</ul>
						</nav>
						<div className={scss.div2}>
							<IconMenu />
							Скачать документ.pdf
						</div>
					</div>
					{isLoading ? (
						<h2>IsLoading...</h2>
					) : (
						<>
							{description && (
								<div className={scss.ProductContentDescription}>
									<img
										src={data?.Description.intoForTelephone}
										alt={data?.producName}
									/>
									<div className={scss.infoProductTexts1}>
										<h2>{data?.Description.MainTech}</h2>
										<div className={scss.productsInfoText}>
											<p>{data?.Description.intoText1}</p>
											<p>{data?.Description.intoText2}</p>
										</div>
									</div>
									<div className={scss.infoProductTexts2}>
										<p>{data?.Description.intoText3}</p>
										<p>{data?.Description.intoText4}</p>
									</div>
								</div>
							)}
							{characteristics && (
								<div className={scss.characteristicsContents}>
									<div className={scss.productContents1}>
										<div
											onClick={() =>
												setMainCharacteristics(!mainCharacteristics)
											}
											className={scss.contentCharacteristics}
										>
											<h3>Основные xарактеристики</h3>
											<div
												className={
													mainCharacteristics
														? `${scss.icon} ${scss.iconActive}`
														: `${scss.icon}`
												}
											>
												<IconArrowLeft />
											</div>
										</div>

										{mainCharacteristics && (
											<div className={scss.render1}>
												<div className={scss.productInfo1}>
													<p>Тип дорожки:</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.TrackType}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Мощность двигателя</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.enginePower}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Тип двигателя</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.enginesType}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Регулировка скорости</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.speedAdjustment}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Беговое полотно</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.runningBelt}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Наклон бегового полотна</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.runningBeltIncline}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Размер бегового полотна (ДхШ)</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.runningBeltSize}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Диаметр задних валов</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.rearShaftDiameter}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Программы тренировки</p>
													<p className={scss.textTagP}>
														{data?.Characteristics.trainingPrograms}
													</p>
												</div>
											</div>
										)}
										<div
											onClick={() => setMemoryAndProcessor(!memoryAndProcessor)}
											className={scss.contentCharacteristics}
										>
											<h3>Память и процессор</h3>
											<div
												className={
													memoryAndProcessor
														? `${scss.icon2} ${scss.iconActive2}`
														: `${scss.icon2}`
												}
											>
												<IconArrowLeft />
											</div>
										</div>
										{memoryAndProcessor && (
											<div className={scss.render1}>
												<div className={scss.productInfo1}>
													<p>Тип дорожки:</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.TrackType}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Мощность двигателя</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.enginePower}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Тип двигателя</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.enginesType}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Регулировка скорости</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.speedAdjustment}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Беговое полотно</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.runningBelt}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Наклон бегового полотна</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.runningBeltIncline}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Размер бегового полотна (ДхШ)</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.runningBeltSize}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Диаметр задних валов</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.rearShaftDiameter}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Программы тренировки</p>
													<p className={scss.textTagP}>
														{data?.MemoryAndProcessor.trainingPrograms}
													</p>
												</div>
											</div>
										)}
										<div
											onClick={() => setAdditionalFeatures(!additionalFeatures)}
											className={scss.contentCharacteristics}
										>
											<h3>Память и процессор</h3>
											<div
												className={
													additionalFeatures
														? `${scss.icon2} ${scss.iconActive2}`
														: `${scss.icon2}`
												}
											>
												<IconArrowLeft />
											</div>
										</div>
										{additionalFeatures && (
											<div className={scss.render1}>
												<div className={scss.productInfo1}>
													<p>Тип дорожки:</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.TrackType}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Мощность двигателя</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.enginePower}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Тип двигателя</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.enginesType}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Регулировка скорости</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.speedAdjustment}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Беговое полотно</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.runningBelt}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Наклон бегового полотна</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.runningBeltIncline}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Размер бегового полотна (ДхШ)</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.runningBeltSize}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Диаметр задних валов</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.rearShaftDiameter}
													</p>
												</div>
												<div className={scss.productInfo1}>
													<p>Программы тренировки</p>
													<p className={scss.textTagP}>
														{data?.AdditionalFeatures.trainingPrograms}
													</p>
												</div>
											</div>
										)}
									</div>
								</div>
							)}
							{reviews && (
								<div className={scss.reviewsContents}>
									<>
										<div className={scss.ratingDiv}>
											<h2>Отзывы</h2>
											<div className={scss.divRatingResults}>
												<div className={scss.ratingContents}>
													<div className={scss.divDisplayResults}>
														<div className={scss.divAllResultRating}>
															<div className={scss.contentRating1}>
																<h3>4,5</h3>
																<Rating defaultValue={3} />
															</div>
															<p>789 отзывов</p>
														</div>
														<div className={scss.divAllResultRating2}>
															<div className={scss.userReviews}>
																<Rating defaultValue={5} />
																<p>23 отзывов</p>
															</div>
															<div className={scss.userReviews}>
																<Rating defaultValue={4} />
																<p>5 отзывов</p>
															</div>
															<div className={scss.userReviews}>
																<Rating defaultValue={3} />
																<p>17 отзывов</p>
															</div>
															<div className={scss.userReviews}>
																<Rating defaultValue={2} />
																<p>4 отзывов</p>
															</div>
															<div className={scss.userReviews}>
																<Rating defaultValue={1} />
																<p>2 отзывов</p>
															</div>
														</div>
													</div>
													<Button className={scss.buttonRating}>Оставить отзыв</Button>
												</div>
											</div>
										</div>
										<div className={scss.divUserCommits}>
											<img
												src={data?.reviews.user.userProfile}
												alt="user Profile"
											/>
											<div className={scss.commitsForUsersDiv}>
												<div className={scss.userInfo}>
													<h2>{data?.reviews.user.userName}</h2>
													<p>{data?.reviews.user.Time}</p>
												</div>
												<div className={scss.GradeDiv}>
													<p>Оценка</p>
													<Rating defaultValue={5} />
												</div>
												<>
													<p className={scss.commitUser}>
														{data?.reviews.user.userCommit}
													</p>
												</>
											</div>
										</div>
									</>
								</div>
							)}
							{shippingAndPayment && (
								<div className={scss.DivShippingAndPaymentContainer}>
									<div className={scss.DeliveryAndPaymentContents1}>
										<h2>Доставка</h2>
										<p>
											Город доставки <h3>Бишкек</h3>
										</p>
										<div className={scss.shippingAndPaymentContent1}>
											<div className={scss.contentAndPhoto}>
												<div className={scss.contentDiv1}>
													<IconKamazCar />
													<div className={scss.text1}>
														<h3>Самовывоз со склада</h3>
														<p>Забрать в течение 14 дней</p>
													</div>
												</div>
												<h2>{data?.deliveryAndPayment.sum} с</h2>
												<div className={scss.contentDiv1}>
													<IconKamazCar />
													<div className={scss.text1}>
														<h3>Самовывоз из магазина</h3>
														<p>Забрать в течение 14 дней</p>
													</div>
												</div>
												<h2>{data?.deliveryAndPayment.sun2} с</h2>
												<div className={scss.contentDiv1}>
													<IconKamazCar />
													<div className={scss.text1}>
														<h3>Доставка</h3>
														<p>
															Бесплатная доставка при покупках свыше — 10 000с.
														</p>
													</div>
												</div>
												<h2>от {data?.deliveryAndPayment.sum3} с</h2>
											</div>
											<div className={scss.contentAndPhoto2}>
												<div className={scss.contentDiv2}>
													<IconKamazCar />
													<>
														<p>Предоплата не требуется</p>
													</>
												</div>
												<div className={scss.contentDiv2}>
													<IconBankCard />
													<>
														<p>Предоплата не требуется</p>
													</>
												</div>
												<div className={scss.contentDiv2}>
													<IconCard2 />
													<>
														<p>Предоплата не требуется</p>
													</>
												</div>
											</div>
										</div>
										<div className={scss.shippingAndPaymentContent2}>
											<h2>Способы оплаты</h2>
											<div className={scss.contentAndPhoto2}>
												<div className={scss.contentDiv2}>
													<IconBankCard />
													<div className={scss.divTexts}>
														<p>Оплата картой</p>
														<p>онлайн</p>
													</div>
												</div>
												<div className={scss.contentDiv2}>
													<IconBankCard />
													<div className={scss.divTexts}>
														<p>Оплата картой</p>
														<p>онлайн</p>
													</div>
												</div>
												<div className={scss.contentDiv2}>
													<IconBankCard />
													<div className={scss.divTexts}>
														<p>Оплата картой</p>
														<p>онлайн</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default IntoProduct;
