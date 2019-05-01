import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is native only when Component is extended.  only class-based react components
    // Array destructuring...
    state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Jim', age: 29 },
        { name: 'Steph', age: 25 }
      ],
      otherState: 'some other value',
      showPersons: false
      };

    deletePersonHandler = (personIndex) => {
      const persons = this.state.persons;
      persons.splice(personIndex, 1);
      this.setState({
        persons: persons
      })
    }

    nameChangedHandler = (event) => {
      event.preventDefault()
      this.setState(
        {persons: [
          { name: 'Sebastian', age: 2 },
          { name: event.target.value, age: 29 },
          { name: 'Steph', age: 35 }
        ]
      })
    }


    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      })
    }

    render() {
      // inline styling react component....
      // SCOPED ONLY TO A SINGLE ELEMENT FOR THIS PARTICULAR COMPONENT
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      // Enter logic here... 

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={(index) => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
            })}
          </div>          
        )
      }

      return(
        <div className="App">
          <h1>My React App!!</h1>
          <p>A practice run...</p>
          <button 
            onClick={this.togglePersonsHandler}
            style={style}>Toggle Persons
          </button>
          {persons}
        </div>
      )
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))}
    }
}

export default App;