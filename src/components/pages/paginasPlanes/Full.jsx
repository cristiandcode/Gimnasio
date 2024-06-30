import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import logo from "../../../assets/logo.jpg";
import full from "../../../assets/full.jpg";

const Full = () => {
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
    <Container className="mainSection mt-5">
      <h1 className="text-center textoMorado">PLAN: CLASES</h1>
      <h5 className="text-center textoMorado mt-3">
        Si buscas una experiencia completa, el plan Full es ideal para ti.
        Incluye acceso a todas nuestras instalaciones, clases y programas
        especiales.
      </h5>
      <h5 className="text-center textoMorado">
        Diseñaremos un programa de ejercicios personalizado según tus objetivos.
        Además, recibirás asesoramiento nutricional detallado para optimizar tus
        resultados.
      </h5>
      <h5 className="text-center textoMorado">
        Con el plan Full, maximizarás tu potencial y disfrutarás de una vida
        activa y saludable.
      </h5>
      <h5 className="text-center textoMorado mb-5">
        Cada mes, establecemos un nuevo desafío . Los participantes pueden ganar
        premios y reconocimiento.
      </h5>
      <hr />
      <h2 className="text-center textoMorado">Formulario de Suscripción</h2>
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
            <Form.Group className="mb-3" controlId="formAlergias">
              <Form.Label>Alergias*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: huevo"
                {...register("alergias", {
                  required: "Las alergias son obligatorias",
                  minLength: {
                    value: 5,
                    message:
                      "Debe ingresar como minimo 5 caracteres para las alergias",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Debe ingresar como maximo 30 caracteres para las alergias",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.alergias?.message}
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
            <Button type="submit" variant="light">
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
            src={full}
            alt="mujer entrenando"
            className="img-fluid my-5"
            width={380}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Full;
