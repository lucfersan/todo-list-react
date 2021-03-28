import React from 'react';
import Todos from './pages/Todos';
import GlobalStyle from './styles/GlobalStyle';
import { ModalProvider } from './contexts/Modal';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Todos />

      <GlobalStyle />
    </ModalProvider>
  );
};

export default App;
