import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadAlimentos(props) {
    const [validado, setValidado] = useState(false);
    const [alimento, setAlimento] = useState({
        descricao: "",
        categoria: "",
        unidadeMedida: "",
        estoque: "",
        preco: "",
        fornecedor: ""
    });


    function manipularMudanca(evento) {
        const componente = evento.currentTarget;
        setAlimento({ ...alimento, [componente.name]: componente.value });
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
            props.setListaAlimentos([...props.listaAlimentos, alimento]);
            props.setExibirTabela(true);
        }
    }

    return (
        <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationCustom01">
                    <Form.Label>Descrição do Produto</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Descrição do produto"
                        value={alimento.descricao}
                        name="descricao"
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe a descrição do produto.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        as="select"
                        required
                        value={alimento.categoria}
                        name="categoria"
                        onChange={manipularMudanca}
                    >
                        <option value="">Selecione...</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Orgânicos">Orgânicos</option>
                        <option value="Industrializados">Industrializados</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Por favor, selecione uma categoria.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Unidade de Medida</Form.Label>
                    <Form.Control
                        as="select"
                        required
                        value={alimento.unidadeMedida}
                        name="unidadeMedida"
                        onChange={manipularMudanca}
                    >
                        <option value="">Selecione...</option>
                        <option value="Kg">Kg</option>
                        <option value="g">g</option>
                        <option value="qtd">Quantidade</option>
                        <option value="l">Litro</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Por favor, selecione uma unidade de medida.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Estoque</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Estoque"
                        value={alimento.estoque}
                        name="estoque"
                        onChange={manipularMudanca}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o estoque.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Preço"
                        value={alimento.preco}
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
                        value={alimento.fornecedor}
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
              voltar
            </Button>

        </Form>
    );
}


