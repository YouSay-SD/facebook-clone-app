import { usersRef } from '../firebase/firebaseConfig';
import { UserProps } from '../reducers/authReducer/interface';

export const getUserData = async (userName: string) => {
  let userData = '';
  const docRef = usersRef.doc(userName);

  await docRef.get().then((doc: any) => {
    userData = doc.data();
  });

  return userData;
};
