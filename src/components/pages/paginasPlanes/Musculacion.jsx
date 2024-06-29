import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import logo from "../../../assets/logo.jpg";
import musculacion from "../../../assets/musculacion.jpg";

const Musculacion = () => {
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

  const [seleccion, setSeleccion] = useState(false);

  const opcionesChange = (e) => {
    setSeleccion(e.target.id === "Si");
  };

  return (
    <Container className="mainSection">
      <h1 className="mt-5 text-center textoMorado">
        Formulario de Suscripción <br /> Plan Musculación
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
            <Form.Group className="mb-3" controlId="formPeso">
              <Form.Label>Peso*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 53,5"
                {...register("peso", {
                  required: "El peso es obligatorio",
                  min: {
                    value: 20,
                    message: "Debes ingresar un peso mayor a 20kg",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.peso?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEstatura">
              <Form.Label>Estatura*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 1.56"
                {...register("estatura", {
                  required: "La estatura es obligatoria",
                  min: {
                    value: 75,
                    message: "Debes ingresar una estatuta mayor a 75cm",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.estatura?.message}
              </Form.Text>
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
                  required
                />
                <Form.Check
                  type="radio"
                  id="No"
                  label="No"
                  name="lesiones"
                  onChange={opcionesChange}
                  required
                />
              </div>
            </Form.Group>
            {seleccion && (
              <Form.Group className="mb-3" controlId="formDetallesLesiones">
                <Form.Label>Detalles de la Lesion</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Desgarro"
                  {...register("lesiones", {
                    required: "Las lesiones son obligatorias",
                    minLength: {
                      value: 5,
                      message:
                        "Debe ingresar como minimo 5 caracteres para la lesion",
                    },
                    maxLength: {
                      value: 15,
                      message:
                        "Debe ingresar como maximo 15 caracteres para la lesion",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.lesiones?.message}
                </Form.Text>
              </Form.Group>
            )}
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
          <img
            src={logo}
            alt="logo gym"
            className="img-fluid my-5"
            width={200}
          />
          <h2 className="display-3 textoMorado">STK GYM</h2>
          <img
            src={musculacion}
            alt="hombre musculoso"
            className="img-fluid my-5"
            width={360}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Musculacion;
