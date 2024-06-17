/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import scss from './Textarea.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
interface TextAreaTypes {
	text: string;
	setText: (text: string) => void;
	funk: () => void;
}

const Textarea: FC<TextAreaTypes> = ({ text, setText, funk }) => {
	const modules = {
		toolbar: [
			['bold', 'italic', 'underline'],
			[{ list: 'bullet' }, { list: 'ordered' }]
		]
	};
	const stripHtmlTags = (html: string) => {
		const doc = new DOMParser().parseFromString(html, 'text/html');
		return doc.body.textContent || '';
	};
	console.log(stripHtmlTags(text), 'esen');

	return (
		<div className={scss.layout}>
			<div className={scss.content}>
				<p>
					Описание <span>*</span>
				</p>
				<div className={scss.textarea}>
					<ReactQuill
						theme="snow"
						value={text}
						onChange={(value) => setText(value)}
						modules={modules}
						placeholder="Введите описание о товаре"
						className={scss.it}
					/>
				</div>
				<div className={scss.buttons}>
					<Link to={'/admin/product-adding/part-2'}>
						<button className={scss.cancel_b}>Отменить</button>
					</Link>
					<button onClick={funk} className={scss.add_b}>
						Добавить
					</button>
			
				</div>
			</div>
		</div>
	);
};

export default Textarea;
