import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from 'helpers/firebase';
import { FormContainer } from 'components/atoms/FormContainer/FormContainer';
import { FormWrapper } from 'components/atoms/FormWrapper/FormWrapper';
import { Input } from 'components/atoms/Input/Input';
import { ErrorBox } from 'components/atoms/ErrorBox/ErrorBox';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
  const { isAuth, token, id } = useSelector((state) => state.user);
  const { signInWithGoogle, logInWithEmailAndPassword } = useLogin();

  return (
    <FormWrapper>
      <Background>
        <Shape />
        <Shape />
      </Background>
      <FormContainer>
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
