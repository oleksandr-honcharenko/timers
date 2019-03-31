/* eslint-disable */
import React, { Component } from 'react';
import Timer from './components/Timer';
import './styles/main.scss';
import {
  DEFAULT_QUERY,
} from './constants/constants';

function rnd(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// class Timer extends Component {
//   state = {
//     x : rnd(2,12),
//     next : undefined,
//   };

//   componentDidMount() {
//     var z =  setInterval(this.refresh, 100);
//     console.log(this.state.x);
//   }


//   refresh = () => {
//     let prevs = this.state.x - 1/10;
//     this.setState({ x: prevs });
//   }

//   render() {
//     const {
//       x = rnd(24,36),
//     } = this.state;
//     return (
//       <span>
//         {parseFloat(x).toFixed(2)}
//         <br/>
//       </span>
//     );
//   }
// }

class timer {
  constructor(time = 6, working = true) {
      this.time = time;
      this.working = working;
  }
}

let timers = [];
// timers.push(
//   new timer(rnd(4,8)),
//   new timer(rnd(4,8)),
//   new timer(rnd(4,8))
// );
// console.log(timers);
const step = 0.04;
let allert = 'Waiting...';

const notWorkingTimer = (item) => {
  return item.working
}

class App extends Component {
  state = {
    title: allert,
    timers: timers
  };

  componentDidMount() {
    setInterval(this.refresh, 25);
  }

  refresh = () => {
    let cat = [...this.state.timers];
    let alarm = "old";
    const pp = function () {
        cat = cat.map(function(z, nimber) {
            if (z.working === false) {
                return z
            }
            let newProp = parseFloat(z.time - step).toFixed(2);
            if (newProp <= 0) {
                alarm = `Timer ${nimber + 1} finished at ` + Date();
                return new timer(0, false)
            }
            return new timer(newProp);
        });
    };
    pp();
    if (alarm === "old") {
      this.setState({ timers: cat })
    } else {
      this.setState({ title: alarm ,timers: cat })
    }
  }

  //componentWillUnmount() {}

  chlen = () => {
    const dog = [...this.state.timers];
    dog.push(new timer(rnd(6,12)));
    this.setState({ timers: dog })
  }

  chlenDoKolen = () => {
    const dog = [...this.state.timers];
    for ( let i = 0 ; i < 10 ; i++ ) {
      dog.push(new timer(rnd(6,12)));
    }
    this.setState({ timers: dog })
  }

  onDismiss = (i) => {
    const sheep = [...this.state.timers];
    sheep[i].working = false;

    const hsdkgj = `Timer ${i + 1} canceled at ` + Date();
    this.setState({ title: hsdkgj,timers: sheep })
  }

  render() {
    const {
      title,
      timers
    } = this.state;


    return (
      <div className="timers-wrap">
        <h4 className="title-msg">Status: {title}</h4>
        <div className="separator"></div>
        <button
          className="btn-add"
          onClick={() => this.chlen()}
        >
          Add 1 timer
        </button>
        <button
          className="btn-add"
          onClick={() => this.chlenDoKolen()}
        >
          Add 10 timers
        </button>
        <div className="separator"></div>
        <div className="timers">
          {
            timers.map((item, i) => {
              if (item.working === false) {
                return
              }
              return (
              <div key = {i} className="timer">
                <button className="btn-dismiss"
                   onClick={() => this.onDismiss(i)}
                >
                  {`X`}
                </button>
                <span>
                  Timer №{i + 1}
                  <span className="actualTime">
                    {item.time}
                  </span>
                </span>                  
              </div>
              )})
            
          }
        </div>
      </div>
    );
  }
}



export default App;
