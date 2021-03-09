import React, { FC, useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Profile, Search } from '../pages';
import { firebase } from '../firebase/firebaseConfig';
import { login, checkingFinish } from '../actions/auth/auth';
import { RootStore } from '../store/store';
import { Navbar, Loader } from '../components';

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
          <Route exact path='/search' component={Search} />
          <Redirect to='/profile/YouSay' />
        </>
      )}
    </Switch>
  );
};
