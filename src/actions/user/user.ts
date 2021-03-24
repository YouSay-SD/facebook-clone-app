import { types } from '../../types/types';
import { getUserData } from '../../helpers/getUserData';

export const startSetCurrentUser = (currentUser: object) => ({
  type: types.setCurrentUser,
  payload: currentUser,
});

export const setCurrentUser = (userName: string) => {
  return async (dispatch: any) => {
    const userData = await getUserData(userName);
    dispatch(startSetCurrentUser(userData));
  };
};
