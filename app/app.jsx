import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainReducer from './reducers';
import Main  from './components/main.jsx';
import './style.scss';

const storeInstance = createStore(MainReducer);

ReactDom.render(
    <Provider store={storeInstance}>
        <Main />
    </Provider>,
    document.getElementById("app")
)
