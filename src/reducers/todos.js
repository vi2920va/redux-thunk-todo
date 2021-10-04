import axios from 'axios';

const LOAD_TODOS = 'LOAD_TODOS';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SAVE_TODO = 'SAVE_TODO';

export const loadTodos = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/todos');
  dispatch({ type: LOAD_TODOS, payload: response.data });
};

export const addTodo = (value) => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/todos', {
    value: value,
  });
  dispatch({ type: ADD_TODO, payload: response });
};

export const deleteTodo = (id, index) => async (dispatch) => {
  const response = await axios.delete(`http://localhost:5000/todos/${id}`);
  dispatch({ type: DELETE_TODO, payload: response, index });
};

export const saveTodo = (item, index) => async (dispatch) => {
  const response = await axios.put(`http://localhost:5000/todos/${item.id}`, {
    value: item.value,
  });
  dispatch({ type: SAVE_TODO, payload: response, index });
};

export default function todos(state = [], action) {
  const list = [...state];
  switch (action.type) {
    case LOAD_TODOS:
      return action.payload;
    case ADD_TODO:
      return [...state, action.payload.data];
    case DELETE_TODO:
      list.splice(action.index, 1);
      return list;
    case SAVE_TODO:
      list.splice(action.index, action.payload);
      return list;
    default:
      return state;
  }
}
