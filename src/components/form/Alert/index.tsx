import React, { FC } from 'react';
import { AlertText } from './styles';

const Alert: FC = ({ children }) => {
  return <AlertText>{children}</AlertText>;
};

export default Alert;
