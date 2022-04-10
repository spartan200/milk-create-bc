import "./claim-beer.css";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function Template() {
  return (
    <Container className='ClaimBeer'>
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Alert variant="primary">
            <Alert.Heading>Claim Beer</Alert.Heading>
          </Alert>
        </Col>
      </Row>

      {/* Contains the failure message if there is a problem */}
      {this.state.failureMessage &&
        <Row className="justify-content-md-center">
          <Col xs md="6"><Alert variant="danger">{this.state.failureMessage}</Alert></Col>
        </Row>
      }

      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="brewery">
              <Form.Label>Brewery</Form.Label>
              <Form.Control type="text" placeholder="Enter Brewery" required
                            value={this.state.brewery} onChange={this.breweryChange} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter a Brewery.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="beer">
              <Form.Label>Beer</Form.Label>
              <Form.Control type="text" placeholder="Enter Beer" required
                            value={this.state.beer} onChange={this.beerChange} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>     
              <Form.Control.Feedback type="invalid">Please enter a Beer.</Form.Control.Feedback>   
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required
                            value={this.state.email} onChange={this.emailChange} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter an email.</Form.Control.Feedback>
            </Form.Group>

            <Button variant="secondary" onClick={this.checkIsAvailable}>
              Check Availability
            </Button>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      
      {/* Only show this if there are more than 1 duplicate beers */}
      {this.state.duplicateBeers != null && this.state.duplicateBeers.length > 0 &&
      
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Alert variant="danger">
            <Alert.Heading>Possible duplicate {this.state.duplicateBeers.length}</Alert.Heading>
            {
              this.state.duplicateBeers.map(el => <Alert variant="danger">{el.brewery} - {el.beer}</Alert>)
            }
          </Alert>
        </Col>
      </Row>
      }

      {/* Only show this if we have checked for beers and there aren't any duplcates */}
      {this.state.duplicateBeers != null && this.state.duplicateBeers.length == 0 &&
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Alert variant="success">
            <Alert.Heading>Could not find any duplicate beers.  You're good to go!!</Alert.Heading>
          </Alert>
        </Col>
      </Row>
      }
    </Container>
  );
};

export default Template;
