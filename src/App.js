import * as yup from 'yup';
import { useReducer } from 'react';
import styles from './App.module.scss';
import TodoList from './components/TodoList';
import todosReducer from './reducers/todosReducer';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addItem } from './actions/actionCreators';

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

  const handleAddBtn = (values, formikBag) => {
    dispatch( addItem(values.title) );
    formikBag.resetForm();
  };

  const {todos} = state; 
  
  return (
  
    <div className={styles.todoList}>
      <Formik 
        initialValues={initialFormState} 
        onSubmit={handleAddBtn}
        validationSchema={TODO_ITEM_SCHEMA}
        >
          { (formikProps) => { return (
              <Form className={styles.form}>
                {!formikProps.isSubmitting && 
                !formikProps.isValid  && 
                <ErrorMessage name="title" component="div" />}
                <Field 
                  type="text" 
                  name="title"
                  placeholder="To do title"
                  className={styles.todoInput} />
                <button type="submit" className={styles.todoAddBtn}>Add</button>   
              </Form>)} }
      </Formik> 
      <TodoList todos={todos} dispatch={dispatch}/>             
    </div>
  );

}

export default App;
