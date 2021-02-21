import React, { FC, useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Profile, Photos } from '../pages';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { RootStore } from '../store/store';

export const Routes: FC = () => {
  const dispatch = useDispatch();

  const { uid } = useSelector((state: RootStore) => state.auth);

  // Keep authentication status
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.uid && user.displayName) {
          dispatch(login(user.uid, user.displayName));
        }
      }
    });
  }, []);

  return (
    <Switch>
      {/* <Route exact path='/' component={Login} /> */}
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
