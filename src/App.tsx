import { Route, Routes } from 'react-router-dom';
import LayoutUser from './pagesUser/components/layout/LayoutUser';
import LayoutAdmin from './pagesAdmin/components/layout/LayoutAdmin';
import LayoutAuth from './pagesAuth/components/layout/LayoutAuth';
import { LoginPages } from './pagesAuth/components/pages/LoginPages';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/*" element={<LayoutUser />} />
				<Route path="/auth/*" element={<LayoutAuth />} />
				<Route path="/admin/*" element={<LayoutAdmin />} />
				<Route path='/login' element={<LoginPages/>}/>
			</Routes>
		</>
	);
};

export default App;
