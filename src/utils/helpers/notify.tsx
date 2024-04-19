import { IconG } from '@/src/assets/icons';
import { Link } from 'react-router-dom';
import { Zoom, toast } from 'react-toastify';

export const notify = (message: string, linkText: string, link: string) => {
	toast(
		<div>
			<IconG />
			{message}
			<Link to={link} style={{ color: '#cb11ab' }}>
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
