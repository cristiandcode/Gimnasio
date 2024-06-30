import { Button, Container, Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import logo from "../../../assets/logo.jpg";
import clases from "../../../assets/clases.jpg";

const PlanClases = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (usuario) => {
    if (usuario) {
      Swal.fire({
        title: "Formulario enviado",
        text: "Pronto nos pondremos en contacto para brindarle mas información",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "El formulario no pudo ser enviado. Intenta nuevamente",
        icon: "error",
      });
    }
  };

  return (
    <Container className="mainSection">
      <h1 className="mt-5 text-center textoMorado">
        Formulario de Suscripción <br /> Plan Clases
      </h1>
      <hr />
      <Row>
        <Col lg={6}>
          <Form
            className="p-5 bgMorado textoClaro my-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Claudia"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 3,
                    message:
                      "Debe ingresar como minimo 3 caracteres para el nombre",
                  },
                  maxLength: {
                    value: 25,
                    message:
                      "Debe ingresar como maximo 25 caracteres para el nombre",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEdad">
              <Form.Label>Edad*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 28"
                {...register("edad", {
                  required: "La edad es obligatoria",
                  min: {
                    value: 14,
                    message: "Debes ingresar una edad mayor a 14 años",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.edad?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formClase">
              <Form.Label>Clases*</Form.Label>
              <Form.Select
                {...register("clases", {
                  required: "Las clases son obligatorias",
                })}
              >
                <option value="">Seleccione una opcion</option>
                <option value="Boxeo">Boxeo</option>
                <option value="Zumba">Zumba</option>
                <option value="Yoga">Yoga</option>
                <option value="Spinning">Spinning</option>
                <option value="Sandwich">Pilates</option>
                <option value="Cardio">Cardio</option>
                <option value="CrossFit">CrossFit</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.clase?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: claudia@mail.com"
                {...register("email", {
                  required: "El correo es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El correo debe contener al menos 10 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "El correo debe contener como máximo 30 caracteres",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El correo debe ser un email valido Ej: claudia@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTelefono">
              <Form.Label>Telefono*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 3815998877"
                {...register("telefono", {
                  required: "El telefono es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El telefono debe contener al menos 10 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "El telefono debe contener como máximo 20 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>
            <Button type="submit" variant="dark">
              Guardar
            </Button>
          </Form>
        </Col>
        <Col className="text-center" lg={6}>
          <h2 className="display-3 textoMorado mt-5">STK GYM</h2>
          <img
            src={clases}
            alt="mujer haciendo yoga"
            className="img-fluid my-5"
            width={300}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PlanClases;
