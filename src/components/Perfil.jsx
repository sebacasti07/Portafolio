import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fotoPerfil from '../images/Foto_Perfil.jpg';

const Perfil = () => {
  return (
    <section id="introduccion" className="seccion-perfil">
      <Container>
        <Row className="fila-perfil">
          <Col md={8}>
            <img
              src={fotoPerfil}
              alt="Foto de perfil de Sebastian Hernan Castillo Gomez"
              className="imagen-perfil"
            />
            <h1 className="nombre-perfil">Sebastian Hernan Castillo Gomez</h1>
            <p className="subtitulo-perfil">Estudiante de Informática Duoc UC | Entusiasta de la Tecnología</p>
            <p>
              Bienvenido a mi portafolio personal donde comparto mis proyectos y noticias recientes.
              ¡Explora y conoce más sobre mi trabajo!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Perfil;