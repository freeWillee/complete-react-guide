// Use a simple JS function for definiing component
// A component simply just returns JSX....
// Use ES6...

import React from 'react';
import Radium from 'radium';

import './Person.css';
// We don't need Component because we're not using the class feature that requires Component.

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(person)