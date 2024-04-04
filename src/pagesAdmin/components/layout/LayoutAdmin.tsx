import scss from './LayoutAdmin.module.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from './header/Header';
import Footer from './footer/Footer';

const LayoutAdmin = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutAdmin;
