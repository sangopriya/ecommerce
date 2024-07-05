import { SET_ITEMS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../types';

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: items,
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (itemId) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: itemId,
});
