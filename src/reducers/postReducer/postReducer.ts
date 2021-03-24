import { types } from '../../types/types';
import { PostState, Action } from './interface';

const initState = {
  posts: [],
  pictures: [],
  loadingPost: false,
};

export const postReducer = (state: PostState = initState, action: Action) => {
  switch (action.type) {
    case types.getPosts:
      return {
        ...state,
        posts: action.payload,
        ...state.posts,
      };

    case types.getPictures:
      return {
        ...state,
        pictures: action.payload,
        ...state.pictures,
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
