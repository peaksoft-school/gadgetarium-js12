import scss from './LogoutModal.module.scss';

import { ConfigProvider, Modal, theme } from 'antd';
import React, { FC } from 'react';
import CancelButtonCustom from '../adminButtons/CancelButtonCustom';
import CustomButtonAdd from '../adminButtons/CustomButtonAdd';

interface ModalNewsletterProps {
	isModalLogOut: boolean;
	setIsModalLogOut: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal: FC<ModalNewsletterProps> = ({
	isModalLogOut,
	setIsModalLogOut
}) => {
	const handleOk = () => {
		setIsModalLogOut(false);
	};

	const handleCancel = () => {
		setIsModalLogOut(false);
	};

	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			colorBgElevated: 'white'
		}
	};
	return (
		<div className={scss.LogoutModal}>
			<ConfigProvider theme={antdThemeConfig}>
				<Modal
					visible={isModalLogOut}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={null}
				>
					<div className={scss.logOut}>
						<p>Вы уверены, что хотите выйти?</p>
						<div className={scss.buttons}>
							<CancelButtonCustom setIsModalOpen={setIsModalLogOut}>
								Отменить
							</CancelButtonCustom>
							<CustomButtonAdd>Выйти</CustomButtonAdd>
						</div>
					</div>
				</Modal>
			</ConfigProvider>
		</div>
	);
};

export default LogoutModal;
