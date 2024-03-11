import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function FormCadRoupas(props) {
    const [validado, setValidado] = useState(false);
    const [roupa, setRoupa] = useState({
        descricao: "",
        tipo: "",
        tamanho: "",
        preco: "",
        fornecedor: ""
    });

    function manipularMudanca(evento) {
        const componente = evento.currentTarget;
        setRoupa({ ...roupa, [componente.name]: componente.value });
    }

    function manipularSubmissao(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        } else {
            setValidado(false);
            props.setListaRoupas([...props.listaRoupas, roupa]);
            props.setExibirTabela(true);
        }
    }

    return (
        <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationCustom01">
                    <Form.Label>Descrição da Roupa</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Descrição da roupa"
                        value={roupa.descricao}
                        name="descricao"
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe a descrição da roupa.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control
                        as="select"
                        required
                        value={roupa.tipo}
                        name="tipo"
                        onChange={manipularMudanca}
                    >
                        <option value="">Selecione...</option>
                        <option value="Camiseta">Camiseta</option>
                        <option value="Calça">Calça</option>
                        <option value="Vestido">Vestido</option>
                        <option value="Blusa">Blusa</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Por favor, selecione um tipo.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Tamanho</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tamanho"
                        value={roupa.tamanho}
                        name="tamanho"
                        onChange={manipularMudanca}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o tamanho.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Preço"
                        value={roupa.preco}
                        name="preco"
                        onChange={manipularMudanca}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o preço.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>Fornecedor</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Fornecedor"
                        value={roupa.fornecedor}
                        name="fornecedor"
                        onChange={manipularMudanca}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o fornecedor.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type='submit' variant="primary" size="lg" active>
                Gravar
            </Button>{' '}
            <Button variant="secondary" size="lg" active onClick={() => { props.setExibirTabela(true); }}>
                Voltar
            </Button>
        </Form>
    );
}
