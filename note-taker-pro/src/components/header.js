import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar expand="lg" className="navBar">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="justify-content-end">
                    <Nav.Link className="textNav" href="#home">Home</Nav.Link>
                    <Nav.Link className="textNav" href="#link">About Us</Nav.Link>
                    <Nav.Link className="textNav" href="#link">FAQ</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
