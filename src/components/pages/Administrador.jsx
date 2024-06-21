import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Administrador = () => {
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
            <th>Horario</th>
            <th>Alumnos</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
