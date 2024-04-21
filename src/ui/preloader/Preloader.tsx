import { IconGadgetarium } from '@/src/assets/icons';
import scss from './Preloader.module.scss';

const Preloader = () => {
	return (
		<div className={scss.Preloader}>
			<div className={scss.ring}></div>
			<div className={scss.ring}></div>
			<div className={scss.ring}></div>
			<div className={scss.icon}>
				<IconGadgetarium />
			</div>
		</div>
	);
};

export default Preloader;
