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
                <div className="row space-bottom">
                    <div className="column25">
                        <label>Person count:</label>
                    </div>
                    <div className="column25">
                        {this.props.personCount}
                    </div>
                </div>
                <div className="row space-bottom">
                    <div className="column25">
                        <label>Weight total:</label>
                    </div>
                    <div className="column25">
                        {this.state.weightPerPerson * this.props.personCount}
                    </div>
                </div>
                <div className="row space-bottom">
                    <div className="column25">
                        <label>Weight per person:</label>
                    </div>
                    <div className="column25">
                        <input type="number" value={this.state.weightPerPerson} placeholder="Name" onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculation;
