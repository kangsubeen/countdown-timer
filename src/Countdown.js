import React, { Component } from "react";

export default class Countdown extends Component {
  state = { currentCount: 3 };

  // decrement timer method
  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
    //clear interval
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      this.props.onTimeOut();
    }
  }

  // decrement every second i.e 1000
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { currentCount } = this.state;
    return <h1>{currentCount}</h1>;
  }
}
