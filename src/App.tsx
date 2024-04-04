import { Route, Routes } from 'react-router-dom';
import LayoutUser from './pagesUser/components/layout/LayoutUser';
import LayoutAdmin from './pagesAdmin/components/layout/LayoutAdmin';
import LayoutAuth from './pagesAuth/components/layout/LayoutAuth';
import CustomSelect from './UI/customSelect/CustomSelect';

const App = () => {
	return (
		<>
			<CustomSelect />
			<Routes>
				<Route path="/*" element={<LayoutUser />} />
				<Route path="/auth/*" element={<LayoutAuth />} />
				<Route path="/admin/*" element={<LayoutAdmin />} />
			</Routes>
		</>
	);
};

export default App;
