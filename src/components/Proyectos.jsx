import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Proyectos = ({ proyectos }) => {
  return (
    <section id="proyectos" className="seccion-proyectos">
      <Container>
        <h2 className="titulo-proyectos">Proyectos Destacados</h2>
        <Row>
          {proyectos.map((proy) => (
            <Col key={proy.id} xs={12} md={6} lg={4} className="columna-proyecto">
              <Card className="tarjeta-proyecto">
                <Card.Img variant="top" src={proy.imagen} alt={proy.titulo} />
                <Card.Body className="contenido-tarjeta-proyecto">
                  <Card.Title className="nombre-proyecto">{proy.titulo}</Card.Title>
                  <Card.Text className="descripcion-proyecto">
                    {proy.descripcion}
                  </Card.Text>
                  <div className="tecnologias-proyecto">
                    {proy.tecnologias.map((tech, index) => (
                      <Badge bg="secondary" className="etiqueta-tecnologia" key={index}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline-primary" href={proy.enlace} target="_blank">
                    Ver Repositorio
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Proyectos;