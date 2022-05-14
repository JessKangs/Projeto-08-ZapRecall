import PaginaInicial from "./PaginaInicial";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Quizzes from "./Quizzes"

export default function App () {

    return (

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<PaginaInicial />} />
            <Route path="/perguntas" element={<Quizzes/>} />

          </Routes>

        </BrowserRouter>
    )

}

