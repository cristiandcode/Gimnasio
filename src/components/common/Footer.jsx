import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-bg-dark">
      <Container>
        <Row>
          <Col>
            <h5>Ubicación</h5>
            <a
              className="text-decoration-none text-white"
              href="https://maps.app.goo.gl/wzE5WrBza36ZH7bf7"
            >
              Gral. José María Paz 576,
              <br /> T4000 San Miguel de Tucumán,
              <br /> Tucumán
            </a>
          </Col>
          <Col>
            <h5>Telefono</h5>
            <p>0381 578-3030</p>
          </Col>
          <Col>
            <h5>Horarios</h5>
            <p>
              Lunes a Viernes:
              <br />
              9-13hs.
              <br />
              17-21hs.
            </p>
          </Col>
          <Col>
            <h5>Redes Sociales</h5>
            <a
              className="text-decoration-none text-white"
              href="https://wa.me/5493815783030"
            >
              <i className="bi bi-whatsapp me-2 fs-4"></i>
            </a>
            <a
              className="text-decoration-none text-white"
              href="https://www.facebook.com/RollingCodeSchool/?locale=es_LA"
            >
              <i className="bi bi-facebook me-2 fs-4"></i>
            </a>
            <a
              className="text-decoration-none text-white"
              href="https://www.instagram.com/rollingcodeschool/?hl=es"
            >
              <i className="bi bi-instagram me-2 fs-4"></i>
            </a>
            <a
              className="text-decoration-none text-white"
              href="https://x.com/i/flow/login?redirect_after_login=%2Frollingcodeok"
            >
              <i className="bi bi-twitter me-2 fs-4"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
