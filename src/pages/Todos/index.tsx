import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Container, Form, List } from './styles';

interface TodoProps {
  id: number;
  name: string;
}

const Todos: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
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
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!newTodo) return;
      setListTodos(currentTodos => [
        ...currentTodos,
        { id: Date.now(), name: newTodo },
      ]);

      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    },
    [newTodo, listTodos],
  );

  const handleRemove = useCallback(
    todo => {
      setListTodos(listTodos.filter(t => t !== todo));
    },
    [listTodos],
  );

  return (
    <Container>
      <h1>todos</h1>

      <Form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="todo" onChange={handleInputChange} />

        <button type="submit">Add to list</button>
      </Form>

      <List>
        {listTodos.map(todo => (
          <div key={todo.id}>
            <li>
              <span>{todo.name}</span>
            </li>
            <button onClick={() => handleRemove(todo)}>Remove</button>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Todos;
