import { Button, Container, Form } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="mainSection">
      <h1 className="display-4 mt-5">Contacto</h1>
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" placeholder="Ej: Claudia" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Correo Electronico:</Form.Label>
          <Form.Control type="email" placeholder="Ej: claudia@mail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Label>Teléfono:</Form.Label>
          <Form.Control type="tel" placeholder="Ej: 3816558899" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMotivo">
          <Form.Label>Motivo:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa el motivo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMesaje">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribe tu mensaje"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contacto;
