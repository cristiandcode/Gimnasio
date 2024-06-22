import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Clases from "./paginasAdministrador/Clases";
import { listarClases } from "../helpers/queries";

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
      clases.map((itemClases) => <Clases key={itemClases.id}></Clases>);
    }
  };

  return (
    <Container className="mainSection">
      <h1 className="mt-5 text-center">
        Bienvenido al panel de Administración
      </h1>
      <hr />
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2 className="my-5 text-center">Clases del dia</h2>
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
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {clases.map((itemClase) => (
            <Clases key={itemClase.id} clase={itemClase}></Clases>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
