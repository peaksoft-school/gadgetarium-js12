import { useState } from 'react';
import scss from './CustomSelect.module.scss';
const CustomSelect = () => {
	const [selectColor, setSelectColor] = useState('#2C68F5');

	return (
		<div className={scss.CustomSelect}>
			<select
				style={{ color: selectColor }}
				onChange={(e) => setSelectColor(e.target.value)}
				className={scss.selects}
			>
				<option
					style={{
						color: '#2C68F5'
					}}
					value="#2C68F5"
				>
					В ожидании
				</option>
				<option
					style={{
						color: '#F99808'
					}}
					value="#F99808"
				>
					В обработке
				</option>
				<option
					style={{
						color: '#08A592'
					}}
					value="#08A592"
				>
					Курьер в пути
				</option>
				<option
					style={{
						color: '#2FC509'
					}}
					value="#2FC509"
				>
					Доставлены
				</option>
				<option
					style={{
						color: '#F10000'
					}}
					value="#F10000"
				>
					Отменены
				</option>
			</select>
		</div>
	);
};

export default CustomSelect;
