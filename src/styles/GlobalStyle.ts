import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #dcdde8;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
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
