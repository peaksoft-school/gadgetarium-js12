import ProductsPromotion from '@/src/pagesUser/components/pages/productsPromotion/ProductsPromotion';
import scss from './Welcome.module.scss';
import Slider from '@/src/ui/keenSlider/Slider';
import ProductsNew from '../productsNew/ProductsNew';
import ProductsRecom from '../productsRecom/ProductsRecom';
const Welcome = () => {
	return (
		<div className={scss.Welcome}>
			<div className={scss.content}>
				<Slider />
				<ProductsPromotion />
				<ProductsNew />
				<ProductsRecom />
			</div>
		</div>
	);
};

export default Welcome;
