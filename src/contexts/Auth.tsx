import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    [key: string]: any;
  };
  signIn: (credentials: SignInCredentials) => Promise<void | string>;
  signUp: (credentials: SignUpCredentials) => Promise<void | string>;
  signOut: () => void;
}

const AuthContext = createContext<Partial<AuthContextData>>({});

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Partial<AuthState>>(() => {
    const token = localStorage.getItem('@ListLucas:token');
    const user = localStorage.getItem('@ListLucas:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post('session', { email, password });

      const { token, user } = response.data;

      localStorage.setItem('@ListLucas:token', token);
      localStorage.setItem('@ListLucas:user', JSON.stringify(user));

      setData({ token, user });
    } catch (err) {
      return err.response.data.error;
    }
  }, []);

  const signUp = useCallback(
    async ({ name, email, password }: SignUpCredentials) => {
      try {
        await api.post('users', { name, email, password });
      } catch (err) {
        return err.response.data.error;
      }
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@ListLucas:token');
    localStorage.removeItem('@ListLucas:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
