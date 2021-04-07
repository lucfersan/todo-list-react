import React, { useCallback, useRef, useState } from 'react';

import { Container, SignUpContent } from './styles';

import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

interface DataProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback((data: DataProps) => {
    const { name, email, password } = data;

    api
      .post('users', {
        name,
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
      <SignUpContent>
        <h1>To-Dos</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>{errorMessage}</h2>
          <Input name="name" placeholder="Name" required />

          <Input name="email" placeholder="Email" type="email" required />

          <Input
            name="password"
            placeholder="Password"
            type="password"
            required
          />

          <Link to="/signin">Already have an account? Sign In!</Link>

          <button type="submit">Create Account</button>
        </Form>
      </SignUpContent>
    </Container>
  );
};

export default SignUp;
