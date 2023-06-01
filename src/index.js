import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './redux/store';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <div className="container">
          <App />
        </div>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
