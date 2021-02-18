import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Profile, Photos } from '../pages';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/photos/:photoId' component={Photos} />
      <Redirect to='/' />
    </Switch>
  );
};
