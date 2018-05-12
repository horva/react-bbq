import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

class Calculation extends Component {
    state = {
        weightPerPerson: 0
    }

    _setState = (newState) => {
        this.setState((prevState, props) => Object.assign({}, prevState, newState));
    }

    handleChange = (value) => {
        this._setState({weightPerPerson: value});
    }

    render() {
        return (
            <View>
                <View>
                    <View>
                        <Text>Person count:</Text>
                    </View>
                    <View>
                        <Text>{this.props.personCount}</Text>
                    </View>
                </View>
                <View className="row space-bottom">
                    <View>
                        <Text>Weight total:</Text>
                    </View>
                    <View>
                        <Text>{this.state.weightPerPerson * this.props.personCount}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Weight per person:</Text>
                    </View>
                    <View>
                        <TextInput value={this.state.weightPerPerson.toString()} onChangeText={(value) => this.handleChange(value)} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Calculation;
