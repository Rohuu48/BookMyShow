import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import UI from "./UI";
import Genres from "./Genres";
class Navigation extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={UI} />
            <Route path="/:id" exact component={Genres} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Navigation;
