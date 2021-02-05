/* eslint-disable camelcase */
import humps from 'humps';
import { updateSession, logout } from 'actions/userActions';

const ACCESS_TOKEN = 'Authorization';
const UNAUTHORIZED = 401;

export default (store, client) => {
  client.interceptors.request.use(config => {
    const { info } = store.getState().session;
    const { data, headers } = config;

    if (info) {
      const { access_token } = info;
      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: access_token && `Bearer ${access_token}`,
      };
    }
    config.data = humps.decamelizeKeys(data);

    return config;
  });

  client.interceptors.response.use(
    async response => {
      const { data } = response;
      const { access_token } = data;

      if (access_token) {
        const session = { access_token };
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
