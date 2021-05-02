import { types } from '../../types/types';
import { UiState, Action } from './interface';

const initialState = {
  loading: false,
  loadingCreatePost: false,
  loadingUpdatePost: false,
  loadingDeletePost: false,
  modalCreatePost: false,
  modalUpdatePost: false,
  modalDeletePost: false,
};

export const uiReducer = (state: UiState = initialState, action: Action) => {
  switch (action.type) {
    case types.modalCreatePost:
      return {
        ...state,
        modalCreatePost: action.payload,
      };

    case types.modalUpdatePost:
      return {
        ...state,
        modalUpdatePost: action.payload,
      };

    case types.modalDeletePost:
      return {
        ...state,
        modalDeletePost: action.payload,
      };

    case types.loadingCreatePost:
      return {
        ...state,
        loadingCreatePost: action.payload,
      };

    case types.loadingUpdatePost:
      return {
        ...state,
        loadingUpdatePost: action.payload,
      };

    case types.loadingDeletePost:
      return {
        ...state,
        loadingDeletePost: action.payload,
      };
    default:
      return state;
  }
};
