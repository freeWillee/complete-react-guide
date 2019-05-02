// Use a simple JS function for definiing component
// A component simply just returns JSX....
// Use ES6...

import React from 'react';

import classes from './Person.module.css';
// We don't need Component because we're not using the class feature that requires Component.

const person = (props) => {
    console.log('[Person.js] rendering...')
    return (

        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person