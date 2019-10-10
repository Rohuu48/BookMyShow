import React from "react";
import Example from "./Example";
import { withRouter } from "react-router-dom";

class UI extends React.Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    );
  }
}

export default UI;
