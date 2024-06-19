/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import scss from './ProductPartThree.module.scss';
import { IconFileDownload } from '@tabler/icons-react';
import Textarea from '@/src/ui/textarea/Textarea';
import {
	useGadgetGetNewProductsQuery,
	useGadgetSetDocumentMutation
} from '@/src/redux/api/addProductApi';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useGetCardProductQuery } from '@/src/redux/api/cardProductPage';

const ProductPartThree = () => {
	const [addProductsSetDocument] = useGadgetSetDocumentMutation();
	const { data: products = [] } = useGadgetGetNewProductsQuery();
	const gadgetId = products.length > 0 ? products[0].gadgetId : undefined;
	const { data } = useGetCardProductQuery({
		id: gadgetId!
	});
	const [text, setText] = useState<string>('');
	const [urlVidoeValue, setUrlVidoeValue] = useState<string>('');
	const navigate = useNavigate();
	const stripHtmlTags = (html: string) => {
		const doc = new DOMParser().parseFromString(html, 'text/html');
		return doc.body.textContent || '';
	};
	const handleSetDocumentForGadget = async () => {
		const DATA: ADDPRODUCTAPI.gadgetSetDocumentRequest = {
			description: stripHtmlTags(text),
			videoUrl: urlVidoeValue,
			pdf: String(data?.pdfUrl)
		};
		const { description, pdf, videoUrl } = DATA;
		if (text !== '' && urlVidoeValue !== '') {
			try {
				await addProductsSetDocument({
					subGadgetId: products![0].gadgetId,
					description,
					pdf,
					videoUrl
				});
			} catch (error) {
				console.log(error);
			}
		}
	};
	const changeUrlVidoeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrlVidoeValue(e.target.value);
	};
	const changeTextValueFunk = (e: string) => {
		setText(e);
	};

	return (
		<section className={scss.product}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.page_content_1}>
						<p className={scss.navigation_p}>
							<Link to={'/admin'}>
								<p>Товары »</p>
							</Link>{' '}
							<h3>Описание и обзор</h3>
						</p>
						<div className={scss.border_div}>
							<h3>Описание и обзор</h3>
							<div></div>
						</div>
					</div>
					<div className={scss.page_content_2}>
						<div className={scss.nav_div}>
							<div className={scss.nav_one}>
								<h3>1</h3>
								<p>Добавление товара</p>
							</div>
							<div className={scss.line}></div>
							<div className={scss.nav_two}>
								<h3>2</h3>
								<p>Установка цены и количества товара</p>
							</div>
							<div className={scss.line}></div>
							<div className={scss.nav_three}>
								<h3>3</h3>
								<p>Описание и обзор</p>
							</div>
						</div>

						<div className={scss.buttons_div}>
							<div className={scss.button_part_1}>
								<p>Загрузите видеообзор</p>
								<div className={scss.part}>
									<input
										type="url"
										placeholder="Вставьте ссылку на видеообзор"
										onChange={changeUrlVidoeValue}
										value={urlVidoeValue}
									/>
									<IconFileDownload />
								</div>
							</div>

							<div className={scss.button_part_2}>
								<p>Загрузите документ PDF</p>
								<div className={scss.part}>
									<input
										type="text"
										placeholder="Вставьте документ в PDF файле"
										value={data?.pdfUrl}
									/>
									<IconFileDownload />
								</div>
							</div>
						</div>
						<Textarea
							text={text}
							setText={changeTextValueFunk}
							funk={handleSetDocumentForGadget}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPartThree;
