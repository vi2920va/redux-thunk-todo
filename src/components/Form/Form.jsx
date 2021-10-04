import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todos';
import './Form.scss';

const Form = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };
  return (
    <form className="add-form" onSubmit={handleFormSubmit}>
      <h2>Add to the todo list</h2>
      <input
        type="text"
        className="add-input"
        aria-label="add input text"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit" className="add-btn">
        ADD ITEM
      </button>
    </form>
  );
};

export default Form;
