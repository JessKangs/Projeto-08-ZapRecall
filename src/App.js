import PaginaInicial from "./PaginaInicial";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cards from "./Cards"

export default function App () {


    return (

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<PaginaInicial />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>

        </BrowserRouter>
    )

}

