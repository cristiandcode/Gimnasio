import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Clases from "./paginasAdministrador/Clases";
import { listarClases } from "../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    obtenerClases();
  }, []);

  const obtenerClases = async () => {
    const respuesta = await listarClases();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setClases(datos);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente mas tarde",
        icon: "error",
      });
    }
  };

  return (
    <Container className="mainSection">
      <h1 className="mt-5 text-center textoMorado">
        Bienvenido al panel de Administración
      </h1>
      <hr />
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2 className="my-5">Administrar Clases</h2>
        <Link className="btn btn-dark" to={"/Administrador/crearClases"}>
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Clase</th>
            <th>Profesor</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Usuarios Inscriptos</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {clases.map((itemClase) => (
            <Clases
              key={itemClase._id}
              clase={itemClase}
              setClases={setClases}
            ></Clases>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
