import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
    };
  }

  componentDidMount() {
    let url = `/api/upper/${this.props.news.type}/sources=${this.props.news.query}`;

    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles
        })
      })
      .catch((error) => console.log(error));
  }

  renderItems () {
    return this.state.sidenews.map((item) => (
      <SingleSide key={item.url} item={item} />
    ));
  }

  render (){
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card-panel white">
            <span className="black-text">
              { this.renderItems() }
            </span>
          </div>
        </div>
      </div>
    );
  }
}



export default Sidenews;
