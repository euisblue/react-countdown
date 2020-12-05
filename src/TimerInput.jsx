import React from "react";

export class TimerInput extends React.Component {
    render() {
        return (
            <div id="timer-input">
                <h3>Timer:</h3>
                <input type="number" 
                        minutes={this.props.minutes} 
                        onChange={this.props.handleChange}
                        placeholder="Enter minutes here..."
                        required />
            </div>
        );
    }
}