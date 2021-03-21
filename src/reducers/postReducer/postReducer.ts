import { types } from '../../types/types';
import { PostState, Action } from './interface';

const initState = {
  checking: true,
};

export const postReducer = (state: PostState = initState, action: Action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        userName: action.payload.displayName,
        avatar: action?.payload.avatar,
        checking: false,
      };

    default:
      return state;
  }
};
