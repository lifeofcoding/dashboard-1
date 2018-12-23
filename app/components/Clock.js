// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Clock.css';

type Props = {};

export default class Clock extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      seconds: new Date().getSeconds().toLocaleString(),
      minute: new Date().getMinutes().toLocaleString(),
      hour: new Date().getHours().toLocaleString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {    
    const hr = new Date().getHours().toLocaleString();
    this.setState({
      seconds: new Date().getSeconds().toLocaleString(),
      minute: new Date().getMinutes().toLocaleString(),
      hour: ( hr > 12) ? hr - 12 : hr,
    });
  }

  getSecondsDegree = (seconds) => {
    return ((seconds / 60) * 360) + 90;
  }

  getHourDegree = (hr) => {
    return ((hr / 12) * 360) + 90;
  }

  render() {
    const { seconds, minute, hour } = this.state;
    const clockStyles = {
      secHand: {
        width: `50%`,
        height: `3px`,
        background: `black`,
        position: `absolute`,
        top: `50%`,
        transformOrigin: `100%`,
        transform:` rotate(${this.getSecondsDegree(seconds)}deg)`,
        transition: `all 0.05s`,
        'transition-timing-function': `cubic-bezier(0.26, 3.46, 0.58, 1)`,
      },
      minHand: {
        width: `50%`,
        height: `5px`,
        background: `black`,
        position: `absolute`,
        top: `50%`,
        transformOrigin: `100%`,
        transform:` rotate(${this.getSecondsDegree(minute)}deg)`,
        transition: `all 0.05s`,
        'transition-timing-function': `cubic-bezier(0.26, 3.46, 0.58, 1)`,
      },
      hrHand: {
        width: `50%`,
        height: `7px`,
        background: `black`,
        position: `absolute`,
        top: `50%`,
        transformOrigin: `100%`,
        transform:` rotate(${this.getHourDegree(hour)}deg)`,
        transition: `all 0.05s`,
        'transition-timing-function': `cubic-bezier(0.26, 3.46, 0.58, 1)`,
      }
    }

    
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2>Clock</h2>
        <span>Time is {hour}:{minute}:{seconds} </span>
        <div className={styles.clock}>
          <div className={styles.clockFace}/>
          <div style={clockStyles.hrHand} />
          <div style={clockStyles.minHand} />
          <div style={clockStyles.secHand} />
        </div>
      </div>
    );
  }
}
