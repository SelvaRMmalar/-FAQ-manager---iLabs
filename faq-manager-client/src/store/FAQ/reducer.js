import * as types from './types';

const initialState = {
  loading: false,
  faq: [],
  errors: {},
  paginationOption: {},
};

const FAQReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_FAQ_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        faq: action.payload,
        paginationOption: action.paginationOption,
      };

    case types.LOAD_FAQ_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default FAQReducer;
