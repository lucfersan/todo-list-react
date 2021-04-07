import React, { useCallback, useContext, useRef, useState } from 'react';

import { Container, SignUpContent } from './styles';

import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { AuthContext } from '../../contexts/Auth';

interface DataProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { signUp } = useContext(AuthContext);
  const formRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: DataProps) => {
      const response = await signUp(data);

      if (typeof response === 'string') {
        setErrorMessage(response);
      } else {
        history.push('/signin');
      }
    },
    [history],
  );

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
