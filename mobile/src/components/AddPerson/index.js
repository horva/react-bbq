import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class AddPerson extends Component {
    state = {
        name: ""
    }

    _setState = (newState) => {
        this.setState((prevState, props) => Object.assign({}, prevState, newState));
    }

    handleChange = (value) => {
        this._setState({name: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({name: this.state.name})
        this._setState({name: ''});
    }

    render() {
        return (
            <View className="row">
                <View>
                    <Text>Add person:</Text>
                </View>
                <View>
                    <TextInput value={this.state.name} placeholder="Name" onChangeText={(value) => this.handleChange(value)} />
                </View>
                <View>
                    <Button onPress={this.handleSubmit} title="Add" />
                </View>
            </View>
        )
    }
}

export default AddPerson;
