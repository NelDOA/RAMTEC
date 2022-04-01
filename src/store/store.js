import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import ordersReducer from '../reducers/ordersReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    orders: ordersReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers( applyMiddleware( thunk ) )
);