import scss from './LayoutUser.module.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import NotFound from '../pages/notFound/NotFound';
import HomePage from '../pages/HomePage';
import Welcome from '../pages/homeSections/Welcome';

const LayoutUser = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Welcome />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutUser;
