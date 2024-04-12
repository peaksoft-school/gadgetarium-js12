import LoginPages from '../pages/LoginPages';
import { RegisterPages } from '../pages/RegisterPages';
import scss from './LayoutAuth.module.scss';
import { Route, Routes } from 'react-router-dom';
const LayoutAuth = () => {
	return (
		<>
			<div className={scss.LayoutForAuth}>
				<main>
					<Routes>
						<Route path="/auth/loginPages" element={<LoginPages />} />
						<Route path="/auth/registerPages" element={<RegisterPages />} />
					</Routes>
				</main>
			</div>
		</>
	);
};

export default LayoutAuth;
