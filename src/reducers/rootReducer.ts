import { combineReducers } from 'redux';
import { authReducer } from './authReducer/authReducer';
import { uiReducer } from './uiReducer/uiReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});
