import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import rootReducer from './reducers/index';
import Content from './components/Content/Content';

const persistConfig = {
  key: 'carDetails',
  storage: storage,
  whitelist: ['carDetails'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);

ReactDOM.render(
  <Provider store={store}>
    <Content />
  </Provider>,
  document.getElementById('root')
);
