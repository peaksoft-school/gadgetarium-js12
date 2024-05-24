import scss from './LayoutUser.module.scss';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SupHeader from './header/SupHeader.tsx';
import SubHeader from './header/SubHeader.tsx';
import HeaderMobile from './header/HeaderMobile.tsx';
import Footer from './footer/Footer';
import NotFound from '../pages/notFound/NotFound';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage.tsx';
import DeliveryPage from '../pages/DeliveryPage.tsx';
import FaqPage from '../pages/FaqPage.tsx';
import ContactsPage from '../pages/ContactsPage.tsx';
import CatalogPage from '../pages/CatalogPage.tsx';
import BasketPage from '../pages/BasketPage.tsx';
import ComparisonPage from '../pages/ComparisonPage.tsx';
import FavoritePage from '../pages/FavoritePage.tsx';
import { ProductPage } from '../pages/ProductPage.tsx';
import PayPage from '@/src/pagesUser/components/pages/PayPage.tsx';
import Profile from '../pages/personalAccountSections/Profile.tsx';
import Favorite from '../pages/personalAccountSections/Favorite.tsx';
import HistoryOfOrders from '../pages/personalAccountSections/HistoryOfOrders.tsx';
import HistorySinglePage from '../pages/personalAccountSections/HistorySinglePage.tsx';
import { ContextApi } from '@/src/context/FiltredProductsForApi.tsx';

const LayoutUser = () => {
	const { pathname } = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(true);
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	useEffect(() => {
		const changeIsMobile = () => {
			if (window.innerWidth <= 1100) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};
		changeIsMobile();
		window.addEventListener('resize', changeIsMobile);
		return () => {
			window.removeEventListener('resize', changeIsMobile);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY >= 75);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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
				{!isMobile ? (
					<>
						<ContextApi>
							<SupHeader />
							<SubHeader isMobile={isMobile} isScrolled={isScrolled} />
						</ContextApi>
					</>
				) : (
					<>
						<ContextApi>
							<HeaderMobile
								isOpenMobileMenu={isOpenMobileMenu}
								setIsOpenMobileMenu={setIsOpenMobileMenu}
							/>
						</ContextApi>
					</>
				)}
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/aboutstore" element={<AboutPage />} />
						<Route path="/delivery" element={<DeliveryPage />} />
						<Route path="/faq" element={<FaqPage />} />
						<Route path="/contacts" element={<ContactsPage />} />

						<Route
							path="/catalog/phones"
							element={
								<ContextApi>
									<CatalogPage />
								</ContextApi>
							}
						/>
						<Route path="/comparison" element={<ComparisonPage />} />
						<Route path="/favorite" element={<FavoritePage />} />
						<Route path="/basket" element={<BasketPage />} />
						{/* //! */}
						<Route
							path="/catalog/phones/:productId"
							element={<ProductPage />}
						/>
						<Route path="/pay/*" element={<PayPage />} />

						<Route path="personal-account/profile" element={<Profile />} />
						<Route path="personal-account/favorite" element={<Favorite />} />
						<Route
							path="personal-account/history-of-orders"
							element={<HistoryOfOrders />}
						/>
						<Route
							path="personal-account/history-of-orders/my-orders/:id"
							element={<HistorySinglePage />}
						></Route>
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutUser;
