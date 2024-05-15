import { FC, ReactNode } from 'react';
import scss from './CancelButtonCustom.module.scss';

interface CancelProps {
	// setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: ReactNode;
	onClick: () => void;
}

const CancelButtonCustom: FC<CancelProps> = ({
	// setIsModalOpen,
	children,
	onClick
}) => {
	return (
		<div className={scss.cancel_button}>
			<button onClick={onClick}>{children}</button>
		</div>
	);
};

export default CancelButtonCustom;
