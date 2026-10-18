import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const IconoLinkedIn = () => (
  <svg className="icono-red-social" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
    />
  </svg>
);

const IconoGitHub = () => (
  <svg className="icono-red-social" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.31 3.48 1.65.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
    />
  </svg>
);

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
                    <IconoLinkedIn />
                    LinkedIn
                  </Button>
                  <Button
                    as="a"
                    href="https://github.com/sebacasti07"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-light"
                  >
                    <IconoGitHub />
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