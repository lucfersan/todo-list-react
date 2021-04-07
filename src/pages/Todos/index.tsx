import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import api from '../../services/api';

import { Container, Form, List, SpecialButton, TodoLi, LogOut } from './styles';
import { ModalContext } from '../../contexts/Modal';
import { AuthContext } from '../../contexts/Auth';

interface TodoProps {
  id: number;
  name: string;
  done: boolean;
  created_at: number;
  updated_at: number;
}

const Todos: React.FC = () => {
  const { openModal } = useContext(ModalContext);
  const { user, signOut } = useContext(AuthContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const [newTodo, setNewTodo] = useState('');
  const [listTodos, setListTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    api.get(`todos/${user.id}`).then(response => {
      setListTodos(response.data);
    });
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodo(e.target.value);
    },
    [newTodo],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!newTodo) return;
      api
        .post('todos', {
          user_id: user.id,
          name: newTodo,
        })
        .then(response => {
          setListTodos([...listTodos, response.data]);
        });

      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    },
    [newTodo, listTodos],
  );

  const handleRemove = useCallback((todo: TodoProps) => {
    api.delete(`todos/${todo.id}`);
    location.reload();
  }, []);

  const handleTodoDone = useCallback(
    (id: number) => {
      api.patch(`todos/done/${id}`);
      location.reload();
    },
    [listTodos],
  );

  return (
    <>
      <Container>
        <h1>To-Dos</h1>

        <LogOut type="button" onClick={signOut}>
          Log out
        </LogOut>

        <Form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            placeholder="todo"
            onChange={handleInputChange}
          />

          <button type="submit">Add to list</button>
        </Form>

        <List>
          {listTodos.map(todo => (
            <div key={todo.id}>
              <TodoLi done={todo.done}>
                <span onClick={() => openModal(todo.id, todo.name)}>
                  {todo.name}
                </span>
              </TodoLi>

              <div>
                <SpecialButton
                  done={todo.done}
                  onClick={() => handleTodoDone(todo.id)}
                >
                  ✔
                </SpecialButton>
                <SpecialButton onClick={() => handleRemove(todo)}>
                  ✗
                </SpecialButton>
              </div>
            </div>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Todos;
