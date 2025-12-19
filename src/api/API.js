import axios from 'axios';

const host = 'https://eportalaccess.top';
const access_endpoint_link = host;

const instance = axios.create({
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  baseURL: access_endpoint_link,
});

instance.interceptors.request.use((config) => {
  const postparam = config?.data;
  let lang = 1;
  let lang_res = localStorage.getItem('language');
  if (lang_res) {
    lang = lang_res;
  }
  if (!postparam?.lang) {
    postparam.lang = lang;
  }
  let token = 0;
  let token_res = localStorage.getItem('token');
  if (token_res) {
    token = token_res;
  }
  if (!postparam?.token) {
    postparam.token = token;
  }
  config.data = postparam;

  return config;
});

instance.interceptors.response.use(
  (res) => {
    // console.log(res.data.code, 'res.data.code', window.location.pathname)
    if (res.data.code != undefined && res.data.code == 401) {
      return res.data;
    } else {
      return res.data;
    }
  },
  (err) => {
    // if (err?.response?.status === 401) {
    //   localStorage.clear()
    //   window.location.href = '/'
    // }
    return Promise.reject(err);
  }
);

export const apiRequest = async (type, url, data) => {
  const res = await instance({
    method: type,
    url,
    data: data ?? {},
  });
  return res;
};

export default apiRequest;
