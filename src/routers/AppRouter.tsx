import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
