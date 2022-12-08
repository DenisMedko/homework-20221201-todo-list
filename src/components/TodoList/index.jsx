import React from 'react';
import Todos from '../Todos';
import styles from './TodoList.module.scss';

const TodoList = (props) => {

    const {todos, dispatch} = props;
    const itemsList = todos.map( todo => <Todos key={todo.id} elem={todo} dispatch={dispatch} />);
    return (    
        <div className={styles.itemsList}>
            {itemsList}  
        </div>
    );
}

export default TodoList;
