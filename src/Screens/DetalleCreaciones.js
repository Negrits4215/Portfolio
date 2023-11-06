import React from 'react';
import { useParams } from 'react-router-dom';
import MockData from '../MockData/Data';
import '../Styles/CreacionDetalle.css'; // Importa el archivo CSS

function CreacionDetalle() {
    const { idCreacion } = useParams();
    const creacion = MockData.creaciones.find((c) => c.id.toString() === idCreacion);

    if (!creacion) {
        return <div>No se encontró la creación.</div>;
    }

    return (
        <div className="creacion-detalle">
            <img src={creacion.imagen} alt={creacion.titulo} />
            <div className="creacion-detalle-text">
                <h2>{creacion.titulo}</h2>
                <p>{creacion.masInfo}</p>
            </div>
        </div>
    );
}

export default CreacionDetalle;
