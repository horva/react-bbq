import React, { Component } from 'react';

class Calculation extends Component {
    state = {
        weightPerPerson: 0
    }

    _setState = (newState) => {
        this.setState((prevState, props) => Object.assign({}, prevState, newState));
    }

    handleChange = (event) => {
        this._setState({weightPerPerson: event.target.value});
    }

    render() {
        return (
            <div>
                <div>
                    <label>Weight per person:</label>
                    <input type="number" value={this.state.weightPerPerson} placeholder="Name" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Person count: {this.props.personCount}</label>
                </div>
                <div>
                    <label>Weight total: {this.state.weightPerPerson * this.props.personCount}</label>
                </div>
            </div>
        )
    }
}

export default Calculation;
