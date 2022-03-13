import "./claim-beer.css";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Template() {
  return (
    <Container className='ClaimBeer'>
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <div className="alert alert-primary" role="alert">
            <h3 className="alert-heading">Claim Beer</h3>
          </div>
        </Col>
      </Row>

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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Template;
