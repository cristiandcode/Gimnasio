import { Col, Container, Row } from "react-bootstrap";
import cristian from "../../assets/cristian.jpg";
import claudia from "../../assets/claudia.jpg";
import iñaki from "../../assets/iñaki.jpg";

const Nosotros = () => {
  return (
    <Container className="mainSection">
      <h1 className="text-center textoMorado">
        Bienvenido a STK GYM:
        <br /> Tu Espacio de Transformación
      </h1>
      <h5 className="mt-5 textoMorado text-center">
        En STK GYM, no solo te ofrecemos un lugar para ejercitarte, sino una
        comunidad comprometida con tu bienestar integral. Nuestro objetivo es
        ayudarte a alcanzar tus metas físicas y mentales, y creemos que el
        camino hacia una vida saludable es mucho más que levantar pesas o hacer
        cardio.
      </h5>
      <h4 className="mt-5 textoMorado text-center">¿Por qué elegir STK GYM?</h4>
      <h5 className="mt-4 textoMorado text-center">
        TRANSFORMACIÓN PERSONAL: Más allá de los resultados visibles, queremos
        que experimentes un cambio profundo. El gimnasio es un espacio para
        liberar tensiones, encontrar claridad mental y descubrir tu mejor
        versión.
      </h5>
      <h5 className="mt-4 textoMorado text-center">
        VARIEDAD DE OPCIONES: Ofrecemos distintos planes de membresía adaptados
        a tus necesidades. Ya sea que busques perder peso, ganar fuerza o
        simplemente mantenerte activo, tenemos una opción para ti.
      </h5>
      <h5 className="mt-4 textoMorado text-center">
        PROFESIONALES APASIONADOS: Nuestros entrenadores están aquí para
        guiarte. Desde diseñar rutinas personalizadas hasta brindarte consejos
        nutricionales, estamos comprometidos con tu éxito.
      </h5>
      <h5 className="mt-4 textoMorado text-center">
        COMUNIDAD INCLUSIVA: En STK GYM todos son bienvenidos. No importa tu
        nivel de condición física, género o edad; aquí encontrarás un ambiente
        acogedor y motivador.
      </h5>
      <h5 className="mt-4 textoMorado text-center">
        PRODUCTOS DE CALIDAD: Además de las instalaciones, ofrecemos suplementos
        y productos relacionados con el fitness. Queremos que tengas todo lo
        necesario para cuidarte.
      </h5>
      <h4 className="mt-5 textoMorado text-center">
        Tu Viaje Comienza Hoy Únete a nuestra familia en STK GYM.
        <br />
        Descubre cómo el ejercicio, la alimentación balanceada y el apoyo mutuo
        pueden transformar tu vida.
        <br />
        ¡Te esperamos con los brazos abiertos!
      </h4>
      <h2 className="mt-5 textoMorado text-center">
        ¡NUESTRA ALIANZA FUE EL COMMIT MAS VALIOSO
      </h2>
      <h2 className="mt-4 textoMorado text-center">Conocé nuestro equipo: </h2>
      <Row className="my-5 text-center">
        <Col lg={4}>
          <img
            src={claudia}
            alt="claudia"
            className="img-fluid imgNosotros"
            width={300}
          />
          <h2 className="mt-3 textoMorado">Claudia Torres</h2>
        </Col>
        <Col lg={4}>
          <img
            src={cristian}
            alt="cristian"
            className="img-fluid imgNosotros"
            width={300}
          />
          <h2 className="mt-3 textoMorado">Cristian Diaz</h2>
        </Col>
        <Col lg={4}>
          <img
            src={iñaki}
            alt="iñaki"
            className="img-fluid imgNosotros"
            width={300}
          />
          <h2 className="mt-3 textoMorado">Iñaki Zavaleta</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Nosotros;
