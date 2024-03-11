import { Button, Table } from "react-bootstrap"; 

export default function TabEletronicos(props) {
    console.log(props.listaEletronicos);
    return (
        <div>
            <div className="pt-5">
                <Button onClick={() => {
                    props.setExibirTabela(false);
                }}>
                    Cadastrar Novo Eletrônico
                </Button>
            </div >
            
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaEletronicos?.map((eletronico, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{eletronico.descricao}</td>
                                <td>{eletronico.categoria}</td>
                                <td>{eletronico.marca}</td>
                                <td>{eletronico.modelo}</td>
                                <td>{"R$ " + eletronico.preco + ",00"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
