import React, { Component } from 'react';

class AddPerson extends Component {
    state = {
        name: ""
    }

    _setState = (newState) => {
        this.setState((prevState, props) => Object.assign({}, prevState, newState));
    }

    handleChange = (event) => {
        this._setState({name: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({name: this.state.name})
        this._setState({name: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add person:</label>
                <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default AddPerson;
