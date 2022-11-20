//import axios from '../../Config/axios';
import axios from 'axios';
import * as types from './types';
const client = axios.create({
  baseURL: 'http://localhost:3001/api/faq/add',
});

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

export const loadFAQ = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOAD_FAQ_REQUEST });
    const { data } = await axios.get('http://localhost:5000/api/faq', config);
    dispatch({
      type: types.LOAD_FAQ_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.LOAD_FAQ_FAIL,
      payload: error,
    });
  }
};

export const storeItem = (values) => async () => {
  return await axios.post('http://localhost:5000/api/faq/add', values);
};
export const updateItem = (id, values) => async () => {
  // return await axios.patch(`/fleet-type/${id}`, values);
};
