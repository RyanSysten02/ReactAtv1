import FormCadRoupas from "../formulario/formroupas";
import TabRoupas from "../Tabelas/TabelaRoupas";
import Pagina from "../pagina";
import { useState } from "react";

export default function CadRoupas(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaRoupas, setListaRoupas] = useState([]);
    
    if (exibirTabela) {
        return (
            <Pagina>
                <h1 className="mt-5">Roupas Cadastradas</h1>
                <TabRoupas listaRoupas={listaRoupas} setExibirTabela={setExibirTabela} />
            </Pagina>
        );
    } else {
        return (
            <div>
                <Pagina> 
                    <div className="conteiner mt-5">
                        <h2>Cadastro de Roupas</h2>
                        <FormCadRoupas
                            setExibirTabela={setExibirTabela}
                            listaRoupas={listaRoupas}
                            setListaRoupas={setListaRoupas}
                        />
                    </div>   
                </Pagina>
            </div>
        );
    }
}

