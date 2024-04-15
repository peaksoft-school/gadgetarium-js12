import { LoginPages } from '../pages/LoginPages';
import RegisterPages from '../pages/RegisterPages';
import ForgotPassword from '../pages/ForgotPassword';
import scss from './LayoutAuth.module.scss';
import { Route, Routes } from 'react-router-dom';

const LayoutAuth = () => {
	return (
		<>
			<div className={scss.Layout}>
				<main>
					<Routes>
						<Route path="/auth/loginPages" element={<LoginPages />} />
						<Route path="/auth/register" element={<RegisterPages />} />
						<Route path="/auth/forgotPassword" element={<ForgotPassword />} />
					</Routes>
				</main>
			</div>
		</>
	);
};

export default LayoutAuth;
