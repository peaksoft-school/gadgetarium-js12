import SliderDiscount from '@/src/pagesUser/components/pages/homeSections/SliderDiscount.tsx';
import ProductsPromotion from '@/src/pagesUser/components/pages/homeSections/ProductsPromotion.tsx';
import ProductsNew from '@/src/pagesUser/components/pages/homeSections/ProductsNew.tsx';
import ProductsRecom from '@/src/pagesUser/components/pages/homeSections/ProductsRecom.tsx';
import AboutService from './homeSections/AboutService.tsx';
import { notify } from '@/src/utils/helpers/notify.tsx';
import { ToastContainer } from 'react-toastify';
// import { Route } from 'react-router-dom';

const HomePage = () => {
	return (
		<>
			<SliderDiscount />
			<ProductsPromotion />
			<ProductsNew />
			<ProductsRecom />
			<AboutService />
			<ToastContainer />
		</>
	);
};

export default HomePage;
