import {
  CHECK_JSON_REQUEST,
  CHECK_JSON_SUCCESS,
  CHECK_JSON_FAILURE,
} from './actions';

// import axios from '../api/API';
import { getBanners } from '../api/Endpoints';

export const getAllBanners = () => {
  return (dispatch) => {
    dispatch({
      type: CHECK_JSON_REQUEST,
      payload: { isLoadingCheckAction: true },
    });
    getBanners()
      .then((res) => {
        let valid = res.status == 200 && res.data != null;
        if (!valid) {
          dispatch({
            type: CHECK_JSON_FAILURE,
            payload: { isLoadingCheckAction: false },
          });
          return;
        }
        dispatch({
          type: CHECK_JSON_SUCCESS,
          payload: {
            isLoadingCheckAction: false,
            homeBannerData: res?.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
