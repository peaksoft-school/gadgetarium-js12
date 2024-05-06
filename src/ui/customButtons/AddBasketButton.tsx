import { FC, MouseEventHandler, ReactNode } from 'react';
import scss from './AddBasketButton.module.scss';

interface AddBasketButtonProps {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

const AddBasketButton: FC<AddBasketButtonProps> = ({
	children,
	onClick,
	className
}) => {
	return (
		<button onClick={onClick} className={className}>
			<div className={scss.svg_plus_child}>
				<svg
					width="21.000000"
					height="21.000000"
					viewBox="0 0 21 21"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<desc>Created with Pixso.</desc>
					<defs />
					<path
						id="Vector"
						d="M2 13.5L2 1.5L0 1.5L0 -0.5L3 -0.5C3.26 -0.5 3.51 -0.4 3.7 -0.21C3.89 -0.02 4 0.23 4 0.5L4 12.5L16.43 12.5L18.43 4.5L6 4.5L6 2.5L19.71 2.5C19.87 2.5 20.02 2.53 20.15 2.6C20.29 2.66 20.41 2.76 20.5 2.88C20.6 3 20.66 3.14 20.69 3.29C20.72 3.44 20.72 3.59 20.68 3.74L18.18 13.74C18.13 13.95 18.01 14.15 17.83 14.28C17.65 14.42 17.44 14.5 17.21 14.5L3 14.5C2.73 14.5 2.48 14.39 2.29 14.2C2.1 14.01 2 13.76 2 13.5ZM4 20.5C3.46 20.5 2.96 20.28 2.58 19.91C2.21 19.53 2 19.03 2 18.5C2 17.96 2.21 17.46 2.58 17.08C2.96 16.71 3.46 16.5 4 16.5C4.53 16.5 5.03 16.71 5.41 17.08C5.78 17.46 6 17.96 6 18.5C6 19.03 5.78 19.53 5.41 19.91C5.03 20.28 4.53 20.5 4 20.5ZM16 20.5C15.46 20.5 14.96 20.28 14.58 19.91C14.21 19.53 14 19.03 14 18.5C14 17.96 14.21 17.46 14.58 17.08C14.96 16.71 15.46 16.5 16 16.5C16.53 16.5 17.03 16.71 17.41 17.08C17.78 17.46 18 17.96 18 18.5C18 19.03 17.78 19.53 17.41 19.91C17.03 20.28 16.53 20.5 16 20.5Z"
						fill="#FFFFFF"
						fillOpacity="1.000000"
						fillRule="nonzero"
					/>
				</svg>

				{children}
			</div>
		</button>
	);
};

export default AddBasketButton;
