import scss from './LayoutAdmin.module.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from './header/Header';
import Footer from './footer/Footer';
import ReviewPage from '../pages/ReviewAdminPage';
import ProductsAdminPage from '../pages/ProductsAdminPage';
import OrdersAdminPage from '../pages/OrdersAdminPage';
import { ProductPage } from '../pages/ProductPage';
import ProductAddPage2 from '../pages/ProductAddPage2';
import ProductAddPage3 from '../pages/ProductAddPage3';


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
						<Route path="/goodsPage/product-page/:productId" element={<ProductPage />} />
						<Route path="/product-adding/part-2" element={<ProductAddPage2 />}></Route>
						<Route path="/product-adding/part-3" element={<ProductAddPage3 />}></Route>
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutAdmin;
