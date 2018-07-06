import React, { Component } from 'react';
import "./css/s_nav.css";

class Nav extends Component {
  render() {
    return (
      <div className=" sticky-top nav position-sticky nav">
        <nav className=" sticky-top center nav bar sticky-top navbar navbar-default">
          <div className="sticky-top container-fluid">
            <div className="sticky-top navbar-header">
              <a className="sticky-top navbar-brand" href="/">OneSource</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="/world">World</a></li>
              <li><a href="/technology">Technology</a></li>
              <li><a href="/finance">Finance</a></li>
              <li><a href="/sports">Sports</a></li>
              <li><a href="/politics">Politics</a></li>
              <li><a href="/entertainment">Entertainment</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
