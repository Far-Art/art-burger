import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Styles/root.css';
import Layout from './Components/LayoutArea/Layout/Layout';
import { Provider } from 'react-redux';
import store from './Redux/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);