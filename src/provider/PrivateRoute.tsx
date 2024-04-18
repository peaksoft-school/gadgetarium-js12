import { FC, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
	children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isAuth = localStorage.getItem('isAuth');
	const isAuthresult = !!isAuth;

	useEffect(() => {
		if (isAuthresult && pathname === '/auth/loginPages') {
			navigate('/');
		}
	}, [pathname]);
	return children;
};

export default PrivateRoute;
