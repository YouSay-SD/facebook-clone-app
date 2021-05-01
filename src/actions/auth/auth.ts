import {
  db,
  firebase,
  googleAuthProvider,
  usersRef,
} from '../../firebase/firebaseConfig';
import { types } from '../../types/types';
import { RegisterProps } from '../../components/auth/FormRegister/interface';
import { startLoading, finishLoading } from '../ui/ui';
import { getUserData } from '../../helpers/getUserData';
import { UserProps } from '../../reducers/authReducer/interface';

export const startlogin = ({
  uid,
  userName,
  avatar,
  banner,
  bio,
  darkTheme,
}: UserProps) => {
  return {
    type: types.login,
    payload: {
      uid,
      userName,
      avatar,
      banner,
      bio,
      darkTheme,
    },
  };
};

export const login = (uid: string, userName: string) => {
  return async (dispatch: any) => {
    const { avatar, banner, bio, darkTheme }: any = await getUserData(userName);

    dispatch(
      startlogin({
        uid,
        userName,
        avatar,
        banner,
        bio,
        darkTheme,
      })
    );
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

          if (uid && displayName) {
            dispatch(login(uid, displayName));
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
              avatar: `${process.env.REACT_APP_URL}/img/profile/profile-placeholder.jpg`,
              darkTheme: false,
              banner: '',
              bio: '',
            };

            db.doc(`users/${userName}`).set(newUser);

            if (uid && displayName) {
              dispatch(login(uid, displayName));
            }
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// Update Profile
interface UpdateProfileProps {
  avatar: string;
  banner: string;
  bio: string;
}

// Update Profile
export const startUpdateProfile = ({
  avatar,
  banner,
  bio,
}: UpdateProfileProps) => ({
  type: types.updateProfile,
  payload: {
    avatar,
    banner,
    bio,
  },
});

export const updateProfile = ({ avatar, banner, bio }: UpdateProfileProps) => {
  return async (dispatch: any, getState: any) => {
    const { userName } = getState().auth;
    const updateProps: UpdateProfileProps = {
      avatar,
      banner,
      bio,
    };
    await usersRef.doc(userName).update(updateProps);
    await dispatch(startUpdateProfile(updateProps));
  };
};

// Logout
export const logout = () => ({
  type: types.logout,
});

export const startLogout = () => {
  return async (dispatch: any) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

// Checking
export const checkingFinish = () => ({ type: types.checkingFinish });
