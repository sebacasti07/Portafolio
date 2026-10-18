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
  const [modoOscuro, setModoOscuro] = useState(false);

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
    <div className={`aplicacion${modoOscuro ? ' modo-oscuro' : ''}`}>
      <button
        type="button"
        className="boton-modo-oscuro"
        onClick={() => setModoOscuro((anterior) => !anterior)}
        aria-pressed={modoOscuro}
        aria-label={modoOscuro ? 'Activar modo claro' : 'Activar modo oscuro'}
      >
        {modoOscuro ? ' Modo claro' : ' Modo oscuro'}
      </button>
      <BarraNavegacion />
      <Perfil />
      <Proyectos proyectos={proyectos} />
      <Noticias noticias={noticias} />
      <Contacto />
      <footer className="pie-pagina">
        <p className="derechos-pie">
          © 2026 - Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Aplicacion;