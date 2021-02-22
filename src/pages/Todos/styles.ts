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
`;

export const List = styled.ul`
  list-style-type: none;
  width: 30rem;

  div {
    display: flex;

    li {
      font-size: 1.5rem;
      flex: 1;
      align-items: center;
      overflow-x: auto;
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
`;
