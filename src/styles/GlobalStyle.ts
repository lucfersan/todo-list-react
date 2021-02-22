import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --background: #f2f3f5;
    --text: #666666;
    --red: #e83f5b;
    --green: #4cd62b;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  *, input, button {
    font: 500 1rem 'Rajdhani', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
