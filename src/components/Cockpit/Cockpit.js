import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) => {

    let appliedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if(props.persons.length <= 2) {
    appliedClasses.push(classes.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
    appliedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={appliedClasses.join(' ')}>Dynamically generated cards:</p>
            <button 
                className = {btnClass}
                onClick={props.clicked}
            >Toggle Persons
            </button>
        </div>
    )
}

export default cockpit