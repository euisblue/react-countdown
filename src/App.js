import React from "react";
import { TimerInput } from "./TimerInput";
import { Timer } from "./Timer";
import { StartButton } from "./StartButton";

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '5',
    }

    this.secondsRemaining = '';
    this.intervalHandle = '';
    this.handleChange = this.handleChange.bind(this);

    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(e) {
    this.setState({
      minutes: e.target.value
    })
  };

  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - (min * 60);

    this.setState({
      minutes: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      })
    }

    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining -= 1;
  }

  startCountDown() {
    console.log('hello');
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }

  render() {
    return (
      <div className="App">
        <TimerInput minutes={this.state.minutes} handleChange={this.handleChange} />
        <Timer seconds={this.state.seconds} minutes={this.state.minutes} />
        <StartButton handleClick={this.startCountDown}/>
      </div>
    );
  }
}

export default App;
