import { SET_ITEMS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../types';
import { items as initialItems } from '../../Components/pages/metadata';

const itemReducer = (state = initialItems, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.payload;
    case ADD_ITEM_TO_CART:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      );
    case REMOVE_ITEM_FROM_CART:
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
          : item
      ).filter(item => item.quantity > 0);
    default:
      return state;
  }
};

export default itemReducer;
