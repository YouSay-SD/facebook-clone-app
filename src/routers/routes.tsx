import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Redirect to='/' />
    </Switch>
  );
};
