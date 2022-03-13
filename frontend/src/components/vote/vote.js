import React    from "react";
import template from "./vote.jsx";
import VoteService from '../../services/vote.service';

class vote extends React.Component {
  constructor(props) {
    super(props);

    const categories = new VoteService().voteCategories().categories;
    const beers = [null, 'Lucky (Labatt)', 'Saison (Field House)'];

    this.state = { validated: false, categories, beers, failureMessage: null };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return template.call(this);
  }  
  
  async handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });

    if (form.checkValidity() === false)
      return;
  }
}

export default vote;
