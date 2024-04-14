import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './provider/ReduxProvider.tsx';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ReduxProvider>
				<MantineProvider>
					<App />
				</MantineProvider>
			</ReduxProvider>
		</BrowserRouter>
	</React.StrictMode>
);
