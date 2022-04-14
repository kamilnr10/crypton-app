import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from 'components/atoms/FormContainer/FormContainer';
import { FormWrapper } from 'components/atoms/FormWrapper/FormWrapper';
import { CircleBackground } from 'components/atoms/CircleBackground/CircleBackground';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { useLogin } from 'helpers/firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const {
    signInWithGoogle,

    registerWithEmailAndPassword,
  } = useLogin();

  const register = () => {
    if (!name) alert('Please enter name');
    if (password !== password2) {
      alert('\nPassword did not match: Please try again...');
      return false;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <FormWrapper>
      <FormContainer>
        <CircleBackground />
        <Input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <Input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Input
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
      </FormContainer>
    </FormWrapper>
  );
};

export default Register;
