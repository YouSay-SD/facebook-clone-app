import React, { FC, useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  LoginPage,
  ProfilePage,
  SearchPage,
  AlbumPage,
  PicturePage,
  EditProfilePage,
} from '../pages';
import { firebase } from '../firebase/firebaseConfig';
import { login, checkingFinish } from '../actions/auth/auth';
import { RootStore } from '../store/store';
import { Navbar, Loader } from '../components';
import { getUserData } from '../helpers/getUserData';

export const Routes: FC = () => {
  const dispatch = useDispatch();
  const { checking, uid, userName } = useSelector(
    (state: RootStore) => state.auth
  );

  // Keep authentication status
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        if (user.uid && user.displayName) {
          console.log(user.displayName);
          const { avatar, banner }: any = await getUserData(user.displayName);
          dispatch(login(user.uid, user.displayName, avatar, banner));
        }
      } else {
        dispatch(checkingFinish());
      }
    });
  }, []);

  if (checking) {
    return <Loader />;
  }

  return (
    <Switch>
      {!uid ? (
        <>
          <Route exact path='/' component={LoginPage} />
          <Redirect to='/' />
        </>
      ) : (
        <>
          <Navbar />
          <Route exact path='/profile/:userName' component={ProfilePage} />
          <Route exact path='/album/:userName' component={AlbumPage} />
          <Route exact path='/edit-profile' component={EditProfilePage} />
          <Route
            exact
            path='/picture/:userName/:idPicture'
            component={PicturePage}
          />
          <Route exact path='/search' component={SearchPage} />
          {/* <Redirect to={`/profile/${userName}`} /> */}
        </>
      )}
    </Switch>
  );
};
