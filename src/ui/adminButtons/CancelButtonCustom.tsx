import { FC, ReactNode } from 'react';
import scss from './CancelButtonCustom.module.scss';

interface CancelProps {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: ReactNode;
}

const CancelButtonCustom: FC<CancelProps> = ({ setIsModalOpen, children }) => {
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div className={scss.cancel_button}>
			<button onClick={handleCancel}>{children}</button>
		</div>
	);
};

export default CancelButtonCustom;
