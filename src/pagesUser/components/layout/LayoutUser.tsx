import scss from './LayoutUser.module.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import NotFound from '../pages/notFound/NotFound';
import HomePage from '../pages/HomePage';
import { CardProductPage } from '@/src/UI/CardProductPage/CardProductPage';
import CategoryProduct from '../pages/homeSections/CategoryProduct';
const LayoutUser = () => {
	const { pathname } = useLocation();
	if (pathname === '/*') {
		return (
			<Routes>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		);
	}
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/result" element={<HomePage />} />
						<Route path="/products/:productId" element={<CardProductPage />} />
						<Route path="/products" element={<CategoryProduct />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutUser;
