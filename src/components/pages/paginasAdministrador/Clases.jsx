import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { eliminarClase, listarClases } from "../../helpers/queries";
import { Link } from "react-router-dom";

const Clases = ({ clase, setClases }) => {
  const borrarClase = () => {
    Swal.fire({
      title: "Estas seguro de borrar la clase?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarClase(clase.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado!",
            text: "La clase fue eliminada correctamente",
            icon: "success",
          });
          const respuestaListaClases = await listarClases();
          if (respuestaListaClases.status === 200) {
            const datosActualizados = await respuestaListaClases.json();
            setClases(datosActualizados);
          }
        } else {
          Swal.fire({
            title: "Error al eliminar la clase!",
            text: "La clase no pudo ser eliminada",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{clase.clase}</td>
      <td className="text-center">{clase.profesor}</td>
      <td className="text-center">{clase.fecha}</td>
      <td className="text-center">{clase.horario}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={'/administrador/editarClases/'+ clase.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger">
          <i className="bi bi-trash" onClick={borrarClase}></i>
        </Button>
      </td>
    </tr>
  );
};

export default Clases;
