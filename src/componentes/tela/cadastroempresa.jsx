import FormEmpresa from "../formulario/formempresa";
import Pagina from "../pagina";

export default function CadastroEmpresa(props){
    return (
        <div>
            <Pagina>
                <h2>Cadastro de Funcionários</h2>
                <FormEmpresa />
            </Pagina>
        </div>
    )
}