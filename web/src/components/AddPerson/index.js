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
                <div className="row">
                    <div className="column25">
                        <label>Add person:</label>
                    </div>
                    <div className="column25">
                        <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
                    </div>
                    <div className="column50">
                        <input type="submit" value="Add" />
                    </div>
                </div>
            </form>
        )
    }
}

export default AddPerson;
