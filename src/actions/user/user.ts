import { types } from '../../types/types';
import { db, usersRef } from '../../firebase/firebaseConfig';

export const setCurrentUser = (currentUser: object) => ({
  type: types.setCurrentUser,
  payload: currentUser,
});

export const getUserData = (userName: string) => {
  return async (dispatch: any) => {
    const docRef: any = await usersRef.doc(userName);

    docRef.get().then((doc: any) => {
      if (doc.exists) {
        dispatch(setCurrentUser(doc.data()));
      } else {
        console.log('No such document!');
      }
    });
  };
};
