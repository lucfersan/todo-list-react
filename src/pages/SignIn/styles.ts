import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(149, 150, 151, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5rem;
    color: #333;
    margin-bottom: 4rem;
  }
`;

export const SignInContent = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    h2 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--red);
      margin-bottom: 1rem;
    }

    input,
    button {
      font-size: 1.5rem;
      padding: 1rem;
      height: 3rem;
      border: 0;
      border-radius: 5px;
    }

    input {
      display: block;
      margin-bottom: 2rem;
      width: 25rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s ease;
      margin: 0 auto;
      background: #333;
      color: #fff;
      margin-top: 4rem;

      &:hover {
        opacity: 0.9;
      }
    }

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.3rem;
      transition: opacity 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 0.9;
      }
    }

    @media (max-width: 500px) {
      input {
        width: 13rem;
      }

      a {
        max-width: 10rem;
      }
    }
  }
`;
