import { ADD_TO_CART, CLEAR_CART } from './actionTypes';
import states from './state';

const reducers = (state = states, actions) => {
  switch (actions.type) {
    case ADD_TO_CART:
      const id = actions.payload.id;
      if (!state.cart) {
        const cProduct = state.products.map((item) => item.id === id);
        return { ...state, cart: [...cProduct] };
      }
      break;
    case CLEAR_CART:
      return { ...state, cart: null };

    default:
      return state;
  }
};

export default reducers;
