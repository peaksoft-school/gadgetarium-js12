import scss from './Colour.module.scss';

type ColorButtonProps = {
	width?: string;
	height?: string;
	backgroundColor?: string;
	onClick?: () => void;
};

const ColorButton = ({
	width,
	height,
	backgroundColor,
	onClick
}: ColorButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={scss.color_button}
			style={{ width, height, backgroundColor }}
		></button>
	);
};

export default ColorButton;
