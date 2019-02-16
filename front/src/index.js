import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './containers/Main';

import store from './redux/store'

import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter >
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
