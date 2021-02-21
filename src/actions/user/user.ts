import { types } from '../../types/types';
import { db } from '../../firebase/firebaseConfig';

export const setCurrentUser = (currentUser: object) => ({
  type: types.setCurrentUser,
  payload: currentUser,
});

export const getUserData = (userName: string) => {
  return async (dispatch: any) => {
    const userSnap = await db.collection(`users/${userName}/userData`).get();
    // const userData: any = {};

    userSnap.forEach((snapChildren: any) => {
      // userData.push({
      //   // id: snapChildren.uid,
      //   ...snapChildren.data(),
      // });
      // return userData;
      const currentUser = snapChildren.data();
      dispatch(setCurrentUser(currentUser));
    });
  };

  // console.log(userData);

  // return userData;
};
