import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, children }) => {
  let auth = isAuth;

  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
