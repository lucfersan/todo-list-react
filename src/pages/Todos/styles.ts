import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5rem;
    margin-top: 4rem;
  }

  @media (max-width: 500px) {
    width: 100vw;
    padding: 2rem;
  }
`;

export const Form = styled.form`
  width: 30rem;
  display: flex;
  margin: 4rem 0;

  input {
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 1rem;
    height: 3.5rem;
    flex: 1;
    font-size: 1.5rem;

    &:focus {
      border-bottom: 3px solid var(--blue-twitter);
    }
  }

  button {
    border: 0;
    border-radius: 0 5px 5px 0;
    padding: 1rem;
    height: 3.5rem;
    font-size: 1.5rem;
    background: var(--green);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
    margin-left: 1rem;

    &:hover {
      background: ${shade(0.1, '#4cd62b')};
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    margin: 2rem 0;
    align-items: center;

    input,
    button {
      border-radius: 5px;
    }

    input {
      width: 100%;
    }

    button {
      margin-left: 0;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

export const List = styled.ul`
  list-style-type: none;
  width: 30rem;
  margin-bottom: 4rem;

  div {
    display: flex;
    opacity: 0.7;
    transition: opacity 0.2s ease, opacity 0.2s ease;

    &:hover {
      opacity: 1;
      color: #000;
    }

    li {
      flex: 1;
      display: flex;
      align-items: center;
      overflow-x: auto;

      span {
        font-size: 1.5rem;
      }
    }

    button {
      border: 0;
      border-radius: 5px;
      padding: 1rem;
      height: 2.5rem;
      font-size: 1.3rem;
      background: var(--red);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;
      margin-left: 1rem;

      &:hover {
        background: ${shade(0.1, '#e83f5b')};
      }
    }

    & + div {
      margin-top: 1rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 2rem;

    div {
      opacity: 1;
    }
  }
`;
