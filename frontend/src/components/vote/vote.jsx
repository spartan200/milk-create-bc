import "./vote.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function template() {


  return (
    <Container className='Vote'>
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Alert variant="primary">
            <Alert.Heading>Vote for Beers</Alert.Heading>
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
            { 
            this.state.categories.map(cat =>
            <Form.Group className="mb-3">
                <Form.Label>{cat}</Form.Label>
                <Form.Select required>
                  {this.state.beers.map(beer => <option>{beer}</option>)}
                </Form.Select>
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please enter the "{cat}".</Form.Control.Feedback>
            </Form.Group>
            )}
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default template;
