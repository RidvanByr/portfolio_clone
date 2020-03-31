import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" className="container" variant="dark">
            <Navbar.Brand href="/">My_Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/testimonial">Testimonial</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
