import { FC, ReactNode } from 'react';
import scss from './CustomButtonAdd.module.scss';

interface CustomButtonAddProps {
	children: ReactNode;
}

const CustomButtonAdd: FC<CustomButtonAddProps> = ({ children }) => {
	return (
		<div className={scss.add_button}>
			<button>{children}</button>
		</div>
	);
};

export default CustomButtonAdd;
