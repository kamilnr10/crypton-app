import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from 'helpers/firebase';
import { FormContainer } from 'components/atoms/FormContainer/FormContainer';
import { FormWrapper } from 'components/atoms/FormWrapper/FormWrapper';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { useSelector } from 'react-redux';
import { Shape, Background } from './Login.styles';

const Login = () => {
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

export default Login;
