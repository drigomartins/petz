import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

//pages
import List from './pages/list';
import Item from './pages/item';


const routing = (
    <Router basename={'/'}>
      <div>
        <Route exact path="/" exact component={List} />
        <Route path="/item/:id?" component={(routerProps) => <Item id={routerProps.match.params.id}/>} />
      </div>
    </Router>
  )

export default routing;