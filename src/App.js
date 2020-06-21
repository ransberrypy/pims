import React, { Component } from "react";
import Navbar from "./mymap/Navbar";
import MapScreen from "./mymap/MapScreen";
import { Route, Switch } from "react-router-dom";

import Search from "./mymap/Search/Search";
// import MapDeck from './mymap/MapDeck'

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={MapScreen} />
          {/* <Route exact path="/" component={MapDeck} /> */}
          <Route exact path="/search" component={Search} />
        </Switch>
        {/* <Search/> */}
        {/* <MapScreen /> */}
        <Navbar />
      </div>
    );
  }
}

export default App;
