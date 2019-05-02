import React, { useEffect } from 'react' // allows for use of lifecycle methods in method components.
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect')
        const timer = setTimeout(()=>{
            alert('Saved data to cloud');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect')
        };
    }, []);

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    });

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

export default Cockpit