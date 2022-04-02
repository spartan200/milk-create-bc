import React    from "react";
import template from "./meetup-beers.jsx";

class MeetupBeers extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.meetup;
  }
  render() {
    return template.call(this);
  }
}

export default MeetupBeers;
