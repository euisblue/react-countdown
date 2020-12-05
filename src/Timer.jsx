import React from "react";

export class Timer extends React.Component {
    render() {
        return (
            <div id="timer">
                <h1> {this.props.minutes}:{this.props.seconds}</h1>
            </div>
        );
    }
}