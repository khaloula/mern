import {configureStore ,applyMiddleware,compose} from  '@reduxjs/toolkit';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;


const store = configureStore (rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store