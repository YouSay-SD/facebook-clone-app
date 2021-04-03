import { types } from '../../types/types';
import { UiState, Action } from './interface';

const initialState = {
  loading: false,
};

export const uiReducer = (state: UiState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
