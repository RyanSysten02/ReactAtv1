import { Button, Table } from "react-bootstrap"; 

export default function TabAlimento(props) {
    console.log(props.listaAlimentos);
    return (
        <div>
            <div className="pt-5">
                <Button onClick={() => {
                    props.setExibirTabela(false);
                }}>
                    Cadastrar Novo Alimento
                </Button>
            </div >
            
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Fornecedor</th>
                        <th>Estoque</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaAlimentos?.map((alimento, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{alimento.descricao}</td>
                                <td>{alimento.categoria}</td>
                                <td>{alimento.fornecedor}</td>
                                <td>{alimento.estoque + " " + alimento.unidadeMedida}</td>
                                <td>{"R$ "+alimento.preco + ",00"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
