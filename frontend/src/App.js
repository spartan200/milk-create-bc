import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/home';
import ClaimBeer from './components/claim-beer';
import Vote from './components/vote';
import Beers from './components/beers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <Router>
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
              <Navbar.Brand href="/">MCBC</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/ClaimBeer">Claim Beer</Nav.Link>
                  <Nav.Link href="/Vote">Vote</Nav.Link>
                  <Nav.Link href="/Beers">Past Beers</Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/ClaimBeer' element={<ClaimBeer />}></Route>
          <Route exact path='/Vote' element={<Vote />}></Route>
          <Route exact path='/Beers' element={<Beers />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
