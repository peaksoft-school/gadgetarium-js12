import scss from './LayoutAdmin.module.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from './header/Header';
import Footer from './footer/Footer';
import OrdersPage from '../pages/OrdersPage';
import OrderSinglePage from '../pages/ordersSections/OrderSinglePage';
import OrderInPending from '../pages/ordersSections/OrderInPending';
import OrderCourierOnTheWay from '../pages/ordersSections/OrderCourierOnTheWay';
import OrderDelivered from '../pages/ordersSections/OrderDelivered';
import OrderCancelled from '../pages/ordersSections/OrderCancelled';
import ReviewPage from '../pages/ReviewAdminPage';
import ProductsAdminPage from '../pages/ProductsAdminPage';
import OrdersAdminPage from '../pages/OrdersAdminPage';
import { ProductPage } from '../pages/ProductPage';


const LayoutAdmin = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />

						<Route path="/orders/in-processing" element={<OrdersPage/>}></Route>
						<Route path="/orders/in-pending" element={<OrderInPending/>}></Route>
						<Route path="/orders/courier-on-the-way" element={<OrderCourierOnTheWay/>}></Route>
						<Route path="/orders/delivered" element={<OrderDelivered/>}></Route>
						<Route path="/orders/canceled" element={<OrderCancelled/>}></Route>

						<Route path="/orders/in-processing/single-order/:id" element={<OrderSinglePage/>}></Route>
						<Route path="/orders/in-pending/single-order/:id" element={<OrderSinglePage/>}></Route>
						<Route path="/orders/courier-on-the-way/single-order/:id" element={<OrderSinglePage/>}></Route>
						<Route path="/orders/delivered/single-order/:id" element={<OrderSinglePage/>}></Route>
						<Route path="/orders/canceled/single-order/:id" element={<OrderSinglePage/>}></Route>
						<Route path="/review" element={<ReviewPage />} />
						<Route path="/productsAdmin" element={<ProductsAdminPage />} />
						<Route path="/ordersAdmin" element={<OrdersAdminPage />} />
						<Route path="/goodsPage/product-page/:productId" element={<ProductPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutAdmin;
