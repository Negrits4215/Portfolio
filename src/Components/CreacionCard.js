import React from 'react';
import '../Styles/CreacionCard.css';
import { UsuarioContext } from '../Contexts/UsuarioContext';
import { Link } from 'react-router-dom';

function CreacionCard({ creacion, onGuardarToggle, guardado }) {
    const { usuario } = React.useContext(UsuarioContext);

    const handlePress = () => {
        if (usuario.nombre){
            onGuardarToggle();
        }
        else{
            alert("Inicie secion para guardar en favoritos")
        }
    }

    return (
        <div className="creacion-card">
            <img src={creacion.imagen} alt={creacion.titulo} className="creacion-image" />
            <h2>{creacion.titulo}</h2>
            <p>{creacion.sinopsis}</p>
            <Link to={`/creaciones/${creacion.id}`}>Más información</Link>
            <button onClick={handlePress}>
                {guardado ? 'Eliminar' : 'Guardar'}
            </button>
        </div>
    );
}

export default CreacionCard;
