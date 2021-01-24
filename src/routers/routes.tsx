import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export const Routes: React.FC = () => {
  return (
    <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      <Redirect to='/' />
    </Switch>
  );
};
