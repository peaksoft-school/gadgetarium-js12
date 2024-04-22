import React from 'react';
import ReactDOM from 'react-dom/client';
import 'keen-slider/keen-slider.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './provider/ReduxProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ReduxProvider>
				<App />
			</ReduxProvider>
		</BrowserRouter>
	</React.StrictMode>
);
