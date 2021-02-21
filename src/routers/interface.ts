import { FC } from 'react';

export interface RouteProps {
  isAuthenticated: boolean;
  component: FC;
  exact: boolean;
  path: string;
}
