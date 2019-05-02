import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  // state is native only when Component is extended.  only class-based react components
    // Array destructuring...
    state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Jim', age: 29 },
        { id: '3', name: 'Steph', age: 25 }
      ],
      otherState: 'some other value',
      showPersons: false
      };

    deletePersonHandler = (personIndex) => {
      // slice() copies the original full array. or use spread operator. This is the preferred approach.
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({
        persons: persons
      })
    }

    nameChangedHandler = (event, id) => {
      event.preventDefault()
      // this is a JS method .find() or use findIndex()... 
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id
      });

      // use the ID to find the person from the original state
      //remember - do not mutate original state.

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState(
        {persons: persons}
      )
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      })
    }

    render() {

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>  
        );

      }

      return(
          <div className={classes.App}>
            <Cockpit 
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
            />
            {persons}
          </div>
      )
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))}
    }
}

export default App;