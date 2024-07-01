import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <div className="main-container container-fluid justify-content-center">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/09/22/16638627718180.jpg"
            alt="Boxeo"
            style={{ objectFit: 'cover', maxHeight: '500px' }}
          />
          <Carousel.Caption>
            <h3>Clases de boxeo</h3>
            <p><b>Empieza a golpear tus límites: hoy es el día de dar el primer paso en el boxeo.</b></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg"
            alt="Spinning"
            style={{ objectFit: 'cover', maxHeight: '500px' }}
          />
          <Carousel.Caption>
            <h3>Spinning</h3>
            <p><b>Empieza hoy, transforma mañana: ¡al ritmo del spinning!</b></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg"
            alt="Levantar pesas"
            style={{ objectFit: 'cover', maxHeight: '500px' }}
          />
          <Carousel.Caption>
            <h3>Levantamiento de pesas</h3>
            <p><b>Prepárate para romper tus límites: ¡comienza tu viaje de levantamiento de pesas hoy mismo!.</b></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className='m-3'>
        <Row>
          <Col md={6} xs={12} className="mb-3">
            <div style={{ padding: '20px' }}>
              <h2>¡¡CONOCÉ NUESTRA TIENDA DE ROPA!!</h2><br />
              <p>Echa un vistazo a nuestra colaboración exclusiva con Planet Fitness! Nueva colección de ropa y productos deportivos Planet Fitness, solo y exclusivamente en STK GYM. Los productos son limitados, ¡así que actúa rápido!</p>
              <Link className="btn btn-danger" to={'/error404'}>
                Ir a la tienda
              </Link>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <Image
              src="https://images.ctfassets.net/nhduxlsunsu5/6qfFcaklsK0ZdsPHRFCn7u/bb36b04116cfafd76e81bc8347c3e8a1/PF_Web_CB_Store_copy.jpg"
              alt="Ropa deportiva"
              fluid
              className="rounded float-end img-fluid"
            />
          </Col>
        </Row>
      </Container>

      <Container className='m-3'>
        <Row>
          <Col md={6} xs={12}>
            <Image
              src="https://qph.cf2.quoracdn.net/main-qimg-5bbe2f0b1623b70c7e44204c2e7bc668-lq"
              alt="Suplementos deportivos"
              fluid
              className="rounded img-fluid"
            />
          </Col>
          <Col md={6} xs={12} className="mb-3">
            <div style={{ padding: '20px' }}>
              <h2>¡¡AYUDA A TU CRECIMIENTO CON NUESTROS SUPLEMENTOS!!</h2><br />
              <p>Tienda de suplementos dietarios con variedad de productos nacionales e importados. Los mejores precios del mercado. Asesoramiento personalizado para cumplir tus objetivos. Todo en nuestra tienda dentro de STK GYM!!</p>
              <Link className="btn btn-danger" to={'/error404'}>
                Ir a la tienda
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='m-3'>
        <Row>
          <Col md={6} xs={12} className="mb-3">
            <div style={{ padding: '20px' }}>
              <h2>¡¡LOS MEJORES PFS A TU DISPOSICIÓN!!</h2><br />
              <p>La ayuda que buscas para mejorar tu rendimiento, la encontras con los mejores preparadores físicos de la ciudad en STK GYM!! Consultá los horarios disponibles de cada uno de nuestros PFS en la sede de nuestro GYM.</p>
              <Link className="btn btn-danger" to={'/error404'}>
                Buscar horarios
              </Link>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <Image
              src="https://st2.depositphotos.com/1005730/6158/i/450/depositphotos_61589307-stock-photo-fitness-instructor-assisting-young-woman.jpg"
              alt="Preparador físico"
              fluid
              className="rounded img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainComponent;
