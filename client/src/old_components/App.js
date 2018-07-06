import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Happy from './Happy'
import Guilty from './Guilty'
import Sleepy from './Sleepy'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">happy</Link></li>
            <li><Link to="/guilty">guilty</Link></li>
            <li><Link to="/sleepy">sleepy</Link></li>
          </ul>
          <Route exact path="/" component={Happy}/>
          <Route path="/guilty" component={Guilty}/>
          <Route path="/sleepy" component={Sleepy}/>
        </div>
      </Router>
    );
  }
}

export default App;
