import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, saveTodo } from '../../reducers/todos';
import Button from '../Button/Button';
import './TodoItem.scss';

const TodoItem = ({ todo, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(todo.value || '');

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodo(todo.id, index));
  };

  const handleEditClick = () => {
    setIsActive(true);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (event.type === 'change') {
      setValue(value);
    }
  };

  const handleSaveClick = () => {
    dispatch(saveTodo(Object.assign(todo, { value })), index);
    setIsActive(false);
  };

  return (
    <li key={todo.id} className="todo-item">
      {!isActive && <span>{todo.value}</span>}
      {isActive && (
        <input
          type="text"
          value={value}
          aria-label="todos edit text"
          onChange={handleInputChange}
        />
      )}
      <div>
        <Button name="delete" onClick={handleDeleteClick}>
          <i className="fas fa-trash" />
        </Button>
        {!isActive && (
          <Button name="edit" onClick={handleEditClick}>
            <i className="fas fa-edit" />
          </Button>
        )}
        {isActive && (
          <Button name="save" onClick={handleSaveClick}>
            <i className="fas fa-save" />
          </Button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
