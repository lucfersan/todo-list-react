import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Container, Form, List, SpecialButton, TodoLi } from './styles';
import { ModalContext } from '../../contexts/Modal';

interface TodoProps {
  id: number;
  name: string;
  done: boolean;
}

const Todos: React.FC = () => {
  const { openModal } = useContext(ModalContext);

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
    [newTodo],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!newTodo) return;
      setListTodos(currentTodos => [
        ...currentTodos,
        { id: Date.now(), name: newTodo, done: false },
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

  const handleTodoDone = useCallback(
    (id: number) => {
      const getTodo = listTodos.filter(todo => todo.id === id);

      const done = getTodo[0].done ? false : true;

      const todo: TodoProps = {
        ...getTodo[0],
        done,
      };

      const filteredList = listTodos.filter(todo => todo.id !== id);
      const updatedList = [...filteredList, todo];

      localStorage.setItem(
        '@TodosReact:listTodos',
        JSON.stringify(updatedList),
      );

      location.reload();
    },
    [listTodos],
  );

  return (
    <>
      <Container>
        <h1>todos</h1>

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
