import React, { useState } from 'react';
import CreacionCard from '../Components/CreacionCard';
import MockData from '../MockData/Data.json';

const creaciones = MockData.creaciones;

function Creaciones() {
    const [creacionesGuardadas, setCreacionesGuardadas] = useState(
        JSON.parse(localStorage.getItem('creacionesGuardadas')) || []
    );

    const toggleGuardado = (creacion) => {
        let nuevasCreacionesGuardadas; // Declarar la variable antes de usarla

        if (creacionesGuardadas.some((c) => c.id === creacion.id)) {
            // Si la creación ya está guardada, eliminarla
            nuevasCreacionesGuardadas = creacionesGuardadas.filter((c) => c.id !== creacion.id);
        } else {
            // Si la creación no está guardada, agregarla
            nuevasCreacionesGuardadas = [...creacionesGuardadas, creacion];
        }

        setCreacionesGuardadas(nuevasCreacionesGuardadas);

        // Guardar en el localStorage
        localStorage.setItem('creacionesGuardadas', JSON.stringify(nuevasCreacionesGuardadas));
    }

    return (
        <div className="app">
            <h1>Lista de Creaciones</h1>
            <div className="creaciones-list">
                {creaciones.map((creacion) => (
                    <CreacionCard
                        key={creacion.id}
                        creacion={creacion}
                        onGuardarToggle={() => toggleGuardado(creacion)}
                        guardado={creacionesGuardadas.some((c) => c.id === creacion.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Creaciones;
