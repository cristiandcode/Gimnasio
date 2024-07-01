const URIClases = import.meta.env.VITE_API;
const URIUsuario = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URIUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return { error: "Error en el login" };
  }
};

export const listarClases = async () => {
  try {
    const respuesta = await fetch(URIClases);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const crearClase = async (claseNueva) => {
  try {
    const respuesta = await fetch(URIClases, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(localStorage.getItem("usuarioGym")).token,
      },
      body: JSON.stringify(claseNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const eliminarClase = async (id) => {
  try {
    const respuesta = await fetch(URIClases + id, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(localStorage.getItem("usuarioGym")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerClase = async (id) => {
  try {
    const respuesta = await fetch(URIClases + id);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const editarClase = async (claseActualizada, id) => {
  try {
    const respuesta = await fetch(URIClases + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(localStorage.getItem("usuarioGym")).token,
      },
      body: JSON.stringify(claseActualizada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
