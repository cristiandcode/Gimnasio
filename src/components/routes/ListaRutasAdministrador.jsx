import { Route, Routes } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioProteinas from "../pages/productos/FormularioProteinas";

const ListaRutasAdministrador = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador></Administrador>}></Route>
      <Route
        exact
        path="/crearProteinas"
        element={<FormularioProteinas></FormularioProteinas>}
      ></Route>
      <Route
        exact
        path="/editarProterinas"
        element={<FormularioProteinas></FormularioProteinas>}
      ></Route>
    </Routes>
  );
};

export default ListaRutasAdministrador;
