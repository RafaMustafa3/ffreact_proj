import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Landing from './Landing';
import Cat from './Cat';

const Main = (props) => {
  return(
    <BrowserRouter {...props}>
      <div>
        <Route exact path="/" component={ Landing } />
        <Route  path="/:catId" component={ Cat } />
      </div>
    </BrowserRouter>
  )
}


export default Main;
