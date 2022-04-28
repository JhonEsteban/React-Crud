import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import taskReducer from './task/reducer';

const reducers = combineReducers({
  auth: authReducer,
  task: taskReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
