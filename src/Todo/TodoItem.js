import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({todo, index}) {

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

    return(
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input}/>
                <strong>{index + 1}</strong> 
                &nbsp;
                {todo.title}
            </span>
            <button className="btn">&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem