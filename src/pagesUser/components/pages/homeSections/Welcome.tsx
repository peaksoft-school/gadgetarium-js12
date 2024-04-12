<<<<<<< HEAD
import CategoryProduct from './CategoryProduct';
const Welcome = () => {
	return (
		<>
			<CategoryProduct />
		</>
=======
import AboutService from '../aboutService/AboutService';
import scss from './Welcome.module.scss';
const Welcome = () => {
	return (
		<div className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<AboutService />
				</div>
			</div>
		</div>
>>>>>>> dev
	);
};

export default Welcome;






