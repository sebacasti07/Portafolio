import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Proyectos = ({ proyectos }) => {
  return (
    <section id="proyectos" className="seccion-proyectos">
      <Container>
        <h2 className="titulo-proyectos">Proyectos Destacados</h2>
        <Row>
          {proyectos.map((proyecto) => (
            <Col key={proyecto.id} xs={12} md={6} lg={4} className="columna-proyecto">
              <Card className="tarjeta-proyecto">
                <Card.Img variant="top" src={proyecto.imagen} alt={proyecto.titulo} />
                <Card.Body className="contenido-tarjeta-proyecto">
                  <Card.Title className="titulo-tarjeta-proyecto">{proyecto.titulo}</Card.Title>
                  <Card.Text className="descripcion-proyecto">
                    {proyecto.descripcion}
                  </Card.Text>
                  <div className="lista-tecnologias">
                    {proyecto.tecnologias.map((tecnologia, indice) => (
                      <Badge bg="secondary" className="etiqueta-tecnologia" key={indice}>
                        {tecnologia}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline-primary" href={proyecto.enlace} target="_blank">
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