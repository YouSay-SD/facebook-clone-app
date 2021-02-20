import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig';
import { types } from '../../types/types';

export const login = (uid: string, displayName: string) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLoginEmailPassword = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch(login('123', 'test'));
  };
};

export const startGoogleLogin = () => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        if (user) {
          const { uid, displayName } = user;
          if (uid && displayName) {
            dispatch(login(uid, displayName));
          }
        }
      });
  };
};
