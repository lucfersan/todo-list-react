import React from 'react';
import Todos from './pages/Todos';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <Todos />

      <GlobalStyle />
    </>
  );
};

export default App;
