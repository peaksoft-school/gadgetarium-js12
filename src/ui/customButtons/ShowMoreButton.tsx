import { FC, MouseEventHandler, ReactNode } from 'react';
import scss from './ShowMoreButton.module.scss';

interface ShowMoreButtonProps {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={scss.ShowButton}>
			{children}
		</button>
	);
};

export default ShowMoreButton;
