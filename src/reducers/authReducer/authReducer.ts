import { types } from '../../types/types';
import { AuthState, Action } from './interface';

const initState: AuthState = {
  uid: null,
  userName: null,
  avatar: `${process.env.REACT_APP_URL}/img/profile/profile-placeholder.jpg`,
  darkTheme: false,
  checking: true,
  banner: '',
  bio: '',
};

export const authReducer = (state: AuthState = initState, action: Action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        userName: action.payload.userName,
        checking: false,
      };

    case types.logout:
      return {
        checking: false,
      };

    case types.updateProfile:
      return {
        ...state,
        avatar: action.payload.avatar,
        banner: action.payload.banner,
        bio: action.payload.bio,
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
