import { combineReducers } from 'redux';
import { PURGE } from 'redux-persist';
import FAQReducer from './FAQ/reducer';
const appReducer = combineReducers({ FAQReducer: FAQReducer });

const rootReducer = (state, action) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
