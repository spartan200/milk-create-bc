import "./home.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function template() {
  return (
    <Container>
      <Row>
        <Col />
        <Col>
          <Link to="/ClaimBeer"><Button variant="primary">Claim Beer</Button></Link>  
        </Col>
        <Col>
          <Button variant="primary">Vote for Beers</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default template;
