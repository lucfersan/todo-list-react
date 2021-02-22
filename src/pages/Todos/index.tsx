import React, { useCallback, useEffect, useState } from 'react';

import { Container, Form, List } from './styles';

const Todos: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const [listTodos, setListTodos] = useState<string[]>(() => {
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
      setListTodos([...listTodos, newTodo]);
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
        <input placeholder="todo" onChange={handleInputChange} />

        <button type="submit">Add to list</button>
      </Form>

      <List>
        {listTodos.map(todo => (
          <div key={todo}>
            <li>{todo}</li>
            <button onClick={() => handleRemove(todo)}>Remove</button>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Todos;
