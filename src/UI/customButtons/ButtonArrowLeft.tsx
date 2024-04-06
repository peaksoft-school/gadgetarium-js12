import { IconArrowLeft } from '@/src/assets/icons';
import scss from './ButtonArrowLeft.module.scss';

const ButtonArrowLeft = () => {
	return (
		<button className={scss.button}>
			<IconArrowLeft />
		</button>
	);
};

export default ButtonArrowLeft;
