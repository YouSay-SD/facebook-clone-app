import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login, Profile, Photos } from '../pages';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth/auth';

export const Routes: FC = () => {
  const dispatch = useDispatch();

  // Keep authentication status
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName } = user;
        if (uid && displayName) {
          dispatch(login(uid, displayName));
        }
      }
    });
  }, []);

  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/photos/:photoId' component={Photos} />
      <Redirect to='/' />
    </Switch>
  );
};
