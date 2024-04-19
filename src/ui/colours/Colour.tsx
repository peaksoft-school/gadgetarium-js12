import scss from './Colour.module.scss';

type ColorButtonProps = {
	width?: string;
	height?: string;
	backgroundColor?: string;
};

const ColorButton = ({ width, height, backgroundColor }: ColorButtonProps) => {
	return (
		<button
			className={scss.color_button}
			style={{ width, height, backgroundColor }}
		></button>
	);
};

export default ColorButton;
