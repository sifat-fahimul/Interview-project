import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">AgriGator</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#product">Product</Nav.Link>
      <Nav.Link href="#Offering">Offering</Nav.Link>
      <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
      <Nav.Link href="#Blog">Blog</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Team">Team</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
