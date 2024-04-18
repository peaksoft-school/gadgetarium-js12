import { LoginPage } from '../pages/LoginPage.tsx';
import RegisterPage from '../pages/RegisterPage.tsx';
import ForgotPasswordPage from '../pages/ForgotPasswordPage.tsx';
import scss from './LayoutAuth.module.scss';
import { Route, Routes } from 'react-router-dom';

const LayoutAuth = () => {
	return (
		<>
			<div className={scss.Layout}>
				<main>
					<Routes>
						<Route path="/auth/loginPages" element={<LoginPage />} />
						<Route path="/auth/register" element={<RegisterPage />} />
						<Route
							path="/auth/forgotPassword"
							element={<ForgotPasswordPage />}
						/>
					</Routes>
				</main>
			</div>
		</>
	);
};

export default LayoutAuth;
