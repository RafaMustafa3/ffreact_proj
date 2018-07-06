import React from 'react';
import "./css/s_card.css";

const Lower = (props) => {
  return (
    <ul id= "fixme">
      <div className="container " id="turn">
        <div className="row ">
          <div className="col-xs-12 col-sm-4 ">
            <div className="card">
              <a className="img-card" href="/">
                <img src= "http://lorempixel.com/400/200/sports" alt="headline "/>
              </a>
              <br />
              <div className="card-content ">
                <h4 className="card-title ">
                  <a href={props.link}>
                    {props.title}
                  </a>
                </h4>
                <div className="">
                  Short Description
                </div>
              </div>
              <div className="card-read-more ">
                <a className="btn btn-link btn-block" href={props.link}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
  )
}
export default Lower;
