import React, { useState }    from "react";
import Template from "./claim-beer.jsx";

class ClaimBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brewery: '', beer: '', email: '', validated: false };

    this.breweryChange = this.breweryChange.bind(this);
    this.beerChange = this.beerChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.validated = this.validated.bind(this);
  }

  render() {
    return Template.call(this);
  }

  /**
   * Handles when the brewery text field changes value.
   * @param {*} event 
   */
  breweryChange(event) {
    // Update the value in the state
    this.setState({ brewery: event.target.value, validated: false });
  }

  /**
   * Handles when the beer text field changes value
   * @param {*} event 
   */
  beerChange(event) {
    // Update the value in the state
    this.setState({ beer: event.target.value, validated: false });
  }

  /**
   * Handles when the email value changes
   * @param {*} event 
   */
  emailChange(event) {
    // Update the value in the state
    this.setState({ email: event.target.value, validated: false });
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert('The Brewery submitted: ' + this.state.brewery);
      alert('The beer is: ' + this.state.beer);
      alert('The email: ' + this.state.email);
    }

    this.setState({ validated: true });
  }
}

export default ClaimBeer;
