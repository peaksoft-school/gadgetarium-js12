import { FC, ReactNode } from 'react';
import scss from './Modal.module.scss';

interface ModalProps {
	children: ReactNode;
}
export const Modal: FC<ModalProps> = ({ children }) => {
	return (
		<div className={scss.modalContainer}>
			<div className={scss.ModalContentDiv}>{children}</div>
		</div>
	);
};