//!
import { FC, useState } from 'react';
import { IconDown } from '@/src/assets/icons';
import scss from './SecondSelect.module.scss';

interface handleChangeProps {
	value: string;
	color: string;
}

const SecondSelect: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [select, setSelect] = useState('В ожидании');
	const [selectColor, setSelectColor] = useState('#2C68F5');

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleChange = ({ value, color }: handleChangeProps) => {
		setSelect(value);
		setSelectColor(color);
		setIsOpen(false);
	};

	return (
		<>
			<div className={scss.dropdown_select}>
				<div className={scss.selected_option_icon} onClick={toggleDropdown}>
					<span style={{ color: selectColor }} className={scss.selected_option}>
						{select}
					</span>
					<IconDown />
				</div>
				{isOpen && (
					<div className={scss.dropdown}>
						<button
							style={{ color: '#2C68F5' }}
							onClick={() =>
								handleChange({ value: 'В ожидании', color: '#2C68F5' })
							}
						>
							В ожидании
						</button>
						<button
							style={{ color: '#F99808' }}
							onClick={() =>
								handleChange({ value: 'В обработке', color: '#F99808' })
							}
						>
							В обработке
						</button>
						<button
							style={{ color: '#08A592' }}
							onClick={() =>
								handleChange({ value: 'Курьер в пути', color: '#08A592' })
							}
						>
							Курьер в пути
						</button>
						<button
							style={{ color: '#2FC509' }}
							onClick={() =>
								handleChange({ value: 'Доставлены', color: '#2FC509' })
							}
						>
							Доставлены
						</button>
						<button
							style={{ color: '#F10000' }}
							onClick={() =>
								handleChange({ value: 'Отменены', color: '#F10000' })
							}
						>
							Отменены
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default SecondSelect;
