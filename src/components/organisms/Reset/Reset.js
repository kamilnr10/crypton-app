import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, sendPasswordReset } from 'helpers/firebase';
import { FormContainer } from 'components/atoms/FormContainer/FormContainer';
import { FormWrapper } from 'components/atoms/FormWrapper/FormWrapper';
import { CircleBackground } from 'components/atoms/CircleBackground/CircleBackground';
import { Input } from 'components/atoms/Input/Input';
import { ErrorBox } from 'components/atoms/ErrorBox/ErrorBox';
import { Button } from 'components/atoms/Button/Button';

export const Reset = () => {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading]);

  return (
    <FormWrapper>
      <FormContainer>
        <CircleBackground />
        <Input
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
      </FormContainer>
    </FormWrapper>
  );
};
