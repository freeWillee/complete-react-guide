// Use a simple JS function for definiing component
// A component simply just returns JSX....
// Use ES6...

import React, {Component, Fragment} from 'react';
import Aux from '../../../hoc/Aux'

import classes from './Person.module.css';
// We don't need Component because we're not using the class feature that requires Component.

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Fragment>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3" 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Fragment>
        );
    }
    
}

export default Person