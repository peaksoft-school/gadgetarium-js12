/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import scss from './EditSections.module.scss';
import { Button, Input, Radio, Select, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import React, { useState } from 'react';
import { generate, green, presetPalettes, red } from '@ant-design/colors';
import {
	Col,
	ColorPicker,
	Divider,
	Row,
	Space,
	theme,
	ColorPickerProps
} from 'antd';
import { useGetCardProductQuery } from '@/src/redux/api/cardProductPage';
import { useEditProductByIdApiMutation } from '@/src/redux/api/editProductById';
import {
	useDeleteS3UploadMutation,
	usePostUploadMutation
} from '@/src/redux/api/pdf';
import { IconColorPicker, IconPhotoPlus } from '@tabler/icons-react';
import { gBiteCatalog, moreGBiteCatalog, simCards } from '@/src/data/Catalog';
import {
	OptionsForLaptop,
	optionsSmartWatchesAndBracelets
} from '@/src/data/InputSelect';

type Presets = Required<ColorPickerProps>['presets'][number];

const genPresets = (presets = presetPalettes) =>
	Object.entries(presets).map<Presets>(([label, colors]) => ({
		label,
		colors
	}));

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const EditSections = () => {
	const { productId } = useParams();
	const editInputFileRef = React.useRef<HTMLInputElement>(null);
	const [formDataFile, setFormDataFile] = useState<string[]>([]);
	const [productName, setProductName] = useState<string>('');
	const [colorEdit, setColorEdit] = useState<string>('');
	const [priceEdit, setPriceEdit] = useState<string>('');
	const [ramEdit, setRamEdit] = useState<string>('');
	const [memoryEdit, setMemoryEdit] = useState<string>('');
	const [countSimEdit, setCountSimEdit] = useState<string>('');
	const [editProductById] = useEditProductByIdApiMutation();
	const [deleteUploadApi] = useDeleteS3UploadMutation();
	const [quantityEdit, setQuantityEdit] = useState<string>('');
	const [postUploadApi] = usePostUploadMutation();
	const [warrantyEdit, setWarrantyEdit] = useState<number>(0);
	const [materialBraceletEdit, setMaterialBraceletEdit] = useState<string>('');
	const [materialBodyEdit, setMaterialBodyEdit] = useState<string>('');
	const [sizeWatchEdit, setSizeWatchEdit] = useState<string>('');
	const [dumasEdit, setDumasEdit] = useState<string>('');
	const [genderWatchEdit, setGenderWatchEdit] = useState<string>('');
	const [waterproofEdit, setWaterproofEdit] = useState<string>('');
	const [wirelessEdit, setWirelessEdit] = useState<string>('');
	const [shapeBodyEdit, setShapeBodyEdit] = useState<string>('');
	const { data, isLoading } = useGetCardProductQuery({
		id: Number(productId)
	});
	const navigate = useNavigate();
	const [formInputs, setFormInputs] = useState<boolean>(false);

	const { token } = theme.useToken();
	const presets = genPresets({
		primary: generate(token.colorPrimary),
		red,
		green
	});

	const customPanelRender: ColorPickerProps['panelRender'] = (
		_,
		{ components: { Picker, Presets } }
	) => (
		<Row justify="space-between" wrap={false}>
			<Col span={12}>
				<Presets />
			</Col>
			<Divider type="vertical" style={{ height: 'auto' }} />
			<Col flex="auto">
				<Picker />
			</Col>
		</Row>
	);

	const handleEditApiFunk = async () => {
		const DATA = {
			quantity: quantityEdit,
			price: priceEdit,
			colour: colorEdit,
			images: formDataFile
		};

		try {
			await editProductById({
				...DATA
			});
		} catch (error) {
			console.error(error);
		}
	};

	const onPreview = async (file: UploadFile) => {
		let src = file.url as string;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj as FileType);
				reader.onload = () => resolve(reader.result as string);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow?.document.write(image.outerHTML);
	};

	const changeRamFunk = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRamEdit(event.target.value);
	};

	function editFileRefClick() {
		if (editInputFileRef.current) {
			editInputFileRef.current.click();
		}
	}

	function changeProductNameFunk(event: React.ChangeEvent<HTMLInputElement>) {
		setProductName(event.target.value);
	}

	const changePrice = function (e: React.ChangeEvent<HTMLInputElement>) {
		setPriceEdit(e.target.value);
	};

	const changeColorPicker = (value: string) => {
		setColorEdit(value);
	};

	const changeEditFileFunk = async (
		file: React.ChangeEvent<HTMLInputElement>
	) => {
		const files = file.target.files;
		if (files) {
			const formData = new FormData();
			for (let i = 0; i < files.length; i++) {
				formData.append('files', files[i]);
			}
			try {
				const response = await postUploadApi(formData).unwrap();
				const uploadedFiles = response.data.slice(0, 6);
				setFormDataFile(uploadedFiles);
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
					<div className={scss.form_container}>
						<div className={scss.form_content_1}>
							<div className={scss.form_1}>
								<div className={scss.label_and_input_div}>
									<label>Фото</label>
									{formDataFile.length >= 1 ? (
										<div className={scss.edit_images}>
											{formDataFile.map((el, index) => (
												<>
													<img key={index + 1} src={el} alt="logo edit" />
												</>
											))}
										</div>
									) : (
										<div onClick={editFileRefClick} className={scss.file_div}>
											<input
												type="file"
												ref={editInputFileRef}
												style={{ display: 'none' }}
												onChange={changeEditFileFunk}
												multiple
											/>
											<div className={scss.divplay_file_contents}>
												<IconPhotoPlus
													color="rgb(145, 150, 158)"
													width={'36px'}
													height={'33px'}
												/>
												<div className={scss.file_text_div}>
													<p>Нажмите или перетащите сюда файл</p>
													<div className={scss.div_for_quantity_photo_text_div}>
														<li>Минимальное разрешение - 450x600</li>
														<li>максимальное количество - 6 фото</li>
													</div>
												</div>
											</div>
										</div>
									)}
									{/* <div onClick={editFileRefClick} className={scss.file_div}>
										<input
											type="file"
											ref={editInputFileRef}
											style={{ display: 'none' }}
											onChange={changeEditFileFunk}
											multiple
										/>
										<div className={scss.divplay_file_contents}>
											<IconPhotoPlus
												color="rgb(145, 150, 158)"
												width={'36px'}
												height={'33px'}
											/>
											<div className={scss.file_text_div}>
												<p>Нажмите или перетащите сюда файл</p>
												<div className={scss.div_for_quantity_photo_text_div}>
													<li>Минимальное разрешение - 450x600</li>
													<li>максимальное количество - 6 фото</li>
												</div>
											</div>
										</div>
									</div> */}
								</div>
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
											value={colorEdit}
										/>
										<IconColorPicker
											width={'19px'}
											height={'19px'}
											color="rgb(145, 150, 158)"
										/>
									</div>
								</div>
								{/* <div className={scss.label_and_input_div}>
									<label>Количество</label>
									<Input className={scss.input} defaultValue={data?.quantity} />
								</div> */}
							</div>
							<div className={scss.form_2}>
								<div className={scss.label_and_input_div}>
									<label>Product Name</label>
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
											setQuantityEdit(event.target.value)
										}
										value={quantityEdit}
										defaultValue={data?.quantity}
										className={scss.input}
									/>
								</div>
							</div>
						</div>
						{formInputs && (
							<div className={scss.form_content_1}>
								<div className={scss.form_2}>
									<div className={scss.label_and_input_div}>
										<label>Цвет</label>
										<Input
											className={scss.input}
											defaultValue={data?.mainColour}
										/>
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
												setRamEdit(gBiteCatalog[Number(Number(value) - 1)].gb)
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
									<div className={scss.label_and_input_div}>
										<label>Гарантия (месяцев)</label>
										<Input
											className={scss.input}
											defaultValue={data?.warranty}
											placeholder="Гарантия (месяцев)"
											onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
												setWarrantyEdit(Number(e.target.value))
											}
										/>
									</div>
								</div>
								{data && data?.uniField === null && (
									<div className={scss.form_2}>
										<div className={scss.label_and_input_div}>
											<label>Материал браслета/ремешка</label>
											<Select
												className={scss.input_for_form}
												placeholder="Материал браслета/ремешка"
												options={
													optionsSmartWatchesAndBracelets &&
													optionsSmartWatchesAndBracelets.map((el, index) => ({
														value: String(index + 1),
														label: <p>{el.label}</p>
													}))
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
												placeholder="Материал корпуса"
												options={
													optionsSmartWatchesAndBracelets &&
													optionsSmartWatchesAndBracelets.map((el, index) => ({
														value: String(index + 1),
														label: <p>{el.label}</p>
													}))
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
												placeholder="Размер смарт часов (mm)"
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
												placeholder="Диагональ дисплея (дюйм)"
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
									</div>
								)}
							</div>
						)}
						<div className={scss.button_div}>
							<Button
								className={scss.button}
								onClick={() => setFormInputs(!formInputs)}
							>
								{formInputs ? 'Скрыть' : 'Показать ещё'}
							</Button>
							<Button className={scss.button}>Редактировать</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EditSections;
