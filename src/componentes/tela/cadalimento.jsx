import FormCadAlimentos from "../formulario/formalimentos";
import TabAlimento from "../Tabelas/TabelaAlimentos";
import Pagina from "../pagina";
import { useState } from "react";

export default function Cadalimento(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaAlimentos, setListaAlimentos] = useState([]);
    
    if(exibirTabela){
        return(
            <Pagina>
                <h1 className="mt-5">Alimentos Cadastrados</h1>
                <TabAlimento listaAlimentos={listaAlimentos} setExibirTabela={setExibirTabela} />
            </Pagina>
        )
    }
    else{
        return (
            <div>
                <Pagina> 
                    <div className="conteiner mt-5">
                    <h2>Cadastro de Alimentos</h2>
                        <FormCadAlimentos
                            setExibirTabela={setExibirTabela}
                            listaAlimentos={listaAlimentos}
                            setListaAlimentos={setListaAlimentos}
                        />
                    </div>   
                </Pagina>
            </div>
        )
    }
}