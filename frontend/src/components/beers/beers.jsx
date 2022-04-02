import "./beers.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import MeetupBeers from "./meetup-beers/meetup-beers";

function template() {
  return (
    <Container className="beers">
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Alert variant="primary">
            <Alert.Heading>Past Beers</Alert.Heading>
          </Alert>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Accordion>
            {/* Render all the meetups that come from the backend */}
            {
              this.state.beers.map(el => <MeetupBeers meetup={el}></MeetupBeers>)
            }
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default template;
