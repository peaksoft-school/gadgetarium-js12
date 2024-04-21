import { Route, Routes } from 'react-router-dom';
import LayoutUser from './pagesUser/components/layout/LayoutUser';
import LayoutAdmin from './pagesAdmin/components/layout/LayoutAdmin';
import LayoutAuth from './pagesAuth/components/layout/LayoutAuth';
import { ConfigProvider, theme } from 'antd';
import { useEffect, useState } from 'react';
import Preloader from './ui/preloader/Preloader';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	const antdThemeConfig = {
		algorithm: theme.darkAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			// borderRadius: 2,
			colorBgContainer: '#1a1a25'
		}
	};

	return (
		<>
			{isLoading ? (
				<>
					<Preloader />
				</>
			) : (
				<>
					<ConfigProvider theme={antdThemeConfig}>
						<Routes>
							<Route path="/*" element={<LayoutUser />} />
							<Route path="/auth/*" element={<LayoutAuth />} />
							<Route path="/admin/*" element={<LayoutAdmin />} />
						</Routes>
					</ConfigProvider>
				</>
			)}
		</>
	);
};

export default App;
