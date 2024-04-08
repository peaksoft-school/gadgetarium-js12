import { IconArrowLeft } from '@/src/assets/icons-2';
import scss from './ButtonArrowLeft.module.scss';

const ButtonArrowLeft = () => {
	return (
		<button className={scss.button}>
			<IconArrowLeft />
		</button>
	);
};

export default ButtonArrowLeft;
