import { combineReducers } from 'redux';
import { authReducer } from './authReducer/authReducer';
import { uiReducer } from './uiReducer/uiReducer';
import { userReducer } from './userReducer/userReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  user: userReducer,
});
