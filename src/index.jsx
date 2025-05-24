import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ React 18+
import './index.css';
// Remove if using AntD v5+
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/index.jsx';
import { configureStore } from './store/configureStore.js';

const store = configureStore({});

const root = ReactDOM.createRoot(document.getElementById('test'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

