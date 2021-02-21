import React, { FC } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from './interface';

export const PrivateRoute: FC<RouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: object) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};
