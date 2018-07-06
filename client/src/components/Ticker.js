
import React, { Component } from 'react';
import "./css/s_ticker.css";

class Ticker extends Component {
  render() {
    return (
      <div className ="moving">
        <div className="ticker-wrap">
          <div className="ticker">
            <div className="ticker__item">{this.props.breaking[0]}</div>
            <div className="ticker__item">{this.props.breaking[1]}</div>
            <div className="ticker__item">{this.props.breaking[2]}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticker;
