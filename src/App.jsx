import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import ListaRutasAdministrador from "./components/routes/ListaRutasAdministrador";
import Contacto from "./components/pages/Contacto";
import Error404 from "./components/pages/Error404";
import Musculacion from "./components/pages/paginasPlanes/Musculacion";
import PlanClases from "./components/pages/paginasPlanes/PlanClases";
import Full from "./components/pages/paginasPlanes/Full";
import Nosotros from "./components/pages/Nosotros";

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioGym")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrador"
          element={
            <RutasProtegidas>
              <ListaRutasAdministrador></ListaRutasAdministrador>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route exact path="/Registro/" element={<Error404></Error404>}></Route>{" "}
        <Route exact path="/Contacto/" element={<Contacto></Contacto>}></Route>
        <Route exact path="/Nosotros/" element={<Nosotros></Nosotros>}></Route>
        <Route
          exact
          path="/Musculacion/"
          element={<Musculacion></Musculacion>}
        ></Route>
        <Route
          exact
          path="/Clases/"
          element={<PlanClases></PlanClases>}
        ></Route>
        <Route exact path="/Full/" element={<Full></Full>}></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
