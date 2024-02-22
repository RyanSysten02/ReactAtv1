import FormEmpresa from "../formulario/formempresa";
import Pagina from "../pagina";

export default function CadastroEmpresa(props){
    return (
        <div>
            <Pagina> 
                <div className="conteiner">
                    <br /> 
                    <br />
                    <br />
                <h1>Cadastro de Produtos</h1>
                    <FormEmpresa />
                    </div>   
            </Pagina>
        </div>
    )
}