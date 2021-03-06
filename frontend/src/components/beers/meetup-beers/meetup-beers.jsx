import "./meetup-beers.css";
import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function template() {
  return (
    <Accordion.Item eventKey={this.state.index}>
      <Accordion.Header>{this.state.meetup}</Accordion.Header>
      <Accordion.Body>
        <ListGroup>
          {
            this.state.beers.map(el => <ListGroup.Item key={JSON.stringify(el)}>{el.brewery} - {el.beer}</ListGroup.Item>)
          }
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default template;
