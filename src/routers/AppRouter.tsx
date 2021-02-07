import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
