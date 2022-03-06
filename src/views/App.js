import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useUserAuth } from 'context/UserAuthContext';
import { AuthenticatedApp } from 'views/AuthenticatedApp/AuthenticatedApp';
import { UnauthenticatedApp } from 'views/UnauthenticatedApp/UnathenticatedApp';

const NotFound = () => {
  return <p>Not found</p>;
};

// const datab = console.log(database);

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 20px 0 20px;
  background-color: #f5f5f5;
`;

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Porfile</li>
      </ul>
    </nav>
  );
};

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

const AddWrapper = styled.div`
  height: 200px;
  width: 200px;
  background-color: red;
`;

const AddEdit = () => {
  console.log('add edit');
  return <AddWrapper>Add edit view</AddWrapper>;
};

// const AuthenticatedApp = () => {
//   return (
//     <MainTemplate>
//       <Routes>
//         <Route path="dashboard" element={<Dashboard />} />
//       </Routes>
//     </MainTemplate>
//   );
// };

// const UnauthenticatedApp = () => {
//   return (
//     <Wrapper>
//       <Login />
//       <Routes>
//         <Route exact path="/" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/reset" element={<Reset />} />
//       </Routes>
//     </Wrapper>
//   );
// };

function App() {
  const { isAuth } = useUserAuth();
  console.log('App: ', isAuth);

  return isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp />;

  // return (
  //   <ThemeProvider theme={theme}>
  //     <GlobalStyle />

  //     <Wrapper>
  //       <Routes>
  //         <Route
  //           path="dashboard"
  //           element={
  //             <ProtectedRoute>
  //               <Dashboard />
  //             </ProtectedRoute>
  //           }
  //         />
  //         <Route exact path="/" element={<Login />} />
  //         <Route exact path="/register" element={<Register />} />
  //         <Route exact path="/reset" element={<Reset />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </Wrapper>
  //   </ThemeProvider>
  // );
}
export default App;
