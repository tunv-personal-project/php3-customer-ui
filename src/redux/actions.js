import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM } from './actionTypes';

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: { id: id } });

export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: { id: id } });

export const clearCart = () => ({ type: CLEAR_CART });

export default { addToCart, removeItem, clearCart };
