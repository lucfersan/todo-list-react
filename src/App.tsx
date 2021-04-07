import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import { ModalProvider } from './contexts/Modal';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Routes />

      <GlobalStyle />
    </ModalProvider>
  );
};

export default App;
