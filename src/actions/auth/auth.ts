import {
  db,
  firebase,
  googleAuthProvider,
} from '../../firebase/firebaseConfig';
import { types } from '../../types/types';
import { RegisterProps } from '../../components/auth/FormRegister/interface';
import { startLoading, finishLoading } from '../ui/ui';
import { getUserData } from '../../helpers/getUserData';
import { UserProps } from '../../reducers/authReducer/interface';

export const login = (
  uid: string,
  displayName: string,
  avatar: string,
  banner: string
) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      avatar,
      banner,
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
            const { avatar, banner }: any = await getUserData(displayName);
            dispatch(login(uid, displayName, avatar, banner));
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
            const newUser: UserProps = {
              uid,
              userName: displayName,
              avatar: `${process.env.REACT_APP_URL}/public/img/profile/profile-placeholder.jpg`,
              darkTheme: false,
              banner: '',
            };

            db.doc(`users/${userName}`).set(newUser);

            if (uid && displayName) {
              dispatch(login(uid, displayName, newUser.avatar, newUser.banner));
            }
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// export const startGoogleLogin = () => {
//   return (dispatch: any) => {
//     firebase
//       .auth()
//       .signInWithPopup(googleAuthProvider)
//       .then(async ({ user }) => {
//         if (user) {
//           const { uid, displayName } = user;
//           if (uid && displayName) {
//             const { avatar } = await getUserData(displayName);
//             dispatch(login(uid, displayName, avatar));
//           }
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };
// };

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
