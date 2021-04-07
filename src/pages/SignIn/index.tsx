import React, { useCallback, useRef, useState } from 'react';

import { Container, SignInContent } from './styles';

import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

interface DataProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback((data: DataProps) => {
    const { email, password } = data;

    api
      .post('session', {
        email,
        password,
      })
      .catch(error => {
        if (error.response) {
          setErrorMessage(error.response.data.error);
        }
      });
  }, []);

  return (
    <Container>
      <SignInContent>
        <h1>To-Dos</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>{errorMessage}</h2>

          <Input name="email" placeholder="Email" type="email" required />

          <Input
            name="password"
            placeholder="Password"
            type="password"
            required
          />

          <Link to="/signup">Don't have an account? Sign up!</Link>

          <button type="submit">Sign In</button>
        </Form>
      </SignInContent>
    </Container>
  );
};

export default SignIn;
