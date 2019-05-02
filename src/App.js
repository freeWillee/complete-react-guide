import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'


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
      let btnClass = '';

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age} 
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            })}
          </div>     
        );
        btnClass = classes.Red;
      }

      let appliedClasses = [];
      
      if(this.state.persons.length <= 2) {
        appliedClasses.push(classes.red); // classes = ['red']
      }

      if (this.state.persons.length <= 1) {
        appliedClasses.push(classes.bold); // classes = ['red', 'bold']
      }

      return(
          <div className={classes.App}>
            <h1>Blog Card</h1>
            <p className={appliedClasses.join(' ')}>Dynamically generated cards:</p>
            <button 
              className = {btnClass}
              onClick={this.togglePersonsHandler}
            >Toggle Persons
            </button>
            {persons}
          </div>
      )
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))}
    }
}

export default App;