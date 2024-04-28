import AboutService from './homeSections/AboutService.tsx';
import PlacingAnOrder from './placingAnOrder/PlacingAnOrder.tsx';

const HomePage = () => {
	return (
		<>
			<PlacingAnOrder />
			<AboutService />
		</>
	);
};

export default HomePage;
