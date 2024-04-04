import { Route, Routes } from 'react-router-dom';
import LayoutUser from './pagesUser/components/layout/LayoutUser';
import LayoutAdmin from './pagesAdmin/components/layout/LayoutAdmin';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/*" element={<LayoutUser />} />
				<Route path="/admin/*" element={<LayoutAdmin />} />
			</Routes>
		</>
	);
};

export default App;
