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
      otherState: 'some other value'
      };

    switchNameHandler = (newName) => {
      console.log('I was clicked');
      // DO NOT USE THIS --> this.state.persons[0].name = "Sebastian"
      this.setState(
        {persons: [
          { name: 'Sebastian', age: 2 },
          { name: 'Lucy', age: 29 },
          { name: 'Steph', age: 35 }
        ]
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

      return(
        <div className="App">
          <h1>My React App!!</h1>
          <p>A practice run...</p>
          <button 
            onClick={()=>this.switchNameHandler('Sebby Lee!!!!')}
            style={style}>Switch Name
          </button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "!!!")}
            changed={this.nameChangedHandler}
            >
            My Hobbies: Piano
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      )
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))}
    }
}

export default App;