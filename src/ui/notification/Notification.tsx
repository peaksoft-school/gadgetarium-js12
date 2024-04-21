import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { notify } from '@/src/utils/helpers/notify';

const Notification: FC = () => {
	const basket = () =>
		notify('Товар успешно добавлен в корзину! ', 'Перейти в корзину!', '/');
	const comparison = () =>
		notify('Товар добавлен в список сравнения! ', 'Перейти к сравнению!', '/');
	const favorite = () =>
		notify('Товар добавлен в избранное! ', 'Перейти в избранное!', '/');

	return (
		<>
			<div>
				<button onClick={basket}>basket!</button>
				<button onClick={comparison}>comparison!</button>
				<button onClick={favorite}>favorite!</button>
			</div>
			<ToastContainer />
		</>
	);
};

export default Notification;
