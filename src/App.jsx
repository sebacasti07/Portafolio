import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/Navbar';
import Perfil from './components/Perfil';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';
import Contacto from './components/Contactos';

function Aplicacion() {
  const [proyectos, setProyectos] = useState([]);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Carga dinámica desde el archivo JSON ubicado en public/data/.
    fetch('/data/portafolio.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProyectos(datos.proyectos || []);
        setNoticias(datos.noticias || []);
      })
      .catch((error) => console.error('Error al cargar datos JSON:', error));
  }, []);

  return (
    <div>
      <BarraNavegacion />
      <Perfil />
      <Proyectos proyectos={proyectos} />
      <Noticias noticias={noticias} />
      <Contacto />
    </div>
  );
}

export default Aplicacion;