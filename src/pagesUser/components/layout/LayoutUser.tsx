import scss from './LayoutUser.module.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import NotFound from '../pages/notFound/NotFound';
import HomePage from '../pages/HomePage';
import { IconGadgetarium } from '@/src/assets/icons';

const LayoutUser = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<IconGadgetarium />
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

export default LayoutUser;
