import React    from "react";
import template from "./vote.jsx";
import VoteService from '../../services/vote.service';

class vote extends React.Component {
  constructor(props) {
    super(props);

    const categories = new VoteService().voteCategories().categories;
    const beers = [null, 'Lucky (Labatt)', 'Saison (Field House)'];

    this.state = { categories, beers };
  }

  render() {
    return template.call(this);
  }
}

export default vote;
