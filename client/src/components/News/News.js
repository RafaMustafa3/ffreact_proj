import React, { Component } from 'react';
import NewSingle from './NewSingle';
import axios from 'axios';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentWillMount() {
    const url = `/api/lower/card/${this.props.cat}`;
    axios.get(url)
      .then( response => {
        console.log("Data---------------------->", response.data);
        this.setState({
          news: response.data.articles
        })
      })
      .catch( (error) => console.log(error) );
  }

  renderItems () {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render (){
    return (
      <div className="row">
        { this.renderItems() }
      </div>
    );
  }
}

export default News;
