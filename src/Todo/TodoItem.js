import React from 'react';

function TodoItem({todo, index, key}) {
    return(
        <li key={key}>
            <strong>{index + 1}</strong> 
            {todo.title}
        </li>
    )
}

export default TodoItem