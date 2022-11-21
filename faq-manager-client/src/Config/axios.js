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




export default instance;
