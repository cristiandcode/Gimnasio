import { Route, Routes } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioProteinas from "../pages/productos/FormularioProteinas";
import FormularioClases from "../pages/paginasAdministrador/FormularioClases";

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
      <Route
        exact
        path="/crearClases"
        element={<FormularioClases creando={true}></FormularioClases>}
      ></Route>
      <Route
        exact
        path="/editarClases"
        element={<FormularioClases creando={false}></FormularioClases>}
      ></Route>
    </Routes>
  );
};

export default ListaRutasAdministrador;
