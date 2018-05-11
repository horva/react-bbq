import React, { Component } from 'react';
import './App.css';
import AddPerson from './components/AddPerson';
import Calculation from './components/Calculation';
import PersonList from './components/PersonList';

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
            <div className="BBQ">
                <Calculation personCount={this.state.persons.length} />
                <AddPerson onAdd={this.addPersonHandler} />
                <PersonList persons={this.state.persons} />
            </div>
        );
  }
}

export default BBQ;
