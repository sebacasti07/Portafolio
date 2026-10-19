import React, { useLayoutEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const BarraNavegacion = () => {
  const referenciaBarra = useRef(null);

  useLayoutEffect(() => {
    const barra = referenciaBarra.current;

    if (!barra) {
      return undefined;
    }

    const actualizarAltura = () => {
      document.documentElement.style.setProperty(
        '--altura-barra-navegacion',
        `${barra.offsetHeight}px`,
      );
    };

    actualizarAltura();
    const observador = new ResizeObserver(actualizarAltura);
    observador.observe(barra);

    return () => {
      observador.disconnect();
      document.documentElement.style.removeProperty('--altura-barra-navegacion');
    };
  }, []);

  return (
    <Navbar ref={referenciaBarra} bg="dark" variant="dark" expand="lg" sticky="top">
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