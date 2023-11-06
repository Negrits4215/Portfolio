import React, { useState } from 'react';
import CreacionCard from '../Components/CreacionCard';
import MockData from '../MockData/Data.json';

function getRandomItems(arr, numItems) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
}

export default function Home() {
    const [creacionesGuardadas, setCreacionesGuardadas] = useState(
        JSON.parse(localStorage.getItem('creacionesGuardadas')) || []
    );

    const seisCreacionesAleatorias = getRandomItems(MockData.creaciones, 6);

    const toggleGuardado = (creacion) => {
        let nuevasCreacionesGuardadas;

        if (creacionesGuardadas.some((c) => c.id === creacion.id)) {
            nuevasCreacionesGuardadas = creacionesGuardadas.filter((c) => c.id !== creacion.id);
        } else {
            nuevasCreacionesGuardadas = [...creacionesGuardadas, creacion];
        }

        setCreacionesGuardadas(nuevasCreacionesGuardadas);
        localStorage.setItem('creacionesGuardadas', JSON.stringify(nuevasCreacionesGuardadas));
    }

    return (
        <div className="app">
            <h1>HOME</h1>
            <div className="creaciones-list">
                {seisCreacionesAleatorias.map((creacion) => (
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
