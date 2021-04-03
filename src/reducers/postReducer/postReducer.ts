import { types } from '../../types/types';
import { PostState, Action } from './interface';

const initState = {
  posts: [],
  pictures: [],
  activePost: null,
  loadingPost: false,
};

export const postReducer = (state: PostState = initState, action: Action) => {
  switch (action.type) {
    case types.getPosts:
      return {
        ...state,
        posts: action.payload,
      };

    case types.getPictures:
      return {
        ...state,
        pictures: action.payload,
      };

    case types.setActivePost:
      return {
        ...state,
        activePost: action.payload,
      };

    case types.deletePost:
      return {
        ...state,
        activePost: null,
        posts: state.posts.filter((post) => post.id !== action.payload),
        pictures: state.pictures.filter(
          (picture) => picture.id !== action.payload
        ),
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
