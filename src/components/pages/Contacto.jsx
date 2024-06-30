import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import contacto from "../../assets/contacto.jpg"

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (mensaje) => {
    console.log(mensaje);
    if (mensaje) {
      Swal.fire({
        title: "Mensaje enviado",
        text: "El mensaje fue enviado correctamente",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "El mensaje no pudo ser enviado. Intenta nuevamente",
        icon: "error",
      });
    }
  };

  return (
    <Container className="mainSection">
      <h1 className="display-4 mt-5 textoMorado text-center">Contacto</h1>
      <Row>
        <Col lg={6}>
          <Form className="my-4 textoClaro bgMorado p-5" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Claudia"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 5,
                    message:
                      "Debe ingresar como minimo 5 caracteres para el nombre",
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
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo Electronico:</Form.Label>
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
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ej: 3816558899"
                {...register("telefono", {
                  required: "El telefono es obligatorio",
                  min: {
                    value: 10,
                    message:
                      "Debe ingresar como minimo 10 caracteres para el telefono",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "Debe ingresar como maximo 15 caracteres para el telefono",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMotivo">
              <Form.Label>Motivo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el motivo"
                {...register("motivo", {
                  required: "El motivo es obligatorio",
                  minLength: {
                    value: 5,
                    message:
                      "Debe ingresar como minimo 5 caracteres para el motivo",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "Debe ingresar como maximo 20 caracteres para el motivo",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {errors.motivo?.message}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formMesaje">
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribe tu mensaje"
                {...register("mensaje", {
                  required: "El mensaje es obligatorio",
                  minLength: {
                    value: 20,
                    message:
                      "Debe ingresar como minimo 20 caracteres para el mensaje",
                  },
                  maxLength: {
                    value: 200,
                    message:
                      "Debe ingresar como maximo 200 caracteres para el mensaje",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.mensaje?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="light" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col className="text-center" lg={6}>
        <img
            src={contacto}
            alt="hombre entrenando con polea"
            className="img-fluid m-5"
            width={340}
          /></Col>
      </Row>
    </Container>
  );
};

export default Contacto;
