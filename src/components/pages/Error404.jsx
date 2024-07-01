import { Container } from "react-bootstrap";
import error from "../../assets/error404.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="mainSection text-center">
      <img src={error} className="img-fluid mt-5" alt="error 404" />
      <div>
        <Link className="btn btn-primary mb-5 " to="/">
          Volver al menú
        </Link>
      </div>
    </Container>
  );
};

export default Error404;
