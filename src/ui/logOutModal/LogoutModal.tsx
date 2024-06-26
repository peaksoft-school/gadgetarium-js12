import scss from './LogoutModal.module.scss';

import { ConfigProvider, Modal, theme } from 'antd';
import React, { FC } from 'react';
import CancelButtonCustom from '../adminButtons/CancelButtonCustom';
import CustomButtonAdd from '../adminButtons/CustomButtonAdd';
import { useNavigate } from 'react-router-dom';

interface ModalNewsletterProps {
	isModalLogOut: boolean;
	setIsModalLogOut: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal: FC<ModalNewsletterProps> = ({
	isModalLogOut,
	setIsModalLogOut
}) => {
	const navigate = useNavigate();
	const handleOk = () => {
		setIsModalLogOut(false);
	};

	const handleCancel = () => {
		setIsModalLogOut(false);
	};

	const handleLogOut = () => {
		localStorage.removeItem('isAuth');
		localStorage.removeItem('token');
		navigate('/auth/login');
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
							<CancelButtonCustom onClick={handleCancel}>
								Отменить
							</CancelButtonCustom>
							<CustomButtonAdd onClick={handleLogOut}>Выйти</CustomButtonAdd>
						</div>
					</div>
				</Modal>
			</ConfigProvider>
		</div>
	);
};

export default LogoutModal;
