import scss from './LayoutUser.module.scss';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SupHeader from './header/SupHeader.tsx';
import SubHeader from './header/SubHeader.tsx';
import HeaderMobile from './header/HeaderMobile.tsx';
import Footer from './footer/Footer';
import NotFound from '../pages/notFound/NotFound';
import HomePage from '../pages/HomePage';
// import AboutPage from '../pages/AboutPage.tsx';
// import DeliveryPage from '../pages/DeliveryPage.tsx';
// import FagPage from '../pages/FagPage.tsx';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage.tsx';
import AboutStorePage from '../pages/AboutStorePage/AboutStorePage.tsx';
import FAQPage from '../pages/FAQPage/FAQPage.tsx';
import DeliveryPage from '../pages/DeliveryPage/DeliveryPage.tsx';

const LayoutUser = () => {
	const { pathname } = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(true);
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	useEffect(() => {
		const changeIsMobile = () => {
			if (window.innerWidth < 1100) {
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
			setIsScrolled(window.scrollY > 75);
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
						<SupHeader />
						<SubHeader isMobile={isMobile} isScrolled={isScrolled} />
					</>
				) : (
					<>
						<HeaderMobile
							isOpenMobileMenu={isOpenMobileMenu}
							setIsOpenMobileMenu={setIsOpenMobileMenu}
						/>
					</>
				)}
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/aboutstore" element={<AboutStorePage />} />
						<Route path="/delivery" element={<DeliveryPage />} />
						<Route path="/faq" element={<FAQPage />} />
						<Route path="/contacts" element={< ContactsPage/>} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LayoutUser;
