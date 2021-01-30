import { types } from '../types/types';

export interface UiState {
  modalOpen: boolean;
}

const initialState = {
  modalOpen: false,
};

type Action = {
  type: string;
  payload: string;
};

export const uiReducer = (
  state: UiState = initialState,
  action: Action
) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return state;
  }
};
