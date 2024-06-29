import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Musculacion = () => {
  const [seleccion, setSeleccion] = useState(false);

  const opcionesChange = (e) => {
    setSeleccion(e.target.id === "Si");
  };

  return (
    <Container className="mainSection">
      <h1 className="mt-5 text-center">Formulario de Suscripción</h1>
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
        <Form.Group className="mb-3" controlId="formPeso">
          <Form.Label>Peso*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 53" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstatura">
          <Form.Label>Estatura*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 1,56" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLesiones">
          <Form.Label>¿Has tenido alguna lesion?*</Form.Label>
          <div>
            <Form.Check
              type="radio"
              id="Si"
              label="Si"
              name="lesiones"
              onChange={opcionesChange}
            />
            <Form.Check
              type="radio"
              id="No"
              label="No"
              name="lesiones"
              onChange={opcionesChange}
            />
          </div>
        </Form.Group>
        {seleccion && (
          <Form.Group className="mb-3" controlId="formDetallesLesiones">
            <Form.Label>Detalles de la Lesion</Form.Label>
            <Form.Control type="text" placeholder="Ej: Desgarro" />
          </Form.Group>
        )}
        <Button type="submit" variant="dark">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default Musculacion;
