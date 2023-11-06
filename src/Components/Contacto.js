import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from './Input';
import { UsuarioContext } from '../Contexts/UsuarioContext';

export default function Contacto() {
    const { usuario } = React.useContext(UsuarioContext);

    return (
        <div className='fondo'>
            <Row className="justify-content-center">
                <Col md={9}>
                    <h1 className="titulo-reg">¡Contáctanos!</h1>
                    <Form className="contact-form">
                        <Input id={"email"} label={"Email"} placeholder={"✉  Escribe tu email"} tipo={"email"}></Input>
                        <Input id={"mensaje"} label={"Mensaje"} placeholder={"Escribe tu mensaje"} tipo={"text"}></Input>
                        <Button variant="primary" size="lg" type="submit" className="enviar-btn">
                            Enviar
                        </Button>
                        <Button variant="secondary" size="lg" className="volver-btn">
                            Volver
                        </Button>
                    </Form>
                </Col>
                <Col md={3} className="social-media">
                    <p>Contacto: contacto@example.com</p>
                    <p>Teléfono: +123456789</p>
                </Col>
            </Row>

        </div >
    )
}