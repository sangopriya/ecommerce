import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  items: itemReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default rootReducer;
