import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './views/Home';
import List from './views/List';
import Population from './views/Population';
import GDP from './views/GDP';
import './style.css';

export default function App() {
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">HW3</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/list">
                List
              </Nav.Link>
              <Nav.Link as={Link} to="/population">
                Population
              </Nav.Link>
              <Nav.Link as={Link} to="/gdp">
                GDP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <Routes>
          <Route exact path="/" element={<Home title="Home Page" />} />
          <Route path="/list" element={<List title="List Page" />} />
          <Route
            path="/population"
            element={<Population title="Population Page" />}
          />
          <Route path="/gdp" element={<GDP title="GDP Page" />} />
        </Routes>
      </Container>
    </Router>
  );
}
