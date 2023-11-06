import React, { useEffect, useState } from 'react';
import CreacionCard from '../Components/CreacionCard';
import MockData from '../MockData/Data.json';

const CreacionesGuardadas = () => {
  const [creacionesGuardadas, setCreacionesGuardadas] = useState(
    JSON.parse(localStorage.getItem('creacionesGuardadas')) || []
  );

  useEffect(() => {
    // Actualiza la lista de creaciones guardadas desde el localStorage
    const storedCreacionesGuardadas = JSON.parse(localStorage.getItem('creacionesGuardadas'));
    if (storedCreacionesGuardadas) {
      setCreacionesGuardadas(storedCreacionesGuardadas);
    }
  }, []);
  const toggleGuardado = (creacion) => {
    let nuevasCreacionesGuardadas; 

    nuevasCreacionesGuardadas = creacionesGuardadas.filter((c) => c.id !== creacion.id);

    setCreacionesGuardadas(nuevasCreacionesGuardadas);

    localStorage.setItem('creacionesGuardadas', JSON.stringify(nuevasCreacionesGuardadas));
  }

  return (
    <div className="app">
      <h1>Creaciones Guardadas</h1>
      <div className="creaciones-list">
        {creacionesGuardadas.map((creacion) => (
          <CreacionCard key={creacion.id} creacion={creacion} onGuardarToggle={() => toggleGuardado(creacion)} guardado={true} />
        ))}
      </div>
    </div>
  );
};

export default CreacionesGuardadas;
