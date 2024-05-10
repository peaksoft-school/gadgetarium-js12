import scss from './LayoutAdmin.module.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from './header/Header';
import Footer from './footer/Footer';
import ReviewPage from '../pages/ReviewAdminPage';
import ProductsAdminPage from '../pages/ProductsAdminPage';
import OrdersAdminPage from '../pages/OrdersAdminPage';

const LayoutAdmin = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/review" element={<ReviewPage />} />
						<Route path="/productsAdmin" element={<ProductsAdminPage />} />
						<Route path="/ordersAdmin" element={<OrdersAdminPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutAdmin;
