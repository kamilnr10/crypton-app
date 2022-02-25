import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, sendPasswordReset } from 'helpers/firebase';
import './Reset.css';
import {
  LoginForm,
  LoginContainer,
  CircleBackground,
  LoginTextBox,
  Button,
} from './Login';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading]);

  return (
    <LoginForm>
      <LoginContainer>
        <CircleBackground />
        <LoginTextBox
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Button onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </Button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </LoginContainer>
    </LoginForm>
  );
};
export default Reset;
