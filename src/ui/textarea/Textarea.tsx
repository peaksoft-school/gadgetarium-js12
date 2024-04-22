import { useState } from 'react';
import scss from './Textarea.module.scss';
import ReactQuill from 'react-quill';

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
					<button className={scss.cancel_b}>Отменить</button>
					<button className={scss.add_b}>Добавить</button>
				</div>
			</div>
		</div>
	);
};

export default Textarea;
