import { Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { eliminarClases, listarClases } from "../../helpers/queries";
import { Link } from "react-router-dom";
const Clases = ({ clase, setClases }) => {
  const borrarClase = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar el producto?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //pedirle a la api realizar el borrar
        const respuesta = await eliminarClases(clase.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Clase eliminada",
            text: `La clase ${clase.nombreClase} fue eliminado correctamente`,
            icon: "success",
          });
          //actualizar tabla
          //pedir los datos actualizados a la api
          const respuestaListaClases = await listarClases();
          if (respuestaListaClases.status === 200) {
            const datosActualizados = await respuestaListaClases.json();
            //actualizar el state de productos
            setClases(datosActualizados);
          }   
        } else {
          Swal.fire({
            title: "Error al eliminar la clase",
            text: "La clase x no pudo ser eliminada",
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
        <Link className="me-lg-2 btn btn-warning">
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
