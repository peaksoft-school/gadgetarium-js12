import { FC, ReactNode } from 'react';
import scss from './CustomButtonAdd.module.scss';

interface CustomButtonAddProps {
	children: ReactNode;
	onClick: () => void;
}

const CustomButtonAdd: FC<CustomButtonAddProps> = ({ children, onClick }) => {
	return (
		<div className={scss.add_button}>
			<button onClick={onClick}>{children}</button>
		</div>
	);
};

export default CustomButtonAdd;
