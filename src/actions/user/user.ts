import { types } from '../../types/types';
import { db, usersRef } from '../../firebase/firebaseConfig';

export const setCurrentUser = (currentUser: object) => ({
  type: types.setCurrentUser,
  payload: currentUser,
});

export const getUserData = (userName: string) => {
  return async (dispatch: any) => {
    const userSnap = await db
      .collection(`users`)
      .where(userName, '==', userName);

    userSnap.onSnapshot((snap) => {
      snap.forEach((snapChilddren) => {
        console.log(snapChilddren);
        dispatch(setCurrentUser(snapChilddren.data()));
      });
    });

    // userSnap.forEach((snapChildren: any) => {
    //   const currentUser = snapChildren.data();
    //   dispatch(setCurrentUser(currentUser));
    // });
  };
};
