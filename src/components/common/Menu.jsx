import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo gym" className="img-fluid" width={130} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to="/Administrador">
              Administrador
            </NavLink>
            <NavLink end className="nav-link" to="/Login">
              Login
            </NavLink>
            <NavLink end className="nav-link" to="/Registro">
              Registro
            </NavLink>
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
