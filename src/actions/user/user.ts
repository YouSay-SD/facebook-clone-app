import { types } from '../../types/types';
import { db } from '../../firebase/firebaseConfig';

export const setCurrentUser = (currentUser: object) => ({
  type: types.setCurrentUser,
  payload: currentUser,
});

export const getUserData = (userName: string) => {
  return async (dispatch: any) => {
    const userSnap = await db.collection(`users/${userName}/userData`).get();

    userSnap.forEach((snapChildren: any) => {
      const currentUser = snapChildren.data();
      dispatch(setCurrentUser(currentUser));
    });
  };
};
