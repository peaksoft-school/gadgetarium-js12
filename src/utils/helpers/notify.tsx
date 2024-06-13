import { Link } from 'react-router-dom';
import { Zoom, toast } from 'react-toastify';
import mini_logo from '@/src/assets/mini-logo.png';

export const Notify = (message: string, linkText: string, link: string) => {
	toast(
		<div>
			<img src={mini_logo} alt="logo" style={{ width: 20, marginRight: 5 }} />
			<span>{message} </span>
			<Link to={link} style={{ color: '#cb11ab', marginLeft: 5 }}>
				{linkText}
			</Link>
		</div>,
		{
			position: 'bottom-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
			transition: Zoom
		}
	);
};
