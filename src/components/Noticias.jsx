import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Noticias = ({ noticias = [] }) => {
  return (
    <section id="noticias" className="seccion-noticias">
      <Container>
        <h2 className="titulo-noticias">Noticias</h2>
        {noticias.length > 0 ? (
          <Row>
            {noticias.map((noticia, indice) => (
              <Col key={noticia.id ?? indice} xs={12} md={6} lg={4} className="columna-noticia">
                <Card className="tarjeta-noticia">
                  <Card.Body className="contenido-tarjeta-noticia">
                    <Card.Title>{noticia.titulo}</Card.Title>
                    <Card.Text className="descripcion-noticia">{noticia.descripcion}</Card.Text>
                    {noticia.enlace && (
                      <Button
                        href={noticia.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline-primary"
                      >
                        Leer más
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p className="mensaje-sin-noticias">
            No hay noticias disponibles por el momento.
          </p>
        )}
      </Container>
    </section>
  );
};

export default Noticias;