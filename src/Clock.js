import React, {Component} from 'react';

export default class Clock extends React.Component {
    state = { time: ''};

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString()})
        }, 1000)
    }

    render() {
        return (
            <div className="time">
                The Time is: {this.state.time}
            </div>
        )
    }
}