import { Button, Container, Form } from "react-bootstrap";

const PlanClases = () => {
  return (
    <Container className="mainSection">
      <h1 className="mt-5 text-center">
        Formulario de Suscripción al plan: Clases
      </h1>
      <hr />
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Claudia" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEdad">
          <Form.Label>Edad*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 28" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formClases">
          <Form.Label>Clases*</Form.Label>
          <div>
            <Form.Check type="checkbox" id="boxeo" label="Boxeo" />
            <Form.Check type="checkbox" id="zumba" label="Zumba" />
            <Form.Check type="checkbox" id="Yoga" label="Yoga" />
            <Form.Check type="checkbox" id="Spinning" label="Spinning" />
            <Form.Check type="checkbox" id="Pilates" label="Pilates" />
            <Form.Check type="checkbox" id="Cardio" label="Cardio" />
            <Form.Check type="checkbox" id="CrossFit" label="CrossFit" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico*</Form.Label>
          <Form.Control type="email" placeholder="Ej: claudia@mail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Label>Telefono*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 3815998877" />
        </Form.Group>
        <Button type="submit" variant="dark">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default PlanClases;
