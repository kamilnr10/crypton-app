import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from 'helpers/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Login.css';
import styled from 'styled-components';
import { useUserAuth } from 'context/UserAuthContext';

export const LoginForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0px 7px 20px 4px rgba(236, 232, 253, 1);
  overflow: hidden;
  z-index: 10;
`;

export const CircleBackground = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  background-color: #f9f5ff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -10%);
  z-index: -1;
`;

export const LoginTextBox = styled.input`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: grey;
  border: 1px solid #6c95bb;
  box-shadow: inset 0px 6px 20px 4px rgba(209, 220, 232, 1);
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  color: white;
  background-image: linear-gradient(to right, #756ef4 0%, #be85fa 100%);
  /* box-shadow: 0px 7px 31px 19px rgba(56, 206, 232, 1); */
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { setIsAuth, signInWithGoogle, logInWithEmailAndPassword } =
    useUserAuth();

  useEffect(() => {
    console.log('user', user);
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/dashboard');
    }
  }, [user, loading]);

  return (
    <LoginForm>
      <LoginContainer>
        <LoginTextBox
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <LoginTextBox
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
        <Button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </Button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
        <CircleBackground />
      </LoginContainer>
    </LoginForm>
  );
};
export default Login;
