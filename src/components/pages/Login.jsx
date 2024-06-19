import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="my-5 mainSection">
      <h1 className="mb-4">Inicio de sesión</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico:</Form.Label>
          <Form.Control type="email" placeholder="claudia@mail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control type="password" placeholder="ingrese una contraseña" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
