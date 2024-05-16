import React, { ReactNode } from 'react';
import { ConfigProvider, Modal, theme } from 'antd';

interface ModalNewsletterProps {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: ReactNode;
}

const CustomModal: React.FC<ModalNewsletterProps> = ({
	isModalOpen,
	setIsModalOpen,
	children
}) => {
	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			colorBgElevated: 'white'
		}
	};

	return (
		<>
			<ConfigProvider theme={antdThemeConfig}>
				<Modal
					visible={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={null}
				>
					{children}
				</Modal>
			</ConfigProvider>
		</>
	);
};

export default CustomModal;
