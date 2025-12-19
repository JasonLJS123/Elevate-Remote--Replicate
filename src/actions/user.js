import {
  CHECK_USER_REQUEST,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
} from './actions';

// import axios from '../api/API';
import { login, register } from '../api/Endpoints';

export const telegramLogin = (postparam) => {
  return async (dispatch) => {
    dispatch({
      type: CHECK_USER_REQUEST,
      payload: { isLoadingCheckUser: true },
    });

    try {
      const res = await login(postparam); // Await the login response
      console.log(res.data.success, res.data.code);

      const valid =
        res.status === 200 && res.data != null && res.data.code !== 404;

      if (!valid) {
        dispatch({
          type: CHECK_USER_FAILURE,
          payload: { isLoadingCheckUser: false, userData: null },
        });
        return res;
      }

      dispatch({
        type: CHECK_USER_SUCCESS,
        payload: {
          isLoadingCheckUser: false,
          userData: res?.data.customer,
        },
      });

      return res; // Return the response for further chaining
    } catch (err) {
      console.error('Login error:', err);
      dispatch({
        type: CHECK_USER_FAILURE,
        payload: { isLoadingCheckUser: false, error: err.message },
      });
      throw err; // Re-throw error for further handling
    }
  };
};

export const telegramRegister = (postparam) => {
  return async (dispatch) => {
    dispatch({
      type: CHECK_USER_REQUEST,
      payload: { isLoadingCheckUser: true },
    });

    try {
      const res = await register(postparam); // Await the login response
      console.log(res.data.success, res.data.code);

      // const valid =
      //   res.status === 200 && res.data != null && res.data.code !== 404

      // if (!valid) {
      //   dispatch({
      //     type: CHECK_USER_FAILURE,
      //     payload: { isLoadingCheckUser: false, userData: null }
      //   })
      //   return res
      // }

      // dispatch({
      //   type: CHECK_USER_SUCCESS,
      //   payload: {
      //     isLoadingCheckUser: false,
      //     userData: res?.data
      //   }
      // })

      // return res // Return the response for further chaining
    } catch (err) {
      console.error('Login error:', err);
      dispatch({
        type: CHECK_USER_FAILURE,
        payload: { isLoadingCheckUser: false, error: err.message },
      });
      throw err; // Re-throw error for further handling
    }
  };
};
