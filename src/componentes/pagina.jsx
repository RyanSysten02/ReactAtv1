import Cabecalho from "./cabecalho";


export default function Pagina(props) {
    return (
        <div>
            <Cabecalho/>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}