import { FC, MouseEventHandler, ReactNode } from 'react';
import scss from './CancelButton.module.scss';

interface CancelButtonProps {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const CancelButton: FC<CancelButtonProps> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={scss.CancelButton}>
			{children}
		</button>
	);
};

export default CancelButton;
