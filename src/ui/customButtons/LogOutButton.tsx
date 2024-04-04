import { FC, MouseEventHandler, ReactNode } from 'react';
import scss from './LogOutButton.module.scss';

interface LogOutButtonProps {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const LogOutButton: FC<LogOutButtonProps> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={scss.LogOutButton}>
			{children}
		</button>
	);
};

export default LogOutButton;
