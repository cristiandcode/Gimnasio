import { Button } from "react-bootstrap";

const Clases = ({ clase }) => {
  return (
    <tr>
      <td className="text-center">{clase.clase}</td>
      <td className="text-center">{clase.profesor}</td>
      <td className="text-center">{clase.fecha}</td>
      <td className="text-center">{clase.horario}</td>
      <td className="text-center">
        <Button variant="warning" className="me-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default Clases;
