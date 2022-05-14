import logo from "../src/assets/img/image 2.svg"
import { Link } from "react-router-dom"

export default function PaginaInicial () {

    return (
        <>

            <div className="pagina">
            <img src={logo} alt=""></img>
            <h1 className="titulo-pag">ZapRecall</h1>
            <Link to="/perguntas"><button>Iniciar Recall!</button></Link>
            </div>
        </>
    )

}

