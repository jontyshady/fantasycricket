import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth'
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(
	authReducer,
	applyMiddleware(thunk)
)



const app =(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker();
