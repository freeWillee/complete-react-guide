// Use a simple JS function for definiing component
// A component simply just returns JSX....
// Use ES6...

import React from 'react'
// We don't need Component because we're not using the class feature that requires Component.

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person