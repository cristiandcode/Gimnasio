import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import {
  crearClase,
  editarClase,
  obtenerClase,
} from "../../helpers/queries.js";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormularioClases = ({ creando }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (creando === false) {
      cargarClase();
    }
  }, []);

  const cargarClase = async () => {
    const respuesta = await obtenerClase(id);
    if (respuesta.status === 200) {
      const clase = await respuesta.json();
      setValue("clase", clase.clase);
      setValue("profesor", clase.profesor);
      setValue("fecha", clase.fecha);
      setValue("horario", clase.horario);
      setValue("usuarios", clase.usuarios);
    }
  };

  const claseValidada = async (clase) => {
    if (creando === true) {
      const respuesta = await crearClase(clase);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Clase creada",
          text: "La clase fue creada correctamente",
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: "La clase no pudo ser creada. Intenta nuevamente",
          icon: "error",
        });
      }
    } else {
      const respuesta = await editarClase(clase, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Clase editada",
          text: "La clase fue editada correctamente",
          icon: "success",
        });
        navegacion("/administrador");
      }
    }
  };

  return (
    <Container className="mainSection">
      <h1 className="display-4 mt-5 textoMorado text-center">
        Administrar Clases
      </h1>
      <Form
        className="my-4 bgMorado textoClaro p-3"
        onSubmit={handleSubmit(claseValidada)}
      >
        <Form.Group className="mb-3" controlId="formClase">
          <Form.Label>Clase*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Boxeo"
            {...register("clase", {
              required: "La clase es obligatoria",
              minLength: {
                value: 3,
                message: "Debe ingresar como minimo 3 caracteres para la clase",
              },
              maxLength: {
                value: 25,
                message:
                  "Debe ingresar como maximo 25 caracteres para la clase",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.clase?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProfesor">
          <Form.Label>Profesor*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cristian Diaz"
            {...register("profesor", {
              required: "El nombre del profesor es obligatorio",
              minLength: {
                value: 5,
                message:
                  "Debe ingresar como minimo 5 caracteres para el nombre del profesor",
              },
              maxLength: {
                value: 30,
                message:
                  "Debe ingresar como maximo 30 caracteres para el nombre del profesor",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.profesor?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFecha">
          <Form.Label>Fecha*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 01/06/2024"
            {...register("fecha", {
              required: "La fecha es obligatoria",
              pattern: {
                value:
                  /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
                message: "Debe ingresar dd.mm.aaaa",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.fecha?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHorario">
          <Form.Label>Horario*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 15:30"
            {...register("horario", {
              required: "El horario es obligatorio",
              pattern: {
                value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
                message: "Debe ingresar entre 00 y 24",
              },
            })}
          />
          
          <Form.Text className="text-danger">
            {errors.horario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsuarios">
          <Form.Label>Usuarios Inscriptos*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: claudia"
            {...register("usuarios", {
              required: "Los usuarios inscriptos son obligatorios",
              minLength: {
                value: 3,
                message:
                  "Debe ingresar como minimo 3 caracteres para los usuarios",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.usuarios?.message}</Form.Text>
        </Form.Group>
        <Button type="submit" variant="light">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioClases;
