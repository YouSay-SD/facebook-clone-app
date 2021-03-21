import { types } from '../../types/types';
import { PostState, Action } from './interface';

const initState = {
  posts: [],
  loadingPost: false,
};

export const postReducer = (state: PostState = initState, action: Action) => {
  switch (action.type) {
    case types.loadPosts:
      return {
        ...state,
        // posts: [action.payload, ...state.posts],
        posts: action.payload,
        ...state.posts,
        // posts: [{ ...action.payload }],
      };

    case types.startLoadingPost:
      return {
        ...state,
        loadingPost: true,
      };

    case types.finishLoadingPost:
      return {
        ...state,
        loadingPost: false,
      };

    default:
      return state;
  }
};
