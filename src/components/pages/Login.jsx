import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    if (login(usuario)) {
      Swal.fire(
        "¡Bienvenido a STK GYM!",
        "Has iniciado sesión correctamente",
        "success"
      );
      setUsuarioLogueado(usuario.email);
      navegacion("/administrador");
    } else {
      Swal.fire(
        "Error al iniciar sesión",
        "Correo o contraseña incorrectos",
        "error"
      );
    }
  };

  return (
    <Container className="my-5 mainSection ">
      <Row>
        <Col lg={4}></Col>
        <Col lg={4}>
          <h1 className="mb-4">Inicio de sesión</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña*</Form.Label>
              <Form.Control
                type="password"
                placeholder="ingrese una contraseña"
                {...register("password", {
                  required: "El password es obligatorio",
                  minLength: {
                    value: 8,
                    message: "el minimo es de 8 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "el maximo es de 15 caracteres",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                  },
                })}
              />{" "}
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="dark" type="submit">
              Ingresar
            </Button>
          </Form>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
};

export default Login;
