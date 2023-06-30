import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './screens/homepage';
import AuthPage from './screens/auth';
import NotFoundPage from './screens/not-found';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/auth" Component={AuthPage} />
      <Route path='*' Component={NotFoundPage} />
    </Routes>
  );
};

export default App;
