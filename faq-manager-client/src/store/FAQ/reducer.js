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
        faq: action.payload.data,
        //faq: action.payload.results,
        // paginationOption: {
        //   totalItems: action.payload?.totalItems,
        //   page: action.payload?.page,
        //   pageSize: action.payload?.pageSize,
        //   numberOfPages: action.payload?.numberOfPages,
        //   displayStart: action.payload?.displayStart,
        //   displayEnd: action.payload?.displayEnd,
        //   displayCount: action.payload?.displayCount,
        // },
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
