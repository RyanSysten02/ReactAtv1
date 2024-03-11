import FormCadEletronicos from "../formulario/formeletronico";
import TabEletronicos from "../Tabelas/tabelaEletronico";
import Pagina from "../pagina";
import { useState } from "react";

export default function Cadeletronico(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaEletronicos, setListaEletronicos] = useState([]);
    
    if (exibirTabela) {
        return (
            <Pagina>
                <h1 className="mt-5">Eletrônicos Cadastrados</h1>
                <TabEletronicos listaEletronicos={listaEletronicos} setExibirTabela={setExibirTabela} />
            </Pagina>
        );
    } else {
        return (
            <div>
                <Pagina> 
                    <div className="container mt-5">
                        <h2>Cadastro de Eletrônicos</h2>
                        <FormCadEletronicos
                            setExibirTabela={setExibirTabela}
                            listaEletronicos={listaEletronicos}
                            setListaEletronicos={setListaEletronicos}
                        />
                    </div>   
                </Pagina>
            </div>
        );
    }
}
