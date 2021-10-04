import axios from 'axios';

const LOAD_TODOS = 'LOAD_TODOS';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';

export const loadTodos = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5001/todos');
  dispatch({ type: LOAD_TODOS, payload: response.data });
};

export const addTodo = (value) => async (dispatch) => {
  const result = await axios({
    method: 'post',
    url: 'http://localhost:5001/todos',
    data: {
      value: value,
      isCompleted: false,
    },
  });
  dispatch({ type: ADD_TODO, payload: result });
};

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const editTodo = (value, id) => ({
  type: EDIT_TODO,
  value,
  id,
});

export default function todos(state = [], action) {
  switch (action.type) {
    case LOAD_TODOS:
      return action.payload;
    case ADD_TODO:
      
      console.log(state, action.payload);
      console.log(action);
      const id = Date.now().toString();
      // return [
      //   ...state,
      //   {
      //     id,
      //     value: action.value,
      //     isCompleted: false,
      //   },
      // ];
    return
    default:
      return state;
  }
}
