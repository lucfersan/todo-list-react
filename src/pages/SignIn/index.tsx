import React, { useCallback, useRef, useState, useContext } from 'react';

import { Container, SignInContent } from './styles';

import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { AuthContext } from '../../contexts/Auth';

interface SignInDataProps {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const formRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInDataProps) => {
      const response = await signIn(data);

      if (typeof response === 'string') {
        setErrorMessage(response);
      } else {
        history.push('/');
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <SignInContent>
        <h1>To-Dos</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>{errorMessage}</h2>

          <Input name="username" placeholder="Username" required />

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
