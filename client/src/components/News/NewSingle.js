import React from 'react';
import "../css/s_newsingle.css";

const NewSingle = ({item}) => (
  <div className="single col s4" id="masterCard">
    <div className="card small">
      <div className="card-image" >
        <img src={item.urlToImage} alt={item.title}/>
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">

        <div className="engagement">
          <a href={item.url} target="_blank">Full article</a>
          <i className="medium material-icons">arrow_drop_up</i>
          <i className="randomNum">{Math.floor(Math.random()*100)}</i>
          <i className="medium material-icons">arrow_drop_down</i>
        </div>

      </div>
    </div>
  </div>
);

export default NewSingle;
