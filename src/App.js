import './App.css';
import TodoList from './components/TodoList';
import { useReducer } from 'react';
import { changeItemTitle, addItem, changeItemIsDone, deleteItem } from './actions/actionCreators';
import reducer from './reducers/todosReducer';

const initialState = {
  todos : [],
  currentTitle : '',
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleInput = ({target : {value}}) => {
    dispatch( changeItemTitle(value) );
  };

  const handleAddBtn = () => {
    dispatch( addItem() );
    dispatch( changeItemTitle('') );
  };

  const handleIsDone = ({target : {name : id, checked}}) => {
    dispatch( changeItemIsDone({id : +id, value : checked}));
  };

  const handleDelete = ({target : {name : id}}) => {
    dispatch( deleteItem(+id) );
  };

  const {currentTitle, todos} = state;
  return (
    <div>
      <input className="todoInput" value={currentTitle} onChange={handleInput}/>
      <button className="todoAddBtn" onClick={handleAddBtn}>Add</button>  
      <TodoList todos={todos} handleIsDone={handleIsDone} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
