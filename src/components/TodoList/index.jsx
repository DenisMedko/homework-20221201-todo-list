import React from 'react';

const TodoList = (props) => {
    const todoList = props.todos.map( elem => 
        <div key={elem.id}>
            {elem.title}
            <input type="checkbox" name={elem.id} checked={elem.isChecked} onChange={props.checkHandler}/>
            <button name={elem.id} onClick={props.deleteHandler}>Delete</button>
        </div>
    );
    return (
        <div>
            {todoList}    
        </div>
    );
}

export default TodoList;
