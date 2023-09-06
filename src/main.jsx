import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import reducer, {initialState} from './reducer.js';
import {AppProvider} from './context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider reducer={reducer} initialState={initialState}>
			<App />
		</AppProvider>
	</React.StrictMode>
);
