import React from 'react';
import styles from './TodoList.module.scss';

const TodoList = (props) => {

    const {handleIsDone, handleDelete} = props;

    const itemsList = props.todos.map( elem => {
        const {id, title, isDone} = elem;
        return (<div key={id} className={styles.todoItem}>
                    <div className={styles.todoItemTitle}>{title}</div>
                    <input type="checkbox" 
                        name={id} 
                        checked={isDone} 
                        onChange={handleIsDone}
                        className={styles.checkBox}
                    />
                    <button name={id} onClick={handleDelete} className={styles.deleteBtn}>X</button>
                </div>)}
    );

    return (
        <div className={styles.itemsList}>
            {itemsList}  
        </div>
    );
}

export default TodoList;
