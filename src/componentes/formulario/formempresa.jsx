import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormEmpresa(props) {
    const [validated, setValidated] = useState(false);

    function handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Razão Social</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Digite a razão social"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira a razão social.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Digite o CNPJ"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira o CNPJ.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Inscrição Estadual</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Digite a inscrição estadual"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira a inscrição estadual.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        placeholder="Digite o telefone"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira o telefone.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom05">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Digite o e-mail"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira um e-mail válido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Cadastrar Empresa</Button>
        </Form>
    );
}
