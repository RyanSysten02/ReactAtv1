import { Button, Table } from "react-bootstrap";

export default function TabRoupas(props) {
    console.log(props.listaRoupas);
    return (
        <div>
            <div className="pt-5">
                <Button onClick={() => {
                    props.setExibirTabela(false);
                }}>
                    Cadastrar Nova Roupa
                </Button>
            </div>
            
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descrição</th>
                        <th>Tipo</th>
                        <th>Tamanho</th>
                        <th>Fornecedor</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaRoupas?.map((roupa, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{roupa.descricao}</td>
                                <td>{roupa.tipo}</td>
                                <td>{roupa.tamanho}</td>
                                <td>{roupa.fornecedor}</td>
                                <td>{"R$ " + roupa.preco + ",00"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
