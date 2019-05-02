// Use a simple JS function for definiing component
// A component simply just returns JSX....
// Use ES6...

import React, {Component} from 'react';

import classes from './Person.module.css';
// We don't need Component because we're not using the class feature that requires Component.

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
    
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
    
}

export default Person