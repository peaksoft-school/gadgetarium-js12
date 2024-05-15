import { useState } from 'react';
import scss from './Textarea.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Link } from 'react-router-dom';

const Textarea = () => {
	const [text, setText] = useState('');

	const modules = {
		toolbar: [
			['bold', 'italic', 'underline'],
			[{ list: 'bullet' }, { list: 'ordered' }]
		]
	};
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
						onChange={setText}
						modules={modules}
						placeholder="Введите описание о товаре"
						className={scss.it}
					/>
				</div>
				<div className={scss.buttons}>
					<Link to={"/admin/product-adding/part-2"}>
					<button className={scss.cancel_b}>Отменить</button>
					</Link>
					<button className={scss.add_b}>Добавить</button>
				</div>
			</div>
		</div>
	);
};

export default Textarea;
