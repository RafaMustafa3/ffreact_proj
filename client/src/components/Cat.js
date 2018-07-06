import React, { Component } from 'react';
import Header from './Header';
import Ticker from './Ticker';
import Upper from './Upper';
import Nav from './Nav';
import Footer from './Footer'
import axios from 'axios';
import Buffer from './Buffer';

class Landing extends Component {
  constructor(){
    super();
    this.state = {
      people: [],
      breaking: []
    }

  }

  componentWillMount() {
    axios.get(`/api/upper/${this.props.match.params.catId}`).then(
      response => this.setState({ people: [response.data.response.results[7].webTitle,response.data.response.results[9].webTitle,response.data.response.results[5].webTitle]})
    );
    axios.get('/api/ticker').then(
      response => this.setState({ breaking: [response.data.response.results[0].webTitle +"         ",response.data.response.results[1].webTitle+"          ",response.data.response.results[2].webTitle +"         "]})
    );
  }

  render() {
    return (
      <div>
        <Header  type={this.props.match.params.catId}/>
        <Ticker breaking={this.state.breaking} />
        <Upper title={this.state.people} />
        <Ticker breaking={this.state.breaking} />
        <Nav />
        <Buffer type={this.props.match.params.catId} />
        <Footer />
      </div>

    );
  }
}

export default Landing;
