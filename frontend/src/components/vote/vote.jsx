import "./vote.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function template() {


  return (
    <Container className='Vote'>
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <div className="alert alert-primary" role="alert">
            <h3 className="alert-heading">Vote for Beers</h3>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Form>
            { 
            this.state.categories.map(cat =>
            <Form.Group className="mb-3">
                <Form.Label>{cat}</Form.Label>
                <Form.Select>
                  {this.state.beers.map(beer => <option>{beer}</option>)}
                </Form.Select>
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
