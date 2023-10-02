import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './components/App';
import './index.css';
import { store } from 'components/store/store';
import { Provider } from 'react-redux';


const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

const rootInstance = createRoot(root);
rootInstance.render(rootElement);
