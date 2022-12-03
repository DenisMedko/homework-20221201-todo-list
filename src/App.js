import './App.css';
import TodoList from './components/TodoList';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'changeTitle' :
      return {
        ...state,
        currentTitle : action.payload,  
      };
    case 'addItem' :
      return {
        ...state,
        todos: [
          ...state.todos, 
          {
            id : state.todos.length , 
            title : state.currentTitle, 
            isChecked : false,
          }
        ],
      };
    case 'changeIsChecked' :
      return {
        ...state,
        todos : state.todos.map(item => (
          {...item, isChecked : item.id === action.payload.id 
            ? action.payload.value 
            : item.isChecked
          })
        ),  
      };
    case 'deleteItem' :  
      return {
        ...state,
        todos : state.todos.filter(item => item.id !== action.payload),  
      };
    default :
      return state;
  }
  
};
const initialState = {
  todos : [],
  currentTitle : ''
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const inputHandler = ({target : {value}}) => {
    dispatch({type : 'changeTitle', payload : value})
  };

  const todoAddBtnHandler = () => {
    dispatch({type : 'addItem'});
    dispatch({type : 'changeTitle', payload : ''})
  };

  const checkHandler = ({target : {name : id, checked}}) => {
    dispatch({type : 'changeIsChecked', payload: {id : +id, value : checked}});
  };

  const deleteHandler = ({target : {name : id}}) => {
    dispatch({type : 'deleteItem', payload: +id});
  };

  const {currentTitle, todos} = state;
  return (
    <div>
      <input className="todoInput" value={currentTitle} onChange={inputHandler}/>
      <button className="todoAddBtn" onClick={todoAddBtnHandler}>Add</button>  
      <TodoList todos={todos} checkHandler={checkHandler} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
