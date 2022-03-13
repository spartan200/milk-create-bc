import React    from "react";
import template from "./vote.jsx";
import VoteService from '../../services/vote.service';

class vote extends React.Component {
  constructor(props) {
    super(props);

    const categories = new VoteService().voteCategories().categories;

    this.state = { validated: false, categories: categories, beers: [], failureMessage: null };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this._load();
  }

  async _load() {
    const result = await new VoteService().beers();
    if (!result.success) {
      // Something happended so set the failure message
      this.setState({ failureMessage: result.errorMessage });
      return;
    }

    // Set the beers
    this.setState({ beers: result.beers });
  }

  render() {
    return template.call(this)
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
