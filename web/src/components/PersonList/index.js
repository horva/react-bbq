import React from 'react';
import Person from '../../components/Person';

const PersonList = (props) => (
    <div>
        {props.persons.map((person, idx) => <Person key={idx} name={person.name} />)}
    </div>
)

export default PersonList;
