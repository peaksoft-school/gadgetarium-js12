import { FC, ReactNode } from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

interface ReduxProviderProps {
	children: ReactNode;
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
