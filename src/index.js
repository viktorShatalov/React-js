import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            {/* <App /> */}
            <App2 />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));



serviceWorker.unregister();
