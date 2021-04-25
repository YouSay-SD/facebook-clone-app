import { types } from '../../types/types';
import { AuthState, Action } from './interface';

const initState: AuthState = {
  uid: null,
  userName: null,
  avatar: '',
  darkTheme: false,
  checking: true,
  banner: '',
};

export const authReducer = (state: AuthState = initState, action: Action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        userName: action.payload.displayName,
        checking: false,
      };

    case types.logout:
      return {
        checking: false,
      };

    case types.checkingFinish:
      return {
        ...state,
        checking: false,
      };

    default:
      return state;
  }
};
