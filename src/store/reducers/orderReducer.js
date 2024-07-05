import { PLACE_ORDER } from '../types';

const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default orderReducer;
