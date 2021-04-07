import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import { ModalProvider } from './contexts/Modal';
import { AuthProvider } from './contexts/Auth';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
