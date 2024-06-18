import logo from "../../assets/logo.jpg";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo gym" className="img-fluid" width={130} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Administrador</Nav.Link>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Registro</Nav.Link>
            <NavDropdown title="Planes" id="basic-nav-dropdown">
              <NavDropdown.Item>Musculación</NavDropdown.Item>
              <NavDropdown.Item>Clases</NavDropdown.Item>
              <NavDropdown.Item>Full</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Suplementos" id="basic-nav-dropdown">
              <NavDropdown.Item>Proteinas</NavDropdown.Item>
              <NavDropdown.Item>Creatinas</NavDropdown.Item>
              <NavDropdown.Item>Aminoacidos</NavDropdown.Item>
              <NavDropdown.Item>Multivitaminicos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
