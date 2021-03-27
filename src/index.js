import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // ルーティングに必要なRouterコンポーネントをimport
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleWare from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleWare),
  )
);

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*
      Routerは子要素に一つのコンポーネントしか受け付けないので、
      基本的に一番親のコンポーネントを囲むように設置。
      */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
