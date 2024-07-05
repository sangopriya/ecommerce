

import { SET_CATEGORIES } from '../types';
import { categories } from '../../Components/pages/metadata';

const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
