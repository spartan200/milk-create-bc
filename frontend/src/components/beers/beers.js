import React    from "react";
import template from "./beers.jsx";
import BeerService from "../../services/beer.service";

class beers extends React.Component {
  constructor(props) {
    super(props);

    this.state = { beers: [] };
  }

  async componentDidMount() {
    const beers = await new BeerService().meetupBeers();
    console.log('Got beers: ' + beers.length);
    console.log(JSON.stringify(beers));
    this.setState({ beers: beers });
  }

  render() {
    return template.call(this);
  }
}

export default beers;
