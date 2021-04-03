import { types } from '../../types/types';

export interface UiState {
  loading: boolean;
}

const initialState = {
  loading: false,
};

type Action = {
  type: string;
  payload: string;
};

export const uiReducer = (state: UiState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
