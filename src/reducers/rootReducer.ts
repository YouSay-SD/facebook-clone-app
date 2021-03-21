import { combineReducers } from 'redux';
import { authReducer } from './authReducer/authReducer';
import { uiReducer } from './uiReducer/uiReducer';
import { userReducer } from './userReducer/userReducer';
import { postReducer } from './postReducer/postReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  user: userReducer,
  post: postReducer,
});
