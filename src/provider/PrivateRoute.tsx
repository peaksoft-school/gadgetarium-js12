/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
	children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
	// const { pathname } = useLocation();
	// const navigate = useNavigate();
	// const isAuth = localStorage.getItem('isAuth');
	// const isAuthResult = !!isAuth;

	// const role = localStorage.getItem('role') || 'USER';

	useEffect(() => {
		// if (!isAuthResult) {
		// 	navigate('/auth/login');
		// } else {
		// 	switch (pathname) {
		// 		case '/auth/login':
		// 		case '/auth/register':
		// 			if (role === 'USER') {
		// 				navigate('/');
		// 			}
		// 			break;
		// 		case '/':
		// 			if (role === 'ADMIN') {
		// 				navigate('/admin');
		// 			}
		// 			break;
		// 	}
		// }
	}, []);

	return <>{children}</>;
};

export default PrivateRoute;
