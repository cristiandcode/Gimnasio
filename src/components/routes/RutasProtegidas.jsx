import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const userAdministrador =
    JSON.parse(localStorage.getItem("usuarioGym")) || null;
  if (!userAdministrador) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;
