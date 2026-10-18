import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const BarraNavegacion = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#introduccion">Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="barra-navegacion" />
        <Navbar.Collapse id="barra-navegacion">
          <Nav className="enlaces-navegacion">
            <Nav.Link href="#introduccion">Perfil</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#noticias">Noticias</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;