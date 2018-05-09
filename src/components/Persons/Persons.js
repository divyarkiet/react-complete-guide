import React from 'react';

import Person from './Person/Person';
const persons = (props) => props.persons.map( (personList, index) => {
    return <Person
      key={personList.id}
      click={() => {props.clicked(index)}}
      name={personList.name}
      age={personList.age}
      changed={(event) => props.changed(event, personList.id)} />
  });

export default persons;
