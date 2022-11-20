import axios from 'axios';
import { apiURL } from './env';

const instance = axios.create({
  baseURL: apiURL,
  headers: {
    Accept: 'text/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export function createAxios({ getState }) {
  instance.interceptors.request.use(
    (config) => {
      const { headers } = config.headers;
      return { ...config, headers };
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default instance;
