import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar expand="lg" fixed="bottom">
            <Container>
                <Nav className="footer-container">
                    <Nav.Link className="textFooter" href="#home">Copyright @2021 NoteTaker Pro</Nav.Link>
                    <Nav.Link className="textFooter" href="#link">Sitemap</Nav.Link>
                    <Nav.Link className="textFooter" href="#link">Privacy Policy</Nav.Link>
                    <Nav.Link className="textFooter" href="#link">Terms of Service</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
