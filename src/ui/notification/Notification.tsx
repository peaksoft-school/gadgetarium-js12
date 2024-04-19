import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconG } from '@/src/assets/icons';

const Notification: FC = () => {
	const notify = (message: string, linkText: string, link: string) => {
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

	const basket = () =>
		notify('Товар успешно добавлен в корзину! ', 'Перейти в корзину!', '/');
	const comparison = () =>
		notify('Товар добавлен в список сравнения! ', 'Перейти к сравнению!', '/');
	const favorite = () =>
		notify('Товар добавлен в избранное! ', 'Перейти в избранное!', '/');

	return (
		<div>
			<div>
				<button onClick={basket}>basket!</button>
				<button onClick={comparison}>comparison!</button>
				<button onClick={favorite}>favorite!</button>
				<ToastContainer />
			</div>
		</div>
	);
};

export default Notification;
