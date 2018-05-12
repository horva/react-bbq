import React from 'react';
import { View } from 'react-native';
import Person from '../../components/Person';

const PersonList = (props) => (
    <View>
        {props.persons.map((person, idx) => <Person key={idx} name={person.name} />)}
    </View>
)

export default PersonList;
