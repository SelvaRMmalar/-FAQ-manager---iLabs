import * as types from './types';
import axios from '../../Config/axios';
export const loadFAQ = (limit, offset, query) => async (dispatch) => {
  try {
    dispatch({ type: types.LOAD_FAQ_REQUEST });
    // const { data } = await axios.get('faq');
    const { data } = await axios.get(
      `/faq?limit=${limit}&offset=${offset}${query ? '&search=' + query : ''}`
    );
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
  return await axios.post('faq/add', values);
};
export const updateItem = (id, values) => async () => {
  return await axios.put(`/faq/${id}`, values);
};
export const deleteItem = (id) => async () => {
  return await axios.delete(`/faq/${id}`);
};
