import { types } from '../../types/types';

export interface UserState {
  currentUser: CurrentUserProps;
}

export interface CurrentUserProps {
  avatar?: string;
  userName?: string;
  uid?: string;
}

export interface PayloadProps {
  currentUser: CurrentUserProps;
}

type Action = {
  type: string;
  payload: PayloadProps;
};

const initialState = {
  currentUser: {},
};

export const userReducer = (
  state: UserState = initialState,
  action: Action
) => {
  switch (action.type) {
    case types.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
