import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../Contexts/UsuarioContext';
import MockData from '../MockData/Usuarios.json'

const LoginForm = () => {
    const { setUsuario } = React.useContext(UsuarioContext);
    const [listUsername, setListUsername] = useState(MockData.Usuarios);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        console.log(listUsername[3])
        var isLoggedIn = false
        listUsername.forEach((element) => {
            if (username === element.nombre && password === element.contraseña) {
                setUsuario(element)
                isLoggedIn = true
                return
            }
        })
        if (isLoggedIn) setLoggedIn(true)
        else alert('Nombre de usuario o contraseña incorrectos');
    };


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/logo.png' />
            <Card.Body className='input-container'>
                {loggedIn ? (
                    <div>
                        <h2>Bienvenido, {username}!</h2>
                        <Button style={{ marginTop: '10px', marginBottom: '10px', marginRight: '10px' }}><Link to={'/creaciones'} className='link'>Continuar</Link></Button>
                    </div>
                ) : (
                    <div>
                        <h2>Iniciar sesión</h2>
                        <h3>Us = usuario1@example.com</h3>
                        <div className="form-group">
                            <label>Nombre de usuario:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <h3>Us = clave123</h3>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-control"
                            />
                        </div>
                        <br />
                        <button onClick={handleLogin} className="btn btn-primary">
                            Iniciar sesión
                        </button>
                        <br />
                       
                    </div>
                )}
            </Card.Body>

        </Card>
    );
};

export default LoginForm;