import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";

const FormularioClases = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const claseValidada = (clase) => {
    console.log(clase);
  };

  return (
    <Container className="mainSection">
      <h1 className="display-4 mt-5">Administrar Clases</h1>
      <Form className="my-4" onSubmit={handleSubmit(claseValidada)}>
        <Form.Group className="mb-3" controlId="formClase">
          <Form.Label>Clase*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Boxeo"
          {...register("clase", {
            required: "La clase es obligatoria",
            minLength: {
              value: 5,
              message:
                "Debe ingresar como minimo 5 caracteres para la clase",
            },
            maxLength: {
              value: 25,
              message:
                "Debe ingresar como maximo 25 caracteres para la clase",
            },
          })} />
          <Form.Text className="text-danger">
            {errors.clase?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProfesor">
          <Form.Label>Profesor*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cristian Diaz"
          {...register("profesor", {
            required: "El nombre del profesor es obligatorio",
            minLength: {
              value: 5,
              message:
                "Debe ingresar como minimo 5 caracteres para el nombre del profesor",
            },
            maxLength: {
              value: 30,
              message:
                "Debe ingresar como maximo 30 caracteres para el nombre del profesor",
            },
          })} />
          <Form.Text className="text-danger">
            {errors.profesor?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHorario">
          <Form.Label>Horario*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 15:30" 
         {...register("horario", {
            required: "El horario es obligatorio",
            pattern: {
              value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
              message: "Debe ingresar entre 00 y 24",
            },
          })}/>
          <Form.Text className="text-danger">
            {errors.horario?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="dark">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioClases;
