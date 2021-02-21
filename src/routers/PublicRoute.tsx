import React, { FC } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from './interface';

export const PublicRoute: FC<RouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: object) =>
        isAuthenticated ? <Redirect to='/profile' /> : <Component {...props} />
      }
    />
  );
};
