import { Container, Table } from "react-bootstrap";

const Administrador = () => {
  return (
    <Container className="mainSection">
      <h1 className="mt-5 text-center">
        Bienvenido al panel de Administración
      </h1>
      <hr />
      <h2 className="my-5 text-center fs-2">
        Administrar clases del dia
      </h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Clase</th>
            <th>Profesor</th>
            <th>Horario</th>
            <th>Alumnos</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
