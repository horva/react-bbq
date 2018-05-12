import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AddPerson from './components/AddPerson';
import Calculation from './components/Calculation';
import PersonList from './components/PersonList';
import styles from './styles';


class BBQ extends Component {
    state = {
        persons: []
    }

    addPersonHandler = (person) => {
        this.setState(
            (prevState, props) =>
            Object.assign({}, prevState, {persons: prevState.persons.concat([person])})
        )
    }

    render() {
        return (
            <View>
                <Text>BBQ</Text>
                <Calculation personCount={this.state.persons.length} />
                <AddPerson onAdd={this.addPersonHandler} />
                <PersonList persons={this.state.persons} />
            </View>
        );
  }
}

export default BBQ;
