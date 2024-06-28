/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import scss from './EditSections.module.scss';
import { Button, Input, Radio, Select } from 'antd';
import React, { useState } from 'react';
import { generate, green, presetPalettes, red } from '@ant-design/colors';
import { ColorPicker, theme, ColorPickerProps } from 'antd';
import { useGetCardProductQuery } from '@/src/redux/api/cardProductPage';
import { useEditProductByIdApiMutation } from '@/src/redux/api/editProductById';
import { usePostUploadMutation } from '@/src/redux/api/pdf';
import { IconColorPicker, IconPhotoPlus } from '@tabler/icons-react';
import { gBiteCatalog, moreGBiteCatalog, simCards } from '@/src/data/Catalog';
import {
	OptionsForLaptop,
	optionsSmartWatchesAndBracelets
} from '@/src/data/InputSelect';
import { useDeleteByIdGadgetApiMutation } from '@/src/redux/api/updateImageApi';

type Presets = Required<ColorPickerProps>['presets'][number];

const genPresets = (presets = presetPalettes) =>
	Object.entries(presets).map<Presets>(([label, colors]) => ({
		label,
		colors
	}));

const EditSections = () => {
	const { productId } = useParams();
	const { data, isLoading, refetch } = useGetCardProductQuery({
		id: Number(productId)
	});
	const [hoverEditIcon, setHoverEditIcon] = useState<number | null>(null);
	const [productName, setProductName] = useState<string>(data?.nameOfGadget!);
	const [colorEdit, setColorEdit] = useState<string>(data?.mainColour!);
	const [priceEdit, setPriceEdit] = useState<number>(data?.price!);
	const [ramEdit, setRamEdit] = useState<string>(data?.ram!);
	const [memoryEdit, setMemoryEdit] = useState<string>(data?.memory!);
	const [countSimEdit, setCountSimEdit] = useState<string>(
		data?.countSim.toString()!
	);
	const [editProductById] = useEditProductByIdApiMutation();
	const [updateImage] = useDeleteByIdGadgetApiMutation();
	const [quantityEdit, setQuantityEdit] = useState<number>(data?.quantity!);
	const [postUploadApi] = usePostUploadMutation();
	const [materialBraceletEdit, setMaterialBraceletEdit] = useState<string>('');
	const [materialBodyEdit, setMaterialBodyEdit] = useState<string>('');
	const [sizeWatchEdit, setSizeWatchEdit] = useState<string>('');
	const [dumasEdit, setDumasEdit] = useState<string>('');
	const [genderWatchEdit, setGenderWatchEdit] = useState<string>('');
	const [waterproofEdit, setWaterproofEdit] = useState<string>('');
	const [wirelessEdit, setWirelessEdit] = useState<string>('');
	const [shapeBodyEdit, setShapeBodyEdit] = useState<string>('');
	const updateImageRef = React.useRef<(HTMLInputElement | null)[]>([]);

	const navigate = useNavigate();

	const { token } = theme.useToken();
	const presets = genPresets({
		primary: generate(token.colorPrimary),
		red,
		green
	});

	const handleEditApiFunk = async () => {
		const DATA = {
			quantity: quantityEdit,
			price: priceEdit,
			colour: colorEdit,
			countSim: Number(countSimEdit),
			memory: memoryEdit,
			ram: ramEdit,
			materialBracelet: materialBraceletEdit || '',
			materialBody: materialBodyEdit || '',
			sizeWatch: sizeWatchEdit || '',
			genderWatch: genderWatchEdit || '',
			waterproof: waterproofEdit || '',
			wireless: wirelessEdit || '',
			shapeBody: shapeBodyEdit || ''
		};

		try {
			await editProductById({
				subGadgetId: data?.subGadgetId!,
				...DATA
			});
			navigate(`/admin/goodsPage/product-page/${productId}`);
		} catch (error) {
			console.error(error);
		}
	};
	function updateImageRefClick(index: number) {
		if (updateImageRef.current[index]) {
			return updateImageRef.current[index]?.click();
		}
	}
	function changeProductNameFunk(event: React.ChangeEvent<HTMLInputElement>) {
		setProductName(event.target.value);
	}

	const changePrice = function (e: React.ChangeEvent<HTMLInputElement>) {
		setPriceEdit(Number(e.target.value));
	};

	const changeColorPicker = (value: string) => {
		setColorEdit(value);
	};

	const changeEditFileFunk = async (
		file: React.ChangeEvent<HTMLInputElement>,
		keyForDeleteUpload: string
	) => {
		const files = file.target.files;
		if (files) {
			const formData = new FormData();
			formData.append('files', files[0]);
			try {
				const response = await postUploadApi(formData).unwrap();
				const uploadedFiles = response.data;
				const UPDATEIMAGE = {
					newImage: uploadedFiles[0],
					oldImage: keyForDeleteUpload,
					oldKey: keyForDeleteUpload.slice(54, 100)
				};
				await updateImage({
					subGadgetId: data?.subGadgetId!,
					...UPDATEIMAGE
				});
				refetch()
			} catch (error) {
				console.error('Failed to upload files:', error);
			}
		}
	};

	return (
		<section className={scss.EditSections}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.pages_text_div}>
						<p onClick={() => navigate('/admin')}>Товары »</p>
						<p
							onClick={() =>
								navigate(`/admin/goodsPage/product-page/${data?.gadgetId}`)
							}
						>
							{data?.nameOfGadget}
						</p>
						<p className={scss.edit_page_text}>Редактировать</p>
					</div>
					<div className={scss.content_and_border}>
						<h2>Редактировать</h2>
						<div className={scss.border}></div>
					</div>
					{isLoading ? (
						<h1>isLoading...</h1>
					) : (
						<div className={scss.form_container}>
							<div className={scss.form_content_1}>
								<div className={scss.form_1}>
									<div className={scss.label_and_input_div}>
										<label>Фото</label>
										<div className={scss.div_images}>
											{data?.images.slice(0, 6).map((c, index) => (
												<div
													className={scss.images_div}
													key={index}
													onMouseEnter={() => setHoverEditIcon(index)}
													onMouseLeave={() => setHoverEditIcon(null)}
												>
													<img src={c} alt="logo" />
													{hoverEditIcon === index && (
														<p
															onClick={(e) => {
																e.stopPropagation();
																updateImageRefClick(index);
															}}
															className={scss.edit_text}
														>
															изменить
														</p>
													)}
													<input
														type="file"
														onChange={(
															e: React.ChangeEvent<HTMLInputElement>
														) => changeEditFileFunk(e, c)}
														ref={(el) => (updateImageRef.current[index] = el)}
														style={{ display: 'none' }}
													/>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className={scss.form_2}>
									<div className={scss.label_and_input_div}>
										<label>Название товара</label>
										<Input
											onChange={changeProductNameFunk}
											defaultValue={data?.nameOfGadget}
											className={scss.input}
											value={productName}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>цена</label>
										<Input
											defaultValue={data?.price}
											onChange={changePrice}
											value={priceEdit}
											className={scss.input}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>количество</label>
										<Input
											onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
												setQuantityEdit(Number(event.target.value))
											}
											value={quantityEdit}
											className={scss.input}
										/>
									</div>
									{data && data?.uniField === null && (
										<>
											<div className={scss.label_and_input_div}>
												<label>Материал браслета/ремешка</label>
												<Select
													className={scss.input_for_form}
													// placeholder="Материал браслета/ремешка"
													placeholder={`${(data.uniField && data.uniField[0]) || 'Материал браслета/ремешка'}`}
													options={
														optionsSmartWatchesAndBracelets &&
														optionsSmartWatchesAndBracelets.map(
															(el, index) => ({
																value: String(index + 1),
																label: <p>{el.label}</p>
															})
														)
													}
													onChange={(value) =>
														setMaterialBraceletEdit(
															optionsSmartWatchesAndBracelets[
																Number(Number(value) - 1)
															].label
														)
													}
													value={materialBraceletEdit}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Материал корпуса</label>
												<Select
													className={scss.input_for_form}
													placeholder={`${(data.uniField && data.uniField[1]) || 'Материал корпуса'}`}
													options={
														optionsSmartWatchesAndBracelets &&
														optionsSmartWatchesAndBracelets.map(
															(el, index) => ({
																value: String(index + 1),
																label: <p>{el.label}</p>
															})
														)
													}
													onChange={(value) =>
														setMaterialBodyEdit(
															optionsSmartWatchesAndBracelets[
																Number(Number(value) - 1)
															].label
														)
													}
													value={materialBodyEdit}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Размер смарт часов (mm)</label>
												<Select
													className={scss.input_for_form}
													// placeholder="Размер смарт часов (mm)"
													placeholder={`${(data.uniField && data.uniField[2]) || 'Размер смарт часов (mm)'}`}
													options={
														OptionsForLaptop &&
														OptionsForLaptop.map((el, index) => ({
															value: String(index + 1),
															label: <p>{el.label}</p>
														}))
													}
													onChange={(value) =>
														setSizeWatchEdit(
															OptionsForLaptop[Number(Number(value) - 1)].label
														)
													}
													value={sizeWatchEdit}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Диагональ дисплея (дюйм)</label>
												<Select
													className={scss.input_for_form}
													// placeholder="Диагональ дисплея (дюйм)"
													placeholder={`${(data.uniField && data.uniField[3]) || 'Диагональ дисплея (дюйм)'}`}
													options={
														OptionsForLaptop &&
														OptionsForLaptop.map((el, index) => ({
															value: String(index + 1),
															label: <p>{el.label}</p>
														}))
													}
													onChange={(value) =>
														setDumasEdit(
															OptionsForLaptop[Number(Number(value) - 1)].label
														)
													}
													value={dumasEdit}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Пол</label>
												<Radio.Group
													onChange={(e) => setGenderWatchEdit(e.target.value)}
													value={genderWatchEdit}
												>
													<Radio value={'Унисекс'}>Унисекс</Radio>
													<Radio value={'Женский'}>Женский</Radio>
													<Radio value={'Мужской'}>Мужской</Radio>
												</Radio.Group>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Водонепроницаемые</label>
												<Radio.Group
													onChange={(e) => setWaterproofEdit(e.target.value)}
													value={waterproofEdit}
												>
													<Radio value={'Да'}>Да</Radio>
													<Radio value={'Нет'}>Нет</Radio>
												</Radio.Group>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Беспроводные интерфейсы</label>
												<Radio.Group
													onChange={(e) => setWirelessEdit(e.target.value)}
													value={wirelessEdit}
												>
													<Radio value={'Bluetooth'}>Bluetooth</Radio>
													<Radio value={'Wi-Fi'}>Wi-Fi</Radio>
													<Radio value={'GPS'}>GPS</Radio>
													<Radio value={'NFC'}>NFC</Radio>
												</Radio.Group>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Форма корпуса</label>
												<Radio.Group
													onChange={(e) => setShapeBodyEdit(e.target.value)}
													value={shapeBodyEdit}
												>
													<Radio value={'Квадратная'}>Квадратная</Radio>
													<Radio value={'Круглая'}>Круглая</Radio>
													<Radio value={'Овальная'}>Овальная</Radio>
													<Radio value={'Прямоугольная'}>Прямоугольная</Radio>
												</Radio.Group>
											</div>
										</>
									)}
									{data && data.uniField !== null && (
										<>
											<div className={scss.colors_div}>
												<label>Цвет товара</label>
												<div className={scss.color_div}>
													{/* <Space direction="vertical">
											<ColorPicker
												defaultValue={token.colorPrimary}
												styles={{ popupOverlayInner: { width: 480 } }}
												presets={presets}
												panelRender={customPanelRender}
											/>
										</Space> */}
													<p>{colorEdit ? colorEdit : data?.mainColour}</p>
													<ColorPicker
														presets={presets}
														onChange={(color) =>
															changeColorPicker(color.toHexString())
														}
														defaultValue={`${colorEdit}`}
														value={colorEdit}
													/>
													<IconColorPicker
														width={'19px'}
														height={'19px'}
														color="rgb(145, 150, 158)"
													/>
												</div>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Объем памяти</label>
												<Select
													className={scss.input}
													placeholder="Объем памяти"
													options={
														gBiteCatalog &&
														gBiteCatalog.map((el, index) => ({
															value: String(index + 1),
															label: <p>{el.gb}</p>
														}))
													}
													onChange={(value) =>
														setMemoryEdit(
															gBiteCatalog[Number(Number(value) - 1)].gb
														)
													}
													value={memoryEdit}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Оперативная память</label>
												<Select
													className={scss.input}
													placeholder="Оперативная память"
													options={
														moreGBiteCatalog &&
														moreGBiteCatalog.map((el, index) => ({
															value: String(index + 1),
															label: <p>{el.gb}</p>
														}))
													}
													onChange={(value) =>
														setRamEdit(
															moreGBiteCatalog[Number(Number(value) - 1)].gb
														)
													}
													value={ramEdit}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Кол-во SIM-карт</label>
												<Select
													className={scss.input}
													placeholder="Кол-во SIM-карт"
													options={
														simCards &&
														simCards.map((el, index) => ({
															value: String(index + 1),
															label: <p>{el.sumCard}</p>
														}))
													}
													onChange={(value) =>
														setCountSimEdit(
															simCards[Number(Number(value) - 1)].sumCard
														)
													}
													value={countSimEdit}
												/>
											</div>
											<div className={scss.buttons_div}>
												<Button
													onClick={handleEditApiFunk}
													className={scss.button}
												>
													Редактировать
												</Button>
												<Button
													onClick={() =>
														navigate(
															`/admin/goodsPage/product-page/${data?.gadgetId}`
														)
													}
													className={scss.button}
												>
													отмена
												</Button>
											</div>
										</>
									)}
								</div>
							</div>
							<div className={scss.form_content_1}>
								<div className={scss.form_2}>
									{data && data.uniField === null && (
										<>
											<div className={scss.colors_div}>
												<label>Цвет товара</label>
												<div className={scss.color_div}>
													<p>{colorEdit}</p>
													<ColorPicker
														presets={presets}
														onChange={(color) =>
															changeColorPicker(color.toHexString())
														}
														defaultValue={`${colorEdit}`}
														value={colorEdit}
													/>
													<IconColorPicker
														width={'19px'}
														height={'19px'}
														color="rgb(145, 150, 158)"
													/>
												</div>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Объем памяти</label>
												<Select
													className={scss.input}
													placeholder="Объем памяти"
													options={
														gBiteCatalog &&
														gBiteCatalog.map((el, index) => ({
															value: String(index + 1),
															label: <p>{el.gb}</p>
														}))
													}
													onChange={(value) =>
														setMemoryEdit(
															gBiteCatalog[Number(Number(value) - 1)].gb
														)
													}
													value={memoryEdit}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Оперативная память</label>
												<Select
													className={scss.input}
													placeholder="Оперативная память"
													options={
														moreGBiteCatalog &&
														moreGBiteCatalog.map((el, index) => ({
															value: String(index + 1),
															label: <p>{el.gb}</p>
														}))
													}
													onChange={(value) =>
														setRamEdit(
															moreGBiteCatalog[Number(Number(value) - 1)].gb
														)
													}
													value={ramEdit}
												/>
											</div>
											<div className={scss.label_and_input_div}>
												<label>Кол-во SIM-карт</label>
												<Select
													className={scss.input}
													placeholder="Кол-во SIM-карт"
													options={
														simCards &&
														simCards.map((el, index) => ({
															value: String(index + 1),
															label: <p>{el.sumCard}</p>
														}))
													}
													onChange={(value) =>
														setCountSimEdit(
															simCards[Number(Number(value) - 1)].sumCard
														)
													}
													value={countSimEdit}
												/>
											</div>
										</>
									)}
								</div>
							</div>
							{data && data.uniField === null && (
								<div className={scss.button_div}>
									<Button onClick={handleEditApiFunk} className={scss.button}>
										Редактировать
									</Button>
									<Button
										onClick={() =>
											navigate(
												`/admin/goodsPage/product-page/${data?.gadgetId}`
											)
										}
										className={scss.button}
									>
										отмена
									</Button>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default EditSections;
