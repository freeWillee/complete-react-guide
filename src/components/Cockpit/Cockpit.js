import React, { useEffect, useRef, useContext } from 'react' // allows for use of lifecycle methods in method components.
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log('use contextAuth: ', authContext.authenticated)

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect')
        // Show message to user !!
        // setTimeout(()=>{
        //     alert('Saved data to cloud');
        // }, 500);
         setTimeout(()=>{
            toggleBtnRef.current.click();
        }, 1000);
        
        return () => {
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
    
    if(props.personsLength <= 2) {
    appliedClasses.push(classes.red); // classes = ['red']
    }

    if (props.personsLength <= 1) {
    appliedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={appliedClasses.join(' ')}>Dynamically generated cards:</p>
            <button 
                ref={toggleBtnRef}
                className = {btnClass}
                onClick={props.clicked}
            >Toggle Persons
            </button>
                {<button onClick={authContext.login}>Log in</button>}    
        </div>
    )
}

export default React.memo(Cockpit);