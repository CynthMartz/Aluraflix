import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { Error404 } from "../src/pages/Error404";
import { Video } from "../src/pages/Video";
import { Categoria } from "../src/componentes/Categoria";
import { Cabecera } from "../src/componentes/Cabecera";
import { PieDePagina } from "./componentes/PieDePagina";
import { ThemeProvider } from "styled-components";
import { temaClaro } from "./componentes/UI/Temas";
import { EstilosGlobales } from "../src/EstilosGlobales";
import { EditarVideo } from "./pages/EditarVideo";
import { EditarCategoria } from "./pages/EditarCategoria";

function App() {
    return (
        <ThemeProvider theme={temaClaro}>
            <EstilosGlobales />
            <Router>
                <Cabecera />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/video/:id" element={<EditarVideo />} />
                    <Route path="/categoria" element={<Categoria />} />
                    <Route path="/categoria/:id" element={<EditarCategoria />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <PieDePagina />
            </Router>
        </ThemeProvider>
    );
}

export default App;