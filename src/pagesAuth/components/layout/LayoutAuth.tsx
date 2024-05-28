import scss from './LayoutAuth.module.scss';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage.tsx';
import RegisterPage from '../pages/RegisterPage.tsx';
import ForgotPasswordPage from '../pages/ForgotPasswordPage.tsx';
import NewForgotPassword from '../pages/newForgotPassword/NewForgotPassword.tsx';

const LayoutAuth = () => {
	return (
		<>
			<div className={scss.Layout}>
				<main>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/forgotPassword" element={<ForgotPasswordPage />} />
						<Route path="/newforgotPassword" element={<NewForgotPassword />} />
					</Routes>
				</main>
			</div>
		</>
	);
};

export default LayoutAuth;
