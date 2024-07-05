import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_QUANTITY, PLACE_ORDER } from '../types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.find(item => item.id === action.payload.id);
      if (itemInCart) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case REMOVE_FROM_CART:
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0);
    case UPDATE_QUANTITY:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case CLEAR_CART:
      return [];
    case PLACE_ORDER:
      return [];  // Clear the cart
    default:
      return state;
  }
};

export default cartReducer;
