import {
  SAVE_MENUS_FOR_THE_DAY,
  REQUEST_MENUS_FOR_THE_DAY
} from '../actions/types.js';

const initialState = {
  meals: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MENUS_FOR_THE_DAY:
      return { ...state, loading: true };
    case SAVE_MENUS_FOR_THE_DAY:
      return {
        ...state,
        menus: action.menus,
        meals: action.meals,
        loading: false
      };
    default:
      return state;
  }
};
