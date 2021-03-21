import { types } from '../../types/types';
import { PostState, Action } from './interface';

const initState = {
  posts: [],
};

export const postReducer = (state: PostState = initState, action: Action) => {
  switch (action.type) {
    case types.loadPosts:
      return {
        ...state,
        posts: { ...action.payload },
      };

    default:
      return state;
  }
};
