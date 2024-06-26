import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import React, { useState } from "react";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const [showSupplements, setShowSupplements] = useState(false);
  const [showPlanes, setShowPlanes] = useState(false);
  const navegacion = useNavigate();

  const logout = () => {
    localStorage.removeItem("usuarioGym");
    setUsuarioLogueado("");
    navegacion("/");
  };

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
            {usuarioLogueado.length > 0 ? (
              <>
                <NavLink end className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Button variant="link" className="nav-link" onClick={logout}>
                  logout
                </Button>
              </>
            ) : (
              <>
                <NavLink end className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink end className="nav-link" to="/registro">
                  Registro
                </NavLink>
              </>
            )}
            <NavLink end className="nav-link" to="/contacto">
              Contacto
            </NavLink>
            <NavDropdown
              title="Planes"
              id="basic-nav-dropdown"
              show={showPlanes}
              onMouseEnter={() => setShowPlanes(true)}
              onMouseLeave={() => setShowPlanes(false)}
            >
              <NavDropdown.Item>Musculación</NavDropdown.Item>
              <NavDropdown.Item>Clases</NavDropdown.Item>
              <NavDropdown.Item>Full</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Suplementos"
              id="basic-nav-dropdown"
              show={showSupplements}
              onMouseEnter={() => setShowSupplements(true)}
              onMouseLeave={() => setShowSupplements(false)}
            >
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
