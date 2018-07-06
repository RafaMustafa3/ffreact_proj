import React, { Component } from 'react';
import "./css/s_upper.css";

class Upper extends Component {
  render() {
    return (
      <div className="upper" >
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="https://static01.nyt.com/images/2018/06/22/us/politics/00republicans1/00republicans1-superJumbo.jpg?quality=90&auto=webp" alt="background" />
              <div className="carousel-caption">
                <h1>{this.props.title[0]}</h1>
                <br />
              </div>
            </div>

            <div className="item">
              <img src="https://static01.nyt.com/images/2018/06/23/arts/23spoon-item1/merlin_140054841_7c772108-649a-41e3-9f55-af8d633e76e2-superJumbo.jpg?quality=90&auto=webp" alt="background" />
              <div className="carousel-caption">
                <h1>{this.props.title[1]}</h1>
                <br />
              </div>
            </div>
            <div className="item">
              <img src="https://static01.nyt.com/images/2018/05/30/science/00OPIOID-IOWA-gastala/merlin_136216503_f1f8e7c6-88a8-4b42-b062-3de45d5050a7-superJumbo.jpg?quality=90&auto=webp" alt="background" />
              <div className="carousel-caption">
                <h1>{this.props.title[2]}</h1>
                <br />
              </div>
            </div>
          </div>

          <a href="#myCarousel" role="button" className="left carousel-control" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a href="#myCarousel" role="button" className="right carousel-control" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">nextt</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Upper;
