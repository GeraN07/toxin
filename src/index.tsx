import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRouter from './HOC/history-route/history-route';
import browserHistory from './services/history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ToastContainer />
        <HistoryRouter history={browserHistory}>
          <App />
        </HistoryRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
