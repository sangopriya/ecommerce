import { PLACE_ORDER } from '../types';

const generateOrderId = () => {
  return 'order-' + Math.floor(Date.now() + Math.random() * 1000);
};

export const placeOrder = (items) => ({
  type: PLACE_ORDER,
  payload: {
    id: generateOrderId(),
    items,
  },
});
