import { Button, Container, Form } from "react-bootstrap";

const FormularioClases = () => {
  return (
    <Container className="mainSection">
      <h1 className="display-4 mt-5">Administrar Clases</h1>
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formClase">
          <Form.Label>Clase*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Boxeo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProfesor">
          <Form.Label>Profesor*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cristian Diaz" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHorario">
          <Form.Label>Horario*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 15:30" />
        </Form.Group>
        <Button type="submit" variant="dark">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioClases;
