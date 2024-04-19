/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useGetProductsItemIdQuery } from '@/src/redux/api/products/Products';
import scss from './ProductItemId.module.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import icon from '@/src/assets/Vector 5 (1).png';
import {
	IconArrowLeft,
	IconArrowRight,
	IconHeartGrey,
	IconXX
} from '@/src/assets/icons';
import { createPortal } from 'react-dom';
import { Modal } from '@/src/UI/modal/Modal';
// import { Rating } from '@mantine/core';
import AddBasketButton from '@/src/UI/customButtons/AddBasketButton';
import ColorButton from '@/src/UI/colours/Colour';

export const ProductItemId = () => {
	const [slider, setSlider] = useState<boolean>(true);
	const [slider2, setSlider2] = useState<boolean>(false);
	const [slider3, setSlider3] = useState<boolean>(false);
	const [slider4, setSlider4] = useState<boolean>(false);
	const [slider5, setSlider5] = useState<boolean>(false);
	const [slider6, setSlider6] = useState<boolean>(false);
	const [itemIdImage, setItemIdImage] = useState<string>('');
	const [openModal, setOpenModal] = useState<boolean | number | string>(false);
	const { productId } = useParams();
	const { data, isLoading } = useGetProductsItemIdQuery(productId!);
	const handleSliderResults = () => {
		if (slider) {
			setSlider2(true);
			setSlider(false);
			setSlider4(false);
			setSlider3(false);
			setSlider5(false);
			setSlider6(false);
		} else if (slider2) {
			setSlider3(true);
			setSlider2(false);
			setSlider(false);
			setSlider4(false);
			setSlider5(false);
			setSlider6(false);
		} else if (slider3) {
			setSlider4(true);
			setSlider2(false);
			setSlider(false);
			setSlider3(false);
			setSlider5(false);
			setSlider6(false);
		} else if (slider4) {
			setSlider(false);
			setSlider2(false);
			setSlider4(false);
			setSlider3(false);
			setSlider5(true);
			setSlider6(false);
		} else if (slider5) {
			setSlider(false);
			setSlider2(false);
			setSlider4(false);
			setSlider3(false);
			setSlider5(false);
			setSlider6(true);
		} else if (slider6) {
			setSlider(true);
			setSlider2(false);
			setSlider4(false);
			setSlider3(false);
			setSlider5(false);
			setSlider6(false);
		}
	};

	function toggleOpenModal(id: number | string, image: string) {
		setOpenModal(id);
		setItemIdImage(image);
	}

	const handleSliderResults2 = () => {
		if (slider4) {
			setSlider2(false);
			setSlider(false);
			setSlider4(false);
			setSlider3(true);
			setSlider5(false);
			setSlider6(false);
		} else if (slider3) {
			setSlider3(false);
			setSlider2(true);
			setSlider(false);
			setSlider4(false);
			setSlider5(false);
			setSlider6(false);
		} else if (slider2) {
			setSlider4(false);
			setSlider2(false);
			setSlider(true);
			setSlider3(false);
			setSlider5(false);
			setSlider6(false);
		} else if (slider) {
			setSlider(false);
			setSlider2(false);
			setSlider4(false);
			setSlider3(false);
			setSlider5(false);
			setSlider6(true);
		} else if (slider5) {
			setSlider(false);
			setSlider2(false);
			setSlider4(true);
			setSlider3(false);
			setSlider5(false);
			setSlider6(false);
		} else if (slider6) {
			setSlider(false);
			setSlider2(false);
			setSlider4(false);
			setSlider3(false);
			setSlider5(true);
			setSlider6(false);
		}
	};

	return (
		<div className="container">
			<div className={scss.productContainer}>
				{isLoading ? (
					<h2>IsLoading...</h2>
				) : (
					<>
						<div className={scss.productPhotoDiv}>
							{slider && (
								<img
									onClick={() => toggleOpenModal(data?._id!, data?.image!)}
									className={scss.image}
									src={data?.image}
									alt={data?.producName}
								/>
							)}
							{slider2 && (
								<img
									onClick={() => toggleOpenModal(data?._id!, data?.image2!)}
									className={scss.image}
									src={data?.image2}
									alt={data?.producName}
								/>
							)}
							{slider3 && (
								<img
									onClick={() => toggleOpenModal(data?._id!, data?.image3!)}
									className={scss.image}
									src={data?.image3}
									alt={data?.producName}
								/>
							)}
							{slider4 && (
								<img
									onClick={() => toggleOpenModal(data?._id!, data?.image4!)}
									className={scss.image}
									src={data?.image4}
									alt={data?.producName}
								/>
							)}
							{slider5 && (
								<img
									onClick={() => toggleOpenModal(data?._id!, data?.image5!)}
									className={scss.image}
									src={data?.image5}
									alt={data?.producName}
								/>
							)}
							{slider6 && (
								<img
									onClick={() => toggleOpenModal(data?._id!, data?.image6!)}
									className={scss.image}
									src={data?.image6}
									alt={data?.producName}
								/>
							)}
							<div className={scss.divphotos}>
								<img
									className={scss.buttonIcon}
									onClick={handleSliderResults2}
									src={icon}
									alt="logo"
								/>
								<div
									className={
										slider
											? `${scss.divImage} ${scss.active}`
											: `${scss.divImage}`
									}
								>
									<img
										onClick={() => {
											setSlider4(false);
											setSlider(true);
											setSlider2(false);
											setSlider3(false);
											setSlider5(false);
											setSlider6(false);
										}}
										src={data?.image}
										alt={data?.producName}
									/>
								</div>
								<div
									className={
										slider2
											? `${scss.divImage} ${scss.active}`
											: `${scss.divImage}`
									}
								>
									<img
										onClick={() => {
											setSlider4(false);
											setSlider(false);
											setSlider2(true);
											setSlider3(false);
											setSlider5(false);
											setSlider6(false);
										}}
										src={data?.image2}
										alt={data?.producName}
									/>
								</div>
								<div
									className={
										slider3
											? `${scss.divImage} ${scss.active}`
											: `${scss.divImage}`
									}
								>
									<img
										onClick={() => {
											setSlider4(false);
											setSlider(false);
											setSlider2(false);
											setSlider3(true);
											setSlider5(false);
											setSlider6(false);
										}}
										src={data?.image3}
										alt={data?.producName}
									/>
								</div>
								<div
									className={
										slider4
											? `${scss.divImage} ${scss.active}`
											: `${scss.divImage}`
									}
								>
									<img
										onClick={() => {
											setSlider4(true);
											setSlider(false);
											setSlider2(false);
											setSlider3(false);
											setSlider5(false);
											setSlider6(false);
										}}
										src={data?.image4}
										alt={data?.producName}
									/>
								</div>
								<div
									className={
										slider5
											? `${scss.divImage} ${scss.active}`
											: `${scss.divImage}`
									}
								>
									<img
										onClick={() => {
											setSlider4(false);
											setSlider(false);
											setSlider2(false);
											setSlider3(false);
											setSlider5(true);
											setSlider6(false);
										}}
										src={data?.image5}
										alt={data?.producName}
									/>
								</div>
								<div
									className={
										slider6
											? `${scss.divImage} ${scss.active}`
											: `${scss.divImage}`
									}
								>
									<img
										onClick={() => {
											setSlider4(false);
											setSlider(false);
											setSlider2(false);
											setSlider3(false);
											setSlider5(false);
											setSlider6(true);
										}}
										src={data?.image6}
										alt={data?.producName}
									/>
								</div>
								<img
									className={scss.buttonIcon2}
									onClick={handleSliderResults}
									src={icon}
									alt="logo"
								/>
							</div>
						</div>
						<div className={scss.productContentsDiv}>
							<h3>{data?.producName}</h3>
							<div className={scss.productDivInto1}>
								<div className={scss.divProduct}>
									<p className={scss.p}>{data?.buyProduc}</p>
									<p>Артикул: 030696</p>
									<div className={scss.DivRating}>{data?.Rating}</div>
								</div>
								<div className={scss.bordweDiv}></div>
							</div>
							<div className={scss.productDivInto2}>
								<div className={scss.divProductPrice}>
									<h3>Цвет товара:</h3>
									<h3>Количество:</h3>
									<div className={scss.priceProduct}>
										<img src={data?.newProduct} alt={data?.producName} />
										<h2>{data?.price} с</h2>
										<h4>{data?.previousPrice} с</h4>
									</div>
								</div>
								<div className={scss.ColorsAndQuantity}>
									<div className={scss.divProductButtonsAndQuantity}>
										<div className={scss.divColors}>
											<ColorButton
												width="23px"
												height="23px"
												backgroundColor="rgb(0, 0, 0)"
											/>
											<ColorButton
												width="23px"
												height="23px"
												backgroundColor="rgb(128, 128, 160)"
											/>
											<ColorButton
												width="23px"
												height="23px"
												backgroundColor="rgb(121, 89, 116)"
											/>
											<ColorButton
												width="23px"
												height="23px"
												backgroundColor="rgb(211, 32, 46)"
											/>
											<ColorButton
												width="23px"
												height="23px"
												backgroundColor="rgb(57, 117, 242)"
											/>
										</div>
										<div className={scss.productsAndPluesMinuesQuantity}>
											<button>-</button>
											{/* <span>{data?.price}</span> */}
											<span>1</span>
											<button>+</button>
										</div>
									</div>
									<div className={scss.BrieflyAboutTheProduct}>
										<div className={scss.intoForProduct}>
											<h3>Коротко о товаре:</h3>
											<div className={scss.divProductInto}>
												Экран............................................
												<h6>{data?.Screen}</h6>
											</div>
											<div className={scss.divProductInto}>
												Цвет..............................................
												<h6>{data?.colorProduct}</h6>
											</div>
											<div className={scss.divProductInto}>
												Дата выпуска............................
												<h6>{data?.DateOfIssue}</h6>
											</div>
											<div className={scss.divProductInto}>
												Операционная система........
												<h6>{data?.operatingSystem}</h6>
											</div>
											<div className={scss.divProductInto}>
												Память.........................................
												<h6>{data?.Memory}</h6>
											</div>
											<div className={scss.divProductInto}>
												SIM-карты...................................
												<h6>{data?.SIMCards}</h6>
											</div>
											<div className={scss.divProductInto}>
												Гарантия (месяцев).................
												<h6>{data?.WarrantyMonths}</h6>
											</div>
											<div className={scss.divProductInto}>
												Процессор..................................
												<h6>{data?.CPU}</h6>
											</div>
											<div className={scss.divProductInto}>
												Вес...................................................
												<h6>{data?.Weight}</h6>
											</div>
										</div>
										<div className={scss.buttonsDiv}>
											<button>
												<IconHeartGrey />
											</button>
											<AddBasketButton>В корзину</AddBasketButton>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
			{openModal === data?._id
				? createPortal(
						<Modal>
							<div className={scss.contentsModal}>
								<div
									onClick={() => setOpenModal(false)}
									className={scss.modalNooDiv}
								>
									<IconXX />
								</div>
								<div className={scss.divModal1}>
									<div style={{ cursor: 'pointer' }}>
										<IconArrowLeft />
									</div>
									<img src={itemIdImage} alt={data.producName} />
									<div style={{ cursor: 'pointer' }}>
										<IconArrowRight />
									</div>
								</div>
								<div className={scss.divModal2}>
									<div
										className={
											slider
												? `${scss.divImage} ${scss.active}`
												: `${scss.divImage}`
										}
									>
										<img
											// onClick={() => {}}
											src={data.image}
											alt={data.producName}
										/>
									</div>
									<div
										className={
											slider2
												? `${scss.divImage} ${scss.active}`
												: `${scss.divImage}`
										}
									>
										<img src={data.image2} alt={data.producName} />
									</div>
									<div
										className={
											slider3
												? `${scss.divImage} ${scss.active}`
												: `${scss.divImage}`
										}
									>
										<img src={data.image3} alt={data.producName} />
									</div>
									<div
										className={
											slider4
												? `${scss.divImage} ${scss.active}`
												: `${scss.divImage}`
										}
									>
										<img src={data.image4} alt={data.producName} />
									</div>
									<div
										className={
											slider5
												? `${scss.divImage} ${scss.active}`
												: `${scss.divImage}`
										}
									>
										<img src={data.image5} alt={data.producName} />
									</div>
									<div
										className={
											slider6
												? `${scss.divImage} ${scss.active}`
												: `${scss.divImage}`
										}
									>
										<img src={data.image6} alt={data.producName} />
									</div>
								</div>
							</div>
						</Modal>,
						document.getElementById('modal') as any
					)
				: null}
		</div>
	);
};
