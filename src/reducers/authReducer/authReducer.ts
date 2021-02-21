import { types } from '../../types/types';
import { AuthState, Action } from './interface';

// const initState = {
//   uid: '',
// };

export const authReducer = (state: AuthState = {}, action: Action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
