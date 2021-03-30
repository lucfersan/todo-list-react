import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../contexts/Modal';

import { Container, ModalContent, Form } from './styles';

interface TodoProps {
  id: number;
  name: string;
  done: boolean;
}

const Modal: React.FC = () => {
  const { closeModal, placeholder, id } = useContext(ModalContext);

  const [newTodo, setNewTodo] = useState('');
  const [listTodos, setListTodos] = useState<TodoProps[]>(() => {
    const storagedTodos = localStorage.getItem('@TodosReact:listTodos');

    if (storagedTodos) {
      return JSON.parse(storagedTodos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@TodosReact:listTodos', JSON.stringify(listTodos));
  }, [listTodos]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodo(e.target.value);
    },
    [newTodo],
  );

  const handleUpdateTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!newTodo) return;

      const todo: TodoProps = {
        id,
        name: newTodo,
        done: false,
      };

      const filteredList = listTodos.filter(todo => todo.id !== id);
      const updatedList = [...filteredList, todo];

      localStorage.setItem(
        '@TodosReact:listTodos',
        JSON.stringify(updatedList),
      );

      location.reload();
    },
    [newTodo, listTodos],
  );

  return (
    <Container>
      <ModalContent>
        <Form onSubmit={handleUpdateTodo}>
          <input placeholder={placeholder} onChange={handleInputChange} />

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
