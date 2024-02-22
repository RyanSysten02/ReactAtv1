import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormEmpresa(props) {
    const [validado, setValidado] = useState(false);

    function manipularSubmissao(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(false);
        }
        else{
            setValidado(true);
        }
    }
    return (
        <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Primeiro nome"
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o primeiro nome.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o sobrenome.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Cidade" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe a cidade.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>UF</Form.Label>
                    <Form.Control type="text" placeholder="UF" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o estado.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="CEP" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o CEP.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Gravar</Button>
        </Form>
    );
}