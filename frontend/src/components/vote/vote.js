import React    from "react";
import template from "./vote.jsx";
import VoteService from '../../services/vote.service';

class vote extends React.Component {
  constructor(props) {
    super(props);

    const categories = new VoteService().voteCategories().categories;

    // Create the votes array
    this.state = { validated: false, categories: categories, beers: [{brewery: String, beer: String}], failureMessage: null,
                   email: '', votes: new Array(categories.length), votesJsx: new Array(categories.length) };

    this.emailChange = this.emailChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
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

  /**
   * Handles when the email value changes.
   * Update the email in the state.
   * @param {*} event 
   */
  emailChange(event) {
    // Update the value in state
    this.setState({ email: event.target.value, validated: false });
  }
  
  /**
   * Handles when one of the values in the vote select changes.
   * @param {*} event 
   */
  categoryChange(event) {
    // Update the value in the state
    // Get the index from the id
    var index = parseInt(event.target.id.replace('category', ''));

    // Get the selected index of the beer
    const beerIndex = event.target.selectedIndex;

    const votes = this.state.votes;
    votes[index] = { ...this.state.beers[beerIndex], category: this.state.categories[index] };

    const votesJsx = this.state.votesJsx;
    votesJsx[index] = event.target.value;
  
    this.setState({ votes: votes, votesJsx: votesJsx, validated: false });
  }

  /**
   * Handles when the submit button is clicked.
   * Check that everything is valid.
   * If it is valid send the votes to the API.
   * @param {*} event 
   * @returns 
   */
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

    var result = await new VoteService().vote(this.state.email, this.state.votes);
    if (!result.success)
      this.setState({ failureMessage: result.failureMessage });
  }
}

export default vote;
