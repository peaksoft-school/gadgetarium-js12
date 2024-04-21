import scss from './ButtonArrowLeft.module.scss';
import { IconArrowLeft } from '@tabler/icons-react';

const ButtonArrowLeft = () => {
	return (
		<button className={scss.button}>
			<IconArrowLeft />
		</button>
	);
};

export default ButtonArrowLeft;
