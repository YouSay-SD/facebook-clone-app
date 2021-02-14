import React from 'react';
import { AlertText } from './styles';

const Alert: React.FC = ({ children }: any) => {
  return <AlertText>{children}</AlertText>;
};

export default Alert;
