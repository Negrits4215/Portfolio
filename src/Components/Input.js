import Form from 'react-bootstrap/Form';
export default function Input(props) {
    return (
        <Form.Group controlId={props.id}>
            <div class="grupoTexto">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control type={props.tipo} placeholder={props.placeholder} />
            </div>
        </Form.Group>
    )

}