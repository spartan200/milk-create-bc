import React    from "react";
import template from "./beers.jsx";

class beers extends React.Component {
  constructor(props) {
    super(props);

    let m1 = { index: 0, 
               meetup: 'November 1, 2021 - April 22, 2022',
               beers: [{brewery: 'Philips', beer: 'Blue Buck'}, {brewery: 'Field House', beer: 'Smoked Porter'}] 
              };
    let m2 = { index: 1,
               meetup: 'Auguest 1, 2021 - November 1, 2021',
               beers: [{brewery: 'Moon Underwater', beer: 'Coffee Sour' }, { brewery: 'Labatts', beer: 'Lucky'}]
              };
    const beers = [m1, m2];
    this.state = { beers: beers };
  }
  render() {
    return template.call(this);
  }
}

export default beers;
