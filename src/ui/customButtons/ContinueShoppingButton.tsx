import { FC, MouseEventHandler, ReactNode } from 'react';
import scss from './ContinueShoppingButton.module.scss';

interface ContinueShoppingButtonProps {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const ContinueShoppingButton: FC<ContinueShoppingButtonProps> = ({
	children,
	onClick
}) => {
	return (
		<button onClick={onClick} className={scss.ContinueShop}>
			{children}
		</button>
	);
};

export default ContinueShoppingButton;
