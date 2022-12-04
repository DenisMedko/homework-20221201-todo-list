import './App.css';
import * as yup from 'yup';
import { useReducer } from 'react';
import TodoList from './components/TodoList';
import todosReducer from './reducers/todosReducer';
import { changeItemTitle, addItem, changeItemIsDone, deleteItem } from './actions/actionCreators';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialState = {
  todos : [],
  currentTitle : '',
};
const initialFormState = {
  currentTitle : '',
};

const TODO_ITEM_SCHEMA = yup.object({
  title: yup
    .string()
    //.min(2, 'Title must have at least 2 letter')
    //.required('You must enter the title')
    
    // не разобрался, валидация всегда выдает ошибку, как
    //будто тайтл всегда пустой
});

const App = () => {

  const [state, dispatch] = useReducer(todosReducer, initialState);
  
  const handleInput = ({target : {value}}) => {
    dispatch( changeItemTitle(value) );
  };

  const handleAddBtn = () => {
    dispatch( addItem() );
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
      <Formik 
        initialValues={initialFormState} 
        onSubmit={handleAddBtn} 
        validationSchema={TODO_ITEM_SCHEMA}>
          <Form>
            <ErrorMessage name="title" component="div" />
            <Field 
              type="text" 
              name="title"
              placeholder="To do title"
              //className="todoInput" 
              value={currentTitle} 
              onChange={handleInput}
            />
            <button type="submit" className="todoAddBtn">Add</button> 
          </Form>
      </Formik> 
      <TodoList todos={todos} handleIsDone={handleIsDone} handleDelete={handleDelete}/>
                   
    </div>
  );

}

export default App;

// {(formikProps) => {
//   console.dir( formikProps);
//   return (<Form>
//   <ErrorMessage name="title" component="div" />
//   <Field 
//     type="text" 
//     name="title" 
//     placeholder="To do title"
//     //className="todoInput" 
//     value={currentTitle} 
//     onChange={handleInput}
//   />

//   <button type="submit" className="todoAddBtn">Add</button> 
//   <TodoList todos={todos} handleIsDone={handleIsDone} handleDelete={handleDelete}/>
// </Form>) 
// }}