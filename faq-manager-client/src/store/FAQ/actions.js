import * as types from './types';
import axios from 'axios';
export const loadFAQ = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOAD_FAQ_REQUEST });
    const { data } = await axios.get('http://localhost:5000/api/faq/');
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
  return await axios.patch(`http://localhost:5000/api/faq/${id}`, values);
};
export const deleteItem = (id) => async () => {
  return await axios.delete(`http://localhost:5000/api/faq/${id}`);
};
