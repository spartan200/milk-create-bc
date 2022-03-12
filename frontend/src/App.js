import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClaimBeer from './components/claim-beer';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" class="btn btn-primary">Primary</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <header className="app-header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">MCBC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/*<Container>
        <Row>
          <Col />
          <Col><Button variant="primary">Claim Beer</Button></Col>
          <Col><Button variant="primary">Vote for Beers</Button></Col>
        </Row>
      </Container>*/}
      <ClaimBeer></ClaimBeer>
    </div>
  );
}

export default App;
