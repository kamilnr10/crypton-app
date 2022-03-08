import React from 'react';
import { useUserAuth } from 'context/UserAuthContext';
import { AuthenticatedApp } from 'views/AuthenticatedApp/AuthenticatedApp';
import { UnauthenticatedApp } from 'views/UnauthenticatedApp/UnathenticatedApp';

function App() {
  const { isAuth } = useUserAuth();
  console.log('App: ', isAuth);

  return isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}
export default App;
