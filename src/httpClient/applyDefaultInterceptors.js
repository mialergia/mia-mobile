/* eslint-disable camelcase */
import humps from 'humps';
import { updateSession, logout } from 'actions/userActions';
import httpClient from '.';

const REFRESH_TOKEN_URL = 'token/refresh/';
const ACCESS_TOKEN = 'Authorization';
const UNAUTHORIZED = 401;

export default (store, client) => {
  client.interceptors.request.use(async config => {
    const resfreshToken = async refresh => {
      const {
        data: { access },
      } = await httpClient.post(`${REFRESH_TOKEN_URL}`, { refresh });

      return access;
    };

    const { info } = store.getState().session;
    const { data, headers, url } = config;
    const isRefreshToken = url.includes(REFRESH_TOKEN_URL);

    if (info && !isRefreshToken) {
      const { refresh_token } = info;
      const accessToken = await resfreshToken(refresh_token);

      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: accessToken && `Bearer ${accessToken}`,
      };
    }
    config.data = humps.decamelizeKeys(data);

    return config;
  });

  client.interceptors.response.use(
    async response => {
      const { data } = response;
      const { access_token, refresh_token } = data;

      if (access_token) {
        const session = { access_token, refresh_token };
        store.dispatch(updateSession(session));
      }

      response.data = humps.camelizeKeys(data);
      return response;
    },
    error => {
      if (error.response && error.response.status === UNAUTHORIZED) {
        store.dispatch(logout());
      }

      return Promise.reject(error);
    },
  );
};
