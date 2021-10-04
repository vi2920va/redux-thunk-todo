import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos } from '../../reducers/todos';
import Form from '../Form/Form';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <main className="todo">
      <div className="todo-container">
        <h1 className="todo-title">
          Todo List
          <span className="todo-explanation">
            Get things done. one item a time.
          </span>
        </h1>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))}
        </ul>
        <Form />
      </div>
    </main>
  );
};
export default TodoList;
