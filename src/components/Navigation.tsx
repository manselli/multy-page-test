import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/multy-page-test/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/multy-page-test/">Home</Nav.Link>
            <Nav.Link href="/multy-page-test/about">About</Nav.Link>        
            <Nav.Link href="/multy-page-test/blog">Blog</Nav.Link>  
          </Nav>
          <Nav>
            <Nav.Link href="/multy-page-test/login">Login</Nav.Link> 
            <Nav.Link href="/multy-page-test/signup">Signup</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
            
        </>
    )
}
