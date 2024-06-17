/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import scss from './EditSections.module.scss';
import { Button, Input, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { useState } from 'react';
import { cyan, generate, green, presetPalettes, red } from '@ant-design/colors';
import { Col, ColorPicker, Divider, Row, Space, theme } from 'antd';
import type { ColorPickerProps } from 'antd';
import { useGetCardProductQuery } from '@/src/redux/api/cardProductPage';

interface ColorTypes {
	id: number;
}

const arrayColors: ColorTypes[] = [
	{
		id: 1
	},
	{
		id: 2
	},
	{
		id: 3
	},
	{
		id: 4
	},
	{
		id: 5
	}
];
type Presets = Required<ColorPickerProps>['presets'][number];

const genPresets = (presets = presetPalettes) =>
	Object.entries(presets).map<Presets>(([label, colors]) => ({
		label,
		colors
	}));

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const EditSections = () => {
	const { productId } = useParams();
	const { data, isLoading } = useGetCardProductQuery(productId!);
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
								navigate(`/admin/goodsPage/product-page/${data?.id}`)
							}
						>
							{data?.productName}
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
										{arrayColors.map((el) => (
											<Space direction="vertical" key={el.id}>
												<ColorPicker
													defaultValue={token.colorPrimary}
													styles={{ popupOverlayInner: { width: 480 } }}
													presets={presets}
													panelRender={customPanelRender}
												/>
											</Space>
										))}
									</div>
								</div>
								<div className={scss.label_and_input_div}>
									<label>рейтинг</label>
									<Input className={scss.input} defaultValue={data?.Rating} />
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
										defaultValue={data?.productName}
										className={scss.input}
									/>
								</div>
								<div className={scss.label_and_input_div}>
									<label>цена</label>
									<Input defaultValue={data?.price} className={scss.input} />
								</div>
								<div className={scss.label_and_input_div}>
									<label>Предыдущий Цена</label>
									<Input
										defaultValue={data?.previousPrice}
										className={scss.input}
									/>
								</div>
								<div className={scss.label_and_input_div}>
									<label>buyProduc</label>
									<Input
										defaultValue={data?.buyProduc}
										className={scss.input}
									/>
								</div>
								<div
									className={scss.label_and_input_div}
									style={{ marginTop: '12px' }}
								>
									<label>Брент</label>
									<Input defaultValue={data?.brand} className={scss.input} />
								</div>
							</div>
						</div>
						{formInputs && (
							<div className={scss.form_content_1}>
								<div className={scss.form_2}>
									<div className={scss.label_and_input_div}>
										<label>Экран</label>
										<Input className={scss.input} defaultValue={data?.Screen} />
									</div>
									<div className={scss.label_and_input_div}>
										<label>Цвет</label>
										<Input
											className={scss.input}
											defaultValue={data?.colorProduct}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Дата выпуска</label>
										<Input
											className={scss.input}
											defaultValue={data?.DateOfIssue}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Операционная система</label>
										<Input
											className={scss.input}
											defaultValue={data?.operatingSystem}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Память</label>
										<Input className={scss.input} defaultValue={data?.Memory} />
									</div>
									<div className={scss.label_and_input_div}>
										<label>SIM-карты</label>
										<Input
											className={scss.input}
											defaultValue={data?.SIMCards}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>SIM-карты</label>
										<Input
											className={scss.input}
											defaultValue={data?.SIMCards}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Гарантия (месяцев)</label>
										<Input
											className={scss.input}
											defaultValue={data?.WarrantyMonths}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Процессор</label>
										<Input className={scss.input} defaultValue={data?.CPU} />
									</div>
									<div className={scss.label_and_input_div}>
										<label>Вес</label>
										<Input className={scss.input} defaultValue={data?.Weight} />
									</div>
									<div className={scss.label_and_input_div}>
										<label>Характеристики Размер бегового полотна (ДхШ)</label>
										<Input
											className={scss.input}
											defaultValue={data?.Characteristics.runningBeltSize}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Характеристики Диаметр задних валов</label>
										<Input
											className={scss.input}
											defaultValue={data?.Characteristics.rearShaftDiameter}
										/>
									</div>
								</div>
								<div className={scss.form_2}>
									<div className={scss.label_and_input_div}>
										<label>Описание фото</label>
										<Input className={scss.input} type="url" />
									</div>
									<div className={scss.label_and_input_div}>
										<label>Описание text</label>
										<Input
											className={scss.input}
											defaultValue={data?.Description.intoText1}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Описание text</label>
										<Input
											className={scss.input}
											defaultValue={data?.Description.intoText2}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Описание text</label>
										<Input
											className={scss.input}
											defaultValue={data?.Description.intoText3}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Описание text</label>
										<Input
											className={scss.input}
											defaultValue={data?.Description.intoText4}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Характеристики Тип дорожки:</label>
										<Input
											className={scss.input}
											defaultValue={data?.Characteristics.TrackType}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Характеристики Мощность двигателя</label>
										<Input
											className={scss.input}
											defaultValue={data?.Characteristics.enginePower}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Характеристики Регулировка скорости</label>
										<Input
											className={scss.input}
											defaultValue={data?.Characteristics.speedAdjustment}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Характеристики Беговое полотно</label>
										<Input
											className={scss.input}
											defaultValue={data?.Characteristics.runningBelt}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Характеристики Наклон бегового полотна</label>
										<Input
											className={scss.input}
											defaultValue={data?.Characteristics.runningBeltIncline}
										/>
									</div>
									<div className={scss.label_and_input_div}>
										<label>Характеристики Программы тренировки</label>
										<Input
											className={scss.input}
											defaultValue={data?.Characteristics.trainingPrograms}
										/>
									</div>
								</div>
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
