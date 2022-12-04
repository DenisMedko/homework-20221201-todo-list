import React from 'react';

const TodoList = (props) => {
    const {handleIsDone, handleDelete} = props;
    const todoList = props.todos.map( elem => {
        const {id, title, isDone} = elem;
        return (<div key={id}>
                    {title}
                    <input type="checkbox" name={id} checked={isDone} onChange={handleIsDone}/>
                    <button name={id} onClick={handleDelete}>Delete</button>
                </div>)}
    );
    return (
        <div>
            {todoList}    
        </div>
    );
}

export default TodoList;
