import React, { useCallback, useContext, useState } from 'react';
import { ModalContext } from '../../contexts/Modal';

import { Container, ModalContent, Form } from './styles';

import api from '../../services/api';

const Modal: React.FC = () => {
  const { closeModal, placeholder, id } = useContext(ModalContext);

  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodo(e.target.value);
    },
    [newTodo],
  );

  const handleUpdateTodo = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!newTodo) return;

      await api.patch(`todos/${id}`, {
        name: newTodo,
      });

      location.reload();
    },
    [newTodo],
  );

  return (
    <Container>
      <ModalContent>
        <Form onSubmit={handleUpdateTodo}>
          <input
            defaultValue={placeholder}
            placeholder={placeholder}
            onChange={handleInputChange}
          />

          <div>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit">Update todo</button>
          </div>
        </Form>
      </ModalContent>
    </Container>
  );
};

export default Modal;
