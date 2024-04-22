import scss from './ButtonArrowRight.module.scss';
import { IconArrowRight } from '@tabler/icons-react';

const ButtonArrowRight = () => {
	return (
		<button className={scss.button}>
			<IconArrowRight />
		</button>
	);
};

export default ButtonArrowRight;
