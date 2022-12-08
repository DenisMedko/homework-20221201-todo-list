import React from 'react';
import styles from '../TodoList/TodoList.module.scss';
import { changeItemIsDone, deleteItem } from '../../actions/actionCreators';

const Todos = (props) => {
    
    const {elem : {id, title, isDone}, dispatch} = props;

    return (
        <div className={styles.todoItem}>
            <div className={styles.todoItemTitle}>{title}</div>
            <input type="checkbox" 
                name={id} 
                checked={isDone} 
                onChange={() => dispatch(changeItemIsDone(+id))}
                className={styles.checkBox}
            />
            <button type="button" name={id} onClick={() => dispatch(deleteItem(+id))} className={styles.deleteBtn}>X</button>
        </div>);   
}

export default Todos;
