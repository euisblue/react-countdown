import React from "react";

export class StartButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="start-button">
                <button onClick={this.props.handleClick}>
                Start
                </button>
            </div>
        );
    }
}