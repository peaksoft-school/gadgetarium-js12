import { IconArrowRight } from '@/src/assets/icons';
import scss from './ButtonArrowRight.module.scss';

const ButtonArrowRight = () => {
	return (
		<button className={scss.button}>
			<IconArrowRight />
		</button>
	);
};

export default ButtonArrowRight;
