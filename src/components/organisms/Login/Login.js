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
        <CircleBackground />
      </FormContainer>
    </FormWrapper>
  );
};
