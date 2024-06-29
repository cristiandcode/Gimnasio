import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Full = () => {
  const [seleccion, setSeleccion] = useState(false);

  const opcionesChange = (e) => {
    setSeleccion(e.target.id === "Si");
  };

  return (
    <Container className="mainSection">
      <h1 className="mt-5 text-center">
        Formulario de Suscripción al plan: Full
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
        <Form.Group className="mb-3" controlId="formPeso">
          <Form.Label>Peso*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 53,5" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstatura">
          <Form.Label>Estatura*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 1.56" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAlergias">
          <Form.Label>Alergias*</Form.Label>
          <Form.Control type="text" placeholder="Ej: huevo" />
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
        <Form.Group className="mb-3" controlId="formClase">
          <Form.Label>Clases*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Boxeo">Boxeo</option>
            <option value="Zumba">Zumba</option>
            <option value="Yoga">Yoga</option>
            <option value="Spinning">Spinning</option>
            <option value="Sandwich">Pilates</option>
            <option value="Cardio">Cardio</option>
            <option value="CrossFit">CrossFit</option>
          </Form.Select>
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

export default Full;
