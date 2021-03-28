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
`;

export const ModalContent = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
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

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button:first-child {
      background: var(--red);
      color: #fff;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s ease;
      margin: 0 auto;
      background: #333;
      color: #fff;
      width: 10rem;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  @media (max-width: 500px) {
    input {
      width: 13rem;
    }

    div {
      flex-direction: column;

      button:first-child {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
