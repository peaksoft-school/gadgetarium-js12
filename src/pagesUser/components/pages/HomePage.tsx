import SliderDiscount from '@/src/pagesUser/components/pages/homeSections/SliderDiscount.tsx';
import ProductsPromotion from '@/src/pagesUser/components/pages/homeSections/ProductsPromotion.tsx';
import ProductsNew from '@/src/pagesUser/components/pages/homeSections/ProductsNew.tsx';
import ProductsRecom from '@/src/pagesUser/components/pages/homeSections/ProductsRecom.tsx';
import AboutService from './homeSections/AboutService.tsx';
// import { Route } from 'react-router-dom';

const HomePage = () => {
	return (
		<>
			<SliderDiscount />
			<ProductsPromotion />
			<ProductsNew />
			<ProductsRecom />
			<AboutService />

		</>
	);
};

export default HomePage;
