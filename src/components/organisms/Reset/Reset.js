import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FormContainer } from 'components/atoms/FormContainer/FormContainer';
import { FormWrapper } from 'components/atoms/FormWrapper/FormWrapper';
import { CircleBackground } from 'components/atoms/CircleBackground/CircleBackground';
import { Input } from 'components/atoms/Input/Input';
import { ErrorBox } from 'components/atoms/ErrorBox/ErrorBox';
import { Button } from 'components/atoms/Button/Button';
import { useLogin } from 'helpers/firebase';

export const Reset = () => {
  const [email, setEmail] = useState('');
  const { sendPasswordReset } = useLogin();
  const navigate = useNavigate();

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
