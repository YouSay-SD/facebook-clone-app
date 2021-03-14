import { usersRef } from '../firebase/firebaseConfig';

export const getUserData = async (userName: string) => {
  let userData = {
    avatar:
      'https://pbs.twimg.com/profile_images/1036710543208398848/PzOO4lu8_400x400.jpg',
  };

  if (userName) {
    const docRef = await usersRef.doc(userName);

    // eslint-disable-next-line consistent-return
    await docRef.get().then((doc: any) => {
      if (doc.exists) {
        userData = doc.data();
      }
    });
  }
  return userData;
};
