import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import shopReducer from './shop.reducer';

const appReducer = combineReducers({
  shop: shopReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
