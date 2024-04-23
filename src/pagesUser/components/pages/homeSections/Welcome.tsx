import ProductsPromotion from '@/src/pagesUser/components/pages/productsPromotion/ProductsPromotion';
import scss from './Welcome.module.scss';
import Slider from '@/src/ui/keenSlider/Slider';
const Welcome = () => {
	return (
		<div className={scss.Welcome}>
			<Slider />
			<div className="container">
				<div className={scss.content}>
					<ProductsPromotion />
					<h1>Welcome user!</h1>
					<h1>Welcome user!</h1>
					<h1>Welcome user!</h1>
					<h1>Welcome user!</h1>
					<h1>Welcome user!</h1>
					<h1>Welcome user!</h1>
					<h1>Welcome user!</h1>
					<h1>Welcome user!</h1>
					<h1>Welcome user!</h1>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
