/* eslint-disable */
import React, { Component } from 'react';

class One extends Component {

  render() {
    const {
      x,
      y,
    } = this.props;
    return (
      <div>
        {x * y}
      </div>
    );
  }
}

export default One;
