import React, { FC, useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Profile, Photos } from '../pages';
import { firebase } from '../firebase/firebaseConfig';
import { login, checkingFinish } from '../actions/auth/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { RootStore } from '../store/store';

export const Routes: FC = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state: RootStore) => state.auth);

  // Keep authentication status
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.uid && user.displayName) {
          dispatch(login(user.uid, user.displayName));
        }
      } else {
        dispatch(checkingFinish());
      }
    });
  }, []);

  if (checking) {
    return <h5>Loading...</h5>;
  }

  return (
    <Switch>
      <PublicRoute
        exact
        path='/'
        component={Login}
        isAuthenticated={!!uid}
        // path='/photos/:photoId'
        // component={Photos}
      />
      <PrivateRoute
        exact
        path='/profile'
        component={Profile}
        isAuthenticated={!!uid}
      />

      <Redirect to='/profile' />
    </Switch>
  );
};
