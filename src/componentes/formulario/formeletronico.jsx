import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadEletronicos(props) {
    const [validado, setValidado] = useState(false);
    const [eletronico, setEletronico] = useState({
        descricao: "",
        categoria: "",
        marca: "",
        modelo: "",
        preco: "",
        fornecedor: ""
    });

    function manipularMudanca(evento) {
        const componente = evento.currentTarget;
        setEletronico({ ...eletronico, [componente.name]: componente.value });
    }

    function manipularSubmissao(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        }
        else {
            setValidado(false);
            props.setListaEletronicos([...props.listaEletronicos, eletronico]);
            props.setExibirTabela(true);
        }
    }

    return (
        <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Descrição do Produto</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Descrição do produto"
                        value={eletronico.descricao}
                        name="descricao"
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe a descrição do produto.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        as="select"
                        required
                        value={eletronico.categoria}
                        name="categoria"
                        onChange={manipularMudanca}
                    >
                        <option value="">Selecione...</option>
                        <option value="Smartphones">Smartphones</option>
                        <option value="Computadores">Computadores</option>
                        <option value="Televisões">Televisões</option>
                        <option value="Outros">Outros</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Por favor, selecione uma categoria.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Marca"
                        value={eletronico.marca}
                        name="marca"
                        onChange={manipularMudanca}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe a marca.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Modelo"
                        value={eletronico.modelo}
                        name="modelo"
                        onChange={manipularMudanca}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o modelo.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Preço"
                        value={eletronico.preco}
                        name="preco"
                        onChange={manipularMudanca}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o preço.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom06">
                    <Form.Label>Fornecedor</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Fornecedor"
                        value={eletronico.fornecedor}
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
