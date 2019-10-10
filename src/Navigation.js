import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Booking from "./Booking";
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
            <Route path="/:id1/:id2/:id3" exact component={Booking} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Navigation;
