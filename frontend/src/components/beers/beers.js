import React    from "react";
import template from "./beers.jsx";

class beers extends React.Component {
  render() {
    return template.call(this);
  }
}

export default beers;
