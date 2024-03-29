import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bulma/css/bulma.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </BrowserRouter>,

  document.getElementById('root'),
);
