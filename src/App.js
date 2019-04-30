import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  // state is native only when Component is extended.  only class-based react components
    // Array destructuring...
    const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Jim', age: 29 },
        { name: 'Steph', age: 25 }
      ],
      otherState: 'some other value'
    });

    const [otherState] = useState({otherState: 'some other value'})

    console.log(personsState, otherState)

    const switchNameHandler = () => {
      console.log('I was clicked');
      // DO NOT USE THIS --> personsState.persons[0].name = "Sebastian"
      setPersonsState(
        {persons: [
          { name: 'Sebastian', age: 2 },
          { name: 'Jim', age: 29 },
          { name: 'Steph', age: 35 }
        ]
      })
    };

    return(
      <div className="App">
        <h1>Does this work now?</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    )
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))}
}

export default App;