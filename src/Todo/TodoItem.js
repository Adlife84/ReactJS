import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../contex';

function TodoItem({todo, index, onChange}) {
    const { removeTodo } = useContext(Context);
    const styles = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItem: 'center',
            padding: '.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem'
        },
        input: {
            marginRight: '1rem'
        }
    }
    
    const classes = []

    if (todo.complete) {
        classes.push('done');
    }

    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input 
                    type="checkbox" 
                    style={styles.input}
                    checked={todo.complete}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong> 
                &nbsp;
                {todo.title}
            </span>
            <button className="btn" onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem