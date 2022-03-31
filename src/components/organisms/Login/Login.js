import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from 'helpers/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUserAuth } from 'context/UserAuthContext';
import { FormContainer } from 'components/atoms/FormContainer/FormContainer';
import { FormWrapper } from 'components/atoms/FormWrapper/FormWrapper';
import { CircleBackground } from 'components/atoms/CircleBackground/CircleBackground';
import { Input } from 'components/atoms/Input/Input';
import { ErrorBox } from 'components/atoms/ErrorBox/ErrorBox';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

const Background = styled.div`
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;
const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
  &:first-child {
    background: linear-gradient(#4b36dd, #8e81e6);
    left: -80px;
    top: -80px;
  }
  &:last-child {
    background: linear-gradient(to right, #29fd53, #8ef3a2);
    right: -30px;
    bottom: -80px;
  }
`;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  //   const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsAuth, signInWithGoogle, logInWithEmailAndPassword, errors } =
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
    <FormWrapper>
      <Background>
        <Shape />
        <Shape />
      </Background>
      <FormContainer>
        {errors && (
          <ErrorBox>
            <p>{errors}</p>
          </ErrorBox>
        )}
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button onClick={() => logInWithEmailAndPassword(email, password)}>
          Login
        </Button>
        <Button onClick={signInWithGoogle}>Login with Google</Button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </FormContainer>
    </FormWrapper>
  );
};
