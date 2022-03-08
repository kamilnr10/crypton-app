import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from 'context/UserAuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const { isAuth } = useUserAuth();
  console.log('Protected user:', user);
  console.log(' Proteted IsAuth:', isAuth);
  //   let auth = isAuth;

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};
