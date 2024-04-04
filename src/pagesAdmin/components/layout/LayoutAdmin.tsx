import HomePage from '../pages/HomePage';
import NotFound from '../pages/notFound/NotFound';
import Footer from './footer/Footer';
import Header from './header/Header';
import scss from './LayoutAdmin.module.scss';
import { Route, Routes } from 'react-router-dom';

const LayoutAdmin = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutAdmin;
