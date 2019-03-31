/* eslint-disable */
import React, { Component } from 'react';

class Timer extends Component {

  render() {
    const {
      x = 3,
      y = 4,
    } = this.props;
    return (
      <div>
        {x * y}
      </div>
    );
  }
}

export default Timer;
