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
    <Container className="bgClaro textoMorado">
      <Navbar expand="lg">
        {/* bg-body-tertiary */}
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
                <NavLink end className="nav-link" to="/error404">
                  Registro
                </NavLink>
              </>
            )}
            <NavLink end className="nav-link" to="/contacto">
              Contacto
            </NavLink>
            <NavLink end className="nav-link" to="/nosotros">
              Nosotros
            </NavLink>
            <NavDropdown
              title="Planes"
              id="basic-nav-dropdown"
              show={showPlanes}
              onMouseEnter={() => setShowPlanes(true)}
              onMouseLeave={() => setShowPlanes(false)}
            >
              <NavLink end className="nav-link ms-3" to="/musculacion">
                Musculación
              </NavLink>
              <NavLink end className="nav-link ms-3" to="/clases">
                Clases
              </NavLink>
              <NavLink end className="nav-link ms-3" to="/full">
                Full
              </NavLink>
            </NavDropdown>
            <NavDropdown
              title="Suplementos"
              id="basic-nav-dropdown"
              show={showSupplements}
              onMouseEnter={() => setShowSupplements(true)}
              onMouseLeave={() => setShowSupplements(false)}
            >
              <NavLink end className="nav-link" to="/error404">
                Proteinas
              </NavLink>
              <NavLink end className="nav-link" to="/error404">
                Creatinas
              </NavLink>
              <NavLink end className="nav-link" to="/error404">
                Aminoacidos
              </NavLink>
              <NavLink end className="nav-link" to="/error404">
                Multivitaminicos
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{" "}
    </Container>
  );
};

export default Menu;
