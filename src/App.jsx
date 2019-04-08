// /* eslint-disable no-console */
import React, { Component } from 'react';
import Timer from './components/Timer';
import TimersField from './components/TimersField';
import Button from './components/Button';
import randomNumber from './helpers/utilits';
import './styles/main.scss';
import {
  STEP,
  TIME,
} from './constants/constants';

let timersTicking;

class App extends Component {
  state = {
    title: 'Waiting...',
    timers: [],
  };

  componentDidMount() {
    timersTicking = setInterval(this.refresh, TIME);
  }

  componentWillUnmount() {
    clearInterval(timersTicking);
    // console.log('The End');
  }

  refresh = () => {
    let timersUpdatedArray = [...this.state.timers];
    let alarm = 'old';
    const refreshTimersArray = () => {
      timersUpdatedArray = timersUpdatedArray.map((item, itemNumber) => {
        if (item.working === false) {
          return item;
        }
        const newTime = parseFloat(item.time - STEP).toFixed(2);
        if (newTime <= 0) {
          alarm = `Timer ${itemNumber + 1} finished at ${Date()}`;
          return new Timer('0', false);
        }
        return new Timer(newTime);
      });
    };
    refreshTimersArray();
    if (alarm === 'old') {
      this.setState({ timers: timersUpdatedArray });
    } else {
      this.setState({ title: alarm, timers: timersUpdatedArray });
    }
  }

  addOneTimer = () => {
    const { timers: timersUpdatedArray } = this.state;
    timersUpdatedArray.push(new Timer(parseFloat(randomNumber(6, 12)).toFixed(2)));
    this.setState({ timers: timersUpdatedArray });
  }

  addTenTimers = () => {
    const { timers: timersUpdatedArray } = this.state;
    for (let i = 0; i < 10; i += 1) {
      timersUpdatedArray.push(new Timer(parseFloat(randomNumber(6, 12)).toFixed(2)));
    }
    this.setState({ timers: timersUpdatedArray });
  }

  onDismiss = (i) => {
    const { timers: timersUpdatedArray } = this.state;
    timersUpdatedArray[i].working = false;

    const cancellationTitle = `Timer ${i + 1} canceled at ${Date()}`;
    this.setState({ title: cancellationTitle, timers: timersUpdatedArray });
  }

  render() {
    const {
      title,
      timers,
    } = this.state;

    return (
      <div className="timers-wrap">
        <h4 className="title-msg">
          {`Status: ${title}`}
        </h4>
        <div className="separator" />
        <Button
          className="btn-add"
          onClick={() => this.addOneTimer()}
        >
          Add 1 timer
        </Button>
        <Button
          className="btn-add"
          onClick={() => this.addTenTimers()}
        >
          Add 10 timers
        </Button>
        <div className="separator" />
        <TimersField
          timers={timers}
          onClick={itemNumber => this.onDismiss(itemNumber)}
        />
      </div>
    );
  }
}

export default App;
