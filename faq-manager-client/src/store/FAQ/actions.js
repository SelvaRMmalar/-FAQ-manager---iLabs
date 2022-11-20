import axios from '../../Config/axios';
import * as types from './types';

export const loadFleets = (page, pageSize, filters) => async (dispatch) => {
  try {
    dispatch({ type: types.LOAD_FAQ_REQUEST });
    // const { data } = await axios.get(
    //   `/fleets?page=${page}&pageSize=${pageSize}${
    //     filters.query ? '&searchString=' + filters.query : ''
    //   }`
    // );
    const data = [
      {
        id: '1',
        question: 'question1',
        catogory: 'About Company',
        isActive: true,
      },
      {
        id: '2',
        question: 'question2',
        catogory: 'About Company',
        isActive: true,
      },
      {
        id: '3',
        question: 'question3',
        catogory: 'About Company',
        isActive: false,
      },
    ];
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
  console.log('logedjcibd', values);
  return { status: 200 };
  //return await axios.post('/fleet-type', values);
};
export const updateItem = (id, values) => async () => {
  return await axios.patch(`/fleet-type/${id}`, values);
};
