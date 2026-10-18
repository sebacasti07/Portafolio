import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contacto = () => {
  const [errores, setErrores] = useState({});
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const validarFormulario = (evento) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const datos = new FormData(formulario);
    const nombre = datos.get('nombre').trim();
    const correo = datos.get('correo').trim();
    const mensaje = datos.get('mensaje').trim();
    const nuevosErrores = {};

    if (!nombre) {
      nuevosErrores.nombre = 'Ingresa tu nombre.';
    } else if (!/^[\p{L}\s'-]+$/u.test(nombre)) {
      nuevosErrores.nombre = 'El nombre solo puede contener letras.';
    }

    if (!correo) {
      nuevosErrores.correo = 'Ingresa tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido.';
    }

    if (!mensaje) {
      nuevosErrores.mensaje = 'Escribe un mensaje.';
    }

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length === 0) {
      setFormularioEnviado(true);
    }
  };

  return (
    <section id="contacto" className="seccion-contacto">
      <Container>
        <Row className="fila-contacto">
          <Col md={6}>
            <h2 className="titulo-contacto">Contacto</h2>
            {formularioEnviado ? (
              <div className="aviso-envio-correcto" role="status">
                <h3 className="titulo-aviso-envio">¡Gracias!</h3>
                <p className="mensaje-aviso-envio">
                  los datos se han enviado correctamente. Me pondré en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <>
                <Form noValidate onSubmit={validarFormulario}>
                  <Form.Group className="campo-contacto" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Ingresa tu nombre"
                      isInvalid={Boolean(errores.nombre)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errores.nombre}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="campo-contacto" controlId="formCorreo">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="correo"
                      placeholder="nombre@ejemplo.com"
                      isInvalid={Boolean(errores.correo)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errores.correo}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="campo-contacto" controlId="formMensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="mensaje"
                      rows={3}
                      placeholder="Escribe tu mensaje aquí..."
                      isInvalid={Boolean(errores.mensaje)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errores.mensaje}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="boton-enviar">
                    Enviar
                  </Button>
                </Form>
                <div className="enlaces-sociales-contacto">
                  <Button
                    as="a"
                    href="https://www.linkedin.com/in/sebastian-hernan-castillo-gomez-b15714349/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-light"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    as="a"
                    href="https://github.com/sebacasti07"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-light"
                  >
                    GitHub
                  </Button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacto;