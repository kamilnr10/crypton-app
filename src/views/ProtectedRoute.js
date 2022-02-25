import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from 'context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  console.log(user);
  //   let auth = isAuth;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
