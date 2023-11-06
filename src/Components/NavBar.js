import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { UsuarioContext } from '../Contexts/UsuarioContext';

export default function NavBar() {
    const { usuario, setUsuario } = React.useContext(UsuarioContext);

    const handleLogout = () => {
        setUsuario([]);
    }

    return (
        <>
            <div className='navbar'>
                <Navbar expand="lg" variant='light'>
                    <div className='container-fluid'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/creaciones">Creaciones</Nav.Link>
                                {usuario.nombre ? (
                                    <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
                                    ) : (null)}
                                {usuario.nombre ? (
                                    <Button variant="primary" onClick={handleLogout}>Logout</Button>
                                    ) : (
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            <Outlet />
        </>
    )
}
