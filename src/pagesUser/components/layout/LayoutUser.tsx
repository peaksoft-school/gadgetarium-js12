import scss from './LayoutUser.module.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import NotFound from '../pages/notFound/NotFound';
import HomePage from '../pages/HomePage';
import AboutStore from '../pages/AboutStore';
import Delivery from '../pages/Delivery';
import Fag from '../pages/Fag';
import Contacts from '../pages/Contacts';

const LayoutUser = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/aboutstore" element={<AboutStore />} />
						<Route path="/delivery" element={<Delivery />} />
						<Route path="/fag" element={<Fag />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutUser;
