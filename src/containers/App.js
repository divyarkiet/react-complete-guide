import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class App extends Component {

  state = {
    persons : [
      {id: 10, name: 'Divya', age: 29},
      {id: 20, name: 'Happy', age: 25},
      {id: 30, name: 'Mary', age: 8}
    ],
    showPerson : false,
  }

  // changeHandler = (newName) => {
  //   this.setState({
  //     persons : [
  //       {name: newName, age: 29},
  //       {name: 'Happy', age: '28'},
  //       {name: 'Mary', age: 8}
  //     ]
  //   })
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((param) => {
      return param.id === id;
    });
    console.log(personIndex);

    const newPerson = {...this.state.persons[personIndex]};
    // const newPerson = Object.assign({}, this.state.persons);

    newPerson.name = event.target.value;

    const updatePerson = [...this.state.persons];
    updatePerson[personIndex] = newPerson;

    this.setState({
      persons: updatePerson
    })

    // this.setState({
    //   persons : [
    //     {name: 'Divya', age: 29},
    //     {name: event.target.value, age: 28},
    //     {name: 'Mary', age: 8}
    //   ]
    // })
  }

  togglePerson = () => {
    const doesShowPerson = this.state.showPerson;
    this.setState({
      showPerson: !doesShowPerson
    });
  }

  // togglePerson(){
  //   const doesShowPerson = this.state.showPerson;
  //   this.setState({
  //     showPerson: !doesShowPerson
  //   });
  // }


  deletePersonHandler = (indexkey) => {
    const personList = [...this.state.persons];
    personList.splice(indexkey, 1);
    this.setState({
      persons: personList
    })
  }

  render() {

    let persons = null;
    if(this.state.showPerson){
      persons = <Persons
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangeHandler} />;
    }

    return (
      <div className="App">
        <Header />
        <Cockpit
          showPerson = {this.state.showPerson}
          persons = {this.state.persons}
          clicked = {this.togglePerson}/>
        { persons }
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
