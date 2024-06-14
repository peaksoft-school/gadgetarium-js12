import { Route, Routes } from 'react-router-dom';
import LayoutUser from './pagesUser/components/layout/LayoutUser';
import LayoutAdmin from './pagesAdmin/components/layout/LayoutAdmin';
import LayoutAuth from './pagesAuth/components/layout/LayoutAuth';
import { useEffect, useState } from 'react';
import Preloader from './ui/preloader/Preloader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	return (
		<>
			{isLoading ? (
				<Preloader />
			) : (
				<>
					<Routes>
						<Route path="/*" element={<LayoutUser />} />
						<Route path="/auth/*" element={<LayoutAuth />} />
						<Route path="/admin/*" element={<LayoutAdmin />} />
					</Routes>
					<ToastContainer /> {/* Убедитесь, что ToastContainer здесь */}
				</>
			)}
		</>
	);
};

export default App;
