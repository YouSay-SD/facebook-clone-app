import {
  db,
  firebase,
  googleAuthProvider,
} from '../../firebase/firebaseConfig';
import { types } from '../../types/types';
import { RegisterProps } from '../../components/auth/FormRegister/interface';
import { startLoading, finishLoading } from '../ui/ui';
import { getUserData } from '../../helpers/getUserData';

export const login = (uid: string, displayName: string, avatar: string) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      avatar,
    },
  };
};

export const startLoginEmailPassword = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        if (user) {
          const { uid, displayName } = user;
          console.log(user);

          if (uid && displayName) {
            const { avatar } = await getUserData(displayName);
            dispatch(login(uid, displayName, avatar));
            dispatch(finishLoading());
          }
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(finishLoading());
      });
  };
};

export const startRegisterWithEmailPassword = ({
  email,
  password,
  userName,
}: RegisterProps) => {
  return (dispatch: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user?.updateProfile({ displayName: userName });
        if (user) {
          const { uid, displayName } = user;
          if (uid && displayName) {
            const { avatar } = await getUserData(displayName);
            dispatch(login(uid, displayName, avatar));
          }

          interface NewUserProps {
            uid: string;
            userName: any;
            avatar: any;
          }

          const newUser: NewUserProps = {
            uid,
            userName: displayName,
            avatar:
              'https://pbs.twimg.com/profile_images/1036710543208398848/PzOO4lu8_400x400.jpg',
            // https://cdn.shopify.com/s/files/1/0525/9585/1443/products/GeekJack_thumbnail__2020_____350x350_201211.jpg?v=1611499984
          };

          // db.collection(`users/${userName}/data`).add(newUser);
          db.doc(`users/${userName}`).set(newUser);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(async ({ user }) => {
        if (user) {
          const { uid, displayName } = user;
          if (uid && displayName) {
            const { avatar } = await getUserData(displayName);
            dispatch(login(uid, displayName, avatar));
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const logout = () => ({
  type: types.logout,
});

export const startLogout = () => {
  return async (dispatch: any) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const checkingFinish = () => ({ type: types.checkingFinish });
