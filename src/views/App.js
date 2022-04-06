import React from 'react';
import { AuthenticatedApp } from 'views/AuthenticatedApp/AuthenticatedApp';
import { UnauthenticatedApp } from 'views/UnauthenticatedApp/UnathenticatedApp';
import { useAuth } from 'hooks/useAuth';

function App() {
  const { isAuth } = useAuth();

  return isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}
export default App;
