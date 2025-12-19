import apiRequest from './API';

export const get_user_info = async (postparam) => {
  const url = '/API/get_user_info';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const login = async (postparam) => {
  const url = '/API/login';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const register = async (postparam) => {
  const url = '/API/register';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_user_level_info = async (postparam) => {
  const url = '/API/get_user_level_info';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const upgrate_level = async (postparam) => {
  const url = '/API/upgrate_level';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_shop_data_post = async (postparam) => {
  const url = '/API/get_shop_data_post';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_banner = async (postparam) => {
  const url = '/API/get_banner';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_info_from_hash = async (postparam) => {
  const url = '/API/get_info_from_hash';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_user_booking = async (postparam) => {
  const url = '/API/get_user_booking';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const validation_on_start_booking = async (postparam) => {
  const url = '/API/validation_on_start_booking';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const confirm_booking = async (postparam) => {
  const url = '/API/confirm_booking';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_records = async (postparam) => {
  const url = '/API/get_records';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_user_com_history = async (postparam) => {
  const url = '/API/get_user_com_history';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const customer_services = async (postparam) => {
  const url = '/API/customer_services';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_rating_comment = async (postparam) => {
  const url = '/API/get_rating_comment';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const withdraw_wallet = async (postparam) => {
  const url = '/API/withdraw_wallet';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const forgot_password = async (postparam) => {
  const url = '/API/forgot_password';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_user_booking_history = async (postparam) => {
  const url = '/API/get_user_booking_history';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_withdrawal_history = async (postparam) => {
  const url = '/API/get_withdrawal_history';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_topup_history = async (postparam) => {
  const url = '/API/get_topup_history';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_downline_com_history = async (postparam) => {
  const url = '/API/get_downline_com_history';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const reset_password = async (postparam) => {
  const url = '/API/reset_password';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const get_level = async (postparam) => {
  const url = '/API/get_level';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const edit_profile = async (postparam) => {
  const url = '/API/edit_profile';
  var res = await apiRequest('POST', url, postparam);
  return res;
};

export const topup_wallet = async (postparam) => {
  const url = '/API/topup_wallet';
  var res = await apiRequest('POST', url, postparam);
  return res;
};
