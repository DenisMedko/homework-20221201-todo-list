import * as yup from 'yup';
import { useReducer } from 'react';
import styles from './App.module.scss';
import TodoList from './components/TodoList';
import todosReducer from './reducers/todosReducer';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addItem, changeItemIsDone, deleteItem } from './actions/actionCreators';


const initialState = {
  todos : [],
};
const initialFormState = {
  title : '',
}; 

const TODO_ITEM_SCHEMA = yup.object({
  title: yup
    .string()
    .min(2, 'Title must have at least 2 letter')
    .required('You must enter the title')
});

const App = () => {

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const handleAddBtn = (e) => {
    dispatch( addItem(e.title) );
    e.title = '';
  };

  const handleIsDone = ({target : {name : id, checked}}) => {
    dispatch( changeItemIsDone({id : +id, value : checked}));
  };

  const handleDelete = ({target : {name : id}}) => {
    dispatch( deleteItem(+id) );
  };

  const {todos} = state; 
  
  return (
    
    <div className={styles.todoList}>
      <Formik 
        initialValues={initialFormState} 
        onSubmit={handleAddBtn}
        validationSchema={TODO_ITEM_SCHEMA}
        >
          { (formikProps) => {
            // console.log('isSubmitting '+formikProps.isSubmitting,
            //   'isValid '+ formikProps.isValid,
            //   'isValidating '+formikProps.isValidating
            //  );
            return (
              <Form className={styles.form}>
                {!formikProps.isSubmitting && 
                !formikProps.isValid  && 
                <ErrorMessage name="title" component="div" />}
                <Field 
                  type="text" 
                  name="title"
                  placeholder="To do title"
                  className={styles.todoInput} 
                  //value={currentTitle} 
                  //onChange={handleInput}
                />
                <button type="submit" className={styles.todoAddBtn}>Add</button>   
              </Form>)} }
      </Formik> 
      <TodoList todos={todos} handleIsDone={handleIsDone} handleDelete={handleDelete}/>             
    </div>
  );

}

export default App;
