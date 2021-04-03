import { types } from '../../types/types';
import { UiState, Action } from './interface';

const initialState = {
  loading: false,
  isMyProfile: false,
};

export const uiReducer = (state: UiState = initialState, action: Action) => {
  switch (action.type) {
    case types.isMyProfile:
      return {
        ...state,
        isMyProfile: action.payload,
      };

    default:
      return state;
  }
};
