import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from 'helpers/firebase';
import './Register.css';
import {
  LoginForm,
  LoginContainer,
  CircleBackground,
  LoginTextBox,
  Button,
} from './Login';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert('Please enter name');
    if (password !== password2) {
      alert('\nPassword did not match: Please try again...');
      return false;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard', { replace: true });
  }, [user, loading]);

  return (
    <LoginForm>
      <LoginContainer>
        <CircleBackground />
        <LoginTextBox
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <LoginTextBox
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <LoginTextBox
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <LoginTextBox
          type="password"
          className="register__textBox"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Confirm password"
        />
        <Button onClick={register}>Register</Button>
        <Button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </Button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </LoginContainer>
    </LoginForm>
  );
};
export default Register;
