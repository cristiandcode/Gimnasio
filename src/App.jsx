import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/Administrador/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route exact path="/Login/" element={<Login></Login>}></Route>
        <Route exact path="/Registro/" element={<Registro></Registro>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
