/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import scss from './EditSections.module.scss';
import { Button, Input, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import React, { useState } from 'react';
import { cyan, generate, green, presetPalettes, red } from '@ant-design/colors';
import { Col, ColorPicker, Divider, Row, Space, theme } from 'antd';
import type { ColorPickerProps } from 'antd';
import { useGetCardProductQuery } from '@/src/redux/api/cardProductPage';
import { useEditProductByIdApiMutation } from '@/src/redux/api/editProductById';
import { useDeleteS3UploadMutation, usePostUploadMutation } from '@/src/redux/api/pdf';

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
	const [formDataFile, setFormDataFile] = useState<FormData>();
	const [productName, setProductName] = useState<string>('');
	const [colorEdit, setColorEdit] = useState<string>('');
	const [priceEdit, setPriceEdit] = useState<string>('');
	const [ramEdit, setRamEdit] = useState<string>('');
	const [ratingEdit, setRatingEdit] = useState<string>('');
	const [editProductById] = useEditProductByIdApiMutation();
	const [deleteUploadApi] = useDeleteS3UploadMutation();
	const [postUploadApi] = usePostUploadMutation();
	const [warrantyEdit, setWarrantyEdit] = useState<number>(0);
	const [releaseDateEdit, setReleaseDateEdit] = useState<string>('');
	const [materialBraceletEdit, setMaterialBraceletEdit] = useState<string>('');
	const [materialBodyEdit, setMaterialBodyEdit] = useState<string>('');
	const [sizeWatchEdit, setSizeWatchEdit] = useState<string>('');
	const [dumasEdit, setDumasEdit] = useState<string>('');
	const { data, isLoading } = useGetCardProductQuery({
		id: Number(productId)
	});
	const navigate = useNavigate();
	const [formInputs, setFormInputs] = useState<boolean>(false);
	const [fileList, setFileList] = useState<UploadFile[]>([
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: `${data?.image}`
		}
	]);

	const { token } = theme.useToken();

	const presets = genPresets({
		primary: generate(token.colorPrimary),
		red,
		green,
		cyan
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

	const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
		setFileList(newFileList);
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
									<Upload
										action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
										listType="picture-card"
										fileList={fileList}
										onChange={onChange}
										onPreview={onPreview}
									>
										{fileList.length < 6 && '+ Upload'}
									</Upload>
								</div>
								<div className={scss.colors_div}>
									<label>Цвет товара</label>
									<div>
										<Space direction="vertical">
											<ColorPicker
												defaultValue={token.colorPrimary}
												styles={{ popupOverlayInner: { width: 480 } }}
												presets={presets}
												panelRender={customPanelRender}
											/>
										</Space>
									</div>
								</div>
								<div className={scss.label_and_input_div}>
									<label>рейтинг</label>
									<Input className={scss.input} defaultValue={data?.rating} />
								</div>
								<div className={scss.label_and_input_div}>
									<label>Количество</label>
									<Input className={scss.input} defaultValue={data?.quantity} />
								</div>
							</div>
							<div className={scss.form_2}>
								<div className={scss.label_and_input_div}>
									<label>Product Name</label>
									<Input
										defaultValue={data?.nameOfGadget}
										className={scss.input}
									/>
								</div>
								<div className={scss.label_and_input_div}>
									<label>цена</label>
									<Input defaultValue={data?.price} className={scss.input} />
								</div>
								<div className={scss.label_and_input_div}>
									<label>Предыдущий Цена</label>
									<Input defaultValue={data?.price} className={scss.input} />
								</div>
								<div className={scss.label_and_input_div}>
									<label>buyProduc</label>
									<Input defaultValue={data?.quantity} className={scss.input} />
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
										<label>Дата выпуска</label>
										<Input
											className={scss.input}
											defaultValue={data?.releaseDate}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Память</label>
										<Input className={scss.input} defaultValue={data?.memory} />
									</div>
									<div className={scss.label_and_input_div}>
										<label>SIM-карты</label>
										<Input
											className={scss.input}
											defaultValue={data?.countSim}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Гарантия (месяцев)</label>
										<Input
											className={scss.input}
											defaultValue={data?.warranty}
										/>
									</div>
								</div>
								{/* <div className={scss.form_2}>
									<div className={scss.label_and_input_div}>
										<label>Описание фото</label>
										<Input className={scss.input} type="url" />
									</div>
								</div> */}
							</div>
						)}
						<div className={scss.button_div}>
							<Button
								className={scss.button}
								onClick={() => setFormInputs(!formInputs)}
							>
								{formInputs ? 'Скрыть' : 'Показать ещё'}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EditSections;
