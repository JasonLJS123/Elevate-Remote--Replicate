import {
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './actions';

export const openCart = () => {
  return (dispatch) => {
    dispatch({
      type: OPEN_CART,
      payload: {},
    });
  };
};

export const closeCart = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_CART,
      payload: {},
    });
  };
};

export const addToCart = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {},
    });
  };
};

export const removeFromCart = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {},
    });
  };
};
