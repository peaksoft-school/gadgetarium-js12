import scss from './LayoutAdmin.module.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ProductPage } from '../pages/ProductPage';

const LayoutAdmin = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/goodsPage/product-page/:productId" element={<ProductPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutAdmin;
