import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
  };

  return (
    <Container className="my-5 mainSection">
      <h1 className="mb-4">Inicio de sesión</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico:</Form.Label>
          <Form.Control
            type="email"
            placeholder="claudia@mail.com"
            {...register("email", {
              required: "El correo es obligatorio",
              minLength: {
                value: 10,
                message: "El email debe contener al menos 10 caracteres",
              },
              maxLength: {
                value: 30,
                message: "El email debe contener como máximo 30 caracteres",
              },
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message:
                  "El correo debe ser un email valido Ej: nombre@mail.com",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            placeholder="ingrese una contraseña"
            {...register("password", {
              required: "El password es obligatorio",
              minLength: { value: 8, message: "el minimo es de 8 caracteres" },
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
    </Container>
  );
};

export default Login;
