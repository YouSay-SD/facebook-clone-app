import React, { FC, useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Profile, Search, Album, Picture } from '../pages';
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
          const { avatar } = await getUserData(user.displayName);
          dispatch(login(user.uid, user.displayName, avatar));
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
          <Route exact path='/' component={Login} />
          <Redirect to='/' />
        </>
      ) : (
        <>
          <Navbar />
          <Route exact path='/profile/:userName' component={Profile} />
          <Route exact path='/album/:userName' component={Album} />
          <Route
            exact
            path='/picture/:userName/:idPicture'
            component={Picture}
          />
          <Route exact path='/search' component={Search} />
          {/* <Redirect to={`/profile/${userName}`} /> */}
        </>
      )}
    </Switch>
  );
};
