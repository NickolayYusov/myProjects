import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/reducers/rootReducer'
import { rootSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
